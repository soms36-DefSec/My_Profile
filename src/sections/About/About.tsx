import React from 'react';
import { profile } from '../../data/profile';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { MapPin, GraduationCap, Shield, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          number="01 / ABOUT"
          title="Security Engineering with a Builder's Mindset"
          subtitle="Bridging low-level systems telemetry, machine learning pipelines, and cloud defense."
          tag="PROFILE // SOMS"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
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
                gap: '1rem',
                marginTop: '0.5rem',
              }}
            >
              <a
                href="#projects"
                className="tech-pill tech-pill--accent"
                style={{ padding: '0.45rem 0.9rem', fontSize: '0.8125rem' }}
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href="#contact"
                className="tech-pill"
                style={{ padding: '0.45rem 0.9rem', fontSize: '0.8125rem' }}
              >
                <span>GET IN TOUCH</span>
              </a>
            </div>
          </div>

          {/* Structured Information Blocks */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {/* Education Block */}
            <div className="surface-card">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.5rem',
                }}
              >
                <GraduationCap size={18} color="var(--accent)" />
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                  }}
                >
                  ACADEMICS & DEGREE
                </span>
              </div>
              <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-primary)' }}>
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
                    marginTop: '0.5rem',
                    paddingTop: '0.5rem',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  {profile.education.notes}
                </div>
              )}
            </div>

            {/* Location & Coordinates */}
            <div className="surface-card">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.5rem',
                }}
              >
                <MapPin size={18} color="var(--cyan)" />
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--cyan)',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                  }}
                >
                  LOCATION & TIMEZONE
                </span>
              </div>
              <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {profile.location.city}, {profile.location.country}
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.35rem',
                }}
              >
                COORDINATES: {profile.location.coordinates}
                <br />
                TIMEZONE: {profile.location.timezone}
              </div>
            </div>

            {/* Current Focus & Leadership */}
            <div className="surface-card">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.5rem',
                }}
              >
                <Shield size={18} color="var(--accent)" />
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                  }}
                >
                  CURRENT ROLES & HONORS
                </span>
              </div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                • MeitY Project Lead & Principal Developer (InsiEDR)
              </div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                • Project Lead & Core Member @ Association of Computing Engineers (ACE)
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.5rem',
                }}
              >
                STATUS: {profile.status.state.toUpperCase()} // OPEN TO SECURITY & AI RESEARCH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
