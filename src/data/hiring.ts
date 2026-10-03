import { HiringOverview } from '../types';

export const hiringData: HiringOverview = {
  availability: 'Actively Available for Independent Contracts & Roles',
  freelanceStatement:
    'OPEN FOR FREELANCE & CONTRACT ENGAGEMENTS: Available for project-based SOC engineering, custom telemetry pipelines, DevSecOps automation, and cloud security audits.',
  engagementTypes: [
    'Freelance & Contract Work (Direct / Retainer)',
    'Independent Security Tooling & Architecture',
    'Internships (Spring / Summer / Fall 2025–2026)',
    'Full-Time Roles (Graduating 2027, B.Tech CSE @ SASTRA)',
  ],
  roles: [
    {
      id: 'soc-engineering',
      title: 'SOC Engineering',
      scope: 'Detection Engineering, Telemetry Pipelines & SIEM/EDR Tooling',
      description:
        'Architecting, building, and deploying end-to-end security telemetry pipelines, high-throughput event ingestion (ClickHouse / FastAPI), and custom behavioral detection heuristics.',
      capabilities: [
        'Custom EDR/Sensor integration and Windows/Linux event telemetry pipelines',
        'High-FPS analytical log storage design with ClickHouse, Redis, and PostgreSQL',
        'Engineering custom Sigma rules, CERT insider-threat heuristics, and MITRE ATT&CK mappings',
        'Real-time streaming alert infrastructure via Server-Sent Events (SSE) and WebSockets',
      ],
      tools: ['Python', 'ClickHouse', 'PostgreSQL', 'FastAPI', 'Redis', 'Docker', 'Sigma Rules', 'AES-256-GCM'],
      freelanceFocus: 'Available for freelance architecture, custom sensor buildouts, and detection pipeline design.',
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
      tools: ['GitHub Actions', 'Terraform', 'CloudFormation', 'Python', 'Docker', 'Trivy / Semgrep', 'AST Parsing'],
      freelanceFocus: 'Available for freelance CI/CD security audit setups and automated IaC pipeline enforcement.',
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
      freelanceFocus: 'Available for freelance AWS infrastructure security assessments and IAM policy reviews.',
    },
    {
      id: 'threat-hunting',
      title: 'Threat Hunting',
      scope: 'Proactive Telemetry Analysis, Behavioral Anomalies & IOC Investigation',
      description:
        'Conducting hypothesis-driven hunts through system logs and endpoint telemetry to uncover stealthy lateral movement, credential abuse, and evasion tactics.',
      capabilities: [
        'Hypothesis formulation based on threat intelligence and adversary TTPs',
        'Process lineage inspection, parent-child anomaly detection, and memory injection traces',
        'Unsupervised outlier detection using Isolation Forest on baseline endpoint activity',
        'Correlating distributed log events to uncover persistence and privilege escalation',
      ],
      tools: ['MITRE ATT&CK', 'Sysmon / ETW', 'Isolation Forest', 'Wireshark', 'Python Pandas', 'SQL / ClickHouse'],
      freelanceFocus: 'Available for freelance telemetry analysis, behavioral hunting playbooks, and log audits.',
    },
    {
      id: 'soc-analyst',
      title: 'SOC Analyst',
      scope: 'Alert Triaging, Event Correlation, Incident Handling & Packet Analysis',
      description:
        'Triaging incoming security alerts, distinguishing benign anomalies from active attacks, correlating multi-source event logs, and coordinating rapid containment response.',
      capabilities: [
        'L1/L2 security incident investigation, triage playbooks, and false-positive reduction',
        'Network packet capture analysis (pcap inspection with Wireshark and tcpdump)',
        'Host-level artifact analysis (Windows Event Logs, Linux auth logs, bash histories)',
        'Structured incident documentation, timeline reconstruction, and remediation guidance',
      ],
      tools: ['Wireshark', 'Tcpdump', 'Linux / Windows Logs', 'Network Sockets', 'Incident Documentation'],
      freelanceFocus: 'Available for contract alert triaging, SOC shift coverage, and packet analysis deep-dives.',
    },
  ],
};
