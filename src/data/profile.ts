import { Profile } from '../types';

export const profile: Profile = {
  name: 'Someshwar S',
  displayName: 'Someshwar S',
  handle: 'SOMS',
  githubUsername: 'soms36-DefSec',
  title: 'SOC Analyst & Detection Engineer',
  headline: 'SOC Analyst & Detection Engineer defending systems with telemetry pipelines and cloud defense.',
  subheadline: 'Computer Science undergraduate at SASTRA University (\'27) with hands-on experience in Security Operations (SOC) and Detection Engineering. Specializing in threat detection, telemetry pipelines, incident response, and cloud defense.',
  status: {
    label: 'Available for Hire & Freelance Contracts',
    state: 'active',
    details: 'Open for Freelance Security Projects, SOC Engineering, Incident Response, DevSecOps, and Internships.',
  },
  location: {
    city: 'Tiruchirappalli',
    country: 'India',
    coordinates: '10.79° N, 78.70° E',
    timezone: 'IST (UTC+5:30)',
  },
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'SASTRA University',
    period: '2023 – 2027',
    status: 'Undergraduate',
    notes: 'Focus on Operating Systems, Networks, Cloud Security, and Systems Programming',
  },
  email: 'someshsuresh0306@gmail.com',
  summary: [
    "I'm an undergraduate studying Computer Science & Engineering at SASTRA University in Tamil Nadu, India ('27) with hands-on experience in Security Operations (SOC) and Detection Engineering. I focus on low-level telemetry ingestion, behavioral heuristics, and rapid incident triage.",
    "My primary active project is InsiEDR, an Insider Threat Detection and Response System funded by MeitY (Ministry of Electronics and Information Technology). It pairs a native Windows endpoint telemetry sensor engineered in Rust (capturing 30+ telemetry logs with AES-256-GCM encryption) with a high-throughput central server in FastAPI and ClickHouse for stream ingestion and real-time SOC alerting.",
    "Alongside endpoint defense, I build cloud security and DevSecOps tooling. I created LLM-IaC-Security, an intelligent cloud security scanner utilizing AI agents and RAG to evaluate Terraform and AWS CloudFormation templates against security standards and synthesize verified fix recommendations.",
    "On campus, I serve as Project Lead & Core Member at the Association of Computing Engineers (ACE) at SASTRA University (~350+ active members), directing cross-functional operations across 7 technical and 4 non-technical teams, while actively contributing as a Cybersecurity Team Member.",
  ],
  stats: [
    { label: 'Primary Role', value: 'SOC & Detection Engineer', caption: 'Security Operations & Telemetry' },
    { label: 'Degree', value: 'B.Tech CSE', caption: 'SASTRA University (2023–2027)' },
    { label: 'Current Project', value: 'InsiEDR', caption: 'MeitY Funded (30+ Telemetry Logs)' },
    { label: 'Campus Leadership', value: 'Project Lead (Core)', caption: 'ACE SASTRA (7 Tech + 4 Non-Tech)' },
  ],
};
