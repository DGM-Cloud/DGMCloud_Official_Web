'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const pointerSelector =
      'a[href], button, [role="button"], .cursor-pointer, input, select, textarea, label';

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      let node: Element | null =
        e.target instanceof Element ? e.target : null;
      if (
        (!node || typeof node.closest !== 'function') &&
        typeof document.elementFromPoint === 'function'
      ) {
        node = document.elementFromPoint(e.clientX, e.clientY);
      }
      if (!node || typeof node.closest !== 'function') {
        setIsPointer(false);
        return;
      }
      setIsPointer(!!node.closest(pointerSelector));
    };

    const handleMouseLeave = () => {
      setIsPointer(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          {/* Main cursor */}
          <motion.div
            className="pointer-events-none fixed w-4 h-4 rounded-full border-2 border-primary z-50"
            animate={{
              x: mousePosition.x - 8,
              y: mousePosition.y - 8,
              scale: isPointer ? 1.5 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 28,
              mass: 0.5,
            }}
          />

          {/* Trail cursor */}
          <motion.div
            className="pointer-events-none fixed w-2 h-2 rounded-full bg-primary/40 z-40"
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.3,
            }}
          />
        </>
      )}

      <style jsx global>{`
        * {
          cursor: none;
        }
      `}</style>
    </>
  );
}
