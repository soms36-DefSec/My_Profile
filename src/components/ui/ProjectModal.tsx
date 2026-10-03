import React, { useEffect } from 'react';
import { Project } from '../../types';
import { X, ExternalLink, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { TechBadge } from './TechBadge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="surface-card"
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--bg-surface-elevated)',
          borderColor: 'var(--border-strong)',
          padding: '2rem',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
          position: 'relative',
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1rem',
            borderBottom: '1px solid var(--border-default)',
            paddingBottom: '1.25rem',
            marginBottom: '1.5rem',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                marginBottom: '0.35rem',
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                // PROJECT SPECIFICATION
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.6875rem',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border-default)',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '2px',
                }}
              >
                {project.category}
              </span>
            </div>
            <h3
              id="modal-project-title"
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                marginTop: '0.25rem',
              }}
            >
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              padding: '0.4rem',
              color: 'var(--text-muted)',
              borderRadius: 'var(--radius-xs)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <X size={20} />
          </button>
        </div>

        {/* Funding Notice (if applicable) */}
        {project.fundingNotice && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.75rem 1rem',
              backgroundColor: 'rgba(255, 51, 85, 0.08)',
              border: '1px solid rgba(255, 51, 85, 0.25)',
              borderRadius: 'var(--radius-xs)',
              marginBottom: '1.5rem',
            }}
          >
            <ShieldCheck size={18} color="var(--accent)" />
            <span
              className="font-mono"
              style={{
                fontSize: '0.8125rem',
                color: 'var(--accent-light)',
                fontWeight: 600,
              }}
            >
              {project.fundingNotice}
            </span>
          </div>
        )}

        {/* Detailed Narrative */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4
            className="font-mono"
            style={{
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              marginBottom: '0.6rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Overview & Architecture Purpose
          </h4>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}
          >
            {project.longDescription}
          </p>
        </div>

        {/* Architecture Schematic (if available) */}
        {project.architecture && (
          <div
            style={{
              marginBottom: '1.75rem',
              backgroundColor: 'var(--bg-code)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xs)',
              padding: '1.25rem',
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
              <Layers size={16} color="var(--cyan)" />
              <span
                className="font-mono"
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.05em',
                }}
              >
                SYSTEM TOPOLOGY & PIPELINE LAYERS
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
              }}
            >
              {project.architecture.layers.map((layer, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.85rem',
                    borderRadius: 'var(--radius-xs)',
                  }}
                >
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--accent)',
                      fontWeight: 600,
                      marginBottom: '0.4rem',
                    }}
                  >
                    0{idx + 1} / {layer.name}
                  </div>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                    {layer.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="font-mono"
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.25rem',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.35rem',
                        }}
                      >
                        <span style={{ color: 'var(--border-strong)' }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Highlights */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4
            className="font-mono"
            style={{
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Engineering Highlights
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <CheckCircle2 size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Tags */}
        <div style={{ marginBottom: '2rem' }}>
          <h4
            className="font-mono"
            style={{
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              marginBottom: '0.6rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Technology Arsenal
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '1rem',
            borderTop: '1px solid var(--border-default)',
            paddingTop: '1.25rem',
          }}
        >
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-pill tech-pill--accent"
              style={{
                padding: '0.55rem 1rem',
                fontSize: '0.8125rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <GithubIcon size={15} />
              <span>SOURCE CODE ↗</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-pill tech-pill--cyan"
              style={{
                padding: '0.55rem 1rem',
                fontSize: '0.8125rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <ExternalLink size={15} />
              <span>LIVE DEMO ↗</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="tech-pill"
            style={{ padding: '0.55rem 1rem', fontSize: '0.8125rem' }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
