import React from 'react';
import { achievements } from '../../data/achievements';
import { certifications } from '../../data/certifications';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ExternalLink } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          number="08 / HONORS"
          title="Honors & verified milestones"
          subtitle="Funded research awards, leadership appointments, and verified accomplishments."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            maxWidth: '960px',
          }}
        >
          {achievements.map((ach) => (
            <article
              key={ach.id}
              style={{
                border: '1px solid var(--border-default)',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: 'var(--radius-xs)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--accent)',
                      fontWeight: 600,
                    }}
                  >
                    {ach.badge || ach.type}
                  </span>

                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {ach.year}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem',
                    lineHeight: 1.3,
                  }}
                >
                  {ach.title}
                </h3>

                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {ach.organization}
                </div>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: ach.link ? '1rem' : '0',
                  }}
                >
                  {ach.description}
                </p>
              </div>

              {ach.link && (
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.8125rem',
                    }}
                  >
                    <span>View project details ↗</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </article>
          ))}

          {/* Render Certifications if any exist */}
          {certifications.map((cert) => (
            <article
              key={cert.id}
              style={{
                border: '1px solid var(--border-default)',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: 'var(--radius-xs)',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--cyan)',
                    fontWeight: 600,
                  }}
                >
                  Certification
                </span>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {cert.issueDate}
                </span>
              </div>

              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {cert.name}
              </h3>
              <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {cert.issuer}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
