import React from 'react';
import { hiringData } from '../../data/hiring';
import { profile } from '../../data/profile';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { TechBadge } from '../../components/ui/TechBadge';
import { useClipboard } from '../../hooks/useClipboard';
import { Mail, Copy, Check, ArrowRight, Briefcase, Zap, Shield, CheckCircle } from 'lucide-react';
import { LinkedinIcon } from '../../components/ui/Icons';

export const Hire: React.FC = () => {
  const { copied, copy } = useClipboard();

  return (
    <section id="hire" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          number="11 / OPPORTUNITIES"
          title="Hire Someshwar — Roles & Engagements"
          subtitle="Available for freelance contracts, independent security tooling projects, internships, and technical roles."
        />

        {/* BOLD FREELANCING PROMINENT CALLOUT BANNER */}
        <div
          style={{
            border: '2px solid var(--accent)',
            backgroundColor: 'rgba(244, 63, 94, 0.05)',
            borderRadius: 'var(--radius-xs)',
            padding: '1.75rem 2rem',
            marginBottom: '3rem',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div style={{ maxWidth: '780px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.6rem',
                }}
              >
                <Zap size={18} color="var(--accent)" />
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                  }}
                >
                  ● FREELANCE & CONTRACT ENGAGEMENTS: ACTIVELY AVAILABLE
                </span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '0.6rem',
                  lineHeight: 1.3,
                }}
              >
                Need custom SOC tooling, cloud security audits, or detection pipelines?
              </h3>

              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                I partner with security teams, startups, and organizations as an <strong>independent freelance contractor</strong> to architect custom telemetry pipelines, audit AWS cloud infrastructure, automate DevSecOps in CI/CD, and build specialized security tooling. Flexible hourly or milestone-based contracts.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 }}>
              <a
                href={`mailto:${profile.email}?subject=Freelance%20/%20Security%20Project%20Inquiry%20-%20Someshwar%20S`}
                style={{
                  padding: '0.75rem 1.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'var(--accent)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-xs)',
                  textDecoration: 'none',
                  transition: 'opacity var(--transition-fast)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                <Mail size={15} />
                <span>Discuss a Freelance Project</span>
                <ArrowRight size={14} />
              </a>

              <div
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                }}
              >
                Fast turnaround • Remote worldwide
              </div>
            </div>
          </div>

          {/* Engagement Types List */}
          <div
            style={{
              marginTop: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(244, 63, 94, 0.2)',
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
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <CheckCircle size={14} color="var(--accent)" style={{ flexShrink: 0 }} />
                <span>{eng}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TARGET ROLES GRID */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '1rem',
            }}
          >
            Target Roles & Capabilities
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
                    HIRING / FREELANCE
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
                    What I Deliver
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
                {/* Freelance Specific Callout */}
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xs)',
                    padding: '0.65rem 0.85rem',
                    marginBottom: '1rem',
                    fontSize: '0.8125rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.45,
                  }}
                >
                  <strong style={{ color: 'var(--accent)' }}>Freelance Scope: </strong>
                  <span>{role.freelanceFocus}</span>
                </div>

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
                Ready to collaborate or discuss an opening?
              </h4>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
              Send an email with your project specs, contract requirements, or job description. I reply within 24 hours.
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
              href={`mailto:${profile.email}?subject=Opportunity%20/%20Hiring%20Inquiry%20-%20Someshwar%20S`}
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
