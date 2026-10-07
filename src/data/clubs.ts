import { Club } from '../types';

export const clubs: Club[] = [
  {
    id: 'ace-sastra',
    name: 'Association of Computing Engineers (ACE)',
    organization: 'SASTRA University',
    role: 'Project Lead & Core Member (Tech & Non-Tech Operations)',
    period: '2024 – Present',
    membersCount: '350+ Active Members',
    description:
      'The premier technical computing student association at SASTRA University, comprising over 350 active student members. Directing cross-functional operations across 7 technical and 4 non-technical teams to conduct technical workshops, lectures, flagship symposiums, and security events. Concurrently serving as a Cybersecurity Team Member contributing to workshops, hands-on CTFs, and project initiatives.',
    leadershipDomains: {
      technical: 'Overseeing 7 technical teams (Cybersecurity, Networks, IoT, App Dev, Web Dev, etc.), workshops, CTFs, and engineering mentorship.',
      nonTechnical: 'Directing 4 non-technical teams (Design, Event Management, Public Relations/Media, and Logistics) for university-wide technical symposiums.',
    },
    managedTeams: [
      'Cybersecurity',
      'Networks',
      'IoT',
      'App Development',
      'Web Development',
      'Creative Design',
      'Event Management',
      'Media & PR',
      'Logistics',
    ],
    responsibilities: [
      'Serving as Project Lead & Core Member directing operations across 7 technical and 4 non-technical teams (~350+ active members)',
      'Actively contributing as a Cybersecurity Team Member, leading workshops on packet analysis, defensive security, and CTF challenges',
      'Planning and executing high-impact technical workshops, guest lectures, and annual flagship computing events',
      'Overseeing creative design standards, marketing assets, and stage logistics for major campus technology symposiums',
      'Mentoring junior cohorts on systems programming, Git workflows, and collaborative project architecture',
    ],
    tags: [
      '350+ Active Members',
      'Project Lead & Core Member',
      '7 Tech Teams',
      '4 Non-Tech Teams',
      'Cybersecurity Team',
      'Workshops & Events',
    ],
    link: 'https://ace-sastra.vercel.app/',
  },
];
