# SOMS — Personal Portfolio Implementation Plan

## Overview
A production-grade, modular, and data-driven portfolio website for **Someshwar S** (`SOMS` / `soms36-DefSec`). The site is built with **React**, **TypeScript**, and **Vite**, featuring a premium dark engineering aesthetic tailored to a cybersecurity builder, cloud defense engineer, and AI security researcher.

---

## Architecture & Technology Stack
- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite
- **Icons**: Lucide React (`lucide-react`)
- **Styling Architecture**: Modern CSS Design Token System with CSS Modules / Scoped CSS (clean typography, subtle gridlines, coordinate tags, high contrast, dark graphite theme with precision crimson/amber accent, zero neon overload, responsive down to 360px)
- **Deployment**: GitHub Pages via `.github/workflows/deploy.yml` with automated build & artifact publishing
- **Data Architecture**: 100% decoupled content stored in `src/data/*.ts` and strictly typed in `src/types/*.ts`

---

## Phase Breakdown

### Phase 1: Environment & Project Foundation
- Initialize React + TypeScript + Vite architecture (`package.json`, `tsconfig.json`, `vite.config.ts`, `index.html`)
- Install core dependencies (`react`, `react-dom`, `lucide-react`, dev tooling)
- Set up CSS tokens: colors, spacing, typography (sans + mono), elevation, technical grid patterns, and reduced-motion media queries
- Define complete TypeScript types (`Project`, `Skill`, `JourneyItem`, `Club`, `Activity`, `Achievement`, `Certification`, `CurrentFocus`, `Profile`)
- Verify initial build and dev server

### Phase 2: Authentic Content Layer (`src/data/`)
- Populate central profile configuration from verified sources (B.Tech CSE @ SASTRA University, MeitY InsiEDR project, LLM-IaC-Security, ACE Project Lead, Tiruchirappalli)
- Configure projects with rich architecture details and verification links:
  - **InsiEDR**: Behavioral Zero-Trust EDR Platform (MeitY Funded)
  - **LLM-IaC-Security**: Multi-Agent CloudFormation Scanner & Auto-Remediation
  - **TrackMe**: Location & Telemetry Tracking System
  - **My_Scriptings**: Security Automation & Automation Toolkit
- Configure Journey timeline (2023 - 2026+)
- Configure Skills grouped by domain (Zero arbitrary percentage bars)
- Configure Clubs & Communities (Association of Computing Engineers - ACE)
- Configure `/now` section (`current.ts` with building, learning, exploring, researching)
- Configure social links and contact configuration

### Phase 3: Core UI Components & Sections
- **Navigation**: Sticky technical navbar, active section spy via IntersectionObserver, mobile drawer, keyboard accessibility
- **Hero**: Confident engineering typography (`SOMS.`, `SECURITY.`, `SYSTEMS.`, `AI.`, `BUILDER.`), real-time status pill, primary CTAs
- **About**: Clean technical overview, verified quick facts (Location, Education, Current Focus), status badge
- **Focus Areas**: Deep architectural focus cards (Defensive Security, Cloud Defense & DevSecOps, AI/LLM Security, Systems & Telemetry)
- **Projects**: Featured project showcases with architecture schematics, tag pills, GitHub repository links, and extensible modal/preview support
- **Journey**: Vertical engineering timeline with milestones, category badges, and mobile stacking
- **Skills**: Domain-grouped pill matrices with technical indicators
- **Clubs & Communities**: Rich organization cards for ACE and technical leadership
- **Activities & Events**: Interactive activity feed (CTFs, workshops, open-source)
- **Achievements & Certifications**: Compact milestone showcase (MeitY funding, academic honors)
- **Now**: Minimalist `/ NOW` terminal-styled dashboard showing active pursuits
- **GitHub**: Progressive enhancement showcase for `soms36-DefSec` with fallback cache
- **Contact & Footer**: Direct communication terminal, clipboard copy for email, social channels, and copyright

### Phase 4: Polish, Micro-Interactions & Accessibility
- CSS animations with `prefers-reduced-motion` compliance
- Interactive project details drawer/modal for deep-dive exploration
- Micro-interactions: subtle coordinate labels, active section indicators, hover line shifts
- Keyboard accessibility, semantic HTML elements, ARIA attributes
- Performance optimization (zero huge images, pure SVG icons, minimal bundle footprint)
- SEO meta tags, Open Graph, Twitter cards, custom favicon, robots.txt, sitemap.xml

### Phase 5: Verification & CI/CD
- Complete TypeScript compilation check (`npm run typecheck`)
- Production bundle verification (`npm run build`)
- GitHub Actions deployment workflow setup (`.github/workflows/deploy.yml`)
- Detailed `README.md` documentation covering content updating, local development, and deployment
