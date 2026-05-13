'use client';

import { motion, useReducedMotion, type Transition } from 'framer-motion';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

type BlurTextTag = 'h1' | 'h2' | 'h3' | 'p' | 'span';

export type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  ease?: Transition['ease'];
  onAnimationComplete?: () => void;
  stepDuration?: number;
  as?: BlurTextTag;
  /** Clases en cada palabra/letra animada (p. ej. `cloud-iridescent` debe ir aquí, no en el wrapper). */
  segmentClassName?: string;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>,
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

export default function BlurText({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  ease = [0.22, 1, 0.36, 1],
  onAnimationComplete,
  stepDuration = 0.35,
  as = 'h2',
  segmentClassName = '',
}: BlurTextProps) {
  const reduceMotion = useReducedMotion();
  const elements = useMemo(() => {
    if (!text.trim()) return [];
    return animateBy === 'words'
      ? text.trim().split(/\s+/).filter(Boolean)
      : text.split('');
  }, [text, animateBy]);

  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (reduceMotion || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) setInView(true);
  }, [reduceMotion]);

  /** WebKit a veces no dispara IO en primera pintura sobre capas/fixes — comprobamos layout. */
  useLayoutEffect(() => {
    if (reduceMotion || inView) return;
    const peek = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = typeof window !== 'undefined' ? window.innerHeight : 1;
      if (r.height < 2) return;
      if (r.top < vh * 1.05 && r.bottom > vh * 0.06) setInView(true);
    };
    peek();
    const rid = typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(peek) : 0;
    return () => {
      if (rid) cancelAnimationFrame(rid);
    };
  }, [reduceMotion, inView, text]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -50 }
        : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction],
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5,
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction],
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * Math.max(stepCount - 1, 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1),
  );

  const Tag = as;

  if (reduceMotion) {
    const rmClass = [className, segmentClassName].filter(Boolean).join(' ');
    return (
      <Tag ref={ref as React.RefObject<never>} className={rmClass}>
        {animateBy === 'words' ? elements.join(' ') : text}
      </Tag>
    );
  }

  return (
    <Tag ref={ref as React.RefObject<never>} className={`blur-text flex flex-wrap ${className}`}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition: Transition = {
          duration: totalDuration > 0 ? totalDuration : stepDuration,
          times,
          delay: (index * delay) / 1000,
          ease,
        };

        return (
          <motion.span
            key={`${segment}-${index}`}
            className={segmentClassName || undefined}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            style={{
              display: 'inline-block',
              willChange: 'transform, filter, opacity',
            }}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : null}
          </motion.span>
        );
      })}
    </Tag>
  );
}
