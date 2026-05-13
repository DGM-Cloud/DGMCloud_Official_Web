'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import BlurText from '@/components/blur-text';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SITE_CONTACT_EMAIL } from '@/lib/contact-config';
import { useTranslations } from '@/lib/i18n/locale-context';

const PROJECT_OPTIONS = [
  ['web', 'contact.optWeb'],
  ['mobile', 'contact.optMobile'],
  ['cloud', 'contact.optCloud'],
  ['backend', 'contact.optBackend'],
  ['other', 'contact.optOther'],
] as const;

export function ContactForm() {
  const { t } = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.project) {
      setStatus('error');
      return;
    }
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let data: { ok?: boolean } = {};
      try {
        data = (await res.json()) as { ok?: boolean };
      } catch {
        /* cuerpo vacío o no JSON */
      }

      if (!res.ok || !data.ok) {
        setStatus('error');
        return;
      }

      setStatus('success');
      setFormData({ name: '', email: '', project: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border px-4 py-16 md:scroll-mt-28 md:py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-10 text-center md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <BlurText
            as="h2"
            text={t('contact.title')}
            delay={120}
            className="mb-4 justify-center text-4xl font-bold text-foreground md:text-5xl"
          />
          <p className="text-muted-foreground text-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Terminal-style form */}
        <motion.div
          className="glassmorphism rounded-2xl border border-primary/20 p-6 md:p-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Terminal header */}
          <div className="mb-6 flex items-center gap-2 border-b border-border pb-4 md:mb-8 md:pb-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-muted-foreground font-mono ml-4">
              {SITE_CONTACT_EMAIL}
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-mono text-primary mb-3">
                <span className="text-primary">{'>'}</span> {t('contact.labelName')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.placeholderName')}
                required
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-mono text-primary mb-3">
                <span className="text-primary">{'>'}</span> {t('contact.labelEmail')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.placeholderEmail')}
                required
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm"
              />
            </motion.div>

            {/* Project Type — Radix Select (lista personalizada, sin menú nativo del SO) */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="contact-project-type"
                className="block text-sm font-mono text-primary mb-3"
              >
                <span className="text-primary">{'>'}</span> {t('contact.labelProject')}
              </label>
              <Select
                value={formData.project || undefined}
                onValueChange={(project) =>
                  setFormData((prev) => ({ ...prev, project }))
                }
              >
                <SelectTrigger
                  id="contact-project-type"
                  className="h-auto min-h-[48px] w-full rounded-lg border border-border bg-background/50 px-4 py-3 font-mono text-sm text-foreground shadow-none hover:bg-background/55 focus:border-primary focus:ring-1 focus:ring-primary/50 focus-visible:ring-primary/50 data-[placeholder]:text-muted-foreground [&_svg]:text-muted-foreground [&_svg]:opacity-90"
                >
                  <SelectValue placeholder={t('contact.selectPlaceholder')} />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  sideOffset={6}
                  className="max-h-[min(280px,var(--radix-select-content-available-height))] rounded-lg border border-border bg-popover font-mono text-sm text-popover-foreground shadow-lg backdrop-blur-xl dark:border-white/[0.1] dark:bg-[#0c0c0e]/98 dark:shadow-[0_12px_40px_rgba(0,0,0,0.55)] [&_*[role=option]]:rounded-md"
                >
                  {PROJECT_OPTIONS.map(([value, labelKey]) => (
                    <SelectItem
                      key={value}
                      value={value}
                      className="cursor-pointer py-2.5 pl-3 pr-8 text-foreground focus:bg-primary/15 focus:text-primary data-[highlighted]:bg-primary/15 data-[highlighted]:text-primary data-[state=checked]:bg-primary/12 data-[state=checked]:text-primary [&_svg]:text-primary"
                    >
                      {t(labelKey)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Message */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-mono text-primary mb-3">
                <span className="text-primary">{'>'}</span> {t('contact.labelMessage')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.placeholderMessage')}
                rows={5}
                required
                minLength={1}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm resize-none"
              />
            </motion.div>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 font-mono text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {'>'} {t('contact.success')}
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 font-mono text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {'>'} {t('contact.error')}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-mono font-semibold hover:bg-opacity-90 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 gloss-effect"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  {t('contact.sending')}
                </>
              ) : (
                <>
                  <span className="text-primary-foreground">{'>'}</span> {t('contact.submit')}
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
