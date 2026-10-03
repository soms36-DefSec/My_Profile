import React from 'react';

interface CoordinateTagProps {
  label?: string;
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
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
      }}
    >
      {label && <span style={{ color: 'var(--text-secondary)' }}>{label} • </span>}
      <span>{value}</span>
    </div>
  );
};
