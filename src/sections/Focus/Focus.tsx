import React from 'react';
import { focusAreas } from '../../data/focusAreas';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { TechBadge } from '../../components/ui/TechBadge';

export const Focus: React.FC = () => {
  return (
    <section id="focus" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          number="02 / FOCUS"
          title="Technical focus & engineering domains"
          subtitle="Areas where I build tools, analyze systems, and run security experiments."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {focusAreas.map((area) => (
            <div
              key={area.id}
              style={{
                borderTop: '2px solid var(--border-strong)',
                paddingTop: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Domain Number & Subtitle */}
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  {area.number} • {area.subtitle}
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3,
                  }}
                >
                  {area.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                  }}
                >
                  {area.description}
                </p>

                {/* Capabilities List */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.6rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Core Areas
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
                    {area.capabilities.map((cap, capIdx) => (
                      <li
                        key={capIdx}
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
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies footer */}
              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1rem',
                  marginTop: '0.75rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.35rem',
                }}
              >
                {area.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
