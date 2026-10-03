import React from 'react';
import { current } from '../../data/current';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ExternalLink } from 'lucide-react';

export const Now: React.FC = () => {
  const sections = [
    {
      title: 'Building',
      items: current.building,
    },
    {
      title: 'Learning',
      items: current.learning,
    },
    {
      title: 'Exploring',
      items: current.exploring,
    },
    {
      title: 'Researching',
      items: current.researching,
    },
  ];

  return (
    <section id="now" className="section">
      <div className="container">
        <SectionHeader
          number="09 / NOW"
          title="What I'm focused on now"
          subtitle="A live snapshot of active code, topics I'm studying, and research inquiries."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {sections.map((sec) => (
            <div
              key={sec.title}
              style={{
                borderTop: '2px solid var(--border-default)',
                paddingTop: '1.25rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1.25rem',
                }}
              >
                {sec.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {sec.items.map((item, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                        marginBottom: '0.25rem',
                      }}
                    >
                      <h4
                        style={{
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </h4>
                      {item.tag && (
                        <span
                          className="font-mono"
                          style={{
                            fontSize: '0.6875rem',
                            color: 'var(--text-muted)',
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
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>

                    {item.link && (
                      <div style={{ marginTop: '0.4rem' }}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link"
                          style={{
                            fontSize: '0.75rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                          }}
                        >
                          <span>Repository</span>
                          <ExternalLink size={11} />
                        </a>
                      </div>
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
