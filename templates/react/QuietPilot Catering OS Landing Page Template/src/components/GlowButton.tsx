import React from 'react';
import { Link } from 'react-router-dom';
import Icon, { IconName } from './Icon';

interface GlowButtonProps {
  label: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  icon?: IconName;
  avatar?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
}

const DEFAULT_AVATAR =
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80';

/**
 * Animated glassmorphism CTA: rotating conic shimmer, blurred glass core,
 * avatar + icon slots, hover scale and amber glow.
 */
export default function GlowButton({
  label,
  to,
  href,
  onClick,
  icon = 'wand',
  avatar = DEFAULT_AVATAR,
  size = 'md',
  className = '',
  type = 'button',
}: GlowButtonProps) {
  const inner = (
    <>
      <span className="glow-btn__shimmer" aria-hidden="true" />
      <span className="glow-btn__glass" aria-hidden="true" />
      <span className="glow-btn__content">
        <span className="glow-btn__beam" aria-hidden="true" />
        <span className="glow-btn__core" aria-hidden="true" />
        {avatar ? <img src={avatar} alt="" className="glow-btn__avatar" /> : null}
        <span className="glow-btn__label">{label}</span>
        <span className="glow-btn__icon">
          <Icon name={icon} size={16} />
        </span>
      </span>
    </>
  );

  const classes = `glow-btn glow-btn--${size} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
