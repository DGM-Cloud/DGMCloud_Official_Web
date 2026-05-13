'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import BlurText from '@/components/blur-text';
import { useTranslations } from '@/lib/i18n/locale-context';

const PROJECT_SLUGS = ['moreCorporation', 'boomTea'] as const;
type ProjectSlug = (typeof PROJECT_SLUGS)[number];

const PROJECT_URL: Record<ProjectSlug, string> = {
  moreCorporation: 'https://morecorporation.pe/',
  boomTea: 'https://boomteaperu.com/wp/',
};

/** Miniatura pública del sitio (sin API propia). Si falla, se muestra el fallback. */
function mshotsThumbnailUrl(siteUrl: string, width = 720) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(siteUrl)}?w=${width}`;
}

function PortfolioBrowserPreview({ siteUrl }: { siteUrl: string }) {
  const { t } = useTranslations();
  const hostname = useMemo(() => {
    try {
      return new URL(siteUrl).hostname;
    } catch {
      return siteUrl;
    }
  }, [siteUrl]);

  const thumbSrc = useMemo(() => mshotsThumbnailUrl(siteUrl), [siteUrl]);
  const [broken, setBroken] = useState(false);

  return (
    <div className="border-b border-border bg-muted/80 dark:border-white/[0.07] dark:bg-[#121214]">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <span className="flex shrink-0 gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-[#ff5f57]/90" />
          <span className="size-2 rounded-full bg-[#febc2e]/90" />
          <span className="size-2 rounded-full bg-[#28c840]/90" />
        </span>
        <div className="min-w-0 flex-1 rounded-md bg-background/85 px-3 py-1.5 dark:bg-black/55">
          <p className="truncate text-center text-[10px] font-mono tracking-tight text-muted-foreground dark:text-white/40">
            {hostname}
          </p>
        </div>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted dark:bg-[#060607]">
        {!broken ? (
          <Image
            src={thumbSrc}
            alt=""
            fill
            className="object-cover object-top transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
            sizes="(max-width: 768px) 100vw, 384px"
            unoptimized
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="flex h-full min-h-[168px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-950/35 via-[#f1f5f9] to-blue-950/25 px-6 text-center dark:via-[#0c0c0e]">
            <ExternalLink className="size-9 shrink-0 text-primary/45" aria-hidden />
            <p className="font-mono text-xs font-medium text-foreground/70 dark:text-white/55">{hostname}</p>
            <p className="max-w-[240px] text-[11px] leading-snug text-muted-foreground dark:text-white/38">
              {t('portfolio.previewUnavailable')}
            </p>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/35 opacity-95 dark:from-black/55 dark:to-black/20" aria-hidden />

        <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md border border-border bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 dark:border-white/12 dark:bg-black/60 dark:text-white/75">
          <ExternalLink className="size-3 opacity-90" aria-hidden />
          {t('portfolio.visitSite')}
        </div>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  const { t } = useTranslations();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="portfolio"
      className="scroll-mt-24 border-t border-border px-5 py-16 md:scroll-mt-28 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center md:mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-primary/75"
          >
            {t('portfolio.kicker')}
          </motion.p>
          <BlurText
            as="h2"
            text={t('portfolio.title')}
            delay={140}
            className="mb-5 justify-center text-4xl font-black tracking-tighter text-foreground md:text-5xl"
          />
          <motion.p variants={itemVariants} className="text-lg leading-relaxed text-muted-foreground">
            {t('portfolio.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {PROJECT_SLUGS.map((slug) => (
            <motion.a
              key={slug}
              href={PROJECT_URL[slug]}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/85 outline-none ring-offset-background backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-primary/35 hover:shadow-[0_0_48px_rgba(0,115,252,0.12)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-white/[0.08] dark:bg-[rgba(14,14,14,0.72)] dark:focus-visible:ring-offset-[#050505]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
                style={{
                  background:
                    'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(0,115,252,0.12), transparent 60%)',
                }}
              />

              <PortfolioBrowserPreview siteUrl={PROJECT_URL[slug]} />

              <div className="relative flex flex-col gap-4 p-7">
                <span className="inline-flex w-fit rounded-md border border-blue-400/35 bg-blue-600/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-950 dark:bg-blue-600/[0.09] dark:text-blue-100">
                  {t('portfolio.badgeWeb')}
                </span>
                <BlurText
                  as="h3"
                  text={t(`portfolio.projects.${slug}.title`)}
                  delay={100}
                  className="text-xl font-black tracking-tight text-foreground md:text-2xl"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`portfolio.projects.${slug}.description`)}
                </p>
                <p className="font-mono text-[11px] leading-snug tracking-wide text-primary/55">
                  {t(`portfolio.projects.${slug}.stack`)}
                </p>
                <span className="inline-flex items-center gap-2 pt-1 text-sm font-semibold text-primary transition-colors group-hover:text-blue-300">
                  <ExternalLink className="size-4 opacity-80" aria-hidden />
                  {t('portfolio.visitSite')} →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center text-sm text-muted-foreground sm:mt-14 sm:flex-row sm:gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <span>{t('portfolio.footnote')}</span>
          <a
            href="#contact"
            className="font-semibold text-primary underline-offset-4 transition-colors hover:underline hover:text-blue-900 dark:hover:text-blue-300"
          >
            {t('portfolio.footnoteCta')} →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
