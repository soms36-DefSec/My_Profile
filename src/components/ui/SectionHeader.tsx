import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  tag?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  tag,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`section-header ${align === 'center' ? 'text-center' : ''} ${className}`}
      style={{
        marginBottom: '2.5rem',
        textAlign: align === 'center' ? 'center' : 'left',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          marginBottom: '0.5rem',
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: '0.8125rem',
            color: 'var(--accent)',
            fontWeight: 600,
            letterSpacing: '0.1em',
          }}
        >
          {number}
        </span>
        <span
          style={{
            display: 'inline-block',
            width: '24px',
            height: '1px',
            backgroundColor: 'var(--border-strong)',
          }}
        />
        {tag && (
          <span
            className="font-mono"
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {tag}
          </span>
        )}
      </div>

      <h2
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          color: 'var(--text-primary)',
          marginBottom: subtitle ? '0.5rem' : '0',
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            maxWidth: '640px',
            margin: align === 'center' ? '0 auto' : '0',
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
