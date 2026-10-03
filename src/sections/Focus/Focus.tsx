import React from 'react';
import { focusAreas } from '../../data/focusAreas';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { TechBadge } from '../../components/ui/TechBadge';
import { Terminal, Shield, Cloud, Cpu, CheckCircle } from 'lucide-react';

export const Focus: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'defensive-edr':
        return <Shield size={20} color="var(--accent)" />;
      case 'cloud-devsecops':
        return <Cloud size={20} color="var(--cyan)" />;
      case 'ai-llm-security':
        return <Cpu size={20} color="var(--accent-light)" />;
      default:
        return <Terminal size={20} color="var(--cyan)" />;
    }
  };

  return (
    <section id="focus" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          number="02 / FOCUS"
          title="Technical Focus & Engineering Domains"
          subtitle="Specialized areas where I research, design architectures, and build resilient defense tooling."
          tag="CORE COMPETENCIES"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {focusAreas.map((area) => (
            <div
              key={area.id}
              className="surface-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Header line */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    {getIcon(area.id)}
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {area.number} // DOMAIN
                    </span>
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {area.title}
                </h3>

                <p
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent-light)',
                    marginBottom: '0.85rem',
                  }}
                >
                  {area.subtitle}
                </p>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                  }}
                >
                  {area.description}
                </p>

                {/* Capabilities List */}
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
                    // Core Capabilities
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {area.capabilities.map((cap, capIdx) => (
                      <div
                        key={capIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.8125rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <CheckCircle
                          size={13}
                          color="var(--accent)"
                          style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies footer */}
              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1rem',
                  marginTop: '0.5rem',
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
