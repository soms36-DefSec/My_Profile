import React from 'react';
import { Project } from '../../types';
import { TechBadge } from '../../components/ui/TechBadge';
import { ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../../components/ui/Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
  onExplore: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onExplore }) => {
  const isFeatured = project.featured;

  return (
    <div
      className="surface-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderColor: isFeatured ? 'var(--border-strong)' : 'var(--border-subtle)',
        position: 'relative',
        backgroundColor: isFeatured ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)',
      }}
    >
      <div>
        {/* Top Header info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            marginBottom: '0.85rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                color: 'var(--accent)',
                fontWeight: 600,
              }}
            >
              0{index + 1} / {isFeatured ? 'FEATURED' : 'PROJECT'}
            </span>
            <span style={{ color: 'var(--border-strong)' }}>•</span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
              }}
            >
              {project.category}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            {project.badge && (
              <span
                className="font-mono"
                style={{
                  fontSize: '0.6875rem',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '2px',
                  backgroundColor: 'rgba(255, 51, 85, 0.1)',
                  color: 'var(--accent-light)',
                  border: '1px solid rgba(255, 51, 85, 0.3)',
                  fontWeight: 600,
                }}
              >
                {project.badge}
              </span>
            )}
            <span
              className="font-mono"
              style={{
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
              }}
            >
              [{project.year}]
            </span>
          </div>
        </div>

        {/* Project Title */}
        <h3
          style={{
            fontSize: isFeatured ? '1.5rem' : '1.25rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '0.25rem',
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>

        {/* Subtitle */}
        <div
          className="font-mono"
          style={{
            fontSize: '0.75rem',
            color: 'var(--cyan)',
            marginBottom: '0.85rem',
          }}
        >
          {project.subtitle}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '1.25rem',
          }}
        >
          {project.description}
        </p>

        {/* Funding Notice (if any) */}
        {project.fundingNotice && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.75rem',
              backgroundColor: 'rgba(255, 51, 85, 0.05)',
              border: '1px solid rgba(255, 51, 85, 0.2)',
              borderRadius: 'var(--radius-xs)',
              marginBottom: '1.25rem',
            }}
          >
            <ShieldCheck size={16} color="var(--accent)" />
            <span
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                color: 'var(--accent-light)',
                fontWeight: 500,
              }}
            >
              {project.fundingNotice}
            </span>
          </div>
        )}

        {/* Architecture Snapshot if featured */}
        {isFeatured && project.architecture && (
          <div
            style={{
              backgroundColor: 'var(--bg-code)',
              border: '1px solid var(--border-default)',
              padding: '0.85rem',
              borderRadius: 'var(--radius-xs)',
              marginBottom: '1.25rem',
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
                marginBottom: '0.4rem',
                textTransform: 'uppercase',
              }}
            >
              // Architecture Pipeline
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
              }}
            >
              {project.architecture.summary}
            </div>
          </div>
        )}

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div style={{ marginBottom: '1.25rem' }}>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {project.highlights.slice(0, 3).map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.4rem',
                  }}
                >
                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>•</span>
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
            gap: '0.35rem',
            marginBottom: '1.25rem',
            paddingTop: '0.85rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {project.technologies.slice(0, isFeatured ? 8 : 5).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {project.technologies.length > (isFeatured ? 8 : 5) && (
            <span
              className="font-mono"
              style={{
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
                alignSelf: 'center',
                marginLeft: '0.2rem',
              }}
            >
              +{project.technologies.length - (isFeatured ? 8 : 5)} more
            </span>
          )}
        </div>

        {/* Card Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => onExplore(project)}
            className="tech-pill tech-pill--accent"
            style={{
              padding: '0.45rem 0.85rem',
              fontSize: '0.75rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span>SPECS & ARCHITECTURE</span>
            <ArrowUpRight size={13} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-pill"
                aria-label={`View ${project.title} on GitHub`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 0.75rem',
                  fontSize: '0.75rem',
                }}
              >
                <GithubIcon size={13} />
                <span>CODE ↗</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-pill tech-pill--cyan"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 0.75rem',
                  fontSize: '0.75rem',
                }}
              >
                <ExternalLink size={13} />
                <span>DEMO ↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
