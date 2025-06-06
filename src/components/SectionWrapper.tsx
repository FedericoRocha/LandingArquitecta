import React from 'react';
import { motion } from 'framer-motion';

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className }) => {
  return (
    <section id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
