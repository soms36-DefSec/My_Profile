import React from 'react';
import { profile } from '../../data/profile';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          number="01 / ABOUT"
          title="Security engineering with a builder's approach"
          subtitle="Connecting low-level telemetry, cloud defense, and AI systems."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Narrative Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {profile.summary.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                }}
              >
                {paragraph}
              </p>
            ))}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '0.75rem',
              }}
            >
              <a
                href="#projects"
                className="text-link--accent"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                <span>View featured work</span>
                <ArrowRight size={14} />
              </a>

              <a
                href="#contact"
                className="text-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.875rem',
                }}
              >
                <span>Get in touch</span>
              </a>
            </div>
          </div>

          {/* Clean Structured Info Column (No repetitive card boxes) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              borderLeft: '1px solid var(--border-subtle)',
              paddingLeft: '2rem',
            }}
          >
            {/* Academics */}
            <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '0.4rem',
                }}
              >
                Academics
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {profile.education.degree}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {profile.education.institution} ({profile.education.period})
              </div>
              {profile.education.notes && (
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.35rem',
                  }}
                >
                  {profile.education.notes}
                </div>
              )}
            </div>

            {/* Current Roles */}
            <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '0.4rem',
                }}
              >
                Current Roles & Grants
              </div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Project Lead & Principal Developer, InsiEDR
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                MeitY funded endpoint detection & zero-trust system
              </div>

              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.75rem' }}>
                Project Lead & Core Member, ACE
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                Association of Computing Engineers, SASTRA University
              </div>
            </div>

            {/* Location & Contact */}
            <div>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '0.4rem',
                }}
              >
                Location & Base
              </div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                {profile.location.city}, {profile.location.country}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                Timezone: {profile.location.timezone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
