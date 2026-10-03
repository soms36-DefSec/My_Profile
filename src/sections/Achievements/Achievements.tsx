import React from 'react';
import { achievements } from '../../data/achievements';
import { certifications } from '../../data/certifications';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Trophy, ExternalLink, ShieldCheck } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          number="08 / HONORS"
          title="Achievements & Grants"
          subtitle="Funded research awards, leadership appointments, and verified milestones."
          tag="RECOGNITION"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="surface-card"
              style={{
                borderColor: ach.badge ? 'var(--border-accent)' : 'var(--border-subtle)',
                backgroundColor: 'var(--bg-surface-elevated)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Trophy size={18} color="var(--accent)" />
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--accent-light)',
                      fontWeight: 600,
                    }}
                  >
                    {ach.badge || ach.type}
                  </span>
                </div>

                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  [{ach.year}]
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
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

              {ach.link && (
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-pill"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.6875rem',
                    }}
                  >
                    <span>VERIFY REPOSITORY / DETAILS</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              )}
            </div>
          ))}

          {/* Render Certifications if any are configured */}
          {certifications.map((cert) => (
            <div key={cert.id} className="surface-card">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} color="var(--cyan)" />
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--cyan)',
                      fontWeight: 600,
                    }}
                  >
                    CERTIFICATION
                  </span>
                </div>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  [{cert.issueDate}]
                </span>
              </div>

              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {cert.name}
              </h3>
              <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {cert.issuer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
