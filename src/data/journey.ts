import { JourneyItem } from '../types';

export const journey: JourneyItem[] = [
  {
    id: 'now-active',
    year: '2026',
    period: 'PRESENT',
    title: 'InsiEDR Telemetry & Systems Work',
    organization: 'Independent Project / MeitY Funded',
    category: 'Project',
    description:
      'Refining endpoint telemetry collection, writing low-level sensor components, and testing ClickHouse ingestion under heavy synthetic event loads.',
    highlights: [
      'Testing CERT heuristic rules alongside Isolation Forest anomaly models',
      'Experimenting with Rust for memory-safe sensor components',
      'Improving backend ingestion throughput in FastAPI and ClickHouse',
    ],
    current: true,
  },
  {
    id: 'insiedr-grant',
    year: '2024 – 2025',
    period: '2024 – 2025',
    title: 'MeitY Project Funding for InsiEDR',
    organization: 'Ministry of Electronics and Information Technology (MeitY)',
    category: 'Milestone',
    description:
      'Submitted architecture proposal for InsiEDR to address insider threats and lateral movement. Awarded government project funding to build the prototype sensor and analytics server.',
    highlights: [
      'Wrote initial threat model and architecture specifications',
      'Implemented AES-256-GCM encrypted telemetry transport',
      'Set up dual-storage backend using PostgreSQL and ClickHouse',
    ],
    link: 'https://github.com/soms36-DefSec/InsiEDR_Server',
  },
  {
    id: 'llm-iac-dev',
    year: '2024 – 2025',
    period: '2024 – 2025',
    title: 'Built LLM-IaC-Security',
    organization: 'Open Source Project',
    category: 'Project',
    description:
      'Created an AI-assisted scanner for AWS CloudFormation templates using Python and RAG to find architectural misconfigurations that standard static tools overlook.',
    highlights: [
      'Parsed template ASTs to map relationships between IAM roles and cloud resources',
      'Generated unified diff patches for rapid developer review',
    ],
    link: 'https://github.com/soms36-DefSec/llm-iac-security',
  },
  {
    id: 'ace-leadership',
    year: '2024',
    period: '2024 – PRESENT',
    title: 'Lead of Technical & Non-Technical Operations',
    organization: 'Association of Computing Engineers (ACE), SASTRA University',
    category: 'Leadership',
    description:
      'Appointed to lead cross-functional operations across 350+ active student members. Driving technical project architectures alongside non-technical creative design, event planning, and symposium organizing.',
    highlights: [
      'Managing 5 specialized engineering teams: Cybersecurity, Networks, IoT, App Dev, and Web Dev',
      'Leading both technical workshop execution and creative design & event organizing for campus tech initiatives',
      'Mentoring junior cohorts in network packet analysis, CTF challenges, Linux internals, and web/app architectures',
    ],
  },
  {
    id: 'sastra-btech',
    year: '2023',
    period: '2023 – 2027',
    title: 'Started B.Tech in Computer Science & Engineering',
    organization: 'SASTRA University',
    category: 'Academics',
    description:
      'Began undergraduate studies in CSE with a focus on computer systems, networking protocols, operating systems, and cybersecurity fundamentals.',
    highlights: [
      'Core coursework in data structures, algorithms, and system architecture',
      'Started hands-on experimentation with Linux and AWS environments',
    ],
  },
];
