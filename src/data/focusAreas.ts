import { FocusArea } from '../types';

export const focusAreas: FocusArea[] = [
  {
    id: 'defensive-edr',
    number: '01',
    title: 'Defensive Security & EDR',
    subtitle: 'Endpoint Telemetry, Zero-Trust Architecture & Malicious Actor Isolation',
    description:
      'Designing low-overhead endpoint telemetry sensors and central analysis backends that track granular process execution, network sockets, file modifications, and authentication events to detect unauthorized activity and lateral movement.',
    technologies: ['FastAPI', 'React 19', 'ClickHouse', 'PostgreSQL', 'Redis', 'AES-256-GCM / HPKE'],
    capabilities: [
      'Kernel & Userland Telemetry Ingestion (30+ Endpoint Metrics)',
      'Deterministic CERT Insider Threat Rule Heuristics',
      'Dual-Storage Engine (OLTP relational + OLAP analytical)',
      'Sub-second Threat Event Streaming via Server-Sent Events (SSE)',
    ],
  },
  {
    id: 'cloud-devsecops',
    number: '02',
    title: 'Cloud Defense & DevSecOps',
    subtitle: 'AWS Hardening, Immutable Infrastructure & Policy-as-Code',
    description:
      'Engineering security directly into deployment pipelines. Hardening AWS environments with least-privilege IAM architectures, GuardDuty threat detection, CloudTrail governance, and continuous infrastructure-as-code audits.',
    technologies: ['AWS IAM & KMS', 'AWS GuardDuty', 'CloudTrail', 'Terraform', 'CloudFormation', 'GitHub Actions'],
    capabilities: [
      'Automated CI/CD Security Gates & Secret Scanning',
      'Immutable Infrastructure Provisioning via Terraform',
      'Granular KMS Key Rotation and Encryption Policies',
      'Multi-Account AWS Governance and Threat Auditing',
    ],
  },
  {
    id: 'ai-llm-security',
    number: '03',
    title: 'AI & LLM Security Research',
    subtitle: 'Autonomous Vulnerability Detection, RAG Remediation & Multi-Agent Defense',
    description:
      'Developing AI systems capable of auditing complex software artifacts and cloud templates. Applying multi-agent coordination and domain-specific Retrieval-Augmented Generation (RAG) to uncover nuanced vulnerabilities and generate verified code fixes.',
    technologies: ['Multi-Agent LLMs', 'RAG Frameworks', 'Python', 'AWS CloudFormation', 'Vector Embeddings'],
    capabilities: [
      'Context-Aware IaC Misconfiguration Discovery',
      'Automated Vulnerability Patch Synthesis via RAG',
      'Adversarial Prompt Hardening & LLM Safety Evaluation',
      'Multi-Agent Consensus Verification Mechanisms',
    ],
  },
  {
    id: 'ml-threat-analytics',
    number: '04',
    title: 'Machine Learning for Threat Detection',
    subtitle: 'Unsupervised Outlier Isolation & Temporal Sequence Progression Modeling',
    description:
      'Applying applied machine learning to distinguish normal operational baselines from advanced persistent threats. Combining unsupervised anomaly isolation with supervised attack classifiers and temporal sequence modeling.',
    technologies: ['Isolation Forest', 'XGBoost', 'RedRVFL / LSTM', 'Scikit-Learn', 'NumPy'],
    capabilities: [
      'Domain Outlier Scoring across Logon, Device, and HTTP vectors',
      'Supervised CERT Scenario Classification (IP Theft, Sabotage, Exfiltration)',
      'Temporal Progression Tracking over Rolling Multi-day Windows',
      'Low False-Positive Composite Risk Scoring',
    ],
  },
];
