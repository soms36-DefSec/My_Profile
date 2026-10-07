# SOMS — Personal Portfolio & Digital Profile

> A production-quality, modular, and data-driven digital profile website for **Someshwar S** (**SOMS / soms36-DefSec**).
> Engineered with a premium dark engineering aesthetic tailored for a cybersecurity builder, cloud defense engineer, and AI security researcher.

---

## 🚀 Live Demo & Repository
- **GitHub Profile**: [https://github.com/soms36-DefSec](https://github.com/soms36-DefSec)
- **LinkedIn**: [https://www.linkedin.com/in/soms36/](https://www.linkedin.com/in/soms36/)
- **Repository**: [https://github.com/soms36-DefSec/My_Profile](https://github.com/soms36-DefSec/My_Profile)
- **Live Website**: [https://soms36-DefSec.github.io/My_Profile/](https://soms36-DefSec.github.io/My_Profile/)

---

## 🛠️ Technology Stack
- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite 6
- **Styling Architecture**: Modern CSS Design Tokens (`variables.css`, `global.css`, `animations.css`)
- **Icons**: Lucide React + Custom Precision SVG Brand Components
- **Hosting & CI/CD**: GitHub Pages with automated GitHub Actions workflow (`.github/workflows/deploy.yml`)
- **Architecture**: 100% Decoupled Content Layer (`src/data/`) — zero hardcoded content inside UI components

---

## 📂 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated CI/CD deployment to GitHub Pages
├── public/
│   ├── robots.txt                # Search crawler configuration
│   └── sitemap.xml               # SEO sitemap
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky header with section spy & progress indicator
│   │   │   ├── MobileDrawer.tsx  # Accessible mobile navigation drawer
│   │   │   ├── Footer.tsx        # Minimal engineering footer
│   │   │   └── Container.tsx     # Responsive layout container
│   │   └── ui/
│   │       ├── SectionHeader.tsx # Numbered technical headers (e.g. 01 / ABOUT)
│   │       ├── StatusPill.tsx    # Pulsing status pill (e.g. ● CURRENTLY BUILDING)
│   │       ├── CoordinateTag.tsx # Technical coordinate indicator
│   │       ├── TechBadge.tsx     # Reusable technology badge
│   │       ├── ProjectModal.tsx  # Deep-dive architecture & layer specification dialog
│   │       └── Icons.tsx         # Precision SVG icons (GitHub, LinkedIn, etc.)
│   ├── data/                     # ⭐ ALL CONTENT LIVES HERE (100% Data-Driven)
│   │   ├── profile.ts            # Central profile configuration & bios
│   │   ├── focusAreas.ts         # Technical focus domains & core capabilities
│   │   ├── projects.ts           # Featured & secondary engineering projects
│   │   ├── skills.ts             # Skills categorized strictly by domain (no fake % bars)
│   │   ├── journey.ts            # Chronological milestones & academic progression
│   │   ├── clubs.ts              # Leadership roles & student societies (ACE)
│   │   ├── activities.ts         # CTF workshops, technical talks, and open source
│   │   ├── achievements.ts       # MeitY funding and verified honors
│   │   ├── certifications.ts     # Verified certifications
│   │   ├── current.ts            # / NOW section (building, learning, exploring, researching)
│   │   ├── social.ts             # Contact channels & social profiles
│   │   └── index.ts              # Data re-exports
│   ├── hooks/
│   │   ├── useScrollSpy.ts       # Active section detection
│   │   ├── useScrollProgress.ts  # Reading progress percentage
│   │   └── useClipboard.ts       # One-click email copy with feedback toast
│   ├── styles/
│   │   ├── variables.css         # Design tokens (graphite background, crimson accent)
│   │   ├── global.css            # Typography hierarchy & technical grid pattern
│   │   └── animations.css        # Subtle reveals & prefers-reduced-motion handling
│   ├── types/
│   │   └── index.ts              # Strict TypeScript models & interfaces
│   ├── App.tsx                   # Main application assembly
│   ├── main.tsx                  # React DOM root entry
│   └── vite-env.d.ts             # Vite client types
├── index.html                    # HTML shell with OpenGraph meta & fonts
├── package.json                  # Scripts & dependencies
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite configuration with relative base path
```

---

## 💻 Local Development

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Execution
```bash
# 1. Clone the repository
git clone https://github.com/soms36-DefSec/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server (with hot module replacement)
npm run dev

# 4. Typecheck TypeScript
npm run typecheck

# 5. Build for production
npm run build

# 6. Preview production build locally
npm run preview
```

---

## 📝 How to Update Content (Zero UI Code Knowledge Required)

All personal and technical content is isolated in `src/data/`. To update the website, simply edit the corresponding file:

### 1. How to Add a New Project (`src/data/projects.ts`)
Add a new object to the `projects` array:

```typescript
{
  id: 'new-security-tool',
  title: 'CloudGuard — Automated IAM Sentinel',
  shortTitle: 'CloudGuard',
  subtitle: 'Continuous Least-Privilege IAM Analysis Engine',
  category: 'Cloud & DevSecOps',
  year: '2026',
  status: 'Active Development',
  description: 'Audits AWS IAM policies for privilege escalation risks.',
  longDescription: 'Comprehensive architecture details, pipeline explanation, and threat model.',
  technologies: ['Python', 'AWS IAM', 'Boto3', 'Terraform'],
  highlights: [
    'Scans over 100+ IAM roles in under 30 seconds',
    'Synthesizes least-privilege replacement policies automatically'
  ],
  repositoryUrl: 'https://github.com/soms36-DefSec/CloudGuard',
  featured: true,
  badge: 'DevSecOps'
}
```

### 2. How to Add a New Skill (`src/data/skills.ts`)
Add to the `skills` array under any category (`Cloud & Infrastructure`, `Defensive Security & SOC`, `AI & ML Security`, `Systems & Languages`, `Databases & Protocols`):

```typescript
{
  name: 'eBPF / Cilium',
  category: 'Defensive Security & SOC',
  tag: 'Kernel Tracing',
  featured: true
}
```

### 3. How to Update the `/ NOW` Section (`src/data/current.ts`)
Modify active pursuits under `building`, `learning`, `exploring`, or `researching`:

```typescript
export const current = {
  building: [
    {
      title: 'InsiEDR Kernel Agent',
      desc: 'Writing low-level endpoint probes in Rust.',
      tag: 'Systems',
      link: 'https://github.com/soms36-DefSec/InsiEDR_agent'
    }
  ],
  learning: [ ... ],
  exploring: [ ... ],
  researching: [ ... ]
};
```

### 4. How to Add an Activity or CTF Event (`src/data/activities.ts`)
```typescript
{
  id: 'ctf-2026',
  title: 'National Cyber Defense CTF Finalist',
  organization: 'CyberPeace / MeitY',
  date: '2026',
  type: 'CTF & Defense',
  description: 'Solved endpoint forensics and security triage challenges.',
  tags: ['Forensics', 'CTF', 'SOC'],
  featured: true
}
```

### 5. How to Add a Certification (`src/data/certifications.ts`)
```typescript
{
  id: 'aws-sec-spec',
  name: 'AWS Certified Security - Specialty',
  issuer: 'Amazon Web Services',
  issueDate: '2026',
  credentialUrl: 'https://aws.amazon.com/...',
  status: 'Completed'
}
```

---

## 🌐 GitHub Pages Deployment

The repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Deployment Steps:
1. Ensure your repository is pushed to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete SOMS portfolio implementation"
   git push origin main
   ```
2. In your repository on GitHub:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Every push to `main` (or `master`) automatically runs:
   `npm ci` ➔ `npm run typecheck` ➔ `npm run build` ➔ `deploy to GitHub Pages`.
4. Your website will be live at `https://soms36-DefSec.github.io/My_Profile/` (or your custom domain).

---

## 🔒 Security & Privacy Best Practices
- **No API secrets or tokens** are included in client-side code.
- Public GitHub statistics use unauthenticated progressive enhancement with a built-in local cache fallback.
- No third-party tracking scripts or external bloat.
- Strict adherence to `prefers-reduced-motion` and WCAG AA contrast standards.
