---
title: Surf Life Saving SA Standard Operating Procedures
nav: Welcome
nav_order: 1
layout: lesson-content
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
      url("{{ '/assets/images/sop-header.png' | relative_url }}");
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

  .sop-coming-soon {
    flex: 0 0 auto;
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border: 0;
    border-radius: 13px;
    background: #9ca3af;
    color: #ffffff;
    font-weight: 700;
    font-size: 0.88rem;
    cursor: not-allowed;
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

    .sop-coming-soon {
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
      <h1>Surf Life Saving SA Standard Operating Procedures</h1>

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

  <section class="sop-card sop-ask">
    <div class="sop-ask-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/>
        <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4"/>
        <path d="M12 17h.01"/>
      </svg>
    </div>

    <div>
      <h2>Ask the SOPs</h2>

      <p>
        A future search and question tool will allow SLS personnel to ask operational questions and be guided to relevant SOP content.
      </p>

      <div class="sop-ask-input" aria-label="Future SOP question tool placeholder">
        <input
          type="text"
          placeholder="What temperature does a surf club patrol need to conduct a weekday patrol?"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='What temperature does a surf club patrol need to conduct a weekday patrol?'"
        >
        <button class="sop-coming-soon" type="button" disabled>Coming soon</button>
      </div>
    </div>
  </section>

  <section class="sop-section-heading">
    <svg class="sop-section-heading-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2"/>
      <path d="M8 7h8"/>
      <path d="M8 12h8"/>
      <path d="M8 17h5"/>
    </svg>

    <div>
      <h2>SOP Sections</h2>
      <p>Select a section to view the relevant Standard Operating Procedures.</p>
    </div>
  </section>

  <section class="sop-tile-grid">

    <a class="sop-tile sop-tile-grey" href="{{ '/' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/><path d="M9 20v-6h6v6"/></svg>
      </span>
      <span><span class="sop-tile-label">Home</span><span class="sop-tile-title">Welcome</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/introduction.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/></svg>
      </span>
      <span><span class="sop-tile-label">Introduction</span><span class="sop-tile-title">Introduction and Submit Feedback</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/1-work-health-and-safety/1.1-work-health-and-safety.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 1</span><span class="sop-tile-title">Work Health and Safety</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/2-information-management/2.1-information-management-and-online-services.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h6l2 2h8v10a2 2 0 0 1-2 2H4V6Z"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 2</span><span class="sop-tile-title">Information Management</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-green" href="{{ '/3-lifesaving-standards/3.1-lifesaving-service-agreements.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.2 2.2L15.8 9"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 3</span><span class="sop-tile-title">Lifesaving Standards</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/4-rescue-vessels/4.1-licences.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h4"/><path d="M7 13h8"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 4</span><span class="sop-tile-title">Licences</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/5-gear-and-equipment/5.1-lifesaving-vehicles.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="m14.7 6.3 3 3"/><path d="M2 22l7-7"/><path d="M8 16 3 11l5-5 5 5"/><path d="m13 11 6-6 3 3-6 6"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 5</span><span class="sop-tile-title">Gear and Equipment</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/6-rescue-equipment/6.1-public-rescue-equipment-to-be-issued.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="m5.6 5.6 4.3 4.3"/><path d="m14.1 14.1 4.3 4.3"/><path d="m18.4 5.6-4.3 4.3"/><path d="m9.9 14.1-4.3 4.3"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 6</span><span class="sop-tile-title">Rescue Equipment</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-orange" href="{{ '/7-communications/7.1-radio-communications.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a6 6 0 0 0 0 6"/><path d="M3.5 6.5a10 10 0 0 0 0 11"/><path d="M18 9a6 6 0 0 1 0 6"/><path d="M20.5 6.5a10 10 0 0 1 0 11"/><path d="M12 12h.01"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 7</span><span class="sop-tile-title">Communications</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-yellow" href="{{ '/8-patrol-operations-general/8.1-beach-management-methods-and-roles.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M6 21V4"/><path d="M6 4h12l-2 4 2 4H6"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 8</span><span class="sop-tile-title">Patrol Operations (General)</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-red" href="{{ '/9-patrol-operations-emergency/9.1-emergency-patrol-area-closure-and-evacuation.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 4.2 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 9</span><span class="sop-tile-title">Patrol Operations (Emergency)</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/10-reduced-visibility-operations/10.1-reduced-visibility-operations.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 18H7a5 5 0 1 1 1.2-9.85A6 6 0 0 1 20 10.5 3.75 3.75 0 0 1 17.5 18Z"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 10</span><span class="sop-tile-title">Reduced Visibility Operations</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/11-search-and-rescue-SAR-operations/11.1-sar-responsibilities-to-be-issued.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 11</span><span class="sop-tile-title">Search and Rescue (SAR) Operations</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/12-state-operations-centre-soc-surfcom/12.1-state-operations-centre-soc-surfcom.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21h16"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/><path d="M9 8h1"/><path d="M14 8h1"/><path d="M9 12h1"/><path d="M14 12h1"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 12</span><span class="sop-tile-title">State Operations Centre (SURFCOM)</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/13-operations-app/13.1-operations-app-general-operations.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 17h2"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 13</span><span class="sop-tile-title">Operations App</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/14-vessels-and-aircraft/14.1-helicopter-landing-site.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17h18"/><path d="M5 17l2-6h10l2 6"/><path d="M7 11l5-7 5 7"/><path d="M8 21h8"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 14</span><span class="sop-tile-title">Vessels and Aircraft</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-blue" href="{{ '/15-critical-incident-management-and-member-support/15.1-critical-incidents.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M2 21v-2a4 4 0 0 1 3-3.87"/></svg>
      </span>
      <span><span class="sop-tile-label">Section 15</span><span class="sop-tile-title">Critical Incident Management and Member Support</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/16-SLSA-references/16.1-slsa-references.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z"/></svg>
      </span>
      <span><span class="sop-tile-label">Reference</span><span class="sop-tile-title">SLSA References</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/17-glossary/17.1-glossary.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"/><path d="M7 17V7a3 3 0 0 1 6 0v10"/><path d="M13 11h4"/><path d="M17 7v10"/></svg>
      </span>
      <span><span class="sop-tile-label">Reference</span><span class="sop-tile-title">Glossary</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/annexes/1-first-aid-response-possible-exposure-to-hab.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="m21.4 11.6-8.8 8.8a5 5 0 0 1-7.1-7.1l9.2-9.2a3.5 3.5 0 0 1 5 5l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.8-8.8"/></svg>
      </span>
      <span><span class="sop-tile-label">Reference</span><span class="sop-tile-title">Annexes</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

    <a class="sop-tile sop-tile-grey" href="{{ '/18-change-log/18.1-change-log.html' | relative_url }}">
      <span class="sop-tile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 3v6h6"/><path d="M12 7v5l3 2"/></svg>
      </span>
      <span><span class="sop-tile-label">Reference</span><span class="sop-tile-title">Change Log</span></span>
      <span class="sop-tile-chevron">›</span>
    </a>

  </section>

</div>