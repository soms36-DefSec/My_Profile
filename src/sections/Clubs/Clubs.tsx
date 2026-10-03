import React from 'react';
import { clubs } from '../../data/clubs';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { TechBadge } from '../../components/ui/TechBadge';

export const Clubs: React.FC = () => {
  return (
    <section id="clubs" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          number="06 / COMMUNITY"
          title="Campus leadership & community"
          subtitle="Collaborative engineering initiatives, peer workshops, and student technical clusters."
        />

        <div style={{ maxWidth: '900px' }}>
          {clubs.map((club) => (
            <div
              key={club.id}
              style={{
                border: '1px solid var(--border-default)',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: 'var(--radius-xs)',
                padding: '2rem',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--accent)',
                      fontWeight: 600,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {club.role} • {club.organization}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.35rem',
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
                    color: 'var(--text-muted)',
                  }}
                >
                  {club.period}
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1.5rem',
                }}
              >
                {club.description}
              </p>

              {/* Responsibilities */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.6875rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '0.6rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  Key Contributions & Leadership
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  {club.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.5rem',
                        fontSize: '0.8125rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>—</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.35rem',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1rem',
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
