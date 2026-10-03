import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'insiedr-platform',
    title: 'InsiEDR — Behavior-Based Zero-Trust EDR Platform',
    shortTitle: 'InsiEDR Platform',
    subtitle: 'Endpoint Telemetry Sensor + Multi-Tier Machine Learning Detection Engine',
    category: 'EDR & Systems',
    year: '2024 – Present',
    status: 'Active Development',
    description:
      'A high-throughput, behavior-based endpoint telemetry and threat detection system engineered to uncover insider threats, lateral movement, unauthorized data staging, and exfiltration.',
    longDescription:
      'InsiEDR is engineered as a resilient dual-component security ecosystem: a lightweight Windows agent collecting 30+ granular telemetry channels encrypted with AES-256-GCM / HPKE, and a high-concurrency FastAPI/ClickHouse server. The analytics engine evaluates streaming data across a 4-tier pipeline: deterministic CERT heuristics, unsupervised Isolation Forest anomaly scoring, supervised XGBoost scenario classification, and RedRVFL temporal sequence modeling. Real-time fleet telemetry and threat graphs are pushed to a React 19 SOC dashboard via Server-Sent Events (SSE).',
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
      'Funded Project under MeitY (Ministry of Electronics and Information Technology)',
      '4-Tier hybrid detection pipeline blending CERT heuristics with unsupervised & supervised ML',
      'Dual-storage database engine: PostgreSQL 16 (state & entities) + ClickHouse (OLAP analytics)',
      'Lightweight client telemetry encrypted using AES-256-GCM and HPKE',
      'High-throughput asynchronous ingestion pipeline with 8x background task workers',
      'Real-time SOC analyst dashboard streaming live fleet KPIs and temporal risk graphs via SSE',
    ],
    architecture: {
      summary: 'High-concurrency streaming telemetry ingestion with dual-storage persistence and 4-tier ML evaluation.',
      layers: [
        {
          name: 'Endpoints (Agent)',
          items: ['InsiEDR-Agent (Windows Sensor)', '30+ Telemetry Collectors', 'AES-256-GCM / HPKE Payloads'],
        },
        {
          name: 'Ingestion & Decryption',
          items: ['FastAPI ASGI Server', 'Replay Protection & Auth', 'Durable Worker Task Queue (8x Workers)'],
        },
        {
          name: 'Detection Engine',
          items: ['Deterministic CERT Rules', 'Isolation Forest (Outlier Scoring)', 'XGBoost (Threat Classification)', 'RedRVFL Sequence Modeler'],
        },
        {
          name: 'Storage & Stream',
          items: ['PostgreSQL 16 (Baselines & State)', 'ClickHouse (High-FPS Telemetry)', 'Reactive SSE Stream (/api/v1/stream/sse)'],
        },
        {
          name: 'SOC Analyst Console',
          items: ['React 19 + Vite Dashboard', 'Fleet KPIs & Threat Graph', 'High-FPS Virtualized Event Logs'],
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
    title: 'LLM-IaC-Security — Multi-Agent Cloud Vulnerability Scanner',
    shortTitle: 'LLM-IaC-Sec',
    subtitle: 'Context-Aware CloudFormation Security Auditing & Automated Remediation via RAG',
    category: 'AI & LLM Security',
    year: '2024 – 2025',
    status: 'Active Development',
    description:
      'An AI-powered security scanning system that automatically detects and synthesizes verifiable remediations for subtle, multi-resource vulnerabilities in AWS CloudFormation (IaC) templates.',
    longDescription:
      'While standard static analysis tools inspect explicit syntax rules, they frequently overlook contextual flaws, inter-resource permissions, and complex IAM role trust relationships. LLM-IaC-Security combines Large Language Models, Retrieval-Augmented Generation (RAG), and a multi-agent framework to evaluate infrastructure templates holistically. Agents specialize in template parsing, threat-vector cross-referencing, risk scoring, and synthesizing validated, secure code patches with automated diffs.',
    technologies: [
      'Python',
      'Multi-Agent LLMs',
      'RAG',
      'AWS CloudFormation',
      'Vector Search',
      'Static Analysis',
      'AST Parsing',
      'AWS IAM',
    ],
    highlights: [
      'Discovers context-specific misconfigurations across interconnected cloud resources that traditional SAST tools miss',
      'Multi-agent pipeline separating AST parsing, security context evaluation, and patch synthesis',
      'RAG vector database indexed with AWS Security Best Practices and NIST cloud guidelines',
      'Generates automated, verified CloudFormation remediation diffs ready for review and pull requests',
    ],
    architecture: {
      summary: 'Multi-agent orchestration pipeline analyzing CloudFormation ASTs against embedded cloud threat intelligence.',
      layers: [
        {
          name: 'Input Layer',
          items: ['CloudFormation (YAML/JSON)', 'AST Parser & Graph Extractor', 'Resource Dependency Normalizer'],
        },
        {
          name: 'Intelligence Context',
          items: ['Vector Store (AWS Security Specs)', 'RAG Retrieval Engine', 'Threat Pattern Index'],
        },
        {
          name: 'Multi-Agent Core',
          items: ['Security Auditor Agent', 'Risk Verification Agent', 'Patch Synthesis Agent'],
        },
        {
          name: 'Output & Action',
          items: ['Structured Findings Report', 'Unified Diff Patch', 'Severity Matrix & Explanations'],
        },
      ],
    },
    repositoryUrl: 'https://github.com/soms36-DefSec/llm-iac-security',
    featured: true,
    badge: 'AI Security',
  },
  {
    id: 'trackme-telemetry',
    title: 'TrackMe — Lightweight Activity & Telemetry Logger',
    shortTitle: 'TrackMe',
    subtitle: 'Modular Event Tracing & Telemetry Serialization Utility',
    category: 'Tooling & Automation',
    year: '2024',
    status: 'Maintained',
    description:
      'A structured TypeScript telemetry utility designed for reliable event tracing, state tracking, and serialized log aggregation across web and node runtimes.',
    longDescription:
      'TrackMe provides an unobtrusive, type-safe telemetry client that captures events with minimal performance overhead. It supports pluggable transports, payload encryption, and clean schema serialization, demonstrating core telemetry concepts implemented in TypeScript.',
    technologies: ['TypeScript', 'Node.js', 'Event Emitter', 'JSON Schema', 'Vite'],
    highlights: [
      'Strictly typed event contracts preventing malformed telemetry emission',
      'Lightweight footprint with zero external runtime dependencies',
      'Configurable sink handlers for local storage and remote stream endpoints',
    ],
    repositoryUrl: 'https://github.com/soms36-DefSec/TrackMe',
    featured: false,
    badge: 'TypeScript',
  },
  {
    id: 'my-scriptings-suite',
    title: 'My_Scriptings — Security & Automation Toolkit',
    shortTitle: 'Scriptings Suite',
    subtitle: 'Personal Automation, Reconnaissance & Security Prototyping Utilities',
    category: 'Tooling & Automation',
    year: '2024 – Present',
    status: 'Maintained',
    description:
      'A collection of purpose-built Python utilities engineered to optimize security testing workflows, automate repetitive system tasks, and parse forensic artifacts.',
    longDescription:
      'A living repository of custom automation scripts developed for penetration testing lab workflows, OSINT data formatting, file analysis, and developer environment productivity. Each utility is designed for standalone, deterministic execution.',
    technologies: ['Python', 'Bash / Shell', 'PowerShell', 'Regex', 'Network Sockets', 'OSINT APIs'],
    highlights: [
      'Tailored automation modules for rapid security prototyping',
      'Network probing and port state verification utilities',
      'Automated log and artifact parsing scripts for investigation labs',
    ],
    repositoryUrl: 'https://github.com/soms36-DefSec/My_Scriptings',
    featured: false,
    badge: 'Tooling',
  },
];
