'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  MotionValue,
} from 'framer-motion';
import { useRef } from 'react';
import BlurText from '@/components/blur-text';
import { useTranslations } from '@/lib/i18n/locale-context';

/* ─────────────────────────────────────────────────────────
   Content definitions (copy via useTranslations)
───────────────────────────────────────────────────────── */

const SECTION_META = [
  {
    id: 'web' as const,
    tags: ['React', 'TypeScript', 'Next.js', 'Node.js'],
    accentColor: '#00e5ff',
  },
  {
    id: 'mobile' as const,
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    accentColor: '#a855f7',
  },
  {
    id: 'arch' as const,
    tags: ['AWS', 'Docker', 'Kubernetes', '.NET', 'GraphQL'],
    accentColor: '#10b981',
  },
] as const;

/* ─────────────────────────────────────────────────────────
   Terminal typing (Web phase)
───────────────────────────────────────────────────────── */

const WEB_LINES = [
  { prompt: '$', text: 'npx create-next-app@latest --typescript', color: 'text-[#00e5ff]' },
  { prompt: '>', text: 'Installing dependencies...', color: 'text-white/50' },
  { prompt: '✔', text: 'Project ready. Launching...', color: 'text-emerald-400' },
  { prompt: '$', text: 'npm run dev', color: 'text-[#00e5ff]' },
  { prompt: '●', text: 'http://localhost:3000', color: 'text-white/70' },
] as const;

function WebTerminalContent() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-[#00e5ff]/20 bg-black/80 shadow-2xl shadow-[#00e5ff]/5 ring-1 ring-inset ring-white/[0.06] overflow-hidden">
      {/* Chrome */}
      <div className="flex shrink-0 items-center gap-2 border-b border-white/[0.08] bg-white/[0.03] px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-400/60" />
        <span className="size-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-4 flex-1 rounded bg-white/[0.06] px-3 py-1 text-[10px] font-mono tracking-wider text-white/25">
          ~/dgm-cloud — zsh
        </span>
      </div>
      {/* Body */}
      <div
        className="flex-1 overflow-hidden px-5 py-5 font-mono"
        style={{ textShadow: '0 0 14px rgba(0,229,255,0.3)' }}
      >
        {WEB_LINES.map((line, i) => (
          <motion.div
            key={i}
            className="flex gap-3 text-sm leading-relaxed"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.22, duration: 0.4, ease: 'easeOut' }}
          >
            <span className="shrink-0 text-white/25">{line.prompt}</span>
            <span className={line.color}>{line.text}</span>
          </motion.div>
        ))}
        <motion.span
          aria-hidden
          className="mt-2 inline-block h-4 w-2 bg-[#00e5ff] align-middle"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ delay: 1.8, duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Mobile frame (Mobile phase)
───────────────────────────────────────────────────────── */

const MOBILE_CODE = [
  { indent: 0, color: 'text-purple-400', text: 'export default function App() {' },
  { indent: 1, color: 'text-white/50',   text: 'return (' },
  { indent: 2, color: 'text-blue-300',   text: '<SafeAreaView style={styles.root}>' },
  { indent: 3, color: 'text-purple-300', text: '<HeroCard' },
  { indent: 4, color: 'text-emerald-300',text: 'title="Dashboard"' },
  { indent: 4, color: 'text-emerald-300',text: 'accent={theme.cyan}' },
  { indent: 3, color: 'text-purple-300', text: '/>' },
  { indent: 3, color: 'text-blue-300',   text: '<MetricsGrid data={live} />' },
  { indent: 2, color: 'text-blue-300',   text: '</SafeAreaView>' },
  { indent: 1, color: 'text-white/50',   text: ');' },
  { indent: 0, color: 'text-purple-400', text: '}' },
] as const;

