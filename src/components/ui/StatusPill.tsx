import React from 'react';

interface StatusPillProps {
  label: string;
  details?: string;
  className?: string;
}

export const StatusPill: React.FC<StatusPillProps> = ({
  label,
  details,
  className = '',
}) => {
  return (
    <div
      className={`status-pill ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.25rem 0.65rem',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-xs)',
        fontSize: '0.75rem',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-secondary)',
      }}
      title={details}
    >
      <span className="status-dot" style={{ backgroundColor: 'var(--accent)' }} />
      <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>
        {label}
      </span>
    </div>
  );
};
