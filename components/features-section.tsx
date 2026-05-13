'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import BlurText from '@/components/blur-text';
import { GlassSurface } from '@/components/ui/glass-surface';
import { useTranslations } from '@/lib/i18n/locale-context';

const FEATURE_IDS = ['f1', 'f2', 'f3'] as const;

const cardGlass = {
  borderRadius: 16,
  borderWidth: 0.06,
  brightness: 43,
  opacity: 0.88,
  blur: 12,
  displace: 0.42,
  backgroundOpacity: 0.07,
  saturation: 1.1,
  distortionScale: -168,
  redOffset: 0,
  greenOffset: 10,
  blueOffset: 18,
  mixBlendMode: 'overlay' as const,
};

const maskChild = {
  hidden: { y: '108%' },
  visible: {
    y: '0%',
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function FeaturesSection() {
  const { t } = useTranslations();

  return (
    <section id="about" className="scroll-mt-24 border-t border-border px-5 py-16 md:scroll-mt-28 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          className="mb-12 max-w-xl md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <div className="mask-reveal mb-3">
            <motion.p
              variants={maskChild}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70"
            >
              {t('features.kicker')}
            </motion.p>
          </div>
          <BlurText
            as="h2"
            text={t('features.title')}
            delay={140}
            className="text-4xl font-black tracking-tighter text-foreground md:text-5xl"
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURE_IDS.map((fid, i) => (
            <motion.div
              key={fid}
              className="group relative min-h-[280px] transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassSurface
                width="100%"
                height="auto"
                {...cardGlass}
                className="min-h-[260px] border border-border dark:border-white/[0.07]"
                innerClassName="flex h-full min-h-[260px] flex-col items-stretch justify-start p-8 text-left"
              >
                <p className="mb-6 font-mono text-[11px] font-medium tracking-widest text-primary/50">
                  {String(i + 1).padStart(2, '0')}
                </p>

                <h3 className="mb-1.5 text-xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl">
                  {t(`features.${fid}.title`)}
                </h3>

                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary/60">
                  {t(`features.${fid}.subtitle`)}
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`features.${fid}.description`)}
                </p>
              </GlassSurface>

              <motion.div
                className="pointer-events-none absolute bottom-0 left-0 z-20 h-px bg-gradient-to-r from-primary/50 to-transparent"
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#contact"
            className="btn-shimmer group relative inline-flex min-h-[2.875rem] shrink-0 items-center gap-2 rounded-full border border-primary/35 bg-primary px-7 py-2.5 text-sm font-semibold tracking-[0.04em] text-primary-foreground shadow-[0_8px_32px_-6px_rgba(0,115,252,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] transition-[transform] duration-300 hover:-translate-y-px dark:border-white/18 md:px-8"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-4 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/48 to-transparent"
            />
            <span>{t('features.cta')}</span>
            <ArrowUpRight
              aria-hidden
              className="size-[1rem] shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <p className="text-sm text-muted-foreground">
            {t('features.ctaHint')}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
