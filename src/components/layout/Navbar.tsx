import React, { useState, useEffect } from 'react';
import { profile } from '../../data/profile';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { MobileDrawer } from './MobileDrawer';
import { Menu } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Focus', href: '#focus', id: 'focus' },
  { label: 'Work', href: '#projects', id: 'projects' },
  { label: 'Journey', href: '#journey', id: 'journey' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Clubs', href: '#clubs', id: 'clubs' },
  { label: 'Activity', href: '#activities', id: 'activities' },
  { label: 'Now', href: '#now', id: 'now' },
  { label: 'Hire', href: '#hire', id: 'hire' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all var(--transition-normal)',
          backgroundColor: isScrolled ? 'rgba(9, 10, 15, 0.92)' : 'rgba(9, 10, 15, 0.65)',
          backdropFilter: 'blur(10px)',
          borderBottom: isScrolled ? '1px solid var(--border-default)' : '1px solid transparent',
        }}
      >
        {/* Scroll Progress Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '2px',
            width: `${scrollProgress}%`,
            backgroundColor: 'var(--accent)',
            transition: 'width 0.1s linear',
            zIndex: 101,
          }}
        />

        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '56px' : '68px',
            transition: 'height var(--transition-normal)',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={handleLogoClick}
            aria-label="Return to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              textDecoration: 'none',
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '0.02em',
              }}
            >
              {profile.handle}<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            className="d-desktop-flex"
            style={{
              alignItems: 'center',
              gap: '1.25rem',
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    position: 'relative',
                    padding: '0.35rem 0',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--accent)',
                        borderRadius: '1px',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Hire Me CTA & GitHub & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="#hire"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hire');
              }}
              className="d-desktop-inline-flex"
              style={{
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.8rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                backgroundColor: 'rgba(244, 63, 94, 0.1)',
                color: 'var(--accent)',
                border: '1px solid rgba(244, 63, 94, 0.35)',
                borderRadius: 'var(--radius-xs)',
                transition: 'all var(--transition-fast)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(244, 63, 94, 0.1)';
                e.currentTarget.style.color = 'var(--accent)';
              }}
            >
              <span>Hire Me</span>
            </a>

            <a
              href={`https://github.com/${profile.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="d-desktop-inline-flex"
              style={{
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.75rem',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-xs)',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--border-strong)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-default)';
              }}
            >
              <GithubIcon size={14} />
              <span>GitHub ↗</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile navigation"
              className="d-mobile-block"
              style={{
                color: 'var(--text-secondary)',
                padding: '0.35rem',
                borderRadius: 'var(--radius-xs)',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        activeId={activeSection}
        onNavigate={handleNavClick}
      />

      <style>{`
        @media (min-width: 992px) {
          .d-desktop-flex { display: flex !important; }
          .d-desktop-inline { display: inline-block !important; }
          .d-desktop-inline-flex { display: inline-flex !important; }
          .d-mobile-block { display: none !important; }
        }
        @media (max-width: 991px) {
          .d-desktop-flex { display: none !important; }
          .d-desktop-inline { display: none !important; }
          .d-desktop-inline-flex { display: none !important; }
          .d-mobile-block { display: flex !important; }
        }
      `}</style>
    </>
  );
};
