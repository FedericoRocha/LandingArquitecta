import React, { useState, useEffect } from 'react';
import ScrollLink from './ScrollLink';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Actualizar sección activa
      const sections = ['hero', 'sobre', 'servicios', 'proyectos', 'testimonios', 'contacto'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, activeSection]);

  const navItems = [
    { id: 'sobre', label: 'Sobre mí' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <div className="relative">
      <nav 
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled 
            ? 'bg-white shadow-md py-1 border-b border-gray-100 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#D6B77A]/80 after:to-transparent after:opacity-100' 
            : 'bg-white/95 py-2 backdrop-blur-sm shadow-sm after:opacity-0 after:transition-opacity after:duration-300'
        }`}
      >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <ScrollLink 
            to="hero" 
            className="font-serif text-2xl font-bold text-[#2C3E50] cursor-pointer hover:text-[#D6B77A] transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative">
              Tamara Gomez
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#D6B77A] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </ScrollLink>

          {/* Menú de escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                <ScrollLink 
                  to={item.id}
                  className={`text-[15px] font-medium relative group transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-[#D6B77A] font-semibold'
                      : 'text-[#2C3E50] hover:text-[#D6B77A] hover:bg-gray-50 rounded-md px-3 py-1.5'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#D6B77A] transition-all duration-200 group-hover:w-3/4 ${
                    activeSection === item.id ? 'w-3/4' : ''
                  }`}></span>
                </ScrollLink>
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeNavItem"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D6B77A]"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Botón móvil */}
          <button 
            className="md:hidden p-2 text-[#2C3E50] focus:outline-none transition-transform duration-200 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú de navegación"
            aria-expanded={mobileMenuOpen}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ 
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
              height: { duration: 0.4 },
              opacity: { duration: 0.3 }
            }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm shadow-lg"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'text-[#D6B77A] bg-gray-50 font-semibold'
                      : 'text-[#2C3E50] hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
