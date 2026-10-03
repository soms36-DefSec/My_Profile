import { FocusArea } from '../types';

export const focusAreas: FocusArea[] = [
  {
    id: 'defensive-edr',
    number: '01',
    title: 'Endpoint Telemetry & EDR',
    subtitle: 'System sensors, event logging, and insider-threat detection',
    description:
      'Building lightweight telemetry sensors that capture process launches, network sockets, and file activity, backed by high-throughput ingestion in FastAPI and ClickHouse to detect lateral movement and exfiltration.',
    technologies: ['FastAPI', 'ClickHouse', 'PostgreSQL', 'Redis', 'AES-256-GCM', 'React 19'],
    capabilities: [
      'Endpoint event capture (process, network, file, logon)',
      'CERT insider-threat heuristic rule matching',
      'High-throughput analytics storage using ClickHouse',
      'Real-time alert streaming via Server-Sent Events',
    ],
  },
  {
    id: 'cloud-devsecops',
    number: '02',
    title: 'Cloud Defense & DevSecOps',
    subtitle: 'AWS hardening, policy-as-code, and automated CI/CD security',
    description:
      'Writing infrastructure as code with security built in from the start: least-privilege IAM roles, GuardDuty alerts, KMS encryption policies, and automated security checks in GitHub Actions.',
    technologies: ['AWS IAM & KMS', 'AWS GuardDuty', 'CloudTrail', 'Terraform', 'CloudFormation', 'GitHub Actions'],
    capabilities: [
      'Automated pipeline checks for secrets and misconfigurations',
      'Infrastructure provisioning using Terraform',
      'KMS key rotation and encryption enforcement',
      'Audit logging and account activity tracking',
    ],
  },
  {
    id: 'ai-llm-security',
    number: '03',
    title: 'AI & LLM Security Tools',
    subtitle: 'Analyzing cloud templates and synthesizing verified fixes',
    description:
      'Exploring how language models and retrieval systems can catch contextual security flaws that standard static linters miss, then generating accurate, human-reviewable patches for template files.',
    technologies: ['Python', 'Multi-Agent LLMs', 'RAG', 'AWS CloudFormation', 'Vector Embeddings'],
    capabilities: [
      'Context-aware detection across interconnected cloud resources',
      'RAG retrieval over AWS security documentation',
      'Automated patch generation with unified diffs',
      'Evaluating model reliability and prompt safety',
    ],
  },
  {
    id: 'ml-threat-analytics',
    number: '04',
    title: 'Behavioral Anomaly Detection',
    subtitle: 'Statistical outliers and temporal modeling for security data',
    description:
      'Applying machine learning to enterprise event data to separate routine activity from suspicious anomalies without relying exclusively on brittle static signatures.',
    technologies: ['Isolation Forest', 'XGBoost', 'Scikit-Learn', 'NumPy', 'ClickHouse SQL'],
    capabilities: [
      'Unsupervised outlier scoring for logon and device events',
      'Supervised classification for known threat patterns',
      'Multi-day temporal baseline evaluation',
      'Balancing detection sensitivity against false positives',
    ],
  },
];
