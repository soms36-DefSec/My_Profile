import { Profile } from '../types';

export const profile: Profile = {
  name: 'Someshwar S',
  displayName: 'Someshwar S',
  handle: 'SOMS',
  githubUsername: 'soms36-DefSec',
  title: 'Security Builder & Computer Science Student',
  headline: 'Building security tools, endpoint sensors, and cloud defense systems.',
  subheadline: 'Computer Science undergraduate at SASTRA University. Focused on endpoint telemetry, threat detection, cloud infrastructure, and practical AI security.',
  status: {
    label: 'Available for Hire & Freelance Contracts',
    state: 'active',
    details: 'Open for Freelance Security Projects, SOC Engineering, DevSecOps, Cloud Security, and Internships.',
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
    "I'm an undergraduate studying Computer Science & Engineering at SASTRA University in Tamil Nadu, India. I spend most of my time writing tools to understand how systems behave, how to monitor them effectively, and how to defend them.",
    "My main active project is InsiEDR, a behavior-based endpoint detection system funded by MeitY (Ministry of Electronics and Information Technology). It combines a Windows telemetry sensor with machine-learning anomaly scoring on the server side.",
    "Alongside endpoint defense, I work on cloud security and DevSecOps tooling. I built LLM-IaC-Security to test how LLMs and retrieval can automatically find nuanced security misconfigurations in AWS CloudFormation templates.",
    "Outside my personal projects, I lead both Technical and Non-Technical operations at the Association of Computing Engineers (ACE) at SASTRA University (~350 active members), directing creative design and event organizing while managing specialized teams across Cybersecurity, Networks, IoT, App Dev, and Web Dev.",
  ],
  stats: [
    { label: 'Current Focus', value: 'Endpoint Detection', caption: 'InsiEDR (MeitY funded)' },
    { label: 'Degree', value: 'B.Tech CSE', caption: 'SASTRA University (2023–2027)' },
    { label: 'Campus Leadership', value: 'Lead (Tech & Non-Tech)', caption: 'ACE SASTRA (350+ Members)' },
    { label: 'Location', value: 'Tiruchirappalli', caption: 'Tamil Nadu, India' },
  ],
};
