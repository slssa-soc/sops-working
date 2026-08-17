---
title: Surf Life Saving SA Standard Operating Procedures
nav: Welcome
nav_order: 1
layout: lesson-content
icon: house
---

<style>
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

  .sop-home strong,
  .sop-home b {
    font-weight: 600;
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
    margin-bottom: 28px;
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
    font-weight: 650;
    line-height: 1.18;
    letter-spacing: -0.03em;
    color: #0f172a;
  }

  .sop-hero p {
    max-width: 680px;
    margin: 0 0 12px;
    color: #334155;
    font-size: 0.98rem;
    font-weight: 400;
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
    border-radius: 14px;
    font-size: 0.92rem;
    font-weight: 650;
    line-height: 1.2;
    text-decoration: none !important;
    transition:
      transform 0.16s ease,
      box-shadow 0.16s ease,
      border-color 0.16s ease,
      background 0.16s ease;
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
    font-weight: 650;
    line-height: 1.25;
    letter-spacing: -0.015em;
  }

  .sop-section-heading p {
    margin: 0;
    color: #64748b;
    font-size: 0.95rem;
    font-weight: 400;
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
    transition:
      transform 0.16s ease,
      box-shadow 0.16s ease,
      border-color 0.16s ease,
      background 0.16s ease;
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
    font-weight: 650;
    letter-spacing: 0.06em;
    line-height: 1.15;
    text-transform: uppercase;
  }

  .sop-tile-title {
    display: block;
    color: #111827;
    font-size: 0.94rem;
    font-weight: 650;
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
      border-radius: 14px;
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

    <a class="sop-tile sop-tile-yellow" href="{{ '/8-patrol-operations-general/8.1-beach-management-principles.html' | relative_url }}">
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

    <a class="sop-tile sop-tile-grey" href="{{ '/11-search-and-rescue-sar-operations/11.1-sar-responsibilities.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="binoculars" %}</span>
      <span><span class="sop-tile-label">Section 11</span><span class="sop-tile-title">Search and Rescue (SAR) Operations</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/12-emergency-management-and-response-operations/12.1-command-control-and-coordination-operations.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="diagram-3" %}</span>
      <span><span class="sop-tile-label">Section 12</span><span class="sop-tile-title">Emergency Management and Response Operations</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/13-operational-reporting/13.1-patrol-reporting.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">{% include icon.html icon="clipboard" %}</span>
      <span><span class="sop-tile-label">Section 13</span><span class="sop-tile-title">Operational Reporting</span></span>
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