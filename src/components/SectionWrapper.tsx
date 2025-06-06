import React from 'react';
import { motion } from 'framer-motion';

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  withTopDivider?: boolean;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  children, 
  className = '',
  withTopDivider = false 
}) => {
  return (
    <section 
      id={id} 
      className={`relative ${className}`}
    >
      {withTopDivider && (
        <div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D6B77A] to-[#2C3E50] z-10"
          style={{ contain: 'layout style paint' }}
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-0"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
