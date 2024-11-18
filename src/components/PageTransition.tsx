'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
        style={{
          willChange: 'opacity, transform',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
