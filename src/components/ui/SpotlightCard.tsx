'use client';

import React from 'react';

// Tracks the pointer as --x / --y so the .spotlight glow and .glass-border ring follow the cursor.
export default function SpotlightCard({
  children,
  className = '',
  as: Tag = 'div',
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'li';
} & React.HTMLAttributes<HTMLElement>) {
  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  return (
    <Tag {...rest} onPointerMove={onPointerMove} className={`glass-border spotlight ${className}`}>
      {children}
    </Tag>
  );
}
