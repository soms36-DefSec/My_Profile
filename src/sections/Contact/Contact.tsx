import React from 'react';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/social';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ContactForm } from '../../components/ui/ContactForm';
import { useClipboard } from '../../hooks/useClipboard';
import { Mail, Copy, Check, ExternalLink, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/ui/Icons';

export const Contact: React.FC = () => {
  const { copied, copy } = useClipboard();

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <GithubIcon size={18} color="var(--text-primary)" />;
      case 'linkedin':
        return <LinkedinIcon size={18} color="var(--text-primary)" />;
      default:
        return <ExternalLink size={18} color="var(--text-primary)" />;
    }
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: '5rem' }}>
      <div className="container">
        <SectionHeader
          number="12 / CONTACT"
          title="Get in touch"
          subtitle="Send a direct message or connect regarding defensive security, systems engineering, freelance contracts, or research."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.3fr) minmax(300px, 1fr)',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Direct Interactive Message Box (Column 1) */}
          <div>
            <ContactForm />
          </div>

          {/* Direct Channels & Details (Column 2) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Direct Email Card with One-Click Copy */}
            <div
              style={{
                border: '1px solid var(--border-default)',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: 'var(--radius-xs)',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                }}
              >
                <Mail size={16} color="var(--accent)" />
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}
                >
                  Direct Email Inbox
                </span>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '0.75rem 0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    wordBreak: 'break-all',
                  }}
                >
                  {profile.email}
                </div>

                <button
                  onClick={() => copy(profile.email)}
                  aria-label="Copy email address"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.35rem 0.65rem',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid var(--border-default)',
                    backgroundColor: 'transparent',
                    color: copied ? 'var(--accent)' : 'var(--text-secondary)',
                    borderRadius: 'var(--radius-xs)',
                    cursor: 'pointer',
                    flexShrink: 0,
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  {copied ? (
                    <>
                      <Check size={12} color="var(--accent)" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                }}
              >
                <Clock size={13} color="var(--accent)" />
                <span>Typical response time: within 24 hours</span>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '1.15rem 1.25rem',
                    border: '1px solid var(--border-default)',
                    backgroundColor: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-xs)',
                    textDecoration: 'none',
                    transition: 'border-color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-strong)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-default)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {getSocialIcon(link.icon)}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          {link.name}
                        </span>
                        <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>
                          {link.handle}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>
                        {link.description}
                      </div>
                    </div>
                  </div>

                  <ExternalLink size={14} color="var(--text-muted)" />
                </a>
              ))}
            </div>

            {/* Base Location Note */}
            <div
              style={{
                padding: '1rem 1.25rem',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xs)',
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: '0.6875rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem',
                }}
              >
                Base
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                {profile.location.city}, {profile.location.country} ({profile.location.timezone})
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};
