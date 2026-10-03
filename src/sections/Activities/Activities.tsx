import React from 'react';
import { activities } from '../../data/activities';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { TechBadge } from '../../components/ui/TechBadge';
import { ExternalLink } from 'lucide-react';

export const Activities: React.FC = () => {
  return (
    <section id="activities" className="section">
      <div className="container">
        <SectionHeader
          number="07 / ACTIVITIES"
          title="Workshops, demos & initiatives"
          subtitle="Peer bootcamps, technical demonstrations, and open-source contributions."
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            maxWidth: '900px',
          }}
        >
          {activities.map((activity) => (
            <article
              key={activity.id}
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {/* Meta Line */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--accent)',
                      fontWeight: 600,
                    }}
                  >
                    {activity.type}
                  </span>
                  <span style={{ color: 'var(--border-strong)' }}>•</span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {activity.organization}
                  </span>
                </div>

                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {activity.date}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginTop: '0.1rem',
                  marginBottom: '0.2rem',
                }}
              >
                {activity.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {activity.description}
              </p>

              {/* Bottom Tags & Link */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  flexWrap: 'wrap',
                  marginTop: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {activity.tags.map((tag) => (
                    <TechBadge key={tag} name={tag} />
                  ))}
                </div>

                {activity.link && (
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                    style={{
                      fontSize: '0.8125rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <span>View ↗</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
