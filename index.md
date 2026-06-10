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

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
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

  .sop-dev-banner {
    display: grid;
    grid-template-columns: 42px 1fr;
    gap: 14px;
    align-items: start;
    margin-bottom: 18px;
    padding: 16px 18px;
    border: 1px solid #fb923c;
    border-radius: 18px;
    background: linear-gradient(180deg, #fff7ed 0%, #fffbeb 100%);
    box-shadow: 0 8px 22px rgba(234, 88, 12, 0.08);
  }

  .sop-dev-banner-icon {
    width: 38px;
    height: 38px;
    border-radius: 999px;
    background: #fed7aa;
    color: #c2410c;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sop-dev-banner-icon svg {
    width: 21px;
    height: 21px;
  }

  .sop-dev-banner-content strong {
    display: block;
    margin: 0 0 4px;
    color: #7c2d12;
    font-size: 0.96rem;
    line-height: 1.3;
  }

  .sop-dev-banner-content p {
    margin: 0;
    color: #7c2d12;
    font-size: 0.9rem;
    line-height: 1.5;
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

  body.sop-ask-modal-open {
    overflow: hidden;
  }

  .sop-ask-modal[hidden] {
    display: none !important;
  }

  .sop-ask-modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: grid;
    place-items: center;
    padding: 24px;
  }

  .sop-ask-modal-backdrop {
    position: fixed;
    inset: 0;
    background:
      radial-gradient(circle at 50% 22%, rgba(255, 255, 255, 0.30), transparent 30%),
      rgba(15, 23, 42, 0.40);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  .sop-ask-sheet {
    position: relative;
    z-index: 1;
    width: min(720px, 100%);
    max-height: min(90vh, 980px);
    overflow-y: auto;
    padding: 40px 34px 30px;
    border: 1px solid rgba(203, 213, 225, 0.82);
    border-radius: 32px;
    background: rgba(255, 255, 255, 0.97);
    box-shadow:
      0 34px 90px rgba(15, 23, 42, 0.24),
      inset 0 1px 0 rgba(255, 255, 255, 0.92);
  }

  .sop-ask-modal-close {
    position: absolute;
    top: 16px;
    right: 18px;
    width: 34px;
    height: 34px;
    border: 1px solid #d9e2ec;
    border-radius: 999px;
    background: #ffffff;
    color: #475569;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
    line-height: 1;
    cursor: pointer;
  }

  .sop-ask-modal-close:hover {
    background: #f8fafc;
    border-color: #94a3b8;
  }

  .sop-ask-sheet-header {
    text-align: center;
    margin-bottom: 24px;
  }

  .sop-ask-sheet-header h2 {
    margin: 0 0 9px;
    color: #0f172a;
    font-size: 1.58rem;
    line-height: 1.15;
    letter-spacing: -0.025em;
  }

  .sop-ask-sheet-header p {
    margin: 0;
    color: #64748b;
    font-size: 0.88rem;
    line-height: 1.45;
  }

  .sop-ask-modal-form {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.65rem;
    min-height: 62px;
    padding: 0.35rem 0.45rem 0.35rem 1.35rem;
    border: 1px solid rgba(148, 163, 184, 0.45);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow:
      0 12px 28px rgba(15, 23, 42, 0.06),
      inset 0 1px 0 rgba(255, 255, 255, 0.90);
  }

  .sop-ask-modal-form input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: #0f172a;
    font-size: 0.96rem;
    line-height: 1.3;
  }

  .sop-ask-modal-form input::placeholder {
    color: #334155;
  }

  .sop-ask-modal-submit {
    position: relative;
    isolation: isolate;
    min-width: 64px;
    height: 46px;
    border: 1px solid #014f8c;
    border-radius: 999px;
    background: #0161AA;
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    font-size: 0.86rem;
    font-weight: 850;
    cursor: pointer;
    box-shadow:
      0 8px 18px rgba(1, 97, 170, 0.22),
      0 0 0 1px rgba(255, 255, 255, 0.22) inset;
  }

  .sop-ask-modal-submit::before {
    content: "";
    position: absolute;
    inset: -5px;
    z-index: -1;
    border-radius: 999px;
    padding: 5px;
    background:
      radial-gradient(circle at 16% 42%, rgba(255, 183, 3, 0.95), transparent 18%),
      radial-gradient(circle at 34% 20%, rgba(249, 115, 22, 0.95), transparent 22%),
      radial-gradient(circle at 70% 24%, rgba(255, 255, 255, 0.85), transparent 20%),
      radial-gradient(circle at 86% 64%, rgba(56, 189, 248, 0.95), transparent 24%),
      radial-gradient(circle at 42% 88%, rgba(1, 97, 170, 0.95), transparent 26%),
      linear-gradient(115deg, rgba(56, 189, 248, 0.75), rgba(249, 115, 22, 0.65), rgba(255, 255, 255, 0.45), rgba(1, 97, 170, 0.75));
    background-size:
      220% 220%,
      240% 240%,
      210% 210%,
      230% 230%,
      220% 220%,
      260% 260%;
    background-position:
      5% 45%,
      25% 10%,
      70% 15%,
      95% 65%,
      40% 95%,
      0% 50%;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;
    opacity: 0.96;
    animation: sop-ai-border-glow 2.9s ease-in-out infinite;
    pointer-events: none;
  }

  .sop-ask-modal-submit::after {
    content: "";
    position: absolute;
    inset: -15px;
    z-index: -2;
    border-radius: 999px;
    background:
      radial-gradient(circle at 14% 44%, rgba(255, 183, 3, 0.36), transparent 24%),
      radial-gradient(circle at 34% 22%, rgba(249, 115, 22, 0.48), transparent 28%),
      radial-gradient(circle at 72% 20%, rgba(255, 255, 255, 0.30), transparent 28%),
      radial-gradient(circle at 88% 66%, rgba(56, 189, 248, 0.48), transparent 32%),
      radial-gradient(circle at 44% 90%, rgba(1, 97, 170, 0.42), transparent 34%);
    background-size:
      230% 230%,
      250% 250%,
      230% 230%,
      250% 250%,
      240% 240%;
    background-position:
      5% 50%,
      25% 15%,
      70% 10%,
      95% 70%,
      40% 95%;
    filter: blur(16px);
    opacity: 0.68;
    animation: sop-ai-soft-glow 3.3s ease-in-out infinite;
    pointer-events: none;
  }

  .sop-ask-modal-submit:hover {
    background: #014f8c;
  }

  .sop-ask-modal-submit:disabled {
    background: #94a3b8;
    border-color: #94a3b8;
    cursor: wait;
  }

  .sop-ask-modal-submit:disabled::before,
  .sop-ask-modal-submit:disabled::after {
    opacity: 0;
    animation: none;
  }

  @keyframes sop-ai-border-glow {
    0%,
    100% {
      background-position:
        5% 45%,
        25% 10%,
        70% 15%,
        95% 65%,
        40% 95%,
        0% 50%;
      filter: saturate(1.08) brightness(1);
    }

    22% {
      background-position:
        26% 16%,
        58% 42%,
        82% 34%,
        64% 88%,
        18% 74%,
        40% 25%;
      filter: saturate(1.25) brightness(1.08);
    }

    48% {
      background-position:
        78% 34%,
        82% 16%,
        38% 78%,
        20% 58%,
        68% 88%,
        90% 50%;
      filter: saturate(1.15) brightness(1.03);
    }

    72% {
      background-position:
        46% 84%,
        18% 50%,
        62% 26%,
        88% 32%,
        24% 18%,
        55% 80%;
      filter: saturate(1.32) brightness(1.12);
    }
  }

  @keyframes sop-ai-soft-glow {
    0%,
    100% {
      background-position:
        5% 50%,
        25% 15%,
        70% 10%,
        95% 70%,
        40% 95%;
      transform: scale(0.98);
      opacity: 0.58;
    }

    25% {
      background-position:
        30% 18%,
        62% 40%,
        86% 30%,
        60% 92%,
        16% 72%;
      transform: scale(1.01);
      opacity: 0.82;
    }

    55% {
      background-position:
        82% 34%,
        80% 14%,
        42% 80%,
        18% 56%,
        70% 88%;
      transform: scale(1.03);
      opacity: 0.70;
    }

    78% {
      background-position:
        44% 84%,
        18% 52%,
        64% 28%,
        90% 36%,
        24% 20%;
      transform: scale(1);
      opacity: 0.76;
    }
  }

  .sop-ask-privacy {
    display: flex;
    gap: 0.55rem;
    align-items: flex-start;
    margin: 15px 0 0;
    color: #64748b;
    font-size: 0.82rem;
    line-height: 1.45;
  }

  .sop-ask-privacy svg,
  .sop-ask-privacy .bi {
    width: 0.95rem;
    height: 0.95rem;
    color: #64748b;
    margin-top: 0.1rem;
  }

  .sop-ask-modal-body {
    margin-top: 24px;
  }

  .sop-ask-loading {
    display: none;
    align-items: center;
    gap: 0.55rem;
    padding: 18px;
    border-radius: 18px;
    background: #eff6ff;
    color: #1e3a8a;
    font-size: 0.92rem;
    font-weight: 700;
  }

  .sop-ask-loading.is-visible {
    display: flex;
  }

  .sop-ask-loading-dots {
    display: inline-flex;
    width: 28px;
    justify-content: flex-start;
    color: #0161AA;
    letter-spacing: 2px;
  }

  .sop-ask-loading-dots span {
    animation: sop-loading-dot 1.2s infinite ease-in-out;
    opacity: 0.25;
  }

  .sop-ask-loading-dots span:nth-child(2) {
    animation-delay: 0.18s;
  }

  .sop-ask-loading-dots span:nth-child(3) {
    animation-delay: 0.36s;
  }

  @keyframes sop-loading-dot {
    0%,
    80%,
    100% {
      opacity: 0.25;
      transform: translateY(0);
    }

    40% {
      opacity: 1;
      transform: translateY(-2px);
    }
  }

  .sop-answer {
    display: none;
  }

  .sop-answer.is-visible {
    display: block;
  }

  .sop-answer-status-row {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 32px;
    margin-bottom: 12px;
    color: #15803d;
    font-size: 0.86rem;
    font-weight: 800;
  }

  .sop-answer-status-icon {
    width: 22px;
    height: 22px;
    border: 1px solid #86efac;
    border-radius: 999px;
    background: #dcfce7;
    color: #15803d;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.78rem;
    font-weight: 900;
  }

  .sop-answer-label {
    color: #15803d;
    font-size: 0.86rem;
    font-weight: 850;
  }

  .sop-answer-label-supported {
    color: #15803d;
  }

  .sop-answer-label-limited {
    color: #b45309;
  }

  .sop-answer-label-none {
    color: #b91c1c;
  }

  .sop-answer-tooltip-wrap {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .sop-answer-tooltip-button {
    width: 24px;
    height: 24px;
    border: 1px solid #93c5fd;
    border-radius: 999px;
    background: #eff6ff;
    color: #0161AA;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.78rem;
    font-weight: 900;
    cursor: pointer;
  }

  .sop-answer-tooltip-button:hover,
  .sop-answer-tooltip-button:focus-visible {
    background: #dbeafe;
    border-color: #0161AA;
    outline: none;
  }

  .sop-answer-tooltip {
    display: none;
    position: absolute;
    z-index: 20;
    top: calc(100% + 8px);
    left: 0;
    width: min(360px, 82vw);
    padding: 12px;
    border: 1px solid #cbd5e1;
    border-radius: 16px;
    background: #ffffff;
    color: #334155;
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.16);
    font-size: 0.82rem;
    line-height: 1.45;
  }

  .sop-answer-tooltip-wrap.is-open .sop-answer-tooltip {
    display: block;
  }

  .sop-answer-tooltip strong {
    display: block;
    margin-bottom: 6px;
    color: #0f172a;
  }

  .sop-answer-question {
    margin: 0 0 12px;
    padding: 10px 12px;
    border-radius: 15px;
    background: #f8fafc;
    color: #334155;
    font-size: 0.88rem;
    line-height: 1.45;
  }

  .sop-answer-question strong {
    color: #0f172a;
  }

  .sop-answer-verify {
    margin: 0 0 14px;
    padding: 11px 13px;
    border: 1px solid #bfdbfe;
    border-radius: 16px;
    background: #eff6ff;
    color: #1e3a8a;
    font-size: 0.84rem;
    line-height: 1.45;
  }

  .sop-answer-card {
    padding: 18px;
    border-radius: 18px;
    background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 52%, #f8fafc 100%);
    color: #1f2937;
    font-size: 0.92rem;
    line-height: 1.56;
  }

  .sop-answer-card p {
    margin: 0 0 10px;
  }

  .sop-answer-card p:last-child {
    margin-bottom: 0;
  }

  .sop-answer-card ul,
  .sop-answer-card ol {
    margin: 0.4rem 0 0.6rem 1.25rem;
    padding: 0;
  }

  .sop-answer-card li {
    margin: 0 0 5px;
  }

  .sop-answer-card a {
    color: #0161AA;
    font-weight: 800;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .sop-answer-empty {
    padding: 14px;
    border: 1px solid #fcd34d;
    border-radius: 18px;
    background: #fffbeb;
    color: #78350f;
  }

  .sop-answer-empty h3 {
    margin: 0 0 8px;
    color: #78350f;
    font-size: 1rem;
  }

  .sop-answer-empty p {
    margin: 0 0 10px;
  }

  .sop-answer-empty ul {
    margin: 0 0 0 1.25rem;
    padding: 0;
  }

  .sop-answer-sources {
    margin-top: 18px;
  }

  .sop-answer-sources h3 {
    margin: 0 0 10px;
    color: #0f172a;
    font-size: 0.95rem;
    font-weight: 850;
  }

  .sop-answer-source-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
  }

  .sop-answer-source-card {
    min-height: 118px;
    display: flex;
    flex-direction: column;
    gap: 0.28rem;
    padding: 12px;
    border: 1px solid rgba(203, 213, 225, 0.8);
    border-radius: 16px;
    background: rgba(248, 250, 252, 0.76);
    color: #0f172a !important;
    text-decoration: none !important;
    transition: transform 0.16s ease, border-color 0.16s ease, background 0.16s ease;
  }

  a.sop-answer-source-card:hover {
    transform: translateY(-1px);
    border-color: #93c5fd;
    background: #eff6ff;
  }

  .sop-answer-source-icon {
    width: 34px;
    height: 34px;
    border-radius: 12px;
    background: #e0f2fe;
    color: #0161AA;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
    font-weight: 900;
  }

  .sop-answer-source-card strong {
    margin-top: 0.3rem;
    color: #0f172a;
    font-size: 0.8rem;
    line-height: 1.22;
  }

  .sop-answer-source-card small {
    color: #64748b;
    font-size: 0.72rem;
    line-height: 1.25;
  }

  .sop-answer-source-card-muted {
    background: #f8fafc;
  }

  .sop-answer-feedback {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    margin-top: 22px;
    color: #64748b;
    font-size: 0.82rem;
  }

  .sop-feedback-button {
    min-width: 34px;
    min-height: 34px;
    border: 1px solid #cbd5e1;
    border-radius: 999px;
    background: #ffffff;
    color: #334155;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.6rem;
    cursor: pointer;
  }

  .sop-feedback-button:hover,
  .sop-feedback-button.is-selected {
    border-color: #0161AA;
    background: #eff6ff;
    color: #014f8c;
  }

  .sop-feedback-status {
    display: none;
    min-height: 1.2rem;
    margin: 9px 0 0;
    text-align: center;
    color: #64748b;
    font-size: 0.78rem;
  }

  .sop-feedback-status.is-visible {
    display: block;
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

    .sop-answer-source-grid {
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

    .sop-dev-banner {
      grid-template-columns: 1fr;
      padding: 16px;
      text-align: center;
    }

    .sop-dev-banner-icon {
      margin: 0 auto;
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

    .sop-ask-modal {
      padding: 12px;
    }

    .sop-ask-sheet {
      padding: 34px 18px 22px;
      border-radius: 24px;
    }

    .sop-ask-modal-form {
      grid-template-columns: 1fr;
      border-radius: 22px;
      padding: 12px;
    }

    .sop-ask-modal-submit {
      width: 100%;
    }

    .sop-answer-status-row {
      align-items: flex-start;
    }

    .sop-answer-source-grid {
      grid-template-columns: 1fr;
    }

    .sop-answer-feedback {
      flex-wrap: wrap;
    }
  }
</style>

<div class="sop-ask-modal" id="sopAskModal" hidden>
  <div class="sop-ask-modal-backdrop" data-sop-ask-close></div>

  <section class="sop-ask-sheet" role="dialog" aria-modal="true" aria-labelledby="ask-sops-heading">
    <button class="sop-ask-modal-close" id="sopAskModalClose" type="button" aria-label="Close Ask the SOPs" data-sop-ask-close>×</button>

    <div class="sop-ask-sheet-header">
      <h2 id="ask-sops-heading">Ask the SOPs</h2>
      <p>Get answers generated from Surf Life Saving SA Standard Operating Procedures.</p>
    </div>

    <form class="sop-ask-modal-form" id="sopAskForm">
      <label class="sr-only" for="sopAskQuestion">Ask a question about the SOPs</label>
      <input
        id="sopAskQuestion"
        name="question"
        type="search"
        autocomplete="off"
        placeholder="What are club duties during a heatwave alert?"
        aria-label="Ask a question about the SOPs"
      >
      <button class="sop-ask-modal-submit" id="sopAskSubmit" type="submit">Ask</button>
    </form>

    <div class="sop-ask-privacy">
      <span aria-hidden="true">{% include icon.html icon="lock" %}</span>
      <span>Answers are generated from SOP content only. Do not enter personal, patient, member, radio log, or live incident details.</span>
    </div>

    <div class="sop-ask-modal-body" id="sopAskPanel" aria-live="polite">
      <div class="sop-ask-loading" id="sopAskLoading">
        <span id="sopAskLoadingText">Searching SOP sections</span>
        <span class="sop-ask-loading-dots" aria-hidden="true">
          <span>.</span><span>.</span><span>.</span>
        </span>
      </div>

      <article class="sop-answer" id="sopAnswer">
        <div class="sop-answer-status-row">
          <span class="sop-answer-status-icon" id="sopAnswerStatusIcon" aria-hidden="true">✓</span>
          <span class="sop-answer-label sop-answer-label-supported" id="sopAnswerLabel">SOP supported answer</span>

          <span class="sop-answer-tooltip-wrap" id="sopTooltipWrap">
            <button class="sop-answer-tooltip-button" id="sopTooltipButton" type="button" aria-label="More information about this answer">i</button>
            <span class="sop-answer-tooltip" id="sopTooltip" role="tooltip">
              <strong>SOP supported answer</strong>
              The assistant found SOP content that appears to directly support the answer.
              <br><br>
              Always check the linked SOPs for full context, related requirements, and current wording.
            </span>
          </span>
        </div>

        <p class="sop-answer-question" id="sopAnswerQuestion"></p>

        <p class="sop-answer-verify">
          Verify the answer against the linked SOPs before relying on it. This development site may not contain the approved or current SLSSA SOPs and must not be used for operational decisions, training, compliance, or incident management.
        </p>

        <div class="sop-answer-card" id="sopAnswerBody"></div>

        <div class="sop-answer-sources" id="sopAnswerSourcesWrap">
          <h3>Sources</h3>
          <div class="sop-answer-source-grid" id="sopAnswerSources"></div>
        </div>

        <div class="sop-answer-feedback" id="sopAnswerFeedback">
          <span>Was this answer helpful?</span>
          <button class="sop-feedback-button" type="button" data-feedback="useful" aria-label="Useful answer">👍</button>
          <button class="sop-feedback-button" type="button" data-feedback="not_useful" aria-label="Not useful answer">👎</button>
        </div>

        <p class="sop-feedback-status" id="sopFeedbackStatus"></p>
      </article>
    </div>
  </section>
</div>

<div class="sop-home">

  <section class="sop-dev-banner" role="status" aria-label="Development site notice">
    <span class="sop-dev-banner-icon" aria-hidden="true">
      {% include icon.html icon="exclamation-triangle" %}
    </span>

    <div class="sop-dev-banner-content">
      <strong>Development site</strong>
      <p>
        This is a development site. The SOPs on this site may not be the approved or current SLSSA Standard Operating Procedures and must not be used for operational purposes. Use the approved SOP source for operational decisions, training, compliance, or incident management.
      </p>
    </div>
  </section>

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
  (function () {
    const SOP_ASK_ENDPOINT = "https://func-sop-assistant.azurewebsites.net/api/ask-sop";
    const SOP_FEEDBACK_ENDPOINT = "https://func-sop-assistant.azurewebsites.net/api/ask-sop-feedback";

    const suggestedQuestions = [
      "What should be recorded after an incident?",
      "When do we notify SOC?",
      "What do I do for a member injury?",
      "Who can approve a patrol area closure?",
      "What happens after a critical incident?",
      "What should be included in an Operations App incident record?"
    ];

    const modal = document.getElementById("sopAskModal");
    const modalForm = document.getElementById("sopAskForm");
    const modalInput = document.getElementById("sopAskQuestion");
    const modalSubmit = document.getElementById("sopAskSubmit");
    const modalCloseButtons = Array.from(document.querySelectorAll("[data-sop-ask-close]"));

    const loading = document.getElementById("sopAskLoading");
    const loadingText = document.getElementById("sopAskLoadingText");
    const answer = document.getElementById("sopAnswer");
    const answerStatusIcon = document.getElementById("sopAnswerStatusIcon");
    const answerLabel = document.getElementById("sopAnswerLabel");
    const answerQuestion = document.getElementById("sopAnswerQuestion");
    const answerBody = document.getElementById("sopAnswerBody");
    const answerSources = document.getElementById("sopAnswerSources");
    const tooltipWrap = document.getElementById("sopTooltipWrap");
    const tooltipButton = document.getElementById("sopTooltipButton");
    const tooltip = document.getElementById("sopTooltip");
    const feedbackStatus = document.getElementById("sopFeedbackStatus");
    const feedbackButtons = Array.from(document.querySelectorAll(".sop-feedback-button"));

    let lastAnswerRecord = null;
    let loadingTimer = null;
    let placeholderTimer = null;
    let placeholderIndex = 0;
    let topAskInput = null;

    bindTopSearchBar();
    bindModalEvents();
    startPlaceholderRotation();

    function bindTopSearchBar() {
      const topForms = Array.from(document.querySelectorAll("form")).filter(function (form) {
        if (form === modalForm || modal.contains(form)) {
          return false;
        }

        const searchInput = form.querySelector('input[type="search"], input[name="question"], input[name="q"]');
        if (!searchInput) {
          return false;
        }

        return Boolean(
          form.matches("#sopTopAskForm, .slssa-top-search, [role='search']") ||
          form.closest("header") ||
          form.closest("nav") ||
          form.closest(".navbar") ||
          form.closest("#top-nav") ||
          form.closest(".top-nav")
        );
      });

      topForms.forEach(function (form) {
        const input = form.querySelector('input[type="search"], input[name="question"], input[name="q"]');

        if (!topAskInput) {
          topAskInput = input;
        }

        form.addEventListener("submit", function (event) {
          event.preventDefault();

          const question = input.value.trim();

          if (!question) {
            input.focus();
            return;
          }

          openAskModal(question, true);
          askSop(question);
        });
      });

      if (!topAskInput) {
        topAskInput = document.querySelector(
          "#sopTopAskQuestion, #slssaTopSearch, header input[type='search'], nav input[type='search'], .navbar input[type='search']"
        );
      }

      if (topAskInput) {
        topAskInput.addEventListener("keydown", function (event) {
          if (event.key !== "Enter") {
            return;
          }

          const question = topAskInput.value.trim();

          if (!question) {
            return;
          }

          event.preventDefault();
          openAskModal(question, true);
          askSop(question);
        });
      }

      const topAskButtons = Array.from(document.querySelectorAll("button, input[type='submit']")).filter(function (button) {
        if (modal.contains(button)) {
          return false;
        }

        const text = String(button.textContent || button.value || "").trim().toLowerCase();

        return Boolean(
          button.matches("#sopTopAskSubmit, .slssa-top-ask-button") ||
          text === "ask"
        );
      });

      topAskButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
          const form = button.closest("form");

          if (form && topForms.includes(form)) {
            return;
          }

          if (!topAskInput) {
            return;
          }

          const question = topAskInput.value.trim();

          if (!question) {
            topAskInput.focus();
            return;
          }

          event.preventDefault();
          openAskModal(question, true);
          askSop(question);
        });
      });
    }

    function bindModalEvents() {
      modalForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const question = modalInput.value.trim();

        if (!question) {
          modalInput.focus();
          return;
        }

        if (topAskInput) {
          topAskInput.value = question;
        }

        askSop(question);
      });

      modalCloseButtons.forEach(function (button) {
        button.addEventListener("click", closeAskModal);
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !modal.hidden) {
          closeAskModal();
        }
      });

      tooltipButton.addEventListener("click", function () {
        tooltipWrap.classList.toggle("is-open");
      });

      document.addEventListener("click", function (event) {
        if (!tooltipWrap.contains(event.target)) {
          tooltipWrap.classList.remove("is-open");
        }
      });

      feedbackButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          const feedback = button.getAttribute("data-feedback");

          feedbackButtons.forEach(function (otherButton) {
            otherButton.classList.remove("is-selected");
          });

          button.classList.add("is-selected");
          submitFeedback(feedback);
        });
      });
    }

    function openAskModal(question, clearPreviousAnswer) {
      modal.hidden = false;
      document.body.classList.add("sop-ask-modal-open");
      modalInput.value = question;

      if (clearPreviousAnswer) {
        answer.classList.remove("is-visible");
        loading.classList.remove("is-visible");
        resetFeedback();
        tooltipWrap.classList.remove("is-open");
      }

      setTimeout(function () {
        modalInput.focus();
        modalInput.setSelectionRange(modalInput.value.length, modalInput.value.length);
      }, 0);
    }

    function closeAskModal() {
      modal.hidden = true;
      document.body.classList.remove("sop-ask-modal-open");
      loading.classList.remove("is-visible");
      tooltipWrap.classList.remove("is-open");
      clearInterval(loadingTimer);
    }

    async function askSop(question) {
      setLoading(true);
      resetFeedback();

      try {
        const response = await fetch(SOP_ASK_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            question: question,
            page_url: window.location.href,
            session_id: getSessionId(),
            include_inline_citations: true,
            citation_format: "[SOP x.x]",
            source_display: "dedupe_by_sop"
          })
        });

        if (!response.ok) {
          throw new Error("The SOP assistant could not be reached.");
        }

        const data = await response.json();
        renderAnswer(question, data);
      } catch (error) {
        renderError(question);
      } finally {
        setLoading(false);
      }
    }

    function renderAnswer(question, data) {
      const rawSources = Array.isArray(data.sources)
        ? data.sources
        : Array.isArray(data.source_sops)
          ? data.source_sops
          : Array.isArray(data.references)
            ? data.references
            : [];

      const sources = dedupeSources(rawSources);
      const answerText = getAnswerText(data);
      const hasClearAnswer = determineClearAnswer(data, answerText, sources);
      const matchBand = getSourceMatchBand(data, sources);

      lastAnswerRecord = {
        interaction_id: data.interaction_id || data.id || data.log_id || null,
        question: question,
        answer: answerText,
        sources: sources,
        page_url: window.location.href,
        source_match: matchBand,
        no_clear_answer: !hasClearAnswer
      };

      answer.classList.add("is-visible");
      answerQuestion.innerHTML = "<strong>Question:</strong> " + escapeHtml(question);

      if (hasClearAnswer) {
        setAnswerStatus("supported", "SOP supported answer", matchBand);
        answerBody.innerHTML = renderAnswerMarkdown(addCitationLinks(answerText, sources));
      } else {
        setAnswerStatus("none", "No clear SOP answer", "No clear SOP source found");
        answerBody.innerHTML = renderNoClearAnswer();
      }

      renderSources(sources);
    }

    function renderError(question) {
      lastAnswerRecord = {
        interaction_id: null,
        question: question,
        answer: "",
        sources: [],
        page_url: window.location.href,
        source_match: "Unavailable",
        no_clear_answer: true
      };

      answer.classList.add("is-visible");
      answerQuestion.innerHTML = "<strong>Question:</strong> " + escapeHtml(question);
      setAnswerStatus("none", "Ask the SOPs unavailable", "The assistant could not be reached");

      answerBody.innerHTML =
        '<div class="sop-answer-empty">' +
          '<h3>Ask the SOPs is temporarily unavailable</h3>' +
          '<p>You can still browse the SOP sections below or use the site search if available.</p>' +
          '<ul>' +
            '<li>Try opening the most relevant SOP section.</li>' +
            '<li>Check the Change Log if you are looking for a recent update.</li>' +
            '<li>Use Submit Feedback if something appears missing or unclear.</li>' +
          '</ul>' +
        '</div>';

      renderSources([]);
    }

    function setLoading(isLoading) {
      if (isLoading) {
        loading.classList.add("is-visible");
        answer.classList.remove("is-visible");
        modalSubmit.disabled = true;

        const messages = [
          "Searching SOP sections",
          "Checking source matches",
          "Preparing SOP supported answer"
        ];

        let index = 0;
        loadingText.textContent = messages[index];

        clearInterval(loadingTimer);
        loadingTimer = setInterval(function () {
          index = (index + 1) % messages.length;
          loadingText.textContent = messages[index];
        }, 1400);
      } else {
        loading.classList.remove("is-visible");
        modalSubmit.disabled = false;
        clearInterval(loadingTimer);
      }
    }

    function setAnswerStatus(type, label, matchBand) {
      answerLabel.textContent = label;
      answerLabel.classList.remove("sop-answer-label-supported", "sop-answer-label-limited", "sop-answer-label-none");

      if (type === "supported") {
        answerStatusIcon.textContent = "✓";
        answerLabel.classList.add("sop-answer-label-supported");
      } else if (type === "limited") {
        answerStatusIcon.textContent = "!";
        answerLabel.classList.add("sop-answer-label-limited");
      } else {
        answerStatusIcon.textContent = "!";
        answerLabel.classList.add("sop-answer-label-none");
      }

      tooltip.innerHTML =
        "<strong>" + escapeHtml(label) + "</strong>" +
        getTooltipText(type, matchBand);
    }

    function getTooltipText(type, matchBand) {
      if (type === "supported") {
        return "The assistant found SOP content that appears to directly support the answer." +
          "<br><br><strong>Source match: " + escapeHtml(matchBand || "Available") + "</strong>" +
          "<br>This means the question matched one or more SOP sections used to prepare the answer." +
          "<br><br>Always check the linked SOPs for full context, related requirements, and current wording.";
      }

      if (type === "limited") {
        return "The assistant found some SOP content, but the match may be incomplete." +
          "<br><br>Use the linked SOPs to confirm whether the answer is suitable for your situation.";
      }

      return "The assistant could not find SOP content that clearly answers the question." +
        "<br><br>Try rewording the question, browsing the SOP sections, or submitting feedback if the SOPs should cover this topic.";
    }

    function getAnswerText(data) {
      return String(
        data.answer ||
        data.response ||
        data.message ||
        data.text ||
        ""
      ).trim();
    }

    function determineClearAnswer(data, answerText, sources) {
      if (data.no_clear_answer === true || data.found === false || data.supported === false) {
        return false;
      }

      if (!answerText || !sources.length) {
        return false;
      }

      const lowerAnswer = answerText.toLowerCase();

      return !(
        lowerAnswer.includes("no clear answer") ||
        lowerAnswer.includes("could not find") ||
        lowerAnswer.includes("cannot find") ||
        lowerAnswer.includes("not enough information")
      );
    }

    function getSourceMatchBand(data, sources) {
      const explicitBand = data.source_match ||
        data.source_match_band ||
        data.match_band ||
        data.confidence_band;

      if (explicitBand) {
        return String(explicitBand);
      }

      if (!sources.length) {
        return "No clear SOP source found";
      }

      const bestScore = getBestSourceScore(data, sources);

      if (bestScore === null) {
        return "Available";
      }

      if (bestScore >= 0.62) {
        return "Strong";
      }

      if (bestScore >= 0.42) {
        return "Moderate";
      }

      return "Limited";
    }

    function getBestSourceScore(data, sources) {
      const scores = [];

      if (typeof data.score === "number") {
        scores.push(data.score);
      }

      if (typeof data.best_score === "number") {
        scores.push(data.best_score);
      }

      sources.forEach(function (source) {
        if (typeof source.score === "number") {
          scores.push(source.score);
        }
      });

      if (!scores.length) {
        return null;
      }

      return Math.max.apply(null, scores);
    }

    function dedupeSources(rawSources) {
      const seen = new Map();

      rawSources.forEach(function (source) {
        const normalised = normaliseSource(source);

        const key = normalised.sopNumber
          ? "sop:" + normalised.sopNumber
          : normalised.url
            ? "url:" + normalised.url
            : "title:" + normalised.title.toLowerCase();

        if (!seen.has(key)) {
          seen.set(key, normalised);
          return;
        }

        const existing = seen.get(key);

        if (!existing.url && normalised.url) {
          existing.url = normalised.url;
        }

        if (!existing.title && normalised.title) {
          existing.title = normalised.title;
        }

        if (normalised.score && (!existing.score || normalised.score > existing.score)) {
          existing.score = normalised.score;
        }
      });

      return Array.from(seen.values()).sort(function (a, b) {
        return compareSopNumbers(a.sopNumber, b.sopNumber);
      });
    }

    function normaliseSource(source) {
      const rawTitle = String(
        source.title ||
        source.sop_title ||
        source.document_title ||
        source.heading ||
        source.name ||
        "SOP source"
      ).trim();

      const sopNumber = extractSopNumber(
        source.sop_number ||
        source.sop ||
        source.section ||
        source.section_id ||
        rawTitle ||
        source.url ||
        source.href ||
        ""
      );

      return {
        sopNumber: sopNumber,
        title: removeTrailingSubheading(rawTitle),
        url: normaliseUrl(source.url || source.href || source.path || source.page_url || ""),
        score: typeof source.score === "number" ? source.score : null
      };
    }

    function renderSources(sources) {
      answerSources.innerHTML = "";

      if (!sources.length) {
        const card = document.createElement("div");
        card.className = "sop-answer-source-card";
        card.innerHTML =
          '<span class="sop-answer-source-icon">?</span>' +
          '<strong>No source SOPs identified</strong>' +
          '<small>Try rewording the question</small>';
        answerSources.appendChild(card);
        return;
      }

      sources.slice(0, 3).forEach(function (source) {
        answerSources.appendChild(createSourceCard(source));
      });

      if (sources.length > 3) {
        const extra = document.createElement("div");
        extra.className = "sop-answer-source-card sop-answer-source-card-muted";
        extra.innerHTML =
          '<span class="sop-answer-source-icon">+</span>' +
          '<strong>View all ' + sources.length + ' sources</strong>' +
          '<small>Listed once per SOP</small>';
        answerSources.appendChild(extra);
      }
    }

    function createSourceCard(source) {
      const card = document.createElement(source.url ? "a" : "div");
      const label = source.sopNumber ? "SOP " + source.sopNumber : "SOP source";
      const title = cleanSourceTitle(source.title, source.sopNumber);

      card.className = "sop-answer-source-card";

      if (source.url) {
        card.href = source.url;
      }

      card.innerHTML =
        '<span class="sop-answer-source-icon">' + escapeHtml(source.sopNumber || "SOP") + '</span>' +
        '<strong>' + escapeHtml(title) + '</strong>' +
        '<small>' + escapeHtml(label) + '</small>';

      return card;
    }

    function addCitationLinks(answerText, sources) {
      return String(answerText || "").replace(/\[SOP\s+(\d{1,2}(?:\.\d{1,2}){1,2})\]/gi, function (match, sopNumber) {
        const source = sources.find(function (item) {
          return item.sopNumber === sopNumber;
        });

        if (source && source.url) {
          return "[SOP " + sopNumber + "](" + source.url + ")";
        }

        return "[SOP " + sopNumber + "]";
      });
    }

    function renderAnswerMarkdown(markdown) {
      const lines = String(markdown || "").split(/\r?\n/);
      const html = [];
      let inList = false;
      let listType = "";

      lines.forEach(function (line) {
        const trimmed = line.trim();

        if (!trimmed) {
          closeListIfNeeded();
          return;
        }

        const unorderedMatch = trimmed.match(/^[-*]\s+(.+)$/);
        const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);

        if (unorderedMatch) {
          openListIfNeeded("ul");
          html.push("<li>" + renderInlineMarkdown(unorderedMatch[1]) + "</li>");
          return;
        }

        if (orderedMatch) {
          openListIfNeeded("ol");
          html.push("<li>" + renderInlineMarkdown(orderedMatch[1]) + "</li>");
          return;
        }

        closeListIfNeeded();
        html.push("<p>" + renderInlineMarkdown(trimmed) + "</p>");
      });

      closeListIfNeeded();

      return html.join("");

      function openListIfNeeded(type) {
        if (inList && listType === type) {
          return;
        }

        closeListIfNeeded();
        html.push("<" + type + ">");
        inList = true;
        listType = type;
      }

      function closeListIfNeeded() {
        if (inList) {
          html.push("</" + listType + ">");
          inList = false;
          listType = "";
        }
      }
    }

    function renderInlineMarkdown(text) {
      let html = escapeHtml(text);

      html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

      html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (match, label, url) {
        const safeUrl = sanitiseLinkUrl(url);

        if (!safeUrl) {
          return label;
        }

        return '<a href="' + safeUrl + '">' + label + "</a>";
      });

      return html;
    }

    function renderNoClearAnswer() {
      return '<div class="sop-answer-empty">' +
        '<h3>No clear SOP answer found</h3>' +
        '<p>I could not find a current SOP section in this development site that directly answers the question.</p>' +
        '<ul>' +
          '<li>Try rewording the question with different terms.</li>' +
          '<li>Browse the SOP sections below.</li>' +
          '<li>Check the Change Log if you are looking for a recent update.</li>' +
          '<li>Submit feedback if this should be covered by an SOP.</li>' +
        '</ul>' +
      '</div>';
    }

    async function submitFeedback(feedback) {
      if (!lastAnswerRecord) {
        return;
      }

      feedbackStatus.textContent = "Saving feedback...";
      feedbackStatus.classList.add("is-visible");

      try {
        const response = await fetch(SOP_FEEDBACK_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            interaction_id: lastAnswerRecord.interaction_id,
            feedback: feedback,
            question: lastAnswerRecord.question,
            answer: lastAnswerRecord.answer,
            sources: lastAnswerRecord.sources,
            page_url: lastAnswerRecord.page_url,
            source_match: lastAnswerRecord.source_match,
            no_clear_answer: lastAnswerRecord.no_clear_answer,
            feedback_time: new Date().toISOString()
          })
        });

        if (!response.ok) {
          throw new Error("Feedback could not be saved.");
        }

        feedbackStatus.textContent = "Feedback saved. Thank you.";
      } catch (error) {
        feedbackStatus.textContent = "Feedback could not be saved, but your selection has been recorded on this page.";
      }
    }

    function resetFeedback() {
      feedbackButtons.forEach(function (button) {
        button.classList.remove("is-selected");
      });

      feedbackStatus.textContent = "";
      feedbackStatus.classList.remove("is-visible");
    }

    function startPlaceholderRotation() {
      if (!suggestedQuestions.length) {
        return;
      }

      placeholderTimer = setInterval(function () {
        const input = topAskInput || modalInput;

        if (!input || document.activeElement === input || input.value.trim()) {
          return;
        }

        placeholderIndex = (placeholderIndex + 1) % suggestedQuestions.length;
        input.setAttribute("placeholder", suggestedQuestions[placeholderIndex]);
      }, 3200);
    }

    function removeTrailingSubheading(title) {
      return String(title)
        .replace(/\s+[—–-]\s+(Purpose|Procedure|Policy|Scope|Responsibilities|References|Definitions|Notes|Overview).*$/i, "")
        .trim();
    }

    function cleanSourceTitle(title, sopNumber) {
      let text = String(title || "SOP source").trim();

      if (sopNumber) {
        text = text.replace(new RegExp("^SOP\\s*" + escapeRegExp(sopNumber) + "\\s*[—–-]?\\s*", "i"), "");
        text = text.replace(new RegExp("^" + escapeRegExp(sopNumber) + "\\s*[—–-]?\\s*", "i"), "");
      }

      return text || "SOP source";
    }

    function extractSopNumber(value) {
      const text = String(value || "");
      const match = text.match(/\b(\d{1,2}(?:\.\d{1,2}){1,2})\b/);
      return match ? match[1] : "";
    }

    function normaliseUrl(url) {
      if (!url) {
        return "";
      }

      const text = String(url).trim();

      if (/^https?:\/\//i.test(text)) {
        return text;
      }

      if (text.startsWith("/")) {
        return "{{ site.baseurl }}" + text;
      }

      return "{{ site.baseurl }}/" + text;
    }

    function sanitiseLinkUrl(url) {
      const text = String(url || "").trim();

      if (/^https?:\/\//i.test(text)) {
        return escapeAttribute(text);
      }

      if (text.startsWith("/") || text.startsWith("{{ site.baseurl }}/")) {
        return escapeAttribute(text);
      }

      return "";
    }

    function compareSopNumbers(a, b) {
      if (!a && !b) {
        return 0;
      }

      if (!a) {
        return 1;
      }

      if (!b) {
        return -1;
      }

      const aParts = a.split(".").map(Number);
      const bParts = b.split(".").map(Number);
      const length = Math.max(aParts.length, bParts.length);

      for (let i = 0; i < length; i += 1) {
        const aValue = aParts[i] || 0;
        const bValue = bParts[i] || 0;

        if (aValue !== bValue) {
          return aValue - bValue;
        }
      }

      return 0;
    }

    function getSessionId() {
      const key = "sop_ask_session_id";
      let sessionId = window.sessionStorage.getItem(key);

      if (!sessionId) {
        sessionId = "sop-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
        window.sessionStorage.setItem(key, sessionId);
      }

      return sessionId;
    }

    function escapeHtml(value) {
      return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function escapeAttribute(value) {
      return escapeHtml(value).replace(/`/g, "&#096;");
    }

    function escapeRegExp(value) {
      return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  })();
</script>