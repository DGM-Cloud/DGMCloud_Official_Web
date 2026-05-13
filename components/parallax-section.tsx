'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

function useMobileParallaxShrink() {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);
  return narrow;
}

type ParallaxSectionProps = {
  children: ReactNode;
  /** Desplazamiento vertical máximo en px (capas más lentas = valores mayores). */
  shift?: number;
  className?: string;
};

/**
 * Capa con parallax suave al entrar/salir del viewport (efecto “layered scroll”).
 */
export function ParallaxSection({
  children,
  shift = 28,
  className,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const narrow = useMobileParallaxShrink();
  const effectiveShift = narrow ? Math.round(shift * 0.22) : shift;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [effectiveShift, -effectiveShift]);

  return (
    <motion.div
      ref={ref}
      style={{ y: reduce ? 0 : y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
