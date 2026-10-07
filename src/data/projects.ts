import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'insiedr-platform',
    title: 'InsiEDR — Insider Threat Detection and Response System',
    shortTitle: 'InsiEDR',
    subtitle: 'Endpoint Telemetry Agent + Central Detection & Response Server',
    category: 'EDR & Systems',
    year: '2024 – Present',
    status: 'Active Development',
    description:
      'A specialized Insider Threat Detection and Response (EDR) system built to detect malicious insider activity, unauthorized data exfiltration, compromised credentials, and lateral movement in real time. Funded by MeitY (Ministry of Electronics and Information Technology).',
    longDescription:
      'InsiEDR (Insider Threat Detection and Response System) combines a native Windows endpoint telemetry sensor engineered in Rust with a high-throughput central server in FastAPI. The sensor captures 30+ telemetry logs, encrypts them client-side with AES-256-GCM, and spools them locally to SQLite with exponential backoff during network disconnections. The server correlates incoming event streams through deterministic CERT heuristics and behavioral analysis, utilizing PostgreSQL for state baselines and ClickHouse for high-FPS analytical queries. Real-time actionable alerts, host network isolation, and live process termination are managed through a centralized React 19 SOC dashboard via Server-Sent Events.',
    technologies: [
      'Rust',
      'Python',
      'FastAPI',
      'React 19',
      'TypeScript',
      'ClickHouse',
      'PostgreSQL',
      'Redis',
      'AES-256-GCM',
      'Docker',
      'SQLite',
    ],
    highlights: [
      'Funded project under MeitY (Ministry of Electronics and Information Technology)',
      'Native Windows agent in Rust collecting 30+ telemetry logs with AES-256-GCM encryption & SQLite spooling',
      'Dual-storage architecture: PostgreSQL for entity baselines, ClickHouse for high-speed event queries',
      'Behavioral correlation and rule-based heuristics engine for real-time threat triage',
      'Centralized fleet management: live process termination, host network isolation, and SSE alert streaming',
    ],
    architecture: {
      summary: 'High-throughput telemetry ingestion pipeline with dual-storage persistence and behavioral heuristic evaluation.',
      layers: [
        {
          name: 'Endpoints (Sensor)',
          items: ['InsiEDR-Agent (Windows / Rust)', '30+ Telemetry Logs', 'AES-256-GCM Encryption', 'Offline SQLite Queue'],
        },
        {
          name: 'Ingestion Layer',
          items: ['FastAPI ASGI Server', 'Replay Protection & Auth', 'Async Background Worker Queue'],
        },
        {
          name: 'Detection Pipeline',
          items: ['CERT Heuristics Engine', 'Behavioral Event Correlation', 'Unified Threat Scoring'],
        },
        {
          name: 'Storage & Streaming',
          items: ['PostgreSQL (Entities & State)', 'ClickHouse (High-FPS Analytics)', 'Server-Sent Events (SSE)'],
        },
        {
          name: 'SOC Analyst Console',
          items: ['React 19 + TypeScript', 'Fleet Control & Threat Graph', 'Live Process Termination & Host Isolation'],
        },
      ],
    },
    repositoryUrl: 'https://github.com/soms36-DefSec/InsiEDR_Server',
    featured: true,
    fundingNotice: 'Funded Project under MeitY (Ministry of Electronics and Information Technology)',
    badge: 'MeitY Funded',
  },
  {
    id: 'llm-iac-security',
    title: 'LLM-IaC-Security — Multi-Agent Cloud Template Scanner',
    shortTitle: 'LLM-IaC-Sec',
    subtitle: 'Context-Aware IaC Vulnerability Remediation for Terraform & CloudFormation',
    category: 'AI & LLM Security',
    year: '2024 – 2025',
    status: 'Active Development',
    description:
      'An intelligent cloud security scanning tool that analyzes Terraform and AWS CloudFormation templates for subtle architectural misconfigurations and generates ready-to-merge remediation patches.',
    longDescription:
      'Standard static linters inspect individual syntax lines, but frequently miss contextual flaws like over-privileged IAM trust policies or inter-resource dependencies across complex cloud stacks. LLM-IaC-Security parses template ASTs, retrieves security patterns using RAG indexed from AWS security documentation, and uses cooperative AI agent personas to verify findings and generate clean, human-reviewable unified diffs.',
    technologies: [
      'Python',
      'Terraform',
      'AWS CloudFormation',
      'RAG',
      'AI Agents',
      'GitHub Actions',
      'AST Parsing',
      'AWS IAM',
    ],
    highlights: [
      'Evaluates Terraform & AWS CloudFormation templates against security standards to eliminate misconfigurations',
      'Multi-agent AI workflow separating AST analysis, severity evaluation, and patch synthesis',
      'Retrieval-Augmented Generation referencing AWS Security Best Practices and NIST guidelines to eliminate false alarms',
      'Generates automated, verified unified diff patches integrated into CI/CD pipelines for shift-left defense',
    ],
    architecture: {
      summary: 'Template parsing and multi-agent evaluation pipeline with automated patch generation.',
      layers: [
        {
          name: 'Input Parsing',
          items: ['Terraform & CloudFormation', 'AST Graph Extraction', 'Resource Relationship Map'],
        },
        {
          name: 'Security Context',
          items: ['RAG Vector Store', 'AWS Security Guidelines', 'Threat Pattern Catalog'],
        },
        {
          name: 'Agent Evaluation',
          items: ['Audit Agent', 'Verification Agent', 'Patch Synthesis Agent'],
        },
        {
          name: 'Output',
          items: ['Structured Findings Report', 'Unified Diff Patch', 'Risk Explanation'],
        },
      ],
    },
    repositoryUrl: 'https://github.com/soms36-DefSec/llm-iac-security',
    featured: true,
    badge: 'Cloud IaC Security',
  },
  {
    id: 'trackme-telemetry',
    title: 'TrackMe — Activity & Telemetry Logger',
    shortTitle: 'TrackMe',
    subtitle: 'Lightweight Event Tracing & Serialization Utility',
    category: 'Tooling & Automation',
    year: '2024',
    status: 'Maintained',
    description:
      'A minimal TypeScript telemetry utility for structured event tracing, state tracking, and log aggregation with zero runtime dependencies.',
    longDescription:
      'TrackMe provides a type-safe event logging interface designed for minimal overhead. It supports pluggable transport sinks, clean payload validation, and deterministic serialization.',
    technologies: ['TypeScript', 'Node.js', 'Event Emitter', 'JSON Schema', 'Vite'],
    highlights: [
      'Strictly typed event contracts for consistent log emission',
      'Zero external runtime dependencies',
      'Pluggable sinks for local storage or remote streams',
    ],
    repositoryUrl: 'https://github.com/soms36-DefSec/TrackMe',
    featured: false,
    badge: 'TypeScript',
  },
  {
    id: 'my-scriptings-suite',
    title: 'My_Scriptings — Security & Automation Toolkit',
    shortTitle: 'Scriptings Suite',
    subtitle: 'Personal Automation, Reconnaissance & Testing Scripts',
    category: 'Tooling & Automation',
    year: '2024 – Present',
    status: 'Maintained',
    description:
      'A collection of standalone Python scripts for security testing workflows, network probing, log parsing, and routine automation.',
    longDescription:
      'A working repository of personal scripts built to automate lab setups, extract strings and hashes, probe local network ports, and streamline repetitive developer tasks.',
    technologies: ['Python', 'Bash / Shell', 'PowerShell', 'Regex', 'Network Sockets'],
    highlights: [
      'Quick automation utilities for security lab investigations',
      'Network probing and port verification tools',
      'Log and artifact formatting scripts',
    ],
    repositoryUrl: 'https://github.com/soms36-DefSec/My_Scriptings',
    featured: false,
    badge: 'Tooling',
  },
];
