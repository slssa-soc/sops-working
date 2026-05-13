/**
 * Build SOP embeddings for the SLSSA SOP Assistant.
 *
 * Run from the repository root:
 *   node _includes/scripts/build-sop-embeddings.js
 *
 * Required environment variables:
 *   AZURE_OPENAI_ENDPOINT
 *   AZURE_OPENAI_API_KEY
 *   AZURE_OPENAI_EMBEDDING_DEPLOYMENT
 *
 * Input:
 *   assets/sop-assistant/sop-index.json
 *
 * Output:
 *   assets/sop-assistant/sop-embeddings.json
 */

const fs = require("fs");
const path = require("path");

const SCRIPT_NAME = "build-sop-embeddings.js";

const API_VERSION = "2024-02-01";

const INDEX_PATH = path.join("assets", "sop-assistant", "sop-index.json");
const EMBEDDINGS_PATH = path.join("assets", "sop-assistant", "sop-embeddings.json");

const BATCH_SIZE = 10;
const MAX_RETRIES = 5;

function findRepoRoot(startDir) {
  let current = startDir;

  while (current !== path.dirname(current)) {
    if (fs.existsSync(path.join(current, "_config.yml"))) {
      return current;
    }
    current = path.dirname(current);
  }

  return process.cwd();
}

const REPO_ROOT = findRepoRoot(process.cwd());

function requireEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normaliseEndpoint(endpoint) {
  return endpoint.endsWith("/") ? endpoint.slice(0, -1) : endpoint;
}

function loadJson(filePath, fallback = null) {
  const absolutePath = path.join(REPO_ROOT, filePath);

  if (!fs.existsSync(absolutePath)) {
    return fallback;
  }

  return JSON.parse(fs.readFileSync(absolutePath, "utf8"));
}

function saveJson(filePath, data) {
  const absolutePath = path.join(REPO_ROOT, filePath);
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
  fs.writeFileSync(absolutePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function chunkArray(items, size) {
  const chunks = [];

  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }

  return chunks;
}

function existingEmbeddingsByChunkId(existingEmbeddings) {
  const map = new Map();

  for (const item of existingEmbeddings || []) {
    if (!item.chunk_id) continue;
    map.set(item.chunk_id, item);
  }

  return map;
}

function buildEmbeddingInput(chunk) {
  return [
    `Title: ${chunk.sop_title || ""}`,
    `Section: ${chunk.sop_section || ""}`,
    `Heading: ${chunk.heading || ""}`,
    "",
    chunk.content || ""
  ].join("\n");
}

async function createEmbeddings({ endpoint, apiKey, deployment, inputs }) {
  const url =
    `${normaliseEndpoint(endpoint)}` +
    `/openai/deployments/${encodeURIComponent(deployment)}` +
    `/embeddings?api-version=${API_VERSION}`;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey
      },
      body: JSON.stringify({
        input: inputs
      })
    });

    if (response.ok) {
      const data = await response.json();

      if (!data.data || !Array.isArray(data.data)) {
        throw new Error("Unexpected embeddings response shape.");
      }

      return data.data
        .sort((a, b) => a.index - b.index)
        .map((item) => item.embedding);
    }

    const errorText = await response.text();

    if (
      response.status === 429 ||
      response.status === 500 ||
      response.status === 502 ||
      response.status === 503 ||
      response.status === 504
    ) {
      const delayMs = Math.min(30000, 1000 * Math.pow(2, attempt - 1));
      console.warn(
        `Embedding request failed with HTTP ${response.status}. ` +
        `Retrying in ${delayMs / 1000}s...`
      );
      await sleep(delayMs);
      continue;
    }

    throw new Error(
      `Embedding request failed with HTTP ${response.status}: ${errorText}`
    );
  }

  throw new Error("Embedding request failed after maximum retries.");
}

async function main() {
  try {
    const endpoint = requireEnv("AZURE_OPENAI_ENDPOINT");
    const apiKey = requireEnv("AZURE_OPENAI_API_KEY");
    const deployment = requireEnv("AZURE_OPENAI_EMBEDDING_DEPLOYMENT");

    const index = loadJson(INDEX_PATH);

    if (!index || !Array.isArray(index) || index.length === 0) {
      throw new Error(`No chunks found in ${INDEX_PATH}. Run build-sop-index.js first.`);
    }

    const existingEmbeddings = loadJson(EMBEDDINGS_PATH, []);
    const existingMap = existingEmbeddingsByChunkId(existingEmbeddings);

    const output = [];
    const chunksToEmbed = [];

    for (const chunk of index) {
      const existing = existingMap.get(chunk.chunk_id);

      if (
        existing &&
        existing.content_hash === chunk.content_hash &&
        Array.isArray(existing.embedding)
      ) {
        output.push(existing);
      } else {
        chunksToEmbed.push(chunk);
      }
    }

    console.log(`Loaded ${index.length} SOP chunks`);
    console.log(`Reusing ${output.length} existing embeddings`);
    console.log(`Creating ${chunksToEmbed.length} new/updated embeddings`);

    const batches = chunkArray(chunksToEmbed, BATCH_SIZE);

    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
      const batch = batches[batchIndex];
      const inputs = batch.map(buildEmbeddingInput);

      console.log(
        `Embedding batch ${batchIndex + 1} of ${batches.length} ` +
        `(${batch.length} chunks)`
      );

      const embeddings = await createEmbeddings({
        endpoint,
        apiKey,
        deployment,
        inputs
      });

      embeddings.forEach((embedding, indexWithinBatch) => {
        const chunk = batch[indexWithinBatch];

        output.push({
          chunk_id: chunk.chunk_id,
          content_hash: chunk.content_hash,
          embedding,
          model_deployment: deployment,
          generated_at: new Date().toISOString()
        });
      });

      saveJson(EMBEDDINGS_PATH, output);
    }

    output.sort((a, b) => a.chunk_id.localeCompare(b.chunk_id));
    saveJson(EMBEDDINGS_PATH, output);

    console.log(`Created ${EMBEDDINGS_PATH}`);
    console.log(`Saved ${output.length} embeddings`);
  } catch (error) {
    console.error(`${SCRIPT_NAME} failed:`);
    console.error(error.message || error);
    process.exit(1);
  }
}

main();