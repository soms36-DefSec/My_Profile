import React from 'react';

interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`section-header ${className}`}
      style={{
        marginBottom: '2.5rem',
        textAlign: align === 'center' ? 'center' : 'left',
      }}
    >
      {number && (
        <div
          className="font-mono"
          style={{
            fontSize: '0.8125rem',
            color: 'var(--accent)',
            fontWeight: 500,
            marginBottom: '0.4rem',
            letterSpacing: '0.02em',
          }}
        >
          {number}
        </div>
      )}

      <h2
        style={{
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: 1.25,
          marginBottom: subtitle ? '0.45rem' : '0',
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9375rem',
            maxWidth: '620px',
            margin: align === 'center' ? '0 auto' : '0',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
