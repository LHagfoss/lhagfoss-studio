import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, easeInOut } from 'framer-motion';

export default function FadeIn({ children, delay = 1 }: { children: React.ReactNode; threshold?: number; delay?: number }) {
    const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: delay, duration: 1, ease: easeInOut }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
