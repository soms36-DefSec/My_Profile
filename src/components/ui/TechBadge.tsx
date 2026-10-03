import React from 'react';

interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'accent' | 'cyan';
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  variant = 'default',
  className = '',
}) => {
  let variantClass = '';
  if (variant === 'accent') variantClass = 'tech-pill--accent';
  if (variant === 'cyan') variantClass = 'tech-pill--cyan';

  return (
    <span className={`tech-pill ${variantClass} ${className}`}>
      {name}
    </span>
  );
};
