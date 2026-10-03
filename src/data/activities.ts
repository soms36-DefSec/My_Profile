import { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: 'ctf-workshop-ace',
    title: 'Defensive Security & CTF Bootcamps',
    organization: 'Association of Computing Engineers (ACE)',
    date: '2024 – 2025',
    type: 'Workshop & Mentorship',
    description:
      'Designed and delivered interactive workshops for university peers on log analysis, network packet dissection with Wireshark, basic reverse engineering, and defensive threat triage.',
    tags: ['CTF', 'Threat Analysis', 'Wireshark', 'Mentorship'],
    featured: true,
  },
  {
    id: 'meity-milestone-demo',
    title: 'InsiEDR Architecture Technical Demonstration',
    organization: 'MeitY Project Review',
    date: '2024',
    type: 'Technical Demonstration',
    description:
      'Presented end-to-end architecture demonstration of InsiEDR platform, highlighting real-time Windows agent telemetry ingestion, AES-256 encryption, and multi-tier anomaly detection pipeline.',
    tags: ['EDR', 'Architecture Demo', 'Telemetry', 'MeitY'],
    featured: true,
  },
  {
    id: 'open-source-tooling',
    title: 'Open Source Security Tooling & Scripting Labs',
    organization: 'soms36-DefSec GitHub Labs',
    date: '2024 – Present',
    type: 'Open Source',
    description:
      'Published and actively maintain open-source security utilities, automation scripts, and experimental multi-agent AI scanning prototypes for the broader engineering community.',
    tags: ['Open Source', 'Python', 'DevSecOps', 'Automation'],
    link: 'https://github.com/soms36-DefSec',
    featured: true,
  },
  {
    id: 'cloud-iac-security-lab',
    title: 'CloudFormation Security & Policy-as-Code Demonstrations',
    organization: 'ACE Technical Clusters',
    date: '2025',
    type: 'Workshop & Mentorship',
    description:
      'Conducted peer demonstration on detecting IAM over-permissioning and insecure VPC configurations using automated rule engines and LLM-assisted code audits.',
    tags: ['AWS IAM', 'CloudFormation', 'DevSecOps', 'Policy as Code'],
    featured: false,
  },
];
