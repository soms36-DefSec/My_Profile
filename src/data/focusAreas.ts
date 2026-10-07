import { FocusArea } from '../types';

export const focusAreas: FocusArea[] = [
  {
    id: 'defensive-edr',
    number: '01',
    title: 'Endpoint Telemetry & EDR Systems',
    subtitle: 'System sensors, 30+ telemetry logs, and insider-threat detection',
    description:
      'Engineering lightweight native endpoint telemetry sensors in Rust capturing process, network, and file activity with client-side AES-256-GCM encryption and offline SQLite spooling, backed by high-throughput ingestion in FastAPI and ClickHouse.',
    technologies: ['Rust', 'FastAPI', 'ClickHouse', 'PostgreSQL', 'Redis', 'AES-256-GCM', 'SQLite'],
    capabilities: [
      'Low-level endpoint telemetry collection across 30+ event channels',
      'Tamper-resistant local SQLite spooling with exponential backoff',
      'Client-side AES-256-GCM encrypted payload streaming',
      'High-throughput analytical log ingestion via ClickHouse',
    ],
  },
  {
    id: 'soc-detection',
    number: '02',
    title: 'Security Operations & Detection Engineering',
    subtitle: 'Alert correlation, behavioral threat heuristics, and incident triage',
    description:
      'Designing rule-based heuristics and behavioral correlation pipelines to aggregate security events, evaluate threat scores, reduce false positives, and coordinate rapid host containment response.',
    technologies: ['SOC Operations', 'Detection Engineering', 'Incident Response', 'Event Correlation', 'MITRE ATT&CK', 'Wireshark'],
    capabilities: [
      'Real-time incident triage and alert correlation across multi-source telemetry',
      'Deterministic CERT insider-threat heuristics and behavioral detection rules',
      'Fleet containment mechanisms: remote host network isolation & process termination',
      'Packet inspection and network artifact analysis using Wireshark and tcpdump',
    ],
  },
  {
    id: 'cloud-devsecops',
    number: '03',
    title: 'Cloud Defense & DevSecOps',
    subtitle: 'AWS hardening, Terraform IaC, and automated CI/CD security',
    description:
      'Writing Infrastructure as Code (IaC) with security built in from the start: least-privilege IAM roles, KMS cryptographic policies, container security, and automated security quality gates in GitHub Actions.',
    technologies: ['AWS IAM & KMS', 'Terraform', 'AWS VPC', 'Docker', 'Kubernetes', 'GitHub Actions'],
    capabilities: [
      'Automated pipeline quality gates for secrets and misconfiguration detection',
      'Resilient infrastructure provisioning and hardening using Terraform',
      'KMS key rotation and encryption enforcement across cloud services',
      'Audit logging, CloudTrail hygiene, and least-privilege IAM reviews',
    ],
  },
  {
    id: 'ai-iac-security',
    number: '04',
    title: 'Intelligent Cloud Security Tooling',
    subtitle: 'Multi-agent AI and RAG for automated cloud IaC remediation',
    description:
      'Building automated security tooling that leverages multi-agent AI frameworks grounded with Retrieval-Augmented Generation (RAG) to inspect Terraform and AWS CloudFormation templates and generate verified patch recommendations.',
    technologies: ['Python', 'AI Agents', 'RAG', 'Terraform', 'AWS CloudFormation', 'GitHub Actions'],
    capabilities: [
      'Context-aware vulnerability detection across interconnected cloud resources',
      'RAG grounding over AWS security documentation to eliminate false alarms',
      'Automated patch synthesis generating human-reviewable unified diffs',
      'Shift-left CI/CD integration to catch misconfigurations before deployment',
    ],
  },
];
