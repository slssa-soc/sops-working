/**
 * Build SOP index for the SLSSA SOP Assistant.
 *
 * Run from the repository root:
 *   node _includes/scripts/build-sop-index.js
 *
 * Output:
 *   assets/sop-assistant/sop-index.json
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const SCRIPT_NAME = "build-sop-index.js";

const EXCLUDED_DIRS = new Set([
  ".git",
  ".github",
  "_site",
  "node_modules",
  ".jekyll-cache",
  ".sass-cache",
  "assets",
  "images",
  "vendor"
]);

const EXCLUDED_FILES = new Set([
  "README.md",
  "readme.md"
]);

const OUTPUT_DIR = path.join("assets", "sop-assistant");
const OUTPUT_FILE = "sop-index.json";

const VERSION = new Date().toISOString().slice(0, 10);

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

function walkDirectory(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(REPO_ROOT, fullPath);

    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) {
        continue;
      }

      walkDirectory(fullPath, files);
      continue;
    }

    if (!entry.isFile()) continue;
    if (!entry.name.endsWith(".md")) continue;
    if (EXCLUDED_FILES.has(entry.name)) continue;

    if (
      relativePath.includes(
        `${path.sep}_includes${path.sep}scripts${path.sep}`
      )
    ) {
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

function parseFrontMatter(raw) {
  /*
   * Some Markdown files may contain a UTF-8 BOM before the opening
   * front-matter delimiter. Remove it before attempting to parse YAML.
   */
  const text = raw.replace(/^\uFEFF/, "");

  /*
   * Support both LF and CRLF line endings.
   */
  const frontMatterMatch = text.match(
    /^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/
  );

  if (!frontMatterMatch) {
    return {
      frontMatter: {},
      body: text
    };
  }

  const yaml = frontMatterMatch[1];
  const body = text.slice(frontMatterMatch[0].length);
  const frontMatter = {};

  const lines = yaml.split(/\r?\n/);
  let currentKey = null;

  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith("#")) {
      continue;
    }

    const keyValueMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);

    if (keyValueMatch) {
      currentKey = keyValueMatch[1];
      let value = keyValueMatch[2].trim();

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      if (value === "") {
        frontMatter[currentKey] = [];
      } else if (value.startsWith("[") && value.endsWith("]")) {
        frontMatter[currentKey] = value
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim().replace(/^['"]|['"]$/g, ""))
          .filter(Boolean);
      } else {
        frontMatter[currentKey] = value;
      }

      continue;
    }

    const listMatch = line.match(/^\s*-\s*(.*)$/);

    if (listMatch && currentKey) {
      if (!Array.isArray(frontMatter[currentKey])) {
        frontMatter[currentKey] = [];
      }

      frontMatter[currentKey].push(
        listMatch[1]
          .trim()
          .replace(/^['"]|['"]$/g, "")
      );
    }
  }

  return {
    frontMatter,
    body
  };
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function hashContent(content) {
  return crypto
    .createHash("sha256")
    .update(content, "utf8")
    .digest("hex");
}

function cleanMarkdown(markdown) {
  return markdown
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(
      /{%-?\s*comment\s*-?%}[\s\S]*?{%-?\s*endcomment\s*-?%}/g,
      ""
    )
    .replace(/{%\s*include\s+[^%]+%}/g, "")
    .replace(/{%\s*assign\s+[^%]+%}/g, "")
    .replace(
      /{%\s*capture\s+[^%]+%}[\s\S]*?{%\s*endcapture\s*%}/g,
      ""
    )
    .replace(/\r\n/g, "\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();
}

function extractFirstHeading(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);

  return match ? match[1].trim() : null;
}

function titleFromFilename(filePath) {
  const base = path.basename(filePath, ".md");

  return base
    .replace(/^\d+[-_]/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function deriveUrl(filePath, frontMatter) {
  if (frontMatter.permalink) {
    return ensureLeadingSlash(
      String(frontMatter.permalink)
    );
  }

  if (frontMatter.url) {
    return ensureLeadingSlash(
      String(frontMatter.url)
    );
  }

  const relativePath = path
    .relative(REPO_ROOT, filePath)
    .replace(/\\/g, "/");

  let withoutExtension = relativePath.replace(/\.md$/, "");

  if (withoutExtension.endsWith("/index")) {
    withoutExtension = withoutExtension.replace(
      /\/index$/,
      "/"
    );
  }

  return ensureLeadingSlash(withoutExtension);
}

function ensureLeadingSlash(value) {
  if (!value) {
    return "/";
  }

  return value.startsWith("/")
    ? value
    : `/${value}`;
}

function splitByHeadings(markdown) {
  const lines = markdown.split("\n");
  const chunks = [];

  let currentHeading = null;
  let currentLevel = null;
  let currentLines = [];
  let parentHeadings = [];

  function pushChunk() {
    const content = currentLines
      .join("\n")
      .trim();

    if (!content) {
      return;
    }

    chunks.push({
      heading: currentHeading || "Overview",
      heading_level: currentLevel || 1,
      parent_headings: [...parentHeadings],
      content
    });
  }

  for (const line of lines) {
    const headingMatch = line.match(
      /^(#{1,4})\s+(.+)$/
    );

    if (headingMatch) {
      const level = headingMatch[1].length;
      const headingText = headingMatch[2].trim();

      if (level <= 3) {
        pushChunk();

        if (level === 1) {
          parentHeadings = [headingText];
        } else if (level === 2) {
          parentHeadings = parentHeadings.slice(0, 1);
          parentHeadings.push(headingText);
        } else if (level === 3) {
          parentHeadings = parentHeadings.slice(0, 2);
          parentHeadings.push(headingText);
        }

        currentHeading = headingText;
        currentLevel = level;
        currentLines = [line];

        continue;
      }
    }

    currentLines.push(line);
  }

  pushChunk();

  return chunks;
}

function splitLongChunk(chunk, maxWords = 900) {
  const words = chunk.content
    .split(/\s+/)
    .filter(Boolean);

  if (words.length <= maxWords) {
    return [chunk];
  }

  const paragraphs = chunk.content.split(
    /\n\s*\n/
  );

  const splitChunks = [];

  let buffer = [];
  let bufferWordCount = 0;

  function pushBuffer() {
    const content = buffer
      .join("\n\n")
      .trim();

    if (!content) {
      return;
    }

    splitChunks.push({
      ...chunk,
      content
    });

    buffer = [];
    bufferWordCount = 0;
  }

  for (const paragraph of paragraphs) {
    const paragraphWordCount = paragraph
      .split(/\s+/)
      .filter(Boolean)
      .length;

    if (
      bufferWordCount + paragraphWordCount > maxWords &&
      buffer.length > 0
    ) {
      pushBuffer();
    }

    buffer.push(paragraph);
    bufferWordCount += paragraphWordCount;
  }

  pushBuffer();

  return splitChunks;
}

function normaliseKeywords(value) {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value
      .map(String)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildIndex() {
  const markdownFiles = walkDirectory(REPO_ROOT);
  const index = [];

  for (const filePath of markdownFiles) {
    const raw = fs.readFileSync(
      filePath,
      "utf8"
    );

    const {
      frontMatter,
      body
    } = parseFrontMatter(raw);

    const cleanedBody = cleanMarkdown(body);

    /*
     * Resolve the title before deciding whether this file is a
     * "To be issued" placeholder.
     */
    const title =
      frontMatter.title ||
      extractFirstHeading(cleanedBody) ||
      titleFromFilename(filePath);

    const relativeSourceFile = path
      .relative(REPO_ROOT, filePath)
      .replace(/\\/g, "/");

    /*
     * Identify SOPs that exist as placeholders but have not yet
     * had an approved procedure issued.
     */
    const isToBeIssued =
      /to-be-issued/i.test(relativeSourceFile) ||
      /\bto be issued\b/i.test(String(title));

    /*
     * Empty normal files should not be indexed.
     *
     * Placeholder SOPs are retained even if their actual page content
     * is very short, because Ask the SOPs should still be able to tell
     * the user that the procedure has not yet been issued.
     */
    if (!cleanedBody && !isToBeIssued) {
      continue;
    }

    /*
     * Give placeholder SOPs consistent semantic content so queries
     * about the topic can retrieve the placeholder.
     *
     * The Ask the SOPs backend will use the to_be_issued metadata flag
     * to provide a deterministic response rather than relying on the
     * language model to invent or infer a procedure.
     */
    const bodyForIndex = isToBeIssued
      ? [
          `# ${title}`,
          "",
          "This Standard Operating Procedure is currently listed as To be issued.",
          "An approved procedure has not yet been published.",
          "For operational guidance, contact the State Operations Centre (SOC) or the relevant operational supervisor."
        ].join("\n")
      : cleanedBody;

    const url = deriveUrl(
      filePath,
      frontMatter
    );

    const sopSection =
      frontMatter.section ||
      frontMatter.sop_section ||
      frontMatter.number ||
      "";

    const keywords = [
      ...normaliseKeywords(
        frontMatter.keywords
      ),
      ...normaliseKeywords(
        frontMatter.tags
      )
    ];

    const rawChunks =
      splitByHeadings(bodyForIndex);

    const chunks = rawChunks.flatMap(
      (chunk) => splitLongChunk(chunk)
    );

    chunks.forEach(
      (chunk, indexWithinFile) => {
        const chunkText =
          chunk.content.trim();

        const wordCount = chunkText
          .split(/\s+/)
          .filter(Boolean)
          .length;

        /*
         * Normal SOP chunks shorter than 20 words are ignored because
         * they generally do not contain enough useful context.
         *
         * To-be-issued placeholders are deliberately retained even when
         * short so the assistant can identify the missing procedure.
         */
        if (wordCount < 20 && !isToBeIssued) {
          return;
        }

        const headingSlug =
          slugify(chunk.heading);

        const titleSlug =
          slugify(title);

        const chunkId = [
          titleSlug,
          headingSlug || "overview",
          String(indexWithinFile + 1).padStart(
            2,
            "0"
          )
        ].join("__");

        index.push({
          chunk_id: chunkId,
          sop_title: String(title).trim(),
          sop_section: String(
            sopSection
          ).trim(),
          heading: chunk.heading,
          heading_level:
            chunk.heading_level,
          parent_headings:
            chunk.parent_headings,
          url,
          source_file:
            relativeSourceFile,
          to_be_issued:
            isToBeIssued,
          content: chunkText,
          keywords,
          content_hash:
            hashContent(chunkText),
          version: VERSION,
          chunk_index:
            indexWithinFile + 1,
          generated_at:
            new Date().toISOString()
        });
      }
    );
  }

  index.sort((a, b) => {
    if (
      a.source_file !==
      b.source_file
    ) {
      return a.source_file.localeCompare(
        b.source_file
      );
    }

    return (
      a.chunk_index -
      b.chunk_index
    );
  });

  return index;
}

function writeIndex(index) {
  const outputDir = path.join(
    REPO_ROOT,
    OUTPUT_DIR
  );

  const outputPath = path.join(
    outputDir,
    OUTPUT_FILE
  );

  fs.mkdirSync(outputDir, {
    recursive: true
  });

  fs.writeFileSync(
    outputPath,
    `${JSON.stringify(
      index,
      null,
      2
    )}\n`,
    "utf8"
  );

  console.log(
    `Created ${path.relative(
      REPO_ROOT,
      outputPath
    )}`
  );

  console.log(
    `Indexed ${index.length} SOP chunks`
  );
}

function main() {
  try {
    const index = buildIndex();

    if (index.length === 0) {
      console.error(
        "No SOP chunks were created. Check Markdown paths and exclusions."
      );

      process.exit(1);
    }

    writeIndex(index);
  } catch (error) {
    console.error(
      `${SCRIPT_NAME} failed:`
    );

    console.error(error);

    process.exit(1);
  }
}

main();