import { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: 'ctf-workshop-ace',
    title: 'Defensive Security & Packet Analysis Sessions',
    organization: 'Association of Computing Engineers (ACE)',
    date: '2024 – 2025',
    type: 'Workshop & Mentorship',
    description:
      'Conducted hands-on sessions for university peers on analyzing network packet captures with Wireshark, understanding common attack signatures, and solving introductory CTF challenges.',
    tags: ['Wireshark', 'Packet Analysis', 'CTF', 'Peer Workshop'],
    featured: true,
  },
  {
    id: 'meity-milestone-demo',
    title: 'InsiEDR Architecture Review & Demo',
    organization: 'MeitY Project Review',
    date: '2024',
    type: 'Technical Demonstration',
    description:
      'Presented the working architecture of the InsiEDR system, demonstrating Windows agent event collection, AES-256-GCM encryption, and baseline anomaly detection on the server.',
    tags: ['InsiEDR', 'Architecture Demo', 'Telemetry', 'MeitY'],
    featured: true,
  },
  {
    id: 'open-source-tooling',
    title: 'Open Source Security Scripting',
    organization: 'GitHub (@soms36-DefSec)',
    date: '2024 – Present',
    type: 'Open Source',
    description:
      'Publishing and maintaining small security utilities, automation scripts, and experimental prototypes on GitHub for personal testing and public use.',
    tags: ['Open Source', 'Python', 'DevSecOps', 'Scripting'],
    link: 'https://github.com/soms36-DefSec',
    featured: true,
  },
  {
    id: 'cloud-iac-security-lab',
    title: 'CloudFormation Security & IAM Policy Lab',
    organization: 'ACE Technical Sessions',
    date: '2025',
    type: 'Workshop & Mentorship',
    description:
      'Shared practical examples of catching over-privileged IAM roles and unsecured S3 buckets in CloudFormation templates before deployment.',
    tags: ['AWS IAM', 'CloudFormation', 'Policy Review'],
    featured: false,
  },
];
