import React from 'react';
import { current } from '../../data/current';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ExternalLink, Hammer, BookOpen, Compass, Search } from 'lucide-react';

export const Now: React.FC = () => {
  const categories = [
    {
      key: 'building',
      label: 'BUILDING',
      icon: <Hammer size={16} color="var(--accent)" />,
      items: current.building,
      color: 'var(--accent)',
    },
    {
      key: 'learning',
      label: 'LEARNING',
      icon: <BookOpen size={16} color="var(--cyan)" />,
      items: current.learning,
      color: 'var(--cyan)',
    },
    {
      key: 'exploring',
      label: 'EXPLORING',
      icon: <Compass size={16} color="var(--accent-light)" />,
      items: current.exploring,
      color: 'var(--accent-light)',
    },
    {
      key: 'researching',
      label: 'RESEARCHING',
      icon: <Search size={16} color="var(--amber)" />,
      items: current.researching,
      color: 'var(--amber)',
    },
  ];

  return (
    <section id="now" className="section">
      <div className="container">
        <SectionHeader
          number="09 / NOW"
          title="Current Pursuits & Active Focus"
          subtitle="A live snapshot of active code, literature, research inquiries, and system experiments."
          tag="REAL-TIME TELEMETRY"
        />

        {/* Live Broadcast Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '0.85rem 1.25rem',
            backgroundColor: 'rgba(255, 51, 85, 0.04)',
            border: '1px solid rgba(255, 51, 85, 0.2)',
            borderRadius: 'var(--radius-xs)',
            marginBottom: '2rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                boxShadow: '0 0 8px var(--accent)',
                display: 'inline-block',
              }}
              className="pulse-indicator"
            />
            <span
              className="font-mono"
              style={{
                fontSize: '0.8125rem',
                color: 'var(--text-primary)',
                fontWeight: 600,
              }}
            >
              CHANNEL // CURRENT_FOCUS.TS
            </span>
          </div>

          <div
            className="font-mono"
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
            }}
          >
            UPDATED REGULARLY TO REFLECT LIVE RESEARCH SPRINT
          </div>
        </div>

        {/* 4 Quadrants Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="surface-card"
              style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.25rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '0.75rem',
                }}
              >
                {cat.icon}
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: cat.color,
                  }}
                >
                  // {cat.label}
                </span>
              </div>

              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {cat.items.map((item, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <h4
                        style={{
                          fontSize: '0.9375rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item.title}
                      </h4>
                      {item.tag && (
                        <span
                          className="font-mono"
                          style={{
                            fontSize: '0.625rem',
                            color: 'var(--text-muted)',
                            border: '1px solid var(--border-subtle)',
                            padding: '0.1rem 0.35rem',
                            borderRadius: '2px',
                            flexShrink: 0,
                          }}
                        >
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <p
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        marginBottom: item.link ? '0.4rem' : '0',
                      }}
                    >
                      {item.desc}
                    </p>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tech-pill"
                        style={{
                          fontSize: '0.6875rem',
                          padding: '0.15rem 0.45rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}
                      >
                        <span>VIEW REPO</span>
                        <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
