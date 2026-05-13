'use client';

import { useEffect } from 'react';

/**
 * Attaches a global pointermove listener that updates --mx / --my CSS variables
 * on .glass-card elements so the ::after pseudo-element can follow the cursor.
 * Pure progressive enhancement — removes itself on unmount.
 */
export function GlassCardGlow() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const cards = document.querySelectorAll<HTMLElement>('.glass-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        const my = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mx', `${mx}%`);
        card.style.setProperty('--my', `${my}%`);
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return null;
}
