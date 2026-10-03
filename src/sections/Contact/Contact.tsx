import React from 'react';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/social';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { useClipboard } from '../../hooks/useClipboard';
import { Mail, Copy, Check, ArrowRight, ExternalLink } from 'lucide-react';
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
          subtitle="Open for conversations around defensive security, systems engineering, research collaborations, and internships."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Direct Email Column */}
          <div
            style={{
              border: '1px solid var(--border-default)',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: 'var(--radius-xs)',
              padding: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <Mail size={18} color="var(--accent)" />
              <span
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  fontWeight: 600,
                }}
              >
                Direct Contact
              </span>
            </div>

            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
                lineHeight: 1.3,
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
              Feel free to reach out directly via email for security engineering internships, systems architecture collaborations, or research discussions.
            </p>

            {/* Email Copier Box */}
            <div
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
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
                    marginBottom: '0.15rem',
                  }}
                >
                  Email Address
                </div>
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

            <a
              href={`mailto:${profile.email}`}
              className="text-link--accent"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              <span>Compose email</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Social Channels & Location Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                  padding: '1.25rem',
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
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
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                      {link.description}
                    </div>
                  </div>
                </div>

                <ExternalLink size={14} color="var(--text-muted)" />
              </a>
            ))}

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
      </div>
    </section>
  );
};
