import React from 'react';
import { activities } from '../../data/activities';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { TechBadge } from '../../components/ui/TechBadge';
import { Terminal, Flag, Presentation, GitBranch, ExternalLink } from 'lucide-react';

export const Activities: React.FC = () => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'CTF & Defense':
        return <Flag size={16} color="var(--accent)" />;
      case 'Workshop & Mentorship':
        return <Presentation size={16} color="var(--cyan)" />;
      case 'Open Source':
        return <GitBranch size={16} color="var(--accent-light)" />;
      default:
        return <Terminal size={16} color="var(--amber)" />;
    }
  };

  return (
    <section id="activities" className="section">
      <div className="container">
        <SectionHeader
          number="07 / ACTIVITY"
          title="Activities, CTFs & Demonstrations"
          subtitle="Hands-on peer bootcamps, technical workshops, and open-source defensive research."
          tag="TECHNICAL LOG & FIELD WORK"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="surface-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Meta line */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {getActivityIcon(activity.type)}
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--accent-light)',
                        fontWeight: 600,
                      }}
                    >
                      {activity.type}
                    </span>
                  </div>

                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {activity.date}
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
                  {activity.title}
                </h3>

                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {activity.organization}
                </div>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                  }}
                >
                  {activity.description}
                </p>
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                    {activity.tags.map((tag) => (
                      <TechBadge key={tag} name={tag} />
                    ))}
                  </div>

                  {activity.link && (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tech-pill"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.6875rem',
                        padding: '0.15rem 0.45rem',
                      }}
                    >
                      <span>VIEW</span>
                      <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
