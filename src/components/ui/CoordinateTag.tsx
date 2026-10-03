import React from 'react';

interface CoordinateTagProps {
  label: string;
  value: string;
  className?: string;
}

export const CoordinateTag: React.FC<CoordinateTagProps> = ({
  label,
  value,
  className = '',
}) => {
  return (
    <div
      className={`font-mono ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontSize: '0.6875rem',
        color: 'var(--text-muted)',
        letterSpacing: '0.05em',
      }}
    >
      <span style={{ color: 'var(--border-strong)' }}>[</span>
      <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
      <span style={{ color: 'var(--accent)' }}>::</span>
      <span>{value}</span>
      <span style={{ color: 'var(--border-strong)' }}>]</span>
    </div>
  );
};
