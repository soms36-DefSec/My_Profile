import React from 'react';
import { profile } from '../../data/profile';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-default)',
        backgroundColor: 'var(--bg-primary)',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        marginTop: '2rem',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {/* Identity Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                }}
              >
                {profile.handle}<span style={{ color: 'var(--accent)' }}>.</span>
              </span>
              <span style={{ color: 'var(--border-strong)' }}>|</span>
              <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                {profile.name}
              </span>
            </div>
            <p
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              Built with React 19 + TypeScript + Vite // Deployed via GitHub Pages
            </p>
          </div>

          {/* Social Channels & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={`https://github.com/${profile.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="tech-pill"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/soms36/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="tech-pill"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Direct Email"
              className="tech-pill"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Mail size={14} />
              <span>Email</span>
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="tech-pill tech-pill--accent"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <ArrowUp size={14} />
              <span>TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Metadata bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}
          className="font-mono"
        >
          <div>
            © {currentYear} {profile.name} ({profile.handle}). All rights reserved.
          </div>
          <div>
            SYS::LOC [{profile.location.city}, {profile.location.country}] // STATUS: OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
};
