import React from 'react';
import ScrollLink from './ScrollLink';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white/90 shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <ScrollLink to="hero" className="font-serif text-2xl text-gray-900 font-bold tracking-tight cursor-pointer">
          Tamara G
        </ScrollLink>
        <ul className="flex gap-6 font-sans text-gray-900">
          <li><ScrollLink to="sobre" className="hover:text-[#2C3E50] transition-colors">Sobre mí</ScrollLink></li>
          <li><ScrollLink to="servicios" className="hover:text-[#2C3E50] transition-colors">Servicios</ScrollLink></li>
          <li><ScrollLink to="proyectos" className="hover:text-[#2C3E50] transition-colors">Proyectos</ScrollLink></li>
          <li><ScrollLink to="testimonios" className="hover:text-[#2C3E50] transition-colors">Testimonios</ScrollLink></li>
          <li><ScrollLink to="contacto" className="hover:text-[#2C3E50] transition-colors">Contacto</ScrollLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
