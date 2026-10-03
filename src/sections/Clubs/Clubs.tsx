import React from 'react';
import { clubs } from '../../data/clubs';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { TechBadge } from '../../components/ui/TechBadge';
import { Users, Code, Palette, Shield, Radio, Cpu, Smartphone, Globe } from 'lucide-react';

export const Clubs: React.FC = () => {
  const getTeamIcon = (teamName: string) => {
    switch (teamName) {
      case 'Cybersecurity':
        return <Shield size={15} color="var(--accent)" />;
      case 'Networks':
        return <Radio size={15} color="var(--accent-light)" />;
      case 'IoT':
        return <Cpu size={15} color="var(--accent)" />;
      case 'App Development':
        return <Smartphone size={15} color="var(--accent-light)" />;
      case 'Web Development':
        return <Globe size={15} color="var(--accent)" />;
      default:
        return <Code size={15} color="var(--text-primary)" />;
    }
  };

  return (
    <section id="clubs" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          number="06 / COMMUNITY"
          title="Campus leadership & community"
          subtitle="Collaborative engineering initiatives, cross-functional leadership, and student technical clusters."
        />

        <div style={{ maxWidth: '940px' }}>
          {clubs.map((club) => (
            <div
              key={club.id}
              style={{
                border: '1px solid var(--border-default)',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: 'var(--radius-xs)',
                padding: '2.25rem',
              }}
            >
              {/* Header with Title and 350+ Members Pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.25rem',
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
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {club.role} • {club.organization}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      margin: 0,
                    }}
                  >
                    {club.name}
                  </h3>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {club.membersCount && (
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.3rem 0.7rem',
                        backgroundColor: 'rgba(244, 63, 94, 0.1)',
                        border: '1px solid rgba(244, 63, 94, 0.35)',
                        borderRadius: 'var(--radius-xs)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent)',
                      }}
                    >
                      <Users size={13} />
                      <span>{club.membersCount}</span>
                    </div>
                  )}

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
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1.75rem',
                }}
              >
                {club.description}
              </p>

              {/* DUAL LEADERSHIP SCOPE (Technical + Non-Technical) */}
              {club.leadershipDomains && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1rem',
                    marginBottom: '1.75rem',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-xs)',
                      padding: '1.1rem 1.25rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.4rem',
                      }}
                    >
                      <Code size={16} color="var(--accent)" />
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          textTransform: 'uppercase',
                        }}
                      >
                        Technical Operations Lead
                      </span>
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                      {club.leadershipDomains.technical}
                    </p>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-xs)',
                      padding: '1.1rem 1.25rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.4rem',
                      }}
                    >
                      <Palette size={16} color="var(--accent)" />
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          textTransform: 'uppercase',
                        }}
                      >
                        Non-Technical Operations Lead
                      </span>
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                      {club.leadershipDomains.nonTechnical}
                    </p>
                  </div>
                </div>
              )}

              {/* MANAGED TECHNICAL CLUSTERS (5 Teams) */}
              {club.managedTeams && (
                <div style={{ marginBottom: '1.75rem' }}>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.65rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Managed Teams & Technical Clusters
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                      gap: '0.65rem',
                    }}
                  >
                    {club.managedTeams.map((team) => (
                      <div
                        key={team}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-xs)',
                          padding: '0.6rem 0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {getTeamIcon(team)}
                        <span>{team}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
                  Key Contributions & Leadership Impact
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
