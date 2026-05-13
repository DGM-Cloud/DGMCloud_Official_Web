'use client';

import { motion, useReducedMotion } from 'framer-motion';
import BlurText from '@/components/blur-text';
import { useTranslations } from '@/lib/i18n/locale-context';

type TechCategory = 'Frontend' | 'Backend' | 'Mobile' | 'DevOps';

interface TechItem {
  name: string;
  icon: string;
  category: TechCategory;
}

const technologies: TechItem[] = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'TypeScript', icon: '📘', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
  { name: '.NET Core', icon: '🔷', category: 'Backend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'Python', icon: '🐍', category: 'Backend' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Backend' },
  { name: 'React Native', icon: '📲', category: 'Mobile' },
  { name: 'Flutter', icon: '🎯', category: 'Mobile' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'AWS', icon: '☁️', category: 'DevOps' },
  { name: 'Kubernetes', icon: '☸️', category: 'DevOps' },
  { name: 'CI/CD', icon: '🔄', category: 'DevOps' },
];

const CATEGORY_HOVER: Record<
  TechCategory,
  { overlay: string; border: string; shadow: string; title: string; label: string }
> = {
  Frontend: {
    overlay: 'bg-gradient-to-br from-blue-600/28 via-blue-500/12 to-transparent',
    border: 'hover:border-blue-400/45',
    shadow: 'hover:shadow-[0_0_28px_rgba(0,115,252,0.22)]',
    title: 'group-hover:text-blue-200',
    label: 'group-hover:text-blue-400/80',
  },
  Backend: {
    overlay: 'bg-gradient-to-br from-fuchsia-500/28 via-pink-500/14 to-transparent',
    border: 'hover:border-fuchsia-400/45',
    shadow: 'hover:shadow-[0_0_28px_rgba(217,70,239,0.22)]',
    title: 'group-hover:text-pink-200',
    label: 'group-hover:text-pink-400/80',
  },
  Mobile: {
    overlay: 'bg-gradient-to-br from-emerald-500/30 via-green-500/14 to-transparent',
    border: 'hover:border-emerald-400/45',
    shadow: 'hover:shadow-[0_0_28px_rgba(52,211,153,0.26)]',
    title: 'group-hover:text-emerald-200',
    label: 'group-hover:text-emerald-400/80',
  },
  DevOps: {
    overlay: 'bg-gradient-to-br from-orange-500/30 via-red-500/14 to-transparent',
    border: 'hover:border-orange-400/45',
    shadow: 'hover:shadow-[0_0_28px_rgba(251,146,60,0.26)]',
    title: 'group-hover:text-orange-200',
    label: 'group-hover:text-orange-400/80',
  },
};

function TechCarouselChip({ tech }: { tech: TechItem }) {
  const { t } = useTranslations();
  const hover = CATEGORY_HOVER[tech.category];

  return (
    <div
      className={`group relative flex shrink-0 items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card/50 px-7 py-4 backdrop-blur-md transition-all duration-300 dark:border-white/[0.08] dark:bg-card/40 ${hover.border} ${hover.shadow}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 ${hover.overlay}`}
        aria-hidden
      />
      <span className="relative text-3xl leading-none select-none">{tech.icon}</span>
      <div className="relative min-w-[9rem] max-w-[11rem]">
        <p className={`truncate font-semibold tracking-tight text-foreground transition-colors duration-300 ${hover.title}`}>
          {tech.name}
        </p>
        <p
          className={`truncate text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-300 ${hover.label}`}
        >
          {t(`tech.categories.${tech.category}`)}
        </p>
      </div>
    </div>
  );
}

export function TechStack() {
  const { t } = useTranslations();
  const reduceMotion = useReducedMotion();

  const duplicated = [...technologies, ...technologies];

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="tech-stack" className="scroll-mt-24 border-t border-border py-14 md:scroll-mt-28 md:py-20">
      <div className="mx-auto mb-10 max-w-6xl px-5 text-center md:mb-12 md:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <BlurText
            as="h2"
            text={t('tech.title')}
            delay={140}
            className="mb-4 justify-center text-4xl font-black tracking-tighter text-foreground md:text-5xl"
          />
          <motion.p variants={lineVariants} className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('tech.subtitle')}
          </motion.p>
        </motion.div>
      </div>

      <div className="relative border-y border-border bg-muted/30 py-6 dark:border-white/[0.06] dark:bg-black/25 md:py-10">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-28"
          aria-hidden
        />

        {reduceMotion ? (
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 px-6 md:gap-5" role="region" aria-label={t('tech.title')}>
            {technologies.map((tech) => (
              <TechCarouselChip key={tech.name} tech={tech} />
            ))}
          </div>
        ) : (
          <div className="overflow-hidden" role="region" aria-label={t('tech.title')}>
            <div className="tech-marquee-track">
              {duplicated.map((tech, index) => (
                <TechCarouselChip key={`${tech.name}-${index}`} tech={tech} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
