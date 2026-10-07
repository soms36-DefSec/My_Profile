import { JourneyItem } from '../types';

export const journey: JourneyItem[] = [
  {
    id: 'shankara-internship',
    year: '2024 – PRESENT',
    period: '2024 – PRESENT',
    title: 'SOC and Detection Engineer Intern',
    organization: 'Shankara Cognisec LLP',
    category: 'Experience',
    description:
      'Engineered a full-stack Endpoint Detection and Response (EDR) framework and tamper-resistant endpoint agent. Captured low-level process, network, and system telemetry with local encryption and offline spooling. Developed server-side correlation pipelines using rule-based heuristics and behavioral analysis for real-time triage.',
    highlights: [
      'Engineered full-stack EDR framework & tamper-resistant endpoint agent',
      'Captured 30+ telemetry logs with AES-256-GCM local encryption & offline SQLite spooling',
      'Built server-side correlation pipelines using rule-based heuristics & behavioral analysis for real-time SOC alerting',
    ],
    current: true,
  },
  {
    id: 'hilife-internship',
    year: '2024',
    period: '2024',
    title: 'Full Stack Development Intern',
    organization: 'Hilife.ai Pvt Ltd',
    category: 'Experience',
    description:
      'Contributed to full-stack web development by designing responsive user interfaces using React and TypeScript, and building scalable backend APIs with FastAPI. Handled database workflows and system integrations to deliver seamless end-to-end functionality.',
    highlights: [
      'Designed responsive frontend user interfaces with React and TypeScript',
      'Built high-performance backend microservices and REST APIs with FastAPI',
      'Handled database workflows and schema design with PostgreSQL and ClickHouse',
    ],
  },
  {
    id: 'insiedr-grant',
    year: '2024 – 2025',
    period: '2024 – 2025',
    title: 'MeitY Research & Development Funding for InsiEDR',
    organization: 'Ministry of Electronics and Information Technology (MeitY)',
    category: 'Milestone',
    description:
      'Awarded competitive government project funding for the research, design, and implementation of InsiEDR—an Insider Threat Detection and Response System to detect insider risks and compromised identities.',
    highlights: [
      'Authored initial threat model and system architecture specifications',
      'Engineered native Windows sensor in Rust with AES-256-GCM encryption & SQLite spooling',
      'Implemented dual-storage analytics server using PostgreSQL and ClickHouse',
    ],
    link: 'https://github.com/soms36-DefSec/InsiEDR_Server',
  },
  {
    id: 'llm-iac-dev',
    year: '2024 – 2025',
    period: '2024 – 2025',
    title: 'Built LLM-IaC-Security',
    organization: 'Open Source Cloud Security Project',
    category: 'Project',
    description:
      'Created an intelligent cloud security tool powered by AI Agents and RAG to accurately detect and remediate vulnerabilities in Infrastructure-as-Code (Terraform & AWS CloudFormation). Integrated into CI/CD pipelines for proactive pre-deployment defense.',
    highlights: [
      'Parsed template ASTs to map relationships between IAM roles and cloud resources',
      'Grounded AI agent analysis with RAG to eliminate false alarms and synthesize automated fix diffs',
    ],
    link: 'https://github.com/soms36-DefSec/llm-iac-security',
  },
  {
    id: 'ace-leadership',
    year: '2024 – PRESENT',
    period: '2024 – PRESENT',
    title: 'Project Lead & Core Member',
    organization: 'Association of Computing Engineers (ACE), SASTRA University',
    category: 'Leadership',
    description:
      'Directed cross-functional operations across 7 technical and 4 non-technical teams to plan and execute technical workshops, lectures, and flagship events. Concurrently contributed as a Cybersecurity Team Member, driving hands-on security workshops, lectures, and technical project initiatives.',
    highlights: [
      'Directing operations across 7 technical teams and 4 non-technical teams',
      'Actively driving cybersecurity workshops on packet analysis, defensive security, and CTFs',
      'Mentoring student cohorts in systems programming, Linux internals, and web/app architectures',
    ],
    link: 'https://ace-sastra.vercel.app/',
  },
  {
    id: 'sastra-btech',
    year: '2023 – 2027',
    period: '2023 – 2027',
    title: 'Started B.Tech in Computer Science & Engineering',
    organization: 'SASTRA University',
    category: 'Academics',
    description:
      'Began undergraduate studies in CSE with a focus on computer systems, networking protocols, operating systems, and cybersecurity fundamentals.',
    highlights: [
      'Core coursework in data structures, algorithms, and system architecture',
      'Hands-on experimentation with Linux systems, networking, and AWS cloud environments',
    ],
  },
];
