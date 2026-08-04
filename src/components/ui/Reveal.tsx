'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setVisible(true);
      io.disconnect();
      window.removeEventListener('scroll', checkScrolledPast);
    };

    // An element the viewport jumps straight past — browser scroll restoration
    // or a hash link — never crosses an observer threshold, so it would stay
    // hidden forever. Catch that case by position instead.
    const checkScrolledPast = () => {
      if (el.getBoundingClientRect().bottom <= 0) reveal();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);
    window.addEventListener('scroll', checkScrolledPast, { passive: true });
    checkScrolledPast();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', checkScrolledPast);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
