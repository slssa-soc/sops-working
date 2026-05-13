---
title: Surf Life Saving SA Standard Operating Procedures
nav: Welcome
nav_order: 1
layout: lesson-content
icon: house
---

<style>
  /* Hide the theme-generated page heading on this landing page only */
  #maincontent > div > h1:first-child,
  #maincontent h1:first-child {
    display: none;
  }

  .sop-home {
    max-width: 1120px;
    margin: 0 auto;
    padding: 8px 0 40px;
  }

  .sop-home,
  .sop-home * {
    box-sizing: border-box;
  }

  .sop-card {
    border: 1px solid #d9e2ec;
    border-radius: 22px;
    background: #ffffff;
    box-shadow: 0 8px 22px rgba(15, 23, 42, 0.035);
  }

  .sop-hero {
    position: relative;
    min-height: 315px;
    padding: 0;
    margin-bottom: 22px;
    overflow: hidden;
    background-image:
      linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.96) 38%, rgba(255,255,255,0.55) 64%, rgba(255,255,255,0.08) 100%),
      url("{{ '/images/sop-header.png' | relative_url }}");
    background-size: cover;
    background-position: center right;
    background-repeat: no-repeat;
  }

  .sop-hero-content {
    position: relative;
    z-index: 1;
    max-width: 720px;
    padding: 38px 40px;
  }

  .sop-hero h1 {
    margin: 0 0 14px;
    font-size: 1.9rem;
    line-height: 1.18;
    letter-spacing: -0.03em;
    color: #0f172a;
  }

  .sop-hero p {
    max-width: 680px;
    margin: 0 0 12px;
    color: #334155;
    font-size: 0.98rem;
    line-height: 1.6;
  }

  .sop-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 22px;
  }

  .sop-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    padding: 10px 18px;
    border-radius: 999px;
    font-size: 0.92rem;
    font-weight: 700;
    text-decoration: none !important;
    transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease, background 0.16s ease;
  }

  .sop-button:hover {
    transform: translateY(-1px);
    text-decoration: none !important;
  }

  .sop-button-primary {
    background: #0161AA;
    color: #ffffff !important;
    border: 1px solid #014f8c;
    box-shadow: 0 8px 18px rgba(1, 97, 170, 0.18);
  }

  .sop-button-primary:hover {
    background: #014f8c;
  }

  .sop-button-secondary {
    background: #ffffff;
    color: #0161AA !important;
    border: 1px solid #9fc5e8;
  }

  .sop-button-secondary:hover {
    border-color: #0161AA;
    background: #f4f9ff;
  }

  .sop-ask {
    display: grid;
    grid-template-columns: 54px 1fr;
    gap: 16px;
    align-items: start;
    padding: 26px 30px;
    margin-bottom: 28px;
    background: #f8fafc;
  }

  .sop-ask-icon {
    width: 46px;
    height: 46px;
    border-radius: 999px;
    background: #e7f0ff;
    color: #0161AA;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sop-ask-icon svg {
    width: 25px;
    height: 25px;
  }

  .sop-ask h2 {
    margin: 0 0 6px;
    font-size: 1.24rem;
    line-height: 1.25;
    color: #0f172a;
  }

  .sop-ask p {
    margin: 0 0 14px;
    color: #475569;
    line-height: 1.55;
  }

  .sop-ask-warning {
    margin: 0 0 14px !important;
    padding: 10px 12px;
    border: 1px solid #fcd34d;
    border-radius: 12px;
    background: #fffbeb;
    color: #92400e !important;
    font-size: 0.86rem;
    line-height: 1.45 !important;
  }

  .sop-ask-input {
    display: flex;
    align-items: stretch;
    gap: 10px;
    width: 100%;
  }

  .sop-ask-input input {
    flex: 1;
    min-height: 48px;
    padding: 12px 14px;
    border: 1px solid #cfd8e3;
    border-radius: 14px;
    color: #0f172a;
    background: #ffffff;
    font-size: 0.92rem;
    outline: none;
  }

  .sop-ask-input input:focus {
    border-color: #0161AA;
    box-shadow: 0 0 0 3px rgba(1, 97, 170, 0.12);
  }

  .sop-ask-submit {
    flex: 0 0 auto;
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 18px;
    border: 0;
    border-radius: 13px;
    background: #0161AA;
    color: #ffffff;
    font-weight: 700;
    font-size: 0.88rem;
    cursor: pointer;
    transition: background 0.16s ease, transform 0.16s ease, box-shadow 0.16s ease;
  }

  .sop-ask-submit:hover {
    background: #014f8c;
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(1, 97, 170, 0.18);
  }

  .sop-ask-submit:disabled {
    background: #9ca3af;
    cursor: wait;
    transform: none;
    box-shadow: none;
  }

  .sop-answer {
    margin-top: 18px;
    padding: 18px;
    border: 1px solid #d9e2ec;
    border-radius: 16px;
    background: #ffffff;
    text-align: left;
  }

  .sop-answer-status {
    margin-bottom: 10px;
    color: #64748b;
    font-size: 0.84rem;
    font-weight: 700;
  }

  .sop-answer-content {
    color: #0f172a;
    font-size: 0.94rem;
    line-height: 1.6;
    white-space: pre-wrap;
  }

  .sop-answer-sources {
    margin-top: 18px;
    padding-top: 14px;
    border-top: 1px solid #e2e8f0;
  }

  .sop-answer-sources h3 {
    margin: 0 0 10px;
    color: #0f172a;
    font-size: 1rem;
  }

  .sop-source-list {
    margin: 0;
    padding-left: 18px;
  }

  .sop-source-list li {
    margin-bottom: 8px;
    color: #475569;
    font-size: 0.88rem;
    line-height: 1.45;
  }

  .sop-source-list a {
    color: #0161AA;
    font-weight: 700;
    text-decoration: none;
  }

  .sop-source-list a:hover {
    text-decoration: underline;
  }

  .sop-source-meta {
    display: block;
    color: #64748b;
    font-size: 0.78rem;
  }

  .sop-section-heading {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin: 4px 0 16px;
  }

  .sop-section-heading-icon {
    width: 28px;
    height: 28px;
    color: #0161AA;
    flex: 0 0 auto;
    margin-top: 2px;
  }

  .sop-section-heading h2 {
    margin: 0 0 4px;
    color: #0f172a;
    font-size: 1.35rem;
    line-height: 1.25;
    letter-spacing: -0.015em;
  }

  .sop-section-heading p {
    margin: 0;
    color: #64748b;
    font-size: 0.95rem;
  }

  .sop-tile-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .sop-tile {
    min-height: 82px;
    display: grid;
    grid-template-columns: 42px 1fr 18px;
    gap: 12px;
    align-items: center;
    padding: 15px 16px;
    border-radius: 15px;
    border: 1px solid #d9e2ec;
    background: #ffffff;
    color: #0f172a !important;
    text-decoration: none !important;
    transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease, background 0.16s ease;
  }

  .sop-tile:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07);
    text-decoration: none !important;
  }

  .sop-tile-icon {
    width: 38px;
    height: 38px;
    border-radius: 999px;
    background: #f1f5f9;
    color: #475569;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sop-tile-icon svg {
    width: 20px;
    height: 20px;
  }

  .sop-tile-label {
    display: block;
    margin-bottom: 3px;
    color: #0161AA;
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    line-height: 1.15;
    text-transform: uppercase;
  }

  .sop-tile-title {
    display: block;
    color: #111827;
    font-size: 0.94rem;
    font-weight: 750;
    line-height: 1.23;
  }

  .sop-tile-chevron {
    color: #64748b;
    font-size: 1.2rem;
    line-height: 1;
    justify-self: end;
  }

  .sop-tile-grey {
    background: #ffffff;
    border-color: #d9e2ec;
  }

  .sop-tile-grey:hover {
    border-color: #b8c4d2;
  }

  .sop-tile-green {
    background: linear-gradient(180deg, #dcfce7 0%, #ecfdf5 100%);
    border-color: #86efac;
  }

  .sop-tile-green .sop-tile-icon {
    background: #bbf7d0;
    color: #15803d;
  }

  .sop-tile-green .sop-tile-label {
    color: #15803d;
  }

  .sop-tile-orange {
    background: linear-gradient(180deg, #ffedd5 0%, #fff7ed 100%);
    border-color: #fdba74;
  }

  .sop-tile-orange .sop-tile-icon {
    background: #fed7aa;
    color: #ea580c;
  }

  .sop-tile-orange .sop-tile-label {
    color: #ea580c;
  }

  .sop-tile-yellow {
    background: linear-gradient(180deg, #fef3c7 0%, #fffbeb 100%);
    border-color: #fcd34d;
  }

  .sop-tile-yellow .sop-tile-icon {
    background: #fde68a;
    color: #b45309;
  }

  .sop-tile-yellow .sop-tile-label {
    color: #b45309;
  }

  .sop-tile-red {
    background: linear-gradient(180deg, #fee2e2 0%, #fff1f2 100%);
    border-color: #fca5a5;
  }

  .sop-tile-red .sop-tile-icon {
    background: #fecaca;
    color: #dc2626;
  }

  .sop-tile-red .sop-tile-label {
    color: #dc2626;
  }

  .sop-tile-blue {
    background: linear-gradient(180deg, #dbeafe 0%, #eff6ff 100%);
    border-color: #93c5fd;
  }

  .sop-tile-blue .sop-tile-icon {
    background: #bfdbfe;
    color: #0161AA;
  }

  .sop-tile-blue .sop-tile-label {
    color: #0161AA;
  }

  @media (max-width: 1050px) {
    .sop-tile-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 850px) {
    .sop-hero {
      min-height: auto;
      background-image: none;
    }

    .sop-hero-content {
      max-width: none;
      padding: 28px 22px;
      text-align: center;
    }

    .sop-hero-actions {
      justify-content: center;
    }

    .sop-ask {
      grid-template-columns: 1fr;
      text-align: center;
      padding: 24px 20px;
    }

    .sop-ask-icon {
      margin: 0 auto;
    }

    .sop-ask-input {
      display: block;
    }

    .sop-ask-input input {
      width: 100%;
      margin-bottom: 10px;
      text-align: left;
    }

    .sop-ask-submit {
      width: 100%;
    }

    .sop-section-heading {
      justify-content: center;
      text-align: center;
    }

    .sop-tile-grid {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .sop-tile {
      min-height: 58px;
      grid-template-columns: 34px 1fr 18px;
      border-radius: 12px;
      padding: 10px 12px;
    }

    .sop-tile-icon {
      width: 30px;
      height: 30px;
    }

    .sop-tile-icon svg {
      width: 18px;
      height: 18px;
    }

    .sop-tile-title {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 520px) {
    .sop-home {
      padding-bottom: 28px;
    }

    .sop-hero h1 {
      font-size: 1.55rem;
    }

    .sop-hero p {
      font-size: 0.94rem;
    }

    .sop-button {
      width: 100%;
    }
  }
</style>

<div class="sop-home">

  <section class="sop-card sop-hero">
    <div class="sop-hero-content">
      <h1>SLSSA Standard Operating Procedures</h1>

      <p>
        The Surf Life Saving SA (SLSSA) Standard Operating Procedures provide the operational framework for lifesaving services, patrol operations, emergency response, communications, equipment use, incident management, and post-incident support.
      </p>

      <p>
        These procedures support consistent, safe, and effective operational practice across SLSSA services and should be read in conjunction with relevant Surf Life Saving Australia policies, training manuals, award requirements, Lifesaving Service Agreements, local Patrol Operations Manuals, and lawful directions issued by emergency services or relevant authorities.
      </p>

      <div class="sop-hero-actions">
        <a class="sop-button sop-button-primary" href="{{ '/introduction.html' | relative_url }}">Continue reading →</a>
        <a class="sop-button sop-button-secondary" href="{{ '/submit-feedback.html' | relative_url }}">Submit Feedback</a>
      </div>
    </div>
  </section>

  <section class="sop-card sop-ask" id="ask-sops">
    <div class="sop-ask-icon" aria-hidden="true">
      {% include icon.html icon="chat-dots" %}
    </div>

    <div>
      <h2>Ask the SOPs</h2>

      <p>
        Ask a general question about the SLSSA Standard Operating Procedures and the assistant will provide an answer based on relevant SOP content.
      </p>

      <p class="sop-ask-warning">
        Do not enter personal information, patient details, member records, live incident details, radio logs, phone numbers, or sensitive operational tasking information.
      </p>

      <form class="sop-ask-input" id="sopAskForm">
        <input
          id="sopQuestion"
          type="text"
          placeholder="What is the process for reporting a member injury?"
          autocomplete="off"
          required
        >
        <button class="sop-ask-submit" id="sopAskSubmit" type="submit">Ask</button>
      </form>

      <div class="sop-answer" id="sopAnswer" hidden>
        <div class="sop-answer-status" id="sopAnswerStatus"></div>
        <div class="sop-answer-content" id="sopAnswerContent"></div>
        <div class="sop-answer-sources" id="sopAnswerSources"></div>
      </div>
    </div>
  </section>

  <section class="sop-section-heading">
    <span class="sop-section-heading-icon" aria-hidden="true">
      {% include icon.html icon="journal-text" %}
    </span>

    <div>
      <h2>SOP Sections</h2>
      <p>Select a section to view the relevant Standard Operating Procedures.</p>
    </div>
  </section>

  <section class="sop-tile-grid">

    <a class="sop-tile sop-tile-grey" href="{{ '/' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="house" %}</span>
      <span><span class="sop-tile-label">Home</span><span class="sop-tile-title">Welcome</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/introduction.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="info-circle" %}</span>
      <span><span class="sop-tile-label">Introduction</span><span class="sop-tile-title">Introduction</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/submit-feedback.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="chat-dots" %}</span>
      <span><span class="sop-tile-label">Feedback</span><span class="sop-tile-title">Submit Feedback</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/1-work-health-and-safety/1.1-work-health-and-safety.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="shield-check" %}</span>
      <span><span class="sop-tile-label">Section 1</span><span class="sop-tile-title">Work Health and Safety</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/2-information-management/2.1-information-management-and-online-services.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="folder" %}</span>
      <span><span class="sop-tile-label">Section 2</span><span class="sop-tile-title">Information Management</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-green" href="{{ '/3-lifesaving-standards/3.1-lifesaving-service-agreements.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="check-circle" %}</span>
      <span><span class="sop-tile-label">Section 3</span><span class="sop-tile-title">Lifesaving Standards</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/4-rescue-vessels/4.1-licences.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="card-text" %}</span>
      <span><span class="sop-tile-label">Section 4</span><span class="sop-tile-title">Licences</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/5-gear-and-equipment/5.1-lifesaving-vehicles.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="tools" %}</span>
      <span><span class="sop-tile-label">Section 5</span><span class="sop-tile-title">Gear and Equipment</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/6-rescue-equipment/6.1-public-rescue-equipment-to-be-issued.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="life-preserver" %}</span>
      <span><span class="sop-tile-label">Section 6</span><span class="sop-tile-title">Rescue Equipment</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-orange" href="{{ '/7-communications/7.1-radio-communications.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="broadcast" %}</span>
      <span><span class="sop-tile-label">Section 7</span><span class="sop-tile-title">Communications</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-yellow" href="{{ '/8-patrol-operations-general/8.1-beach-management-methods-and-roles.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="flag" %}</span>
      <span><span class="sop-tile-label">Section 8</span><span class="sop-tile-title">Patrol Operations (General)</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-red" href="{{ '/9-patrol-operations-emergency/9.1-emergency-patrol-area-closure-and-evacuation.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="exclamation-triangle" %}</span>
      <span><span class="sop-tile-label">Section 9</span><span class="sop-tile-title">Patrol Operations (Emergency)</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/10-reduced-visibility-operations/10.1-reduced-visibility-operations.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="cloud" %}</span>
      <span><span class="sop-tile-label">Section 10</span><span class="sop-tile-title">Reduced Visibility Operations</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/11-search-and-rescue-SAR-operations/11.1-sar-responsibilities-to-be-issued.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="search" %}</span>
      <span><span class="sop-tile-label">Section 11</span><span class="sop-tile-title">Search and Rescue (SAR) Operations</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/12-state-operations-centre-soc-surfcom/12.1-state-operations-centre-soc-surfcom.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="headset" %}</span>
      <span><span class="sop-tile-label">Section 12</span><span class="sop-tile-title">State Operations Centre (SURFCOM)</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/13-operations-app/13.1-operations-app-general-operations.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="phone" %}</span>
      <span><span class="sop-tile-label">Section 13</span><span class="sop-tile-title">Operations App</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/14-vessels-and-aircraft/14.1-helicopter-landing-site.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="compass" %}</span>
      <span><span class="sop-tile-label">Section 14</span><span class="sop-tile-title">Vessels and Aircraft</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-blue" href="{{ '/15-critical-incident-management-and-member-support/15.1-critical-incidents.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="people" %}</span>
      <span><span class="sop-tile-label">Section 15</span><span class="sop-tile-title">Critical Incident Management and Member Support</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/16-SLSA-references/16.1-slsa-references.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="book" %}</span>
      <span><span class="sop-tile-label">Reference</span><span class="sop-tile-title">SLSA References</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/17-glossary/17.1-glossary.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="journal-text" %}</span>
      <span><span class="sop-tile-label">Reference</span><span class="sop-tile-title">Glossary</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/annexes/1-first-aid-response-possible-exposure-to-hab.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="paperclip" %}</span>
      <span><span class="sop-tile-label">Reference</span><span class="sop-tile-title">Annexes</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/18-change-log/18.1-change-log.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="clock-history" %}</span>
      <span><span class="sop-tile-label">Reference</span><span class="sop-tile-title">Change Log</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

  </section>

</div>

<script>
  const SOP_ASSISTANT_ENDPOINT = "https://func-sop-assistant-eph6gzhsdmbag7fn.australiasoutheast-01.azurewebsites.net/api/ask-sop";

  const sopAskForm = document.getElementById("sopAskForm");
  const sopQuestion = document.getElementById("sopQuestion");
  const sopAskSubmit = document.getElementById("sopAskSubmit");
  const sopAnswer = document.getElementById("sopAnswer");
  const sopAnswerStatus = document.getElementById("sopAnswerStatus");
  const sopAnswerContent = document.getElementById("sopAnswerContent");
  const sopAnswerSources = document.getElementById("sopAnswerSources");

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderSources(sources) {
    if (!Array.isArray(sources) || sources.length === 0) {
      sopAnswerSources.innerHTML = "";
      return;
    }

    const items = sources.map((source) => {
      const title = escapeHtml(source.title || "SOP source");
      const heading = escapeHtml(source.heading || "");
      const version = escapeHtml(source.version || "");
      const score = typeof source.score === "number" ? source.score.toFixed(3) : "";
      const url = source.url ? "{{ site.baseurl }}" + source.url : "";

      const label = heading ? `${title} — ${heading}` : title;

      return `
        <li>
          ${url ? `<a href="${escapeHtml(url)}">${label}</a>` : label}
          <span class="sop-source-meta">
            ${version ? `Version: ${version}` : ""}
            ${score ? ` · Relevance: ${score}` : ""}
          </span>
        </li>
      `;
    }).join("");

    sopAnswerSources.innerHTML = `
      <h3>Relevant SOPs</h3>
      <ol class="sop-source-list">${items}</ol>
    `;
  }

  sopAskForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const question = sopQuestion.value.trim();

    if (!question) {
      return;
    }

    sopAnswer.hidden = false;
    sopAnswerStatus.textContent = "Searching the SOPs...";
    sopAnswerContent.textContent = "";
    sopAnswerSources.innerHTML = "";
    sopAskSubmit.disabled = true;
    sopAskSubmit.textContent = "Searching...";

    try {
      const response = await fetch(SOP_ASSISTANT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          question: question,
          topK: 8,
          includeSources: true
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "The SOP assistant returned an error.");
      }

      sopAnswerStatus.textContent = data.answer_status || "Answered";
      sopAnswerContent.textContent = data.answer || "No answer was returned.";
      renderSources(data.sources);

    } catch (error) {
      sopAnswerStatus.textContent = "Error";
      sopAnswerContent.textContent = "The SOP assistant could not answer the question. Please try again or refer to the SOPs directly.";
      sopAnswerSources.innerHTML = "";
      console.error(error);
    } finally {
      sopAskSubmit.disabled = false;
      sopAskSubmit.textContent = "Ask";
    }
  });
</script>