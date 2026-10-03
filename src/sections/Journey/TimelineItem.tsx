import React from 'react';
import { JourneyItem } from '../../types';
import { ArrowUpRight } from 'lucide-react';

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
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: item.current ? 'var(--accent)' : 'var(--border-strong)',
            marginTop: '0.45rem',
            flexShrink: 0,
            zIndex: 2,
          }}
        />

        {/* Vertical linking line */}
        {!isLast && (
          <div
            style={{
              position: 'absolute',
              top: '16px',
              bottom: 0,
              width: '1px',
              backgroundColor: 'var(--border-subtle)',
              zIndex: 1,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          paddingBottom: '0.5rem',
        }}
      >
        {/* Meta Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '0.35rem',
            flexWrap: 'wrap',
          }}
        >
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
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
            }}
          >
            {item.category}
          </span>
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
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)',
            marginBottom: '0.75rem',
          }}
        >
          {item.organization}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
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
                  alignItems: 'baseline',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>—</span>
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
              className="text-link--accent"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.8125rem',
                fontWeight: 500,
              }}
            >
              <span>View details</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
