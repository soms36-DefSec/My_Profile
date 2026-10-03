import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profile } from '../../data/profile';

interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLinkItem[];
  activeId: string;
  onNavigate: (href: string) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  links,
  activeId,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        backgroundColor: 'rgba(5, 7, 12, 0.95)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
      }}
    >
      {/* Top Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-default)',
          paddingBottom: '1rem',
          marginBottom: '2rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span
            className="font-mono"
            style={{
              fontSize: '1.125rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '0.05em',
            }}
          >
            {profile.handle}<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: '0.6875rem',
              color: 'var(--text-muted)',
              border: '1px solid var(--border-subtle)',
              padding: '0.1rem 0.35rem',
            }}
          >
            SYS::NAV
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{
            padding: '0.5rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={24} />
        </button>
      </div>

      {/* Nav Links */}
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          flex: 1,
        }}
      >
        {links.map((link, idx) => {
          const isActive = activeId === link.id;
          return (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.href);
                onClose();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--border-subtle)',
                color: isActive ? 'var(--accent-light)' : 'var(--text-primary)',
                textAlign: 'left',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                  }}
                >
                  0{idx + 1}
                </span>
                <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {link.label}
                </span>
              </div>
              {isActive && (
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent)',
                  }}
                >
                  [ACTIVE]
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Quick Links & Footer info */}
      <div
        style={{
          borderTop: '1px solid var(--border-default)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-pill tech-pill--accent"
            style={{ flex: 1, justifyContent: 'center', padding: '0.6rem 0', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <GithubIcon size={16} />
            <span>GITHUB ↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/soms36/"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-pill"
            style={{ flex: 1, justifyContent: 'center', padding: '0.6rem 0', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <LinkedinIcon size={16} />
            <span>LINKEDIN ↗</span>
          </a>
        </div>

        <div
          className="font-mono"
          style={{
            fontSize: '0.6875rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
          }}
        >
          {profile.location.city}, {profile.location.country} // {profile.location.coordinates}
        </div>
      </div>
    </div>
  );
};
