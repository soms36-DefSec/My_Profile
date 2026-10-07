import { HiringOverview } from '../types';

export const hiringData: HiringOverview = {
  availability: 'Actively Available for Security Roles & Internships',
  engagementTypes: [
    'Full-Time Roles (Graduating 2027, B.Tech CSE @ SASTRA)',
    'Security Engineering Internships (2025–2026)',
    'SOC Engineering & Systems Building',
    'Cloud Security & DevSecOps Implementation',
  ],
  roles: [
    {
      id: 'soc-engineering',
      title: 'SOC Engineering',
      scope: 'Detection Engineering, Telemetry Pipelines & EDR Tooling',
      description:
        'Architecting, building, and deploying end-to-end security telemetry pipelines, high-throughput event ingestion (ClickHouse / FastAPI), and custom behavioral detection heuristics.',
      capabilities: [
        'Custom EDR/Sensor integration and Windows event telemetry pipelines',
        'High-FPS analytical log storage design with ClickHouse, Redis, and PostgreSQL',
        'Engineering custom detection rules, CERT insider-threat heuristics, and MITRE ATT&CK mappings',
        'Real-time streaming alert infrastructure via Server-Sent Events (SSE) and WebSockets',
      ],
      tools: ['Python', 'Rust', 'ClickHouse', 'PostgreSQL', 'FastAPI', 'Redis', 'Docker', 'AES-256-GCM'],
    },
    {
      id: 'soc-analyst',
      title: 'SOC Analyst',
      scope: 'Alert Triaging, Event Correlation, Incident Handling & Packet Analysis',
      description:
        'Triaging incoming security alerts, distinguishing benign anomalies from active threats, correlating multi-source event logs, and coordinating rapid containment response.',
      capabilities: [
        'L1/L2 security incident investigation, triage playbooks, and false-positive reduction',
        'Network packet capture analysis (pcap inspection with Wireshark and tcpdump)',
        'Host-level artifact analysis (Windows Event Logs, Linux auth logs, bash histories)',
        'Structured incident documentation, timeline reconstruction, and containment guidance',
      ],
      tools: ['Wireshark', 'Tcpdump', 'Linux / Windows Logs', 'MITRE ATT&CK', 'Network Sockets', 'Incident Documentation'],
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security',
      scope: 'AWS Infrastructure Hardening, IAM Least-Privilege & Posture Review',
      description:
        'Hardening cloud workloads, auditing IAM trust policies, configuring cryptographic KMS protections, and establishing proactive cloud defense.',
      capabilities: [
        'AWS IAM policy auditing, cross-account trust analysis, and privilege minimization',
        'VPC network segmentation, security groups, and egress traffic inspection',
        'KMS envelope encryption, S3 bucket security policies, and secrets management',
        'CloudTrail logging hygiene, GuardDuty threat detection, and anomaly alerts',
      ],
      tools: ['AWS IAM', 'AWS KMS', 'AWS VPC', 'CloudTrail', 'GuardDuty', 'S3 Security', 'AWS CLI'],
    },
    {
      id: 'devsecops',
      title: 'DevSecOps',
      scope: 'CI/CD Security Automation, IaC Auditing & Policy as Code',
      description:
        'Integrating automated security checks into modern developer workflows, enforcing Infrastructure as Code (IaC) guardrails, and preventing vulnerabilities before deployment.',
      capabilities: [
        'Automated IaC template scanning and AST analysis for AWS CloudFormation and Terraform',
        'Building GitHub Actions CI/CD security quality gates, pre-commit hooks, and linter enforcement',
        'Container image scanning, secret detection, and dependency supply-chain auditing',
        'Automated remediation patch synthesis using AST transforms and policy validation',
      ],
      tools: ['GitHub Actions', 'Terraform', 'CloudFormation', 'Python', 'Docker', 'Kubernetes', 'AST Parsing'],
    },
  ],
};
