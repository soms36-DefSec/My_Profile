import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'insiedr-platform',
    title: 'InsiEDR — Zero-Trust Endpoint Detection Platform',
    shortTitle: 'InsiEDR',
    subtitle: 'Endpoint Telemetry Agent + Hybrid ML Detection Server',
    category: 'EDR & Systems',
    year: '2024 – Present',
    status: 'Active Development',
    description:
      'A behavior-based endpoint telemetry and threat detection platform built to detect insider threats, lateral movement, and data exfiltration. Funded by MeitY (Ministry of Electronics and Information Technology).',
    longDescription:
      'InsiEDR combines an endpoint sensor with a high-throughput central server. The Windows agent collects 30+ telemetry metrics, encrypts them client-side with AES-256-GCM, and streams them to a FastAPI ingestion pipeline. Telemetry is evaluated across a 4-tier pipeline: deterministic CERT insider threat rules, Isolation Forest for unsupervised outlier scoring, XGBoost for scenario attribution, and temporal sequence modeling. Relational state is stored in PostgreSQL while ClickHouse handles high-FPS analytical queries, pushing live alerts to a React 19 dashboard via Server-Sent Events.',
    technologies: [
      'Python',
      'FastAPI',
      'React 19',
      'TypeScript',
      'ClickHouse',
      'PostgreSQL',
      'Redis',
      'Isolation Forest',
      'XGBoost',
      'AES-256-GCM',
      'Docker',
    ],
    highlights: [
      'Funded project under MeitY (Ministry of Electronics and Information Technology)',
      'Windows agent collecting 30+ telemetry metrics with AES-256-GCM encryption',
      'Dual-storage architecture: PostgreSQL for state & baselines, ClickHouse for high-speed event queries',
      '4-tier detection pipeline combining CERT heuristics with unsupervised & supervised ML',
      'Real-time alert streaming to a React 19 SOC analyst console via Server-Sent Events (SSE)',
    ],
    architecture: {
      summary: 'High-throughput telemetry ingestion pipeline with dual-storage persistence and hybrid ML evaluation.',
      layers: [
        {
          name: 'Endpoints (Sensor)',
          items: ['InsiEDR-Agent (Windows)', '30+ Telemetry Metrics', 'AES-256-GCM Encrypted Payloads'],
        },
        {
          name: 'Ingestion Layer',
          items: ['FastAPI ASGI Server', 'Replay Protection & Auth', '8x Background Worker Queue'],
        },
        {
          name: 'Detection Pipeline',
          items: ['CERT Heuristics Engine', 'Isolation Forest (Outlier Scoring)', 'XGBoost (Threat Classification)', 'Temporal Sequence Modeler'],
        },
        {
          name: 'Storage & Streaming',
          items: ['PostgreSQL (Entities & State)', 'ClickHouse (High-FPS Analytics)', 'Server-Sent Events (SSE)'],
        },
        {
          name: 'SOC Analyst Console',
          items: ['React 19 + TypeScript', 'Fleet KPIs & Threat Graph', 'Live Virtualized Event Log'],
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
    subtitle: 'Context-Aware CloudFormation Security Auditing & Automated Fixes',
    category: 'AI & LLM Security',
    year: '2024 – 2025',
    status: 'Active Development',
    description:
      'An AI-assisted security scanning tool that analyzes AWS CloudFormation templates for subtle architectural misconfigurations and generates ready-to-merge remediation patches.',
    longDescription:
      'Standard static linters usually inspect individual syntax lines, but frequently miss contextual flaws like over-privileged IAM trust policies or inter-resource dependencies across complex stacks. LLM-IaC-Security parses template ASTs, retrieves security patterns using RAG indexed from AWS security documentation, and uses cooperative agent personas to verify findings and generate clean, human-reviewable unified diffs.',
    technologies: [
      'Python',
      'Multi-Agent LLMs',
      'RAG',
      'AWS CloudFormation',
      'Vector Search',
      'AST Parsing',
      'AWS IAM',
    ],
    highlights: [
      'Finds contextual misconfigurations across coupled resources that syntax-only linters miss',
      'Multi-agent workflow separating AST analysis, severity evaluation, and patch synthesis',
      'Retrieval-Augmented Generation referencing AWS Security Best Practices and NIST guidelines',
      'Generates automated, verified unified diff patches for misconfigured IAM and VPC resources',
    ],
    architecture: {
      summary: 'Template parsing and multi-agent evaluation pipeline with automated patch generation.',
      layers: [
        {
          name: 'Input Parsing',
          items: ['CloudFormation (YAML/JSON)', 'AST Graph Extraction', 'Resource Relationship Map'],
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
    badge: 'AI Security',
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
