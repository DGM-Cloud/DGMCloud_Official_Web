'use client';

import { memo } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { SITE_BRAND_HEX, SITE_BRAND_RGB } from '@/lib/site-brand';

export const ScrollProgressBar = memo(function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  const r = SITE_BRAND_RGB.join(', ');
  const barGradient = `linear-gradient(90deg, ${SITE_BRAND_HEX} 0%, #339dff 55%, #b8ddff 100%)`;

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 h-[2px] w-full origin-left"
      style={{
        scaleX,
        background: barGradient,
        boxShadow: `0 0 8px rgba(${r},0.55)`,
      }}
    />
  );
});
