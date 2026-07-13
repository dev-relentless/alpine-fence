'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  /** translation in px applied across the visible scroll range. Negative = slower */
  speed?: number;
  className?: string;
}

/**
 * Lightweight scroll-driven parallax wrapper. Translates child on Y axis
 * proportional to element position relative to the viewport. Respects
 * prefers-reduced-motion.
 */
export default function Parallax({ children, speed = -60, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // progress: -1 (below viewport) → 0 (centered) → 1 (above viewport)
        const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
        setY(progress * speed);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translate3d(0, ${y}px, 0)`, willChange: 'transform' }}
    >
      {children}
    </div>
  );
}
