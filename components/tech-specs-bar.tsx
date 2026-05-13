'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/lib/i18n/locale-context';

const SPEC_KEYS = ['techSpecs.s1', 'techSpecs.s2', 'techSpecs.s3'] as const;

export function TechSpecsBar() {
  const { t } = useTranslations();

  return (
    <motion.div
      className="hidden border-y border-white/[0.06] px-5 py-8 md:block md:px-12 md:py-10 lg:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
      }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-white/[0.06] md:grid-cols-3 md:divide-x md:divide-y-0">
        {SPEC_KEYS.map((key, specIdx) => (
          <motion.div
            key={key}
            className="flex items-baseline gap-4 px-0 py-6 md:px-8 md:py-0"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
              },
            }}
          >
            <span className="shrink-0 font-mono text-[11px] font-medium tracking-widest text-primary/60">
              {String(specIdx + 1).padStart(2, '0')}
            </span>
            <span className="text-sm font-medium tracking-tight text-white/55 md:text-base">
              {t(key)}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
