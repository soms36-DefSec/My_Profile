import React from 'react';
import { profile } from '../../data/profile';
import { StatusPill } from '../../components/ui/StatusPill';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/ui/Icons';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: 'calc(100vh - var(--header-height))',
        paddingTop: 'calc(var(--header-height) + 3rem)',
        paddingBottom: '4.5rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        borderBottom: '1px solid var(--border-default)',
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        {/* Top Status & Location */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <StatusPill label={profile.status.label} details={profile.status.details} />
          <span
            className="font-mono"
            style={{
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
            }}
          >
            {profile.location.city}, {profile.location.country}
          </span>
        </div>

        {/* Identity & Confident Editorial Headline */}
        <div style={{ maxWidth: '980px', marginBottom: '2.5rem' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '0.875rem',
              color: 'var(--accent)',
              marginBottom: '1rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            {profile.name} • {profile.handle}
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              maxWidth: '920px',
            }}
          >
            Building security tools, endpoint sensors, and cloud defense systems.
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '720px',
              fontWeight: 400,
            }}
          >
            {profile.subheadline}
          </p>
        </div>

        {/* CTAs and External Quick Links */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '3.5rem',
          }}
        >
          <button
            onClick={scrollToProjects}
            style={{
              padding: '0.7rem 1.35rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--accent)',
              color: '#fff',
              borderRadius: 'var(--radius-xs)',
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity var(--transition-fast)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            <span>Explore projects</span>
            <ArrowDown size={15} />
          </button>

          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.7rem 1.25rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-primary)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xs)',
              textDecoration: 'none',
              transition: 'border-color var(--transition-fast)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)'; }}
          >
            <GithubIcon size={15} />
            <span>GitHub ↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/soms36/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.7rem 1.25rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-primary)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xs)',
              textDecoration: 'none',
              transition: 'border-color var(--transition-fast)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)'; }}
          >
            <LinkedinIcon size={15} />
            <span>LinkedIn ↗</span>
          </a>

          <button
            onClick={scrollToContact}
            className="text-link"
            style={{
              padding: '0.7rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-muted)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span>Contact</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Bottom Key Milestones Band */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '2rem',
          }}
        >
          {profile.stats.map((stat, idx) => (
            <div key={idx}>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.35rem',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.2rem',
                }}
              >
                {stat.value}
              </div>
              {stat.caption && (
                <div
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {stat.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
