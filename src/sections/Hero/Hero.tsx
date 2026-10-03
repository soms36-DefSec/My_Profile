import React from 'react';
import { profile } from '../../data/profile';
import { StatusPill } from '../../components/ui/StatusPill';
import { CoordinateTag } from '../../components/ui/CoordinateTag';
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
      className="tech-grid-bg hero-glow-overlay"
      style={{
        minHeight: 'calc(100vh - var(--header-height))',
        paddingTop: 'calc(var(--header-height) + 2.5rem)',
        paddingBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        borderBottom: '1px solid var(--border-default)',
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        {/* Top Status & System Coordinates */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <StatusPill label={profile.status.label} details={profile.status.details} />
          <CoordinateTag label="SYS::GEO" value={`${profile.location.city} // ${profile.location.coordinates}`} />
        </div>

        {/* Large Confident Typographic Hero Block */}
        <div style={{ maxWidth: '980px', marginBottom: '2.5rem' }}>
          <div
            className="font-mono"
            style={{
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
              letterSpacing: '0.08em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ color: 'var(--accent)' }}>&gt;</span>
            <span>IDENTITY // {profile.name.toUpperCase()} (soms36-DefSec)</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 5.25rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
            }}
          >
            SECURITY.<br />
            SYSTEMS.<br />
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px var(--text-secondary)',
                letterSpacing: '-0.02em',
              }}
            >
              AI.
            </span>{' '}
            <span style={{ color: 'var(--accent)' }}>BUILDER.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.0625rem, 2vw, 1.3125rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
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
            className="tech-pill tech-pill--accent"
            style={{
              padding: '0.75rem 1.4rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span>EXPLORE WORK</span>
            <ArrowDown size={15} />
          </button>

          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-pill"
            style={{
              padding: '0.75rem 1.25rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <GithubIcon size={15} />
            <span>GitHub ↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/soms36/"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-pill"
            style={{
              padding: '0.75rem 1.25rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <LinkedinIcon size={15} />
            <span>LinkedIn ↗</span>
          </a>

          <button
            onClick={scrollToContact}
            className="tech-pill"
            style={{
              padding: '0.75rem 1.25rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-muted)',
            }}
          >
            <span>GET IN TOUCH</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Hero Quick Telemetry Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '2rem',
          }}
        >
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(19, 23, 34, 0.4)',
                border: '1px solid var(--border-subtle)',
                padding: '1rem',
                borderRadius: 'var(--radius-xs)',
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: '0.6875rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                  letterSpacing: '0.05em',
                }}
              >
                // {stat.label}
              </div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.2rem',
                }}
              >
                {stat.value}
              </div>
              {stat.caption && (
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.6875rem',
                    color: 'var(--accent-light)',
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
