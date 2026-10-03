import { Profile } from '../types';

export const profile: Profile = {
  name: 'Someshwar S',
  displayName: 'Someshwar S',
  handle: 'SOMS',
  githubUsername: 'soms36-DefSec',
  title: 'Cloud & AI Security Professional • Systems & DevSecOps Builder',
  headline: 'SECURITY. SYSTEMS. AI. BUILDER.',
  subheadline: 'I design and build resilient systems at the intersection of endpoint telemetry, autonomous AI security, and modern cloud infrastructure.',
  status: {
    label: 'CURRENTLY BUILDING INSIEDR // RESEARCHING AI SECURITY',
    state: 'active',
    details: 'Funded under MeitY | Open for impactful security engineering & research opportunities',
  },
  location: {
    city: 'Tiruchirappalli',
    country: 'India',
    coordinates: '10.7905° N, 78.7047° E',
    timezone: 'Asia/Kolkata (UTC+5:30)',
  },
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'SASTRA University',
    period: '2023 – 2027',
    status: 'In Progress (Undergraduate)',
    notes: 'Focus on Distributed Systems, Cloud Security, Operating Systems & Applied AI',
  },
  email: 'someshsuresh007@gmail.com',
  summary: [
    'Undergraduate computer science engineer and defensive security builder focused on bridging the divide between low-level system telemetry, automated infrastructure, and intelligence-driven threat detection.',
    'Lead architect of InsiEDR (a MeitY-funded research & engineering initiative), crafting end-to-end Windows telemetry collection paired with a 4-tier hybrid ML analytical engine for insider threat and lateral movement identification.',
    'Researcher behind LLM-IaC-Security, constructing multi-agent LLM systems with Retrieval-Augmented Generation (RAG) to autonomously discover and remediate infrastructure-as-code misconfigurations in AWS CloudFormation.',
    'Project Lead and core member at the Association of Computing Engineers (ACE), actively organizing technical clusters, peer CTF challenges, and defensive engineering workshops.',
  ],
  stats: [
    { label: 'Primary Focus', value: 'Defensive Security', caption: 'Zero-Trust EDR & SOC Telemetry' },
    { label: 'Active Projects', value: '4+ Repos', caption: 'InsiEDR, LLM-IaC-Sec, TrackMe' },
    { label: 'Community Role', value: 'Project Lead', caption: 'ACE @ SASTRA University' },
    { label: 'Academic Period', value: '2023 – 2027', caption: 'B.Tech Computer Science' },
  ],
};
