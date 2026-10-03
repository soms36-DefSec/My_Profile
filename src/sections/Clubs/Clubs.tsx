import React from 'react';
import { clubs } from '../../data/clubs';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { TechBadge } from '../../components/ui/TechBadge';
import { Users, Award, CheckCircle2 } from 'lucide-react';

export const Clubs: React.FC = () => {
  return (
    <section id="clubs" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          number="06 / CLUBS"
          title="Clubs & Engineering Communities"
          subtitle="Leadership, peer mentorship, collaborative security initiatives, and campus technical clusters."
          tag="COMMUNITY & LEADERSHIP"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {clubs.map((club) => (
            <div
              key={club.id}
              className="surface-card"
              style={{
                borderColor: 'var(--border-strong)',
                backgroundColor: 'var(--bg-surface-elevated)',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.25rem',
                    }}
                  >
                    <Users size={18} color="var(--accent)" />
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--accent)',
                        fontWeight: 600,
                      }}
                    >
                      {club.organization}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {club.name}
                  </h3>
                </div>

                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--cyan)',
                    border: '1px solid rgba(0, 210, 180, 0.3)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: 'var(--radius-xs)',
                  }}
                >
                  {club.period}
                </div>
              </div>

              {/* Role Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.25rem 0.6rem',
                  backgroundColor: 'rgba(255, 51, 85, 0.08)',
                  border: '1px solid rgba(255, 51, 85, 0.25)',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--accent-light)',
                  marginBottom: '1rem',
                }}
              >
                <Award size={14} />
                <span>{club.role}</span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                }}
              >
                {club.description}
              </p>

              {/* Responsibilities */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.6875rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  // Key Contributions & Leadership
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {club.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.8125rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <CheckCircle2
                        size={14}
                        color="var(--accent)"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.35rem',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '0.85rem',
                }}
              >
                {club.tags.map((tag) => (
                  <TechBadge key={tag} name={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
