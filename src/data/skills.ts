import { Skill } from '../types';

export const skills: Skill[] = [
  // Cloud & Infrastructure
  { name: 'AWS (IAM, VPC, KMS, S3)', category: 'Cloud & Infrastructure', tag: 'Core Cloud', featured: true },
  { name: 'AWS GuardDuty & CloudTrail', category: 'Cloud & Infrastructure', tag: 'Cloud Sec', featured: true },
  { name: 'Terraform (IaC)', category: 'Cloud & Infrastructure', tag: 'IaC', featured: true },
  { name: 'CloudFormation', category: 'Cloud & Infrastructure', tag: 'IaC', featured: false },
  { name: 'Docker & Containerization', category: 'Cloud & Infrastructure', tag: 'DevOps', featured: true },
  { name: 'Linux / Unix Internals', category: 'Cloud & Infrastructure', tag: 'OS', featured: true },
  { name: 'GitHub Actions (CI/CD)', category: 'Cloud & Infrastructure', tag: 'DevSecOps', featured: true },

  // Defensive Security & SOC
  { name: 'EDR Architecture & Telemetry', category: 'Defensive Security & SOC', tag: 'Endpoint', featured: true },
  { name: 'Zero-Trust Architecture', category: 'Defensive Security & SOC', tag: 'Architecture', featured: true },
  { name: 'Threat Hunting & IOC Triaging', category: 'Defensive Security & SOC', tag: 'SOC', featured: true },
  { name: 'CERT Insider Threat Heuristics', category: 'Defensive Security & SOC', tag: 'Heuristics', featured: true },
  { name: 'Incident Response & Containment', category: 'Defensive Security & SOC', tag: 'IR', featured: false },
  { name: 'Cryptographic Protocols (AES-256-GCM / HPKE)', category: 'Defensive Security & SOC', tag: 'Crypto', featured: true },
  { name: 'SIEM & Audit Log Correlation', category: 'Defensive Security & SOC', tag: 'Telemetry', featured: false },

  // AI & ML Security
  { name: 'Multi-Agent LLM Orchestration', category: 'AI & ML Security', tag: 'LLM Agents', featured: true },
  { name: 'Retrieval-Augmented Generation (RAG)', category: 'AI & ML Security', tag: 'RAG', featured: true },
  { name: 'Isolation Forest (Anomaly Detection)', category: 'AI & ML Security', tag: 'ML Defense', featured: true },
  { name: 'XGBoost Classification', category: 'AI & ML Security', tag: 'ML Classifiers', featured: true },
  { name: 'Temporal Sequence Modeling (RedRVFL / LSTM)', category: 'AI & ML Security', tag: 'Time Series', featured: false },
  { name: 'AI Vulnerability Analysis & Safety', category: 'AI & ML Security', tag: 'AI Auditing', featured: false },

  // Systems & Languages
  { name: 'Python (FastAPI, AsyncIO, Scikit-Learn)', category: 'Systems & Languages', tag: 'Primary', featured: true },
  { name: 'TypeScript & JavaScript', category: 'Systems & Languages', tag: 'Frontend/Node', featured: true },
  { name: 'Rust (Systems & Telemetry Agents)', category: 'Systems & Languages', tag: 'Active Learning', featured: true },
  { name: 'Bash / POSIX Shell Scripting', category: 'Systems & Languages', tag: 'Scripting', featured: false },
  { name: 'C / C++ (Systems Foundations)', category: 'Systems & Languages', tag: 'Foundations', featured: false },

  // Databases & Protocols
  { name: 'PostgreSQL 16 (Relational & State)', category: 'Databases & Protocols', tag: 'OLTP', featured: true },
  { name: 'ClickHouse (High-Throughput Analytics)', category: 'Databases & Protocols', tag: 'OLAP / Logs', featured: true },
  { name: 'Redis (In-Memory Cache & Queues)', category: 'Databases & Protocols', tag: 'Cache', featured: true },
  { name: 'Server-Sent Events (SSE) & WebSockets', category: 'Databases & Protocols', tag: 'Streaming', featured: false },
  { name: 'REST & ASGI Protocols', category: 'Databases & Protocols', tag: 'APIs', featured: false },
];
