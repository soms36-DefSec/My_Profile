import React from 'react';
import { JourneyItem } from '../../types';
import { ExternalLink } from 'lucide-react';

interface TimelineItemProps {
  item: JourneyItem;
  isLast: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast }) => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        paddingBottom: isLast ? '0' : '2.5rem',
      }}
    >
      {/* Left Timeline Axis */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginRight: '1.5rem',
          position: 'relative',
        }}
      >
        {/* Node indicator */}
        <div
          style={{
            width: item.current ? '14px' : '10px',
            height: item.current ? '14px' : '10px',
            borderRadius: '50%',
            backgroundColor: item.current ? 'var(--accent)' : 'var(--border-strong)',
            border: item.current ? '3px solid rgba(255, 51, 85, 0.3)' : '2px solid var(--bg-primary)',
            boxShadow: item.current ? '0 0 10px var(--accent)' : 'none',
            zIndex: 2,
            marginTop: '0.35rem',
            flexShrink: 0,
          }}
          className={item.current ? 'pulse-indicator' : ''}
        />

        {/* Vertical linking line */}
        {!isLast && (
          <div
            style={{
              position: 'absolute',
              top: '18px',
              bottom: 0,
              width: '1px',
              backgroundColor: 'var(--border-default)',
              zIndex: 1,
            }}
          />
        )}
      </div>

      {/* Content Card */}
      <div
        className="surface-card"
        style={{
          flex: 1,
          borderColor: item.current ? 'var(--border-accent)' : 'var(--border-subtle)',
          backgroundColor: item.current ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)',
        }}
      >
        {/* Meta Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                color: item.current ? 'var(--accent)' : 'var(--text-muted)',
                fontWeight: 600,
              }}
            >
              {item.period}
            </span>
            <span style={{ color: 'var(--border-strong)' }}>•</span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.6875rem',
                color: 'var(--cyan)',
                border: '1px solid rgba(0, 210, 180, 0.25)',
                padding: '0.05rem 0.35rem',
                borderRadius: '2px',
              }}
            >
              {item.category}
            </span>
          </div>

          {item.current && (
            <span
              className="font-mono"
              style={{
                fontSize: '0.6875rem',
                color: 'var(--accent-light)',
                fontWeight: 600,
              }}
            >
              [ACTIVE STATUS]
            </span>
          )}
        </div>

        {/* Title & Organization */}
        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '0.2rem',
          }}
        >
          {item.title}
        </h3>

        <div
          className="font-mono"
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginBottom: '0.75rem',
          }}
        >
          {item.organization}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: item.highlights ? '0.75rem' : '0',
          }}
        >
          {item.description}
        </p>

        {/* Highlights */}
        {item.highlights && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.5rem' }}>
            {item.highlights.map((hl, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.45rem',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <span style={{ color: 'var(--accent)', marginTop: '1px' }}>▪</span>
                <span>{hl}</span>
              </div>
            ))}
          </div>
        )}

        {/* Link if available */}
        {item.link && (
          <div style={{ marginTop: '0.85rem' }}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.6875rem',
                padding: '0.2rem 0.5rem',
              }}
            >
              <span>VIEW REPO / DOCS</span>
              <ExternalLink size={11} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
