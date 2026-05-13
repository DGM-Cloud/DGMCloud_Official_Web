'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from '@/lib/i18n/locale-context';

const spring = { type: 'spring' as const, stiffness: 460, damping: 22 };

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme !== 'light' : true;

  const label = mounted
    ? isDark
      ? t('nav.themeAriaLight')
      : t('nav.themeAriaDark')
    : t('nav.themeAria');

  return (
    <motion.button
      type="button"
      aria-label={label}
      className={`inline-flex shrink-0 items-center justify-center rounded-md border border-border bg-background/55 p-2 text-muted-foreground shadow-none backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground dark:border-white/[0.08] dark:bg-black/35 dark:text-white/60 dark:hover:bg-white/[0.08] dark:hover:text-white ${className}`}
      onClick={() => {
        if (!mounted) return;
        setTheme(isDark ? 'light' : 'dark');
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      whileTap={{ scale: 0.94, transition: spring }}
      whileHover={{ y: -0.5 }}
    >
      {!mounted ? (
        <Moon className="size-[1.125rem]" aria-hidden />
      ) : isDark ? (
        <Sun className="size-[1.125rem]" aria-hidden />
      ) : (
        <Moon className="size-[1.125rem]" aria-hidden />
      )}
    </motion.button>
  );
}
