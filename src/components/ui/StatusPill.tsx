import React from 'react';

interface StatusPillProps {
  label: string;
  state?: 'active' | 'building' | 'exploring';
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
        gap: '0.625rem',
        padding: '0.35rem 0.85rem',
        backgroundColor: 'rgba(255, 51, 85, 0.06)',
        border: '1px solid rgba(255, 51, 85, 0.25)',
        borderRadius: 'var(--radius-xs)',
        fontSize: '0.75rem',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '0.06em',
        color: 'var(--text-primary)',
      }}
      title={details}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent)',
          boxShadow: '0 0 8px var(--accent)',
          display: 'inline-block',
        }}
        className="pulse-indicator"
      />
      <span style={{ fontWeight: 600, color: 'var(--accent-light)' }}>
        {label}
      </span>
    </div>
  );
};
