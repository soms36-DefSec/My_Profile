import { Skill } from '../types';

export const skills: Skill[] = [
  // Defensive Security & SOC
  { name: 'Security Operations (SOC)', category: 'Defensive Security & SOC', tag: 'Core SOC', featured: true },
  { name: 'Detection Engineering', category: 'Defensive Security & SOC', tag: 'Detection', featured: true },
  { name: 'Incident Response & Containment', category: 'Defensive Security & SOC', tag: 'IR', featured: true },
  { name: 'EDR Architecture & Telemetry', category: 'Defensive Security & SOC', tag: 'Endpoint', featured: true },
  { name: 'Behavioral Analysis & Heuristics', category: 'Defensive Security & SOC', tag: 'Analysis', featured: true },
  { name: 'SIEM & Audit Log Correlation', category: 'Defensive Security & SOC', tag: 'Telemetry', featured: true },
  { name: 'Cryptographic Protocols (AES-256-GCM)', category: 'Defensive Security & SOC', tag: 'Crypto', featured: true },
  { name: 'Packet Analysis (Wireshark / tcpdump)', category: 'Defensive Security & SOC', tag: 'Network', featured: false },
  { name: 'Web Application Security', category: 'Defensive Security & SOC', tag: 'Web Sec', featured: false },

  // Cloud & Infrastructure
  { name: 'AWS (IAM, VPC, KMS, S3)', category: 'Cloud & Infrastructure', tag: 'Core Cloud', featured: true },
  { name: 'Terraform (IaC)', category: 'Cloud & Infrastructure', tag: 'IaC', featured: true },
  { name: 'AWS CloudFormation', category: 'Cloud & Infrastructure', tag: 'IaC', featured: false },
  { name: 'Docker & Containerization', category: 'Cloud & Infrastructure', tag: 'Containers', featured: true },
  { name: 'Kubernetes', category: 'Cloud & Infrastructure', tag: 'Orchestration', featured: false },
  { name: 'GitHub Actions (CI/CD)', category: 'Cloud & Infrastructure', tag: 'DevSecOps', featured: true },
  { name: 'Linux / Unix Internals', category: 'Cloud & Infrastructure', tag: 'OS', featured: true },

  // Systems & Languages
  { name: 'Python (FastAPI, AsyncIO)', category: 'Systems & Languages', tag: 'Primary', featured: true },
  { name: 'Rust (Systems & Telemetry Sensors)', category: 'Systems & Languages', tag: 'Systems', featured: true },
  { name: 'Bash / POSIX Shell Scripting', category: 'Systems & Languages', tag: 'Scripting', featured: true },
  { name: 'TypeScript & JavaScript', category: 'Systems & Languages', tag: 'Web/Node', featured: false },
  { name: 'React', category: 'Systems & Languages', tag: 'UI', featured: false },

  // AI & Security Tooling
  { name: 'AI Security Agents', category: 'AI & Security Tooling', tag: 'AI Agents', featured: true },
  { name: 'Retrieval-Augmented Generation (RAG)', category: 'AI & Security Tooling', tag: 'RAG', featured: true },
  { name: 'IaC Automated Patch Synthesis', category: 'AI & Security Tooling', tag: 'Automation', featured: true },
  { name: 'Multi-Agent Workflow Orchestration', category: 'AI & Security Tooling', tag: 'Workflows', featured: false },

  // Databases & Protocols
  { name: 'ClickHouse (High-Throughput Analytics)', category: 'Databases & Protocols', tag: 'OLAP / Logs', featured: true },
  { name: 'PostgreSQL (Relational State)', category: 'Databases & Protocols', tag: 'OLTP', featured: true },
  { name: 'Redis (In-Memory Cache & Queues)', category: 'Databases & Protocols', tag: 'Cache', featured: true },
  { name: 'SQLite (Offline Sensor Spooling)', category: 'Databases & Protocols', tag: 'Storage', featured: true },
  { name: 'Server-Sent Events (SSE) & WebSockets', category: 'Databases & Protocols', tag: 'Streaming', featured: false },
  { name: 'REST & ASGI Protocols', category: 'Databases & Protocols', tag: 'APIs', featured: false },
];
