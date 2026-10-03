import { JourneyItem } from '../types';

export const journey: JourneyItem[] = [
  {
    id: 'now-active',
    year: '2026',
    period: 'PRESENT',
    title: 'InsiEDR Telemetry & AI Security Research',
    organization: 'Independent Research / MeitY Project',
    category: 'Research',
    description:
      'Advancing high-throughput telemetry ingestion pipelines, low-level endpoint telemetry probes in Rust/Python, and evaluating multi-agent LLM frameworks for autonomous security defense.',
    highlights: [
      'Refining 4-tier ML threat classification pipeline (CERT heuristics + Isolation Forest + XGBoost)',
      'Benchmarking ClickHouse streaming query performance under simulated enterprise telemetry load',
      'Researching adversarial robustness in AI-assisted code remediation',
    ],
    current: true,
  },
  {
    id: 'insiedr-grant',
    year: '2024 – 2025',
    period: '2024 – 2025',
    title: 'InsiEDR Project Conception & MeitY Funding',
    organization: 'MeitY (Ministry of Electronics and Information Technology)',
    category: 'Milestone',
    description:
      'Conceived and designed the InsiEDR behavioral Zero-Trust platform to address insider threats and lateral movement. Awarded competitive project funding under MeitY to develop the prototype and telemetry agent.',
    highlights: [
      'Authored comprehensive system architecture specification and threat model',
      'Implemented AES-256-GCM / HPKE cryptographic telemetry transport layer',
      'Architected dual-storage backend using PostgreSQL and ClickHouse',
    ],
    link: 'https://github.com/soms36-DefSec/InsiEDR_Server',
  },
  {
    id: 'llm-iac-dev',
    year: '2024 – 2025',
    period: '2024 – 2025',
    title: 'LLM-IaC-Security Framework Authoring',
    organization: 'Open Source Security Research',
    category: 'Project',
    description:
      'Created an autonomous AI scanning framework for AWS CloudFormation templates. Integrated Retrieval-Augmented Generation (RAG) with multi-agent consensus to catch subtle cloud misconfigurations.',
    highlights: [
      'Implemented AST graph parsing to analyze multi-resource trust boundaries',
      'Created automated patch generation producing unified diffs for developers',
    ],
    link: 'https://github.com/soms36-DefSec/llm-iac-security',
  },
  {
    id: 'ace-leadership',
    year: '2024',
    period: '2024 – PRESENT',
    title: 'Project Lead & Core Member',
    organization: 'Association of Computing Engineers (ACE), SASTRA University',
    category: 'Leadership',
    description:
      'Appointed as Project Lead and core member of ACE. Mentoring peers in defensive security principles, organizing hands-on CTF competitions, and coordinating technical workstreams.',
    highlights: [
      'Conducted peer workshops on Linux internals, network defense, and basic reverse engineering',
      'Coordinated technical clusters and collaborative open-source builds',
    ],
  },
  {
    id: 'sastra-btech',
    year: '2023',
    period: '2023 – 2027',
    title: 'Commenced B.Tech in Computer Science & Engineering',
    organization: 'SASTRA University',
    category: 'Academics',
    description:
      'Began undergraduate engineering studies with dedicated focus on systems architecture, cloud computing, operating systems, networking protocols, and cyber defense.',
    highlights: [
      'Built strong core foundation in data structures, algorithms, and OS internals',
      'Initiated practical experimentation with Linux administration and AWS services',
    ],
  },
];
