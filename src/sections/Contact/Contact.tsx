import React from 'react';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/social';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { useClipboard } from '../../hooks/useClipboard';
import { Mail, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/ui/Icons';

export const Contact: React.FC = () => {
  const { copied, copy } = useClipboard();

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <GithubIcon size={20} color="var(--text-primary)" />;
      case 'linkedin':
        return <LinkedinIcon size={20} color="#0077b5" />;
      case 'mail':
        return <Mail size={20} color="var(--accent)" />;
      default:
        return <ExternalLink size={20} color="var(--cyan)" />;
    }
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: '5rem' }}>
      <div className="container">
        <SectionHeader
          number="11 / CONNECT"
          title="Let's Build Resilient Systems."
          subtitle="Open for discussions on defensive security, AI security research, systems engineering, and collaborative projects."
          tag="COMMUNICATION CHANNELS"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {/* Direct Communication Terminal Card */}
          <div
            className="surface-card"
            style={{
              borderColor: 'var(--border-strong)',
              backgroundColor: 'var(--bg-surface-elevated)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                <Mail size={20} color="var(--accent)" />
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--accent-light)',
                    fontWeight: 600,
                  }}
                >
                  DIRECT EMAIL DISPATCH
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.2,
                }}
              >
                Have a project or research proposal?
              </h3>

              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                }}
              >
                Reach out directly via email for security engineering internships, systems architecture collaborations, or research discussions.
              </p>

              {/* Email Copier Box */}
              <div
                style={{
                  backgroundColor: 'var(--bg-code)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--text-muted)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    // PRIMARY INBOX
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                      wordBreak: 'break-all',
                    }}
                  >
                    {profile.email}
                  </div>
                </div>

                <button
                  onClick={() => copy(profile.email)}
                  className="tech-pill"
                  aria-label="Copy email address"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem 0.75rem',
                    fontSize: '0.75rem',
                    flexShrink: 0,
                    borderColor: copied ? 'var(--cyan)' : 'var(--border-default)',
                    color: copied ? 'var(--cyan)' : 'var(--text-primary)',
                  }}
                >
                  {copied ? (
                    <>
                      <Check size={13} color="var(--cyan)" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div>
              <a
                href={`mailto:${profile.email}`}
                className="tech-pill tech-pill--accent"
                style={{
                  width: '100%',
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <Send size={15} />
                <span>OPEN EMAIL CLIENT ↗</span>
              </a>
            </div>
          </div>

          {/* Social & Network Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  textDecoration: 'none',
                  transition: 'all var(--transition-normal)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-default)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {getSocialIcon(link.icon)}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {link.name}
                      </span>
                      <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>
                        {link.handle}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                      {link.description}
                    </div>
                  </div>
                </div>

                <ExternalLink size={16} color="var(--text-muted)" />
              </a>
            ))}

            {/* Quick Location & Availability Card */}
            <div
              className="surface-card"
              style={{
                backgroundColor: 'rgba(19, 23, 34, 0.5)',
                padding: '1rem 1.25rem',
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: '0.6875rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.25rem',
                  letterSpacing: '0.05em',
                }}
              >
                // OPERATIONAL DISPATCH
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                {profile.location.city}, {profile.location.country} ({profile.location.timezone})
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--cyan)',
                  marginTop: '0.25rem',
                }}
              >
                STATUS: AVAILABLE FOR SECURITY ENGINEERING & RESEARCH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
