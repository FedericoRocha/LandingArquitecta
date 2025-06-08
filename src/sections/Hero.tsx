import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import SectionWrapper from '../components/SectionWrapper';
import ScrollLink from '../components/ScrollLink';

const Hero: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    'Diseño que inspira',
    'Innovación en cada detalle',
    'Arquitectura con propósito'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <SectionWrapper 
      id="hero" 
      className="relative min-h-[calc(100vh-6rem)] md:min-h-screen flex items-center justify-center bg-white overflow-hidden pt-24 md:pt-0 pb-16 md:pb-0"
      withTopDivider
    >

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div 
            className="flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="mb-8 px-5 py-2.5 bg-[#F9FAFB] rounded-full border border-[#E5E7EB] shadow-sm inline-block"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <span className="text-[#D6B77A] font-medium text-sm tracking-wide">BIENVENIDOS A MI PORTAFOLIO</span>
            </motion.div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-7.5xl text-[#111827] font-bold mb-6 leading-tight w-full">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="block"
              >
                Tamara
              </motion.span>
              <motion.span 
                className="text-[#2C3E50] block mt-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Gomez
              </motion.span>
            </h1>
            
            <motion.div 
              className="mb-10 flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="inline-block font-serif text-3xl md:text-4xl font-bold text-[#2C3E50] relative z-10 px-6 py-3 bg-white border-2 border-[#D6B77A] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="relative z-10">Arquitecta</span>
                <div className="absolute -inset-1 bg-[#D6B77A] bg-opacity-20 -z-0 rounded-md"></div>
              </h2>
              
              <div className="mt-8 h-12 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentPhrase}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="font-sans text-[#4B5563] text-lg md:text-xl mb-6 leading-relaxed max-w-2xl italic"
                  >
                    "{phrases[currentPhrase]}"
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
            
            <motion.p 
              className="font-sans text-[#4B5563] text-lg md:text-xl mb-10 leading-relaxed max-w-2xl text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Transformo ideas en espacios que inspiran, innovan y perduran en el tiempo. 
              Especializada en diseño arquitectónico que combina funcionalidad, estética y sostenibilidad.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-5 mt-12 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <ScrollLink to="proyectos" className="block">
                  <Button 
                    variant="primary" 
                    className="bg-[#2C3E50] hover:bg-[#1F2937] text-white px-8 py-4 text-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center group"
                  >
                    Ver mis proyectos
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </ScrollLink>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <ScrollLink to="contacto" className="block">
                  <Button 
                    variant="primary" 
                    className="bg-[#2C3E50] text-white hover:bg-[#1F2937] px-8 py-4 text-lg transition-all duration-300 flex items-center group"
                  >
                    Contáctame
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Button>
                </ScrollLink>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Imagen de arquitectura */}
          <motion.div 
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div 
              className="relative z-10 w-full h-[32rem] bg-[#F4F4F5] rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 group"
              whileHover={{ 
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Diseño arquitectónico moderno"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="font-serif text-2xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Diseño Arquitectónico</h3>
                <p className="text-sm opacity-0 group-hover:opacity-90 transition-opacity duration-500 delay-100">Innovación y elegancia en cada proyecto</p>
              </div>
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#D6B77A] rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
