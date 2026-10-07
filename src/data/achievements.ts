import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'meity-grant',
    title: 'MeitY Research & Development Project Funding',
    organization: 'Ministry of Electronics and Information Technology (MeitY)',
    year: '2024',
    description:
      'Secured competitive government project funding for the research, design, and implementation of InsiEDR—an Insider Threat Detection and Response System.',
    type: 'Grant',
    badge: 'National Funding',
    link: 'https://github.com/soms36-DefSec/InsiEDR_Server',
  },
  {
    id: 'ace-leadership-selection',
    title: 'Appointed as Project Lead & Core Member',
    organization: 'Association of Computing Engineers (ACE), SASTRA University',
    year: '2024',
    description:
      'Selected to lead cross-functional operations as Project Lead & Core Member. Directing technical execution alongside creative design and event organizing across 7 technical and 4 non-technical teams.',
    type: 'Leadership',
    badge: 'Operations Lead',
  },
];
