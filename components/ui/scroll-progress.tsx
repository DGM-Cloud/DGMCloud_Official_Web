'use client';

import { memo } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export const ScrollProgressBar = memo(function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 h-[2px] w-full origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #00e5ff 0%, #06b6d4 60%, #a5f3fc 100%)',
        boxShadow: '0 0 8px rgba(0,229,255,0.6)',
      }}
    />
  );
});
