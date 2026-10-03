import { Certification } from '../types';

/**
 * Verified Certifications list.
 * NOTE: As per strict policy, no fake certifications (CEH, OSCP, etc.) are fabricated.
 * Add verified certifications here as they are earned. The UI dynamically adapts.
 */
export const certifications: Certification[] = [
  // Example for when Someshwar adds verified credentials:
  // {
  //   id: 'aws-sec-spec',
  //   name: 'AWS Certified Security - Specialty',
  //   issuer: 'Amazon Web Services',
  //   issueDate: '2026',
  //   credentialUrl: 'https://...',
  //   status: 'Completed',
  // },
];
