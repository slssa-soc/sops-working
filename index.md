---
section_id: Introduction and Submit Feedback
nav_order: 1
title: Feedback
layout: lesson-content
#topics: GitHub; Optional Software
---

<style>
  .sop-home {
    max-width: 1120px;
    margin: 0 auto;
    padding: 8px 0 32px;
  }

  .sop-hero {
    padding: 32px 28px;
    margin-bottom: 24px;
    border: 1px solid #e5e7eb;
    border-radius: 24px;
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  }

  .sop-hero h1 {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 2rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .sop-hero p {
    max-width: 850px;
    margin-bottom: 18px;
    font-size: 1rem;
    line-height: 1.65;
    color: #374151;
  }

  .sop-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 20px;
  }

  .sop-button {
    display: inline-block;
    padding: 10px 16px;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.18s ease;
  }

  .sop-button-primary {
    background: #002f6c;
    color: #ffffff !important;
    border: 1px solid #002657;
  }

  .sop-button-primary:hover {
    background: #002657;
    text-decoration: none;
  }

  .sop-button-secondary {
    background: #ffffff;
    color: #002f6c !important;
    border: 1px solid #cbd5e1;
  }

  .sop-button-secondary:hover {
    border-color: #002f6c;
    text-decoration: none;
  }

  .sop-ai-placeholder {
    margin: 0 0 28px;
    padding: 24px 28px;
    border-radius: 24px;
    border: 1px solid #d1d5db;
    background: #f9fafb;
  }

  .sop-ai-placeholder h2 {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 1.25rem;
    letter-spacing: -0.01em;
  }

  .sop-ai-placeholder p {
    max-width: 820px;
    margin-bottom: 16px;
    color: #4b5563;
    line-height: 1.6;
  }

  .sop-ai-input {
    display: flex;
    gap: 10px;
    align-items: center;
    max-width: 760px;
    padding: 8px;
    border-radius: 18px;
    background: #ffffff;
    border: 1px solid #d1d5db;
  }

  .sop-ai-input span {
    flex: 1;
    padding: 10px 12px;
    color: #6b7280;
  }

  .sop-ai-input button {
    border: 0;
    border-radius: 14px;
    padding: 10px 14px;
    font-weight: 600;
    color: #ffffff;
    background: #9ca3af;
    cursor: not-allowed;
  }

  .sop-section-heading {
    margin: 32px 0 16px;
  }

  .sop-section-heading h2 {
    margin-bottom: 6px;
    font-size: 1.4rem;
    letter-spacing: -0.01em;
  }

  .sop-section-heading p {
    margin-top: 0;
    color: #6b7280;
  }

  .sop-tile-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  .sop-tile {
    display: flex;
    min-height: 108px;
    padding: 18px;
    border-radius: 24px;
    border: 1.5px solid;
    text-decoration: none !important;
    transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
  }

  .sop-tile:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
  }

  .sop-tile-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
  }

  .sop-tile-number {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    opacity: 0.72;
  }

  .sop-tile-title {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
    color: #111827;
  }

  .sop-tile-link {
    font-size: 0.86rem;
    font-weight: 600;
    opacity: 0.8;
  }

  .sop-grey { background: #f8fafc; border-color: #cbd5e1; }
  .sop-blue { background: #eff6ff; border-color: #bfdbfe; }
  .sop-red { background: #fef2f2; border-color: #fecaca; }
  .sop-amber { background: #fffbeb; border-color: #fde68a; }
  .sop-green { background: #f0fdf4; border-color: #bbf7d0; }
  .sop-cyan { background: #ecfeff; border-color: #a5f3fc; }
  .sop-indigo { background: #eef2ff; border-color: #c7d2fe; }
  .sop-purple { background: #faf5ff; border-color: #e9d5ff; }

  @media (max-width: 900px) {
    .sop-tile-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .sop-hero {
      padding: 24px 20px;
      border-radius: 22px;
    }

    .sop-hero h1 {
      font-size: 1.65rem;
    }

    .sop-ai-placeholder {
      padding: 20px;
      border-radius: 22px;
    }

    .sop-ai-input {
      display: block;
    }

    .sop-ai-input span {
      display: block;
    }

    .sop-ai-input button {
      width: 100%;
      margin-top: 8px;
    }

    .sop-tile-grid {
      grid-template-columns: 1fr;
    }

    .sop-tile {
      min-height: 86px;
    }
  }
</style>

<div class="sop-home">

  <section class="sop-hero">
    <h1>Surf Life Saving SA Standard Operating Procedures</h1>

    <p>
      The Surf Life Saving SA (SLSSA) Standard Operating Procedures provide the operational framework for lifesaving services, patrol operations, emergency response, communications, equipment use, incident management, and post-incident support.
    </p>

    <p>
      These procedures support consistent, safe, and effective operational practice across SLSSA services and should be read in conjunction with relevant Surf Life Saving Australia policies, training manuals, award requirements, Lifesaving Service Agreements, local Patrol Operations Manuals, and lawful directions issued by emergency services or relevant authorities.
    </p>

    <div class="sop-hero-actions">
      <a class="sop-button sop-button-primary" href="./introduction.html">Continue reading →</a>
      <a class="sop-button sop-button-secondary" href="./17-glossary/17.1-glossary.html">View glossary</a>
    </div>
  </section>

  <section class="sop-ai-placeholder">
    <h2>Ask the SOPs</h2>
    <p>
      A future search and question tool will allow SLS personnel to ask operational questions and be guided to relevant SOP content.
    </p>

    <div class="sop-ai-input" aria-label="Future SOP question tool placeholder">
      <span>Ask a question about patrol operations, emergency response, equipment, SOC procedures, or member support...</span>
      <button disabled>Coming soon</button>
    </div>
  </section>

  <section class="sop-section-heading">
    <h2>SOP Sections</h2>
    <p>Select a section to view the relevant Standard Operating Procedures.</p>
  </section>

  <section class="sop-tile-grid">

    <a class="sop-tile sop-grey" href="./introduction.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Welcome</span>
        <span class="sop-tile-title">Introduction</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-blue" href="./1-governance-and-administration/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 1</span>
        <span class="sop-tile-title">Governance and Administration</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-indigo" href="./2-information-management/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 2</span>
        <span class="sop-tile-title">Information Management</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-green" href="./3-lifesaving-standards/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 3</span>
        <span class="sop-tile-title">Lifesaving Standards</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-amber" href="./4-patrol-operations-general/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 4</span>
        <span class="sop-tile-title">Patrol Operations General</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-red" href="./5-patrol-operations-emergency/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 5</span>
        <span class="sop-tile-title">Patrol Operations Emergency</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-cyan" href="./6-search-and-rescue-sar/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 6</span>
        <span class="sop-tile-title">Search and Rescue (SAR)</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-blue" href="./7-powercraft-operations/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 7</span>
        <span class="sop-tile-title">Powercraft Operations</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./8-patrol-operations-general/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 8</span>
        <span class="sop-tile-title">Patrol Operations General</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-red" href="./9-patrol-operations-emergency/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 9</span>
        <span class="sop-tile-title">Patrol Operations Emergency</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-indigo" href="./10-reduced-visibility-operations/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 10</span>
        <span class="sop-tile-title">Reduced Visibility Operations</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-cyan" href="./11-aerial-services/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 11</span>
        <span class="sop-tile-title">Aerial Services</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-blue" href="./12-state-operations-centre-soc-surfcom/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 12</span>
        <span class="sop-tile-title">State Operations Centre (SOC) – SURFCOM</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-purple" href="./13-operations-app/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 13</span>
        <span class="sop-tile-title">Operations App</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./14-gear-and-equipment/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 14</span>
        <span class="sop-tile-title">Gear and Equipment</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-blue" href="./15-critical-incident-management-and-member-support/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 15</span>
        <span class="sop-tile-title">Critical Incident Management and Member Support</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-green" href="./16-training/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 16</span>
        <span class="sop-tile-title">Training</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-amber" href="./17-glossary/">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 17</span>
        <span class="sop-tile-title">Glossary</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

  </section>

</div>