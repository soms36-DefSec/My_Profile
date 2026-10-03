import { Club } from '../types';

export const clubs: Club[] = [
  {
    id: 'ace-sastra',
    name: 'Association of Computing Engineers (ACE)',
    organization: 'SASTRA University',
    role: 'Project Lead & Core Member',
    period: '2024 – Present',
    description:
      'The premier computing and engineering student association at SASTRA University, dedicated to fostering advanced technical skills in systems, cybersecurity, cloud, and software engineering.',
    responsibilities: [
      'Leading technical project initiatives and guiding junior student engineers in systems and defensive security topics',
      'Designing and coordinating CTF (Capture The Flag) challenges focusing on network analysis, cryptography, and web exploitation',
      'Organizing hands-on technical workshops covering Linux system administration, Git workflows, and cloud architecture',
      'Collaborating with faculty and student peers to cultivate an active builder and security research culture on campus',
    ],
    tags: ['Technical Leadership', 'CTF Workshops', 'Systems Engineering', 'Peer Mentorship'],
  },
];