function MobilePhoneContent() {
  return (
    <div className="flex h-full items-center justify-center">
      {/* Phone shell */}
      <div className="relative flex h-[380px] w-[190px] flex-col overflow-hidden rounded-[32px] border-2 border-white/20 bg-black/80 shadow-2xl shadow-purple-500/10">
        {/* Dynamic Island */}
        <div className="mx-auto mt-3 h-3 w-16 rounded-full bg-black border border-white/10" />
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 py-1">
          <span className="text-[8px] font-semibold tracking-wider text-white/50">9:41</span>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          </div>
        </div>
        {/* File tab */}
        <div className="border-b border-white/[0.08] px-3 py-1.5">
          <span className="text-[8px] font-mono text-purple-300/80">App.tsx</span>
        </div>
        {/* Code area */}
        <div className="flex-1 overflow-hidden px-3 py-3">
          <div className="font-mono text-[7px] leading-[1.65]">
            {MOBILE_CODE.map((line, i) => (
              <motion.div
                key={i}
                className="flex"
                style={{ paddingLeft: `${line.indent * 8}px` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.25 }}
              >
                <span className="mr-2 w-3 shrink-0 text-right text-white/15">{i + 1}</span>
                <span className={line.color}>{line.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Home indicator */}
        <div className="mx-auto mb-2 h-1 w-20 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Architecture graph (Systems phase)
───────────────────────────────────────────────────────── */

/* ── Isometric cube helper ─────────────────────────────
   Draws a minimal iso cube centered at (cx, cy) with half-size r.
   top face, left face, right face.
────────────────────────────────────────────────────── */
function IsoCube({
  cx, cy, r, color, delay,
}: {
  cx: number; cy: number; r: number; color: string; delay: number;
}) {
  // iso projection offsets (30° angle)
  const dx = r * 0.87; // cos(30)
  const dy = r * 0.5;  // sin(30)
  const h  = r * 1.1;

  // 6 corners: top-center, top-right, right-bottom, bottom-center, left-bottom, top-left
  const top    = `${cx},${cy - h}`;
  const tr     = `${cx + dx},${cy - h + dy}`;
  const br     = `${cx + dx},${cy + dy}`;
  const bot    = `${cx},${cy + h}`;
  const bl     = `${cx - dx},${cy + dy}`;
  const tl     = `${cx - dx},${cy - h + dy}`;

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.45, ease: 'backOut' as const }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      {/* Top face */}
      <polygon points={`${top} ${tr} ${cx},${cy} ${tl}`}
        fill={`${color}18`} stroke={color} strokeWidth="0.35" strokeOpacity={0.7} />
      {/* Right face */}
      <polygon points={`${cx},${cy} ${tr} ${br} ${bot}`}
        fill={`${color}0c`} stroke={color} strokeWidth="0.35" strokeOpacity={0.5} />
      {/* Left face */}
      <polygon points={`${tl} ${cx},${cy} ${bot} ${bl}`}
        fill={`${color}08`} stroke={color} strokeWidth="0.35" strokeOpacity={0.35} />
      {/* Neon top-face glow dot */}
      <circle cx={cx} cy={cy - h * 0.5} r={r * 0.18} fill={color} opacity={0.9} />
    </motion.g>
  );
}

/* ── Animated dash edge with glow ─────────────────── */
function DashEdge({
  x1, y1, x2, y2, color, delay, duration,
}: {
  x1: number; y1: number; x2: number; y2: number;
  color: string; delay: number; duration: number;
}) {
  const id = `edge-${x1}-${y1}-${x2}-${y2}`.replace(/\./g, '_');
  const len = Math.hypot(x2 - x1, y2 - y1);
  const dash = len * 0.18;
  const gap  = len * 0.82;

  return (
    <g>
      {/* SVG filter for the glow on the particle */}
      <defs>
        <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Static faint track */}
      <line x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={color} strokeWidth="0.22" strokeOpacity={0.1} />
      {/* Traveling glow particle */}
      <motion.line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={color}
        strokeWidth="0.55"
        strokeLinecap="round"
        strokeOpacity={0.95}
        strokeDasharray={`${dash} ${gap}`}
        strokeDashoffset={len}
        filter={`url(#${id})`}
        animate={{ strokeDashoffset: [len, -len] }}
        transition={{
          delay,
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: duration * 0.25,
        }}
      />
    </g>
  );
}

const ARCH_NODES = [
  { id: 'cdn',      x: 50,  y: 10,  label: 'CDN',        color: '#00e5ff', r: 3.8 },
  { id: 'gateway',  x: 50,  y: 30,  label: 'API Gateway', color: '#00e5ff', r: 3.2 },
  { id: 'auth',     x: 18,  y: 52,  label: 'Auth',        color: '#10b981', r: 2.8 },
  { id: 'core',     x: 50,  y: 52,  label: 'Core API',    color: '#10b981', r: 3.2 },
  { id: 'queue',    x: 82,  y: 52,  label: 'Queue',       color: '#10b981', r: 2.8 },
  { id: 'db',       x: 30,  y: 76,  label: 'Postgres',    color: '#a855f7', r: 2.6 },
  { id: 'cache',    x: 70,  y: 76,  label: 'Redis',       color: '#a855f7', r: 2.6 },
  { id: 'worker',   x: 50,  y: 93,  label: 'Workers',     color: '#f59e0b', r: 2.8 },
] as const;

const ARCH_EDGES: Array<{ a: string; b: string; dur: number }> = [
  { a: 'cdn',     b: 'gateway', dur: 1.8 },
  { a: 'gateway', b: 'auth',    dur: 2.2 },
  { a: 'gateway', b: 'core',    dur: 1.6 },
  { a: 'gateway', b: 'queue',   dur: 2.0 },
  { a: 'core',    b: 'db',      dur: 2.4 },
  { a: 'core',    b: 'cache',   dur: 1.9 },
  { a: 'queue',   b: 'worker',  dur: 2.1 },
  { a: 'worker',  b: 'db',      dur: 2.6 },
];

function nodePos(id: string) {
  const n = ARCH_NODES.find((n) => n.id === id)!;
  return { x: n.x, y: n.y };
}

function ArchDiagramContent() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden px-6">
      <svg
        viewBox="0 0 100 105"
        className="h-full w-full max-h-[400px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Edges with traveling dash particles ── */}
        {ARCH_EDGES.map(({ a, b, dur }, i) => {
          const { x: x1, y: y1 } = nodePos(a);
          const { x: x2, y: y2 } = nodePos(b);
          const srcColor = ARCH_NODES.find((n) => n.id === a)!.color;
          return (
            <DashEdge
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              color={srcColor}
              delay={0.4 + i * 0.15}
              duration={dur}
            />
          );
        })}

        {/* ── Iso cube nodes ── */}
        {ARCH_NODES.map((node, i) => (
          <g key={node.id}>
            <IsoCube
              cx={node.x} cy={node.y}
              r={node.r}
              color={node.color}
              delay={0.15 + i * 0.1}
            />
            <text
              x={node.x}
              y={node.y + node.r * 2 + 4.5}
              textAnchor="middle"
              fontSize="3.4"
              fill="rgba(255,255,255,0.45)"
              fontFamily="monospace"
            >
              {node.label}
            </text>

            {/* Floating status badge on Core API */}
            {node.id === 'core' && (
              <motion.g
                initial={{ opacity: 0, y: -2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                {/* Badge bg */}
                <rect
                  x={node.x - 13.5} y={node.y - 11}
                  width="27" height="5.5"
                  rx="1"
                  fill="rgba(0,229,255,0.08)"
                  stroke="rgba(0,229,255,0.35)"
                  strokeWidth="0.25"
                />
                {/* Status dot */}
                <motion.circle
                  cx={node.x - 10.5} cy={node.y - 8.25} r={0.9}
                  fill="#10b981"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <text
                  x={node.x - 8.5} y={node.y - 6.3}
                  fontSize="2.5"
                  fill="rgba(0,229,255,0.75)"
                  fontFamily="monospace"
                >
                  NODE_STATUS: OPTIMAL
                </text>
              </motion.g>
            )}
          </g>
        ))}
      </svg>

      {/* ── Scanline ── */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 h-[2px]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.18) 30%, rgba(0,229,255,0.28) 50%, rgba(0,229,255,0.18) 70%, transparent 100%)',
        }}
        animate={{ top: ['8%', '92%', '8%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Morphed Hardware — the sticky right-side component
───────────────────────────────────────────────────────── */

function MorphedHardware({ progress }: { progress: MotionValue<number> }) {
  const reduceMotion = useReducedMotion();

  /* Shape morphing: 3 keyframes mapped to scroll 0 → 0.5 → 1 */
  const borderRadius = useTransform(
    progress,
    [0, 0.45, 0.55, 1],
    ['16px', '32px', '32px', '16px'],
  );
  const width = useTransform(
    progress,
    [0, 0.45, 0.55, 1],
    ['100%', '42%', '42%', '100%'],
  );
  const height = useTransform(
    progress,
    [0, 0.45, 0.55, 1],
    ['72%', '88%', '88%', '80%'],
  );

  /* Marco tipo “glass-card”: solo en fase web; en móvil e infra cloud queda limpio */
  const chrome = useTransform(
    progress,
    [0, 0.36, 0.42, 0.62, 0.68, 1],
    [1, 1, 0, 0, 0, 0],
  );
  const borderAlpha = useTransform(chrome, (c) => c * 0.08);
  const borderColor = useMotionTemplate`rgba(255, 255, 255, ${borderAlpha})`;
  const backgroundAlpha = useTransform(chrome, (c) => c * 0.55);
  const backgroundColor = useMotionTemplate`rgba(18, 18, 18, ${backgroundAlpha})`;
  const blurPx = useTransform(chrome, (c) => c * 18);
  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`;
  const accentBoxShadow = useTransform(chrome, (c) =>
    c < 0.02
      ? 'none'
      : `inset 0 0 0 1px rgba(0,229,255,${0.18 * c}), 0 0 60px rgba(0,229,255,${0.06 * c})`,
  );
  const borderWidthPx = useTransform(chrome, (c) => (c < 0.02 ? '0px' : '1px'));

  const spring = {
    type: 'spring' as const,
    stiffness: 80,
    damping: 22,
  };

  const animatedShellStyle = {
    width,
    height,
    borderRadius,
    borderStyle: 'solid' as const,
    borderWidth: borderWidthPx,
    borderColor,
    backgroundColor,
    backdropFilter,
    WebkitBackdropFilter: backdropFilter,
  };

  const staticShellStyle = {
    width: '100%',
    height: '72%',
    borderRadius: '16px',
  };

  return (
    <motion.div
      className={reduceMotion ? 'glass-card relative overflow-hidden' : 'relative overflow-hidden'}
      style={reduceMotion ? staticShellStyle : animatedShellStyle}
      transition={spring}
    >
      {/* Phase 0 – Web terminal */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: useTransform(progress, [0, 0.32, 0.42], [1, 1, 0]),
          pointerEvents: 'none',
        }}
      >
        <WebTerminalContent />
      </motion.div>

      {/* Phase 1 – Mobile frame */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: useTransform(progress, [0.38, 0.48, 0.6, 0.68], [0, 1, 1, 0]),
          pointerEvents: 'none',
        }}
      >
        <MobilePhoneContent />
      </motion.div>

      {/* Phase 2 – Architecture diagram */}
      <motion.div
        className="absolute inset-0 p-6"
        style={{
          opacity: useTransform(progress, [0.64, 0.75], [0, 1]),
          pointerEvents: 'none',
        }}
      >
        <ArchDiagramContent />
      </motion.div>

      {/* Brillo interior solo en fase terminal (chrome > 0) */}
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ boxShadow: accentBoxShadow }}
        />
      )}
    </motion.div>
  );
}

type ExpertiseSection = (typeof SECTION_META)[number];

function ExpertiseTextPanel({
  section,
  variant,
}: {
  section: ExpertiseSection;
  variant: 'stacked' | 'sticky';
}) {
  const { t } = useTranslations();
  const stacked = variant === 'stacked';

  return (
    <motion.div
      className={stacked ? 'mx-auto max-w-xl text-center' : 'max-w-xl'}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: stacked ? '-5% 0px' : '-18% 0px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
      }}
    >
      <div className={`mask-reveal mb-2 md:mb-3 ${stacked ? 'flex justify-center' : ''}`}>
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: section.accentColor }}
          variants={{
            hidden: { y: '110%' },
            visible: { y: '0%', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
          }}
        >
          {t(`expertise.${section.id}.label`)}
        </motion.p>
      </div>

      <div className="mb-4 pt-[0.15em] md:mb-5 md:pt-[0.2em]">
        <BlurText
          as="h3"
          text={t(`expertise.${section.id}.title`)}
          delay={130}
          className={`text-[1.65rem] font-black leading-[1.12] tracking-tighter text-foreground sm:text-3xl md:text-[2.6rem] md:leading-[1.1] ${stacked ? 'justify-center' : ''}`}
        />
      </div>

      <div className={`mask-reveal mb-5 md:mb-7 ${stacked ? 'flex justify-center' : ''}`}>
        <motion.p
          className="max-w-prose text-sm leading-relaxed text-muted-foreground md:text-base"
          variants={{
            hidden: { y: '105%' },
            visible: { y: '0%', transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
          }}
        >
          {t(`expertise.${section.id}.body`)}
        </motion.p>
      </div>

      <motion.div
        className={`flex flex-wrap gap-2 ${stacked ? 'justify-center' : ''}`}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.4 } },
        }}
      >
        {section.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border px-2.5 py-1 text-[11px] font-medium tracking-wide text-white/45"
            style={{ borderColor: `${section.accentColor}28` }}
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Main section
───────────────────────────────────────────────────────── */

export function StickyScrollExpertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.0005,
  });

  return (
    <section id="services" className="relative scroll-mt-24 border-t border-white/[0.06] md:scroll-mt-28">
      {/* Móvil: solo copy, sin sticky largo ni morph (terminal/teléfono/cloud) */}
      <div className="md:hidden">
        <div className="mx-auto max-w-2xl space-y-10 px-5 py-12">
          {SECTION_META.map((section) => (
            <ExpertiseTextPanel key={section.id} section={section} variant="stacked" />
          ))}
        </div>
      </div>

      {/* Desktop: sticky scroll + MorphedHardware */}
      <div
        ref={containerRef}
        className="relative hidden md:block"
        style={{ height: `${SECTION_META.length * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center px-6 md:px-12 lg:px-20">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-24">
            <div className="flex w-full flex-col gap-32 md:w-[42%]">
              {SECTION_META.map((section) => (
                <ExpertiseTextPanel key={section.id} section={section} variant="sticky" />
              ))}
            </div>

            <div className="flex flex-1 items-center justify-center" style={{ height: '80vh' }}>
              <div className="flex h-full w-full max-w-[560px] items-center justify-center">
                <MorphedHardware progress={reduceMotion ? scrollYProgress : smoothProgress} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
