'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BrandLogoImg } from '@/components/brand-logo';
import { useTranslations } from '@/lib/i18n/locale-context';

const springInteract = { type: 'spring' as const, stiffness: 420, damping: 18 };

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, locale, setLocale } = useTranslations();

  const navItems = [
    { labelKey: 'nav.services', href: '#services' },
    { labelKey: 'nav.portfolio', href: '#portfolio' },
    { labelKey: 'nav.about', href: '#about' },
  ];

  const LangToggle = ({ className = '' }: { className?: string }) => (
    <div
      className={`flex items-center gap-0.5 rounded-md border border-white/[0.08] bg-black/40 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`rounded px-2 py-1 text-[11px] font-semibold uppercase tracking-wide transition-colors ${
          locale === 'en'
            ? 'bg-white/[0.12] text-white'
            : 'text-white/45 hover:text-white/75'
        }`}
      >
        {t('nav.langEn')}
      </button>
      <button
        type="button"
        onClick={() => setLocale('es')}
        className={`rounded px-2 py-1 text-[11px] font-semibold uppercase tracking-wide transition-colors ${
          locale === 'es'
            ? 'bg-white/[0.12] text-white'
            : 'text-white/45 hover:text-white/75'
        }`}
      >
        {t('nav.langEs')}
      </button>
    </div>
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/[0.08] bg-black/50 backdrop-blur-md supports-[backdrop-filter]:bg-black/35">
      <div className="mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-4 px-6 py-3 md:min-h-[4rem]">
        <motion.a
          href="#top"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ opacity: 0.92 }}
          whileTap={{ scale: 0.98 }}
          className="flex shrink-0 items-center text-left outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label={t('nav.logoAria')}
        >
          <BrandLogoImg priority className="h-11 w-auto md:h-14" alt="" />
        </motion.a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item, i) => (
            <motion.a
              key={item.labelKey}
              href={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ color: '#00e5ff' }}
              className="text-[13px] font-medium text-white/50 transition-none"
            >
              {t(item.labelKey)}
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LangToggle />
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            whileHover={{ scale: 1.06, transition: springInteract }}
            whileTap={{ scale: 0.94, transition: springInteract }}
            className="btn-shimmer inline-flex items-center px-5 py-2 text-[13px] font-semibold tracking-wide text-primary-foreground bg-primary"
            style={{ borderRadius: '6px', willChange: 'transform' }}
          >
            {t('nav.cta')}
          </motion.a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-white/60 hover:text-white"
            aria-expanded={isOpen}
            aria-label={t('nav.menu')}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-white/[0.06] bg-black/60 backdrop-blur-lg md:hidden"
        >
          <nav className="mx-auto max-w-6xl space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.labelKey}
                href={item.href}
                className="block py-2 text-sm text-white/50 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {t(item.labelKey)}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#contact"
                className="btn-shimmer flex w-full items-center justify-center bg-primary py-2.5 text-sm font-semibold text-primary-foreground"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.cta')}
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
