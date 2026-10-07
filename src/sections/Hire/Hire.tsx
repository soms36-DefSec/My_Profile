import React from 'react';
import { hiringData } from '../../data/hiring';
import { profile } from '../../data/profile';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { TechBadge } from '../../components/ui/TechBadge';
import { useClipboard } from '../../hooks/useClipboard';
import { Mail, Copy, Check, Briefcase, Shield, CheckCircle } from 'lucide-react';
import { LinkedinIcon } from '../../components/ui/Icons';

export const Hire: React.FC = () => {
  const { copied, copy } = useClipboard();

  return (
    <section id="hire" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          number="11 / OPPORTUNITIES"
          title="Target Roles & Career Opportunities"
          subtitle="Open for full-time security engineering roles, internships, and technical opportunities."
        />

        {/* Engagement Types Overview Band */}
        <div
          style={{
            border: '1px solid var(--border-default)',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: 'var(--radius-xs)',
            padding: '1.5rem 1.75rem',
            marginBottom: '2.5rem',
          }}
        >
          <div
            className="font-mono"
            style={{
              fontSize: '0.75rem',
              color: 'var(--accent)',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '0.85rem',
            }}
          >
            ● {hiringData.availability}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem 2rem',
            }}
          >
            {hiringData.engagementTypes.map((eng, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <CheckCircle size={15} color="var(--accent)" style={{ flexShrink: 0 }} />
                <span>{eng}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TARGET ROLES GRID */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '0.5rem',
            }}
          >
            Core Specializations & Responsibilities
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem',
          }}
        >
          {hiringData.roles.map((role) => (
            <article
              key={role.id}
              style={{
                border: '1px solid var(--border-default)',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: 'var(--radius-xs)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-strong)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-default)';
              }}
            >
              <div>
                {/* Header */}
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
                    <Shield size={16} color="var(--accent)" />
                    <h4
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        margin: 0,
                      }}
                    >
                      {role.title}
                    </h4>
                  </div>

                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--accent)',
                      border: '1px solid rgba(244, 63, 94, 0.3)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: 'var(--radius-xs)',
                      fontWeight: 600,
                    }}
                  >
                    TARGET ROLE
                  </span>
                </div>

                {/* Scope */}
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                  }}
                >
                  {role.scope}
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
                  {role.description}
                </p>

                {/* Capabilities */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Key Deliverables
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      paddingLeft: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                    }}
                  >
                    {role.capabilities.map((cap, capIdx) => (
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

              <div>
                {/* Tools */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  {role.tools.map((tool) => (
                    <TechBadge key={tool} name={tool} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* DIRECT ACTION CONTACT FOOTER */}
        <div
          style={{
            border: '1px solid var(--border-default)',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: 'var(--radius-xs)',
            padding: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <Briefcase size={18} color="var(--accent)" />
              <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                Ready to discuss an opening or internship?
              </h4>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
              Send an email regarding open security engineering positions, internships, or technical opportunities. I reply within 24 hours.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => copy(profile.email)}
              aria-label="Copy email address"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1rem',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-mono)',
                border: '1px solid var(--border-default)',
                backgroundColor: 'transparent',
                color: copied ? 'var(--accent)' : 'var(--text-secondary)',
                borderRadius: 'var(--radius-xs)',
                cursor: 'pointer',
              }}
            >
              {copied ? (
                <>
                  <Check size={13} color="var(--accent)" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy email</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${profile.email}?subject=Security%20Engineering%20Opportunity%20-%20Someshwar%20S`}
              style={{
                padding: '0.65rem 1.25rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'var(--accent)',
                color: '#ffffff',
                borderRadius: 'var(--radius-xs)',
                textDecoration: 'none',
              }}
            >
              <Mail size={14} />
              <span>Email Someshwar</span>
            </a>

            <a
              href="https://www.linkedin.com/in/soms36/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.65rem 1.1rem',
                fontSize: '0.8125rem',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-primary)',
                backgroundColor: 'transparent',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-xs)',
                textDecoration: 'none',
              }}
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
