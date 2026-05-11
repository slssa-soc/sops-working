---
title: Welcome
nav_order: 1
layout: lesson-content
---

<style>
  .sop-home {
    max-width: 1120px;
    margin: 0 auto;
    padding: 8px 0 32px;
    text-align: center;
  }

  .sop-hero {
    padding: 30px 28px;
    margin-bottom: 24px;
    border: 1px solid #e5e7eb;
    border-radius: 24px;
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
    text-align: center;
  }

  .sop-hero p {
    max-width: 850px;
    margin: 0 auto 18px;
    font-size: 1rem;
    line-height: 1.65;
    color: #374151;
    text-align: center;
  }

  .sop-hero-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 22px;
  }

  .sop-button {
    display: inline-block;
    padding: 10px 16px;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none !important;
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
    text-align: center;
  }

  .sop-ai-placeholder h2 {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 1.25rem;
    letter-spacing: -0.01em;
    text-align: center;
  }

  .sop-ai-placeholder p {
    max-width: 820px;
    margin: 0 auto 16px;
    color: #4b5563;
    line-height: 1.6;
    text-align: center;
  }

  .sop-ai-input {
    display: flex;
    gap: 10px;
    align-items: center;
    max-width: 760px;
    margin: 0 auto;
    padding: 8px;
    border-radius: 18px;
    background: #ffffff;
    border: 1px solid #d1d5db;
    text-align: left;
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
    text-align: center;
  }

  .sop-section-heading h2 {
    margin-bottom: 6px;
    font-size: 1.4rem;
    letter-spacing: -0.01em;
    text-align: center;
  }

  .sop-section-heading p {
    margin: 0 auto;
    color: #6b7280;
    text-align: center;
  }

  .sop-tile-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    text-align: center;
  }

  .sop-tile {
    display: flex;
    min-height: 112px;
    padding: 18px;
    border-radius: 24px;
    border: 1.5px solid;
    text-decoration: none !important;
    transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
    text-align: center;
  }

  .sop-tile:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
  }

  .sop-tile-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    width: 100%;
    text-align: center;
  }

  .sop-tile-number {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    opacity: 0.72;
    text-align: center;
  }

  .sop-tile-title {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
    color: #111827;
    text-align: center;
  }

  .sop-tile-link {
    font-size: 0.86rem;
    font-weight: 600;
    opacity: 0.8;
    text-align: center;
  }

  .sop-grey {
    background: #f8fafc;
    border-color: #cbd5e1;
  }

  .sop-red {
    background: #fef2f2;
    border-color: #fecaca;
  }

  .sop-yellow {
    background: #fffbeb;
    border-color: #fde68a;
  }

  .sop-blue {
    background: #eff6ff;
    border-color: #bfdbfe;
  }

  .sop-green {
    background: #f0fdf4;
    border-color: #bbf7d0;
  }

  .sop-orange {
    background: #fff7ed;
    border-color: #fed7aa;
  }

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

    .sop-ai-placeholder {
      padding: 20px;
      border-radius: 22px;
    }

    .sop-ai-input {
      display: block;
      text-align: center;
    }

    .sop-ai-input span {
      display: block;
      text-align: center;
    }

    .sop-ai-input button {
      width: 100%;
      margin-top: 8px;
    }

    .sop-tile-grid {
      grid-template-columns: 1fr;
    }

    .sop-tile {
      min-height: 92px;
    }
  }
</style>

<div class="sop-home">

  <section class="sop-hero">
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

    <a class="sop-tile sop-grey" href="./">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Home</span>
        <span class="sop-tile-title">Welcome</span>
        <span class="sop-tile-link">Open page →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./introduction.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Introduction</span>
        <span class="sop-tile-title">Introduction and Submit Feedback</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./1-work-health-and-safety/1.1-work-health-and-safety.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 1</span>
        <span class="sop-tile-title">Work Health and Safety</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./2-information-management/2.1-information-management-and-online-services.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 2</span>
        <span class="sop-tile-title">Information Management</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-green" href="./3-lifesaving-standards/3.1-lifesaving-service-agreements.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 3</span>
        <span class="sop-tile-title">Lifesaving Standards</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./4-rescue-vessels/4.1-licences.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 4</span>
        <span class="sop-tile-title">Licences</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./5-gear-and-equipment/5.1-lifesaving-vehicles.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 5</span>
        <span class="sop-tile-title">Gear and Equipment</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./6-rescue-equipment/6.1-public-rescue-equipment-to-be-issued.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 6</span>
        <span class="sop-tile-title">Rescue Equipment</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-orange" href="./7-communications/7.1-radio-communications.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 7</span>
        <span class="sop-tile-title">Communications</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-yellow" href="./8-patrol-operations-general/8.1-beach-management-methods-and-roles.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 8</span>
        <span class="sop-tile-title">Patrol Operations (General)</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-red" href="./9-patrol-operations-emergency/9.1-emergency-patrol-area-closure-and-evacuation.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 9</span>
        <span class="sop-tile-title">Patrol Operations (Emergency)</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./10-reduced-visibility-operations/10.1-reduced-visibility-operations.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 10</span>
        <span class="sop-tile-title">Reduced Visibility Operations</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./11-search-and-rescue-SAR-operations/11.1-sar-responsibilities-to-be-issued.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 11</span>
        <span class="sop-tile-title">Search and Rescue (SAR) Operations</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./12-state-operations-centre-soc-surfcom/12.1-state-operations-centre-soc-surfcom.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 12</span>
        <span class="sop-tile-title">State Operations Centre (SURFCOM)</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./13-operations-app/13.1-operations-app-general-operations.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 13</span>
        <span class="sop-tile-title">Operations App</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./14-vessels-and-aircraft/14.1-helicopter-landing-site.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 14</span>
        <span class="sop-tile-title">Vessels and Aircraft</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-blue" href="./15-critical-incident-management-and-member-support/15.1-critical-incidents.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 15</span>
        <span class="sop-tile-title">Critical Incident Management and Member Support</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./16-SLSA-references/16.1-slsa-references.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 16</span>
        <span class="sop-tile-title">SLSA References</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./17-glossary/17.1-glossary.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 17</span>
        <span class="sop-tile-title">Glossary</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./annexes/1-first-aid-response-possible-exposure-to-hab.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Annexes</span>
        <span class="sop-tile-title">Annexes</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

    <a class="sop-tile sop-grey" href="./18-change-log/18.1-change-log.html">
      <span class="sop-tile-content">
        <span class="sop-tile-number">Section 18</span>
        <span class="sop-tile-title">Change Log</span>
        <span class="sop-tile-link">Open section →</span>
      </span>
    </a>

  </section>

</div>