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
    title: 'Appointed as Lead of Technical & Non-Technical Operations',
    organization: 'Association of Computing Engineers (ACE), SASTRA University',
    year: '2024',
    description:
      'Selected to lead cross-functional operations across 350+ active student members. Directing technical execution alongside creative design and event organizing, while managing 5 engineering teams across Cybersecurity, Networks, IoT, App Dev, and Web Dev.',
    type: 'Leadership',
    badge: 'Dual Operations Lead',
  },
];
