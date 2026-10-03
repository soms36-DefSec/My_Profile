import React from 'react';
import { Project } from '../../types';
import { TechBadge } from '../../components/ui/TechBadge';
import { ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../../components/ui/Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
  onExplore: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onExplore }) => {
  const isFeatured = project.featured;

  if (isFeatured) {
    return (
      <article
        style={{
          border: '1px solid var(--border-default)',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: 'var(--radius-xs)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'border-color var(--transition-fast)',
          gridColumn: '1 / -1',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-strong)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-default)';
        }}
      >
        <div>
          {/* Top Meta Line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  fontWeight: 600,
                }}
              >
                0{index + 1} • Featured Project
              </span>
              <span style={{ color: 'var(--text-muted)' }}>—</span>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}
              >
                {project.category}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {project.badge && (
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.6875rem',
                    padding: '0.15rem 0.45rem',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'rgba(244, 63, 94, 0.08)',
                    color: 'var(--accent)',
                    border: '1px solid rgba(244, 63, 94, 0.25)',
                    fontWeight: 500,
                  }}
                >
                  {project.badge}
                </span>
              )}
              <span
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}
              >
                {project.year}
              </span>
            </div>
          </div>

          {/* Project Title & Subtitle */}
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '0.35rem',
              lineHeight: 1.25,
            }}
          >
            {project.title}
          </h3>

          <div
            className="font-mono"
            style={{
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              marginBottom: '1.25rem',
            }}
          >
            {project.subtitle}
          </div>

          {/* Funding Notice (if applicable) */}
          {project.fundingNotice && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 0.85rem',
                backgroundColor: 'rgba(244, 63, 94, 0.04)',
                border: '1px solid rgba(244, 63, 94, 0.2)',
                borderRadius: 'var(--radius-xs)',
                marginBottom: '1.25rem',
              }}
            >
              <ShieldCheck size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
              <span
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                }}
              >
                {project.fundingNotice}
              </span>
            </div>
          )}

          {/* Main Description */}
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
              maxWidth: '850px',
            }}
          >
            {project.longDescription || project.description}
          </p>

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div style={{ marginBottom: '1.75rem' }}>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.6875rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                  letterSpacing: '0.04em',
                }}
              >
                Key Implementations & Architecture
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  paddingLeft: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '0.5rem 1.5rem',
                }}
              >
                {project.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '0.5rem',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          {/* Technologies */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              marginBottom: '1.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          {/* Action Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => onExplore(project)}
              className="text-link--accent"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              <span>Architecture & technical details</span>
              <ArrowRight size={14} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                  aria-label={`View ${project.title} on GitHub`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.8125rem',
                  }}
                >
                  <GithubIcon size={14} />
                  <span>View source ↗</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.8125rem',
                  }}
                >
                  <ExternalLink size={14} />
                  <span>Live demo ↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Secondary / Utility Project Card (Clean compact layout)
  return (
    <article
      style={{
        border: '1px solid var(--border-default)',
        backgroundColor: 'var(--bg-surface)',
        borderRadius: 'var(--radius-xs)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'border-color var(--transition-fast)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-strong)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-default)';
      }}
    >
      <div>
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            marginBottom: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              0{index + 1}
            </span>
            <span style={{ color: 'var(--border-strong)' }}>•</span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              {project.category}
            </span>
          </div>

          <span
            className="font-mono"
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
            }}
          >
            {project.year}
          </span>
        </div>

        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '0.2rem',
          }}
        >
          {project.title}
        </h3>

        <div
          className="font-mono"
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginBottom: '0.75rem',
          }}
        >
          {project.subtitle}
        </div>

        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '1.25rem',
          }}
        >
          {project.description}
        </p>
      </div>

      <div>
        {/* Technologies */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.35rem',
            marginBottom: '1rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {project.technologies.slice(0, 5).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Action Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          <button
            onClick={() => onExplore(project)}
            className="text-link"
            style={{
              fontSize: '0.8125rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <span>Details</span>
            <ArrowRight size={13} />
          </button>

          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              aria-label={`View ${project.title} on GitHub`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.8125rem',
              }}
            >
              <GithubIcon size={13} />
              <span>GitHub ↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
