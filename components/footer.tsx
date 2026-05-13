'use client';

import { motion } from 'framer-motion';
import { BrandLogoImg } from '@/components/brand-logo';
import { useTranslations } from '@/lib/i18n/locale-context';

const headingClass =
  'mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground md:text-left';

export function Footer() {
  const { t } = useTranslations();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const quickLinks = [
    { labelKey: 'nav.services' as const, href: '#services' },
    { labelKey: 'nav.portfolio' as const, href: '#portfolio' },
    { labelKey: 'nav.about' as const, href: '#about' },
    { labelKey: 'footer.contact' as const, href: '#contact' },
  ];

  const serviceLinks = [
    { labelKey: 'footer.svcWeb' as const, href: '#contact' },
    { labelKey: 'footer.svcMobile' as const, href: '#contact' },
    { labelKey: 'footer.svcCloud' as const, href: '#contact' },
    { labelKey: 'footer.svcConsulting' as const, href: '#contact' },
  ];

  const social = [
    {
      labelKey: 'footer.socialInstagram' as const,
      href: 'https://www.instagram.com/dgmcloud/',
    },
    {
      labelKey: 'footer.socialTiktok' as const,
      href: 'https://www.tiktok.com/@dgm.cloud',
    },
    {
      labelKey: 'footer.socialGithub' as const,
      href: 'https://github.com/DGM-Cloud',
    },
  ];

  const linkClass =
    'block text-center text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary md:text-left';

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:items-start lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Marca */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <a
              href="#top"
              className="mb-4 inline-flex outline-none ring-offset-background transition-opacity hover:opacity-90 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={t('nav.logoAria')}
            >
              <BrandLogoImg className="h-12 w-auto md:h-16" alt="" />
            </a>
            <p className="max-w-sm text-center text-sm leading-relaxed text-muted-foreground md:text-left">
              {t('footer.tagline')}
            </p>
          </motion.div>

          {/* Enlaces */}
          <motion.nav
            variants={itemVariants}
            aria-label={t('footer.quickLinks')}
            className="flex flex-col items-center md:items-start"
          >
            <p className={headingClass}>{t('footer.quickLinks')}</p>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.labelKey}>
                  <a href={link.href} className={linkClass}>
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Servicios */}
          <motion.nav
            variants={itemVariants}
            aria-label={t('footer.servicesTitle')}
            className="flex flex-col items-center md:items-start"
          >
            <p className={headingClass}>{t('footer.servicesTitle')}</p>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.labelKey}>
                  <a href={link.href} className={linkClass}>
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Social */}
          <motion.nav
            variants={itemVariants}
            aria-label={t('footer.follow')}
            className="flex flex-col items-center md:items-start"
          >
            <p className={headingClass}>{t('footer.follow')}</p>
            <ul className="flex flex-col gap-2">
              {social.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>

        <div className="my-8 border-t border-border md:my-10" />

        <motion.div
          className="flex flex-col items-center gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.p variants={itemVariants} className="text-center sm:text-left">
            {t('footer.rights')}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:justify-end"
          >
            <a href="#" className="hover:text-primary transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t('footer.terms')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
