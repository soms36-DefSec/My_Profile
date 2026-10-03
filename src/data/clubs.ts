import { Club } from '../types';

export const clubs: Club[] = [
  {
    id: 'ace-sastra',
    name: 'Association of Computing Engineers (ACE)',
    organization: 'SASTRA University',
    role: 'Lead of Technical & Non-Technical Operations',
    period: '2024 – Present',
    membersCount: '350+ Active Members',
    description:
      'The premier technical computing student association at SASTRA University, comprising over 350 active student members. Leading cross-functional operations across both technical project delivery and non-technical creative design and campus event organization.',
    leadershipDomains: {
      technical: 'Overseeing technical standards, workshop curricula, CTF architectures, and engineering mentorship.',
      nonTechnical: 'Directing creative graphic design, marketing assets, event organizing, scheduling, and logistics.',
    },
    managedTeams: [
      'Cybersecurity',
      'Networks',
      'IoT',
      'App Development',
      'Web Development',
    ],
    responsibilities: [
      'Leading both Technical & Non-Technical operations across 350+ active student members',
      'Directly managing and coordinating 5 specialized technical teams: Cybersecurity, Networks, IoT, App Dev, and Web Dev',
      'Directing event organization, stage logistics, and creative design for technical symposiums and campus bootcamps',
      'Conducting hands-on workshops on packet capture analysis, defensive security, Linux internals, and web fundamentals',
      'Mentoring junior cohorts on project architecture, code reviews, and Git collaboration practices',
    ],
    tags: [
      '350+ Active Members',
      'Technical Lead',
      'Design & Event Organizing',
      'Cybersecurity',
      'Networks',
      'IoT',
      'App Dev',
      'Web Dev',
    ],
  },
];
