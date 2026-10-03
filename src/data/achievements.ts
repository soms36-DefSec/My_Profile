import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'meity-grant',
    title: 'MeitY Research & Development Project Funding',
    organization: 'Ministry of Electronics and Information Technology (MeitY)',
    year: '2024',
    description:
      'Secured competitive government project funding for the research, design, and implementation of InsiEDR—a behavior-based Zero-Trust Endpoint Detection & Response system.',
    type: 'Grant',
    badge: 'National Funding',
    link: 'https://github.com/soms36-DefSec/InsiEDR_Server',
  },
  {
    id: 'ace-leadership-selection',
    title: 'Selected as Project Lead & Core Member',
    organization: 'Association of Computing Engineers (ACE), SASTRA University',
    year: '2024',
    description:
      'Recognized for technical aptitude in systems and cybersecurity to lead engineering initiatives and mentor junior student cohorts across technical clusters.',
    type: 'Leadership',
    badge: 'Core Leadership',
  },
];
