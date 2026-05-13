'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import BlurText from '@/components/blur-text';
import { useTranslations } from '@/lib/i18n/locale-context';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

export function Hero() {
  const { t } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  /* Parallax: hero content fades + shrinks as user scrolls down */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const heroOpacity  = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const heroY        = useTransform(scrollYProgress, [0, 0.55], ['0%', '-8%']);
  const heroScale    = useTransform(scrollYProgress, [0, 0.55], [1, 0.96]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center px-5 pb-10 pt-[4.25rem] scroll-mt-24 md:min-h-screen md:scroll-mt-28 md:px-6 md:pb-20 md:pt-20"
    >
      <motion.div
        className="mx-auto w-full max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={
          reduceMotion
            ? undefined
            : { opacity: heroOpacity, y: heroY, scale: heroScale }
        }
      >
        {/* Eyebrow */}
        <div className="mb-4 text-center md:mb-8">
          <BlurText
            as="p"
            text={t('hero.eyebrow')}
            delay={90}
            className="justify-center text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground"
          />
        </div>

        {/* Main title */}
        <h1
          className="mb-5 text-center font-black leading-none tracking-[-0.06em] md:mb-10"
          style={{ fontSize: 'clamp(3rem,11vw,10rem)' }}
        >
          <BlurText
            as="span"
            text="DGM"
            delay={120}
            className="block w-full justify-center text-foreground"
          />
          {/*
            CLOUD — iridescent effect applied as a CSS animated background
            that clips to the text. No wrapping container, no visible box.
          */}
          <BlurText
            as="span"
            text="CLOUD"
            delay={200}
            segmentClassName="glow-pulse cloud-iridescent"
            className="block w-full justify-center"
          />
        </h1>

        {/* Subtitle */}
        <div className="mb-8 text-center md:mb-14">
          <BlurText
            as="p"
            text={t('hero.subtitle')}
            delay={70}
            className="mx-auto max-w-xl justify-center px-1 text-base leading-relaxed text-muted-foreground md:px-0 md:text-lg lg:text-xl"
          />
        </div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:mb-24 md:gap-5"
        >
          {/* Primary — shimmer + spring hover + radial light pulse */}
          <motion.div
            className="relative"
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 420, damping: 18 }}
          >
            <button className="btn-shimmer relative z-10 inline-flex items-center gap-2.5 bg-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground">
              {t('hero.ctaPrimary')} <span>→</span>
            </button>
            {/* Radial light burst on hover */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
              variants={{ hover: { scale: 7, opacity: 0 } }}
              initial={{ scale: 0.4, opacity: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              style={{ width: 72, height: 72, filter: 'blur(22px)', zIndex: -1 }}
            />
          </motion.div>

          {/* Secondary — ghost with spring hover → portafolio */}
          <motion.a
            href="#portfolio"
            className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-8 py-3.5 text-sm font-semibold tracking-wide text-foreground/70 backdrop-blur-sm"
            style={{ borderRadius: '6px' }}
            whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.2)', color: '#ffffff' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {t('hero.ctaSecondary')}
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <div className="flex h-10 w-6 items-center justify-center rounded-full border border-border">
            <div className="h-2 w-1 rounded-full bg-primary" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
