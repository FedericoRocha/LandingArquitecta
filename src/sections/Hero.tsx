import React from 'react';
import Button from '../components/Button';
import SectionWrapper from '../components/SectionWrapper';
import ScrollLink from '../components/ScrollLink';

const Hero: React.FC = () => {
  return (
    <SectionWrapper 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-white overflow-hidden"
      withTopDivider
    >
      {/* Fondo con formas geométricas sutiles */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#D6B77A] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#2C3E50] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#A3B18A] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-center md:text-left">
            <div className="inline-block mb-6 px-4 py-2 bg-[#F4F4F5] rounded-full">
              <span className="text-[#D6B77A] font-medium">Bienvenidos a mi portfolio</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#111827] font-bold mb-6 leading-tight">
              Tamara <span className="text-[#2C3E50]">Goméz</span>
            </h1>
            
            <div className="mb-8 flex justify-center md:justify-start">
              <h2 className="inline-block font-serif text-3xl md:text-5xl font-bold text-[#2C3E50] relative z-10 px-6 py-3 bg-white border-2 border-[#D6B77A] rounded-lg shadow-lg md:transform md:rotate-1 hover:rotate-0 transition-transform duration-300">
                <span className="relative z-10">Arquitecta</span>
                <div className="absolute -inset-1 bg-[#D6B77A] bg-opacity-20 -z-0 rounded-md"></div>
              </h2>
            </div>
            
            <p className="font-sans text-[#6B7280] text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Transformo ideas en espacios que inspiran, innovan y perduran en el tiempo. 
              Especializada en diseño arquitectónico que combina funcionalidad, estética y sostenibilidad.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <ScrollLink to="proyectos" className="block">
                <Button 
                  variant="primary" 
                  className="bg-[#2C3E50] hover:bg-[#1F2937] text-white px-8 py-4 text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Ver mis proyectos
                </Button>
              </ScrollLink>
              <ScrollLink to="contacto" className="block">
                <Button 
                  variant="primary" 
                  className="border-2 border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white px-8 py-4 text-lg transition-all duration-300"
                >
                  Contáctame
                </Button>
              </ScrollLink>
            </div>
          </div>
          
          {/* Imagen de arquitectura */}
          <div className="relative hidden md:block">
            <div className="relative z-10 w-full h-96 bg-[#F4F4F5] rounded-2xl overflow-hidden shadow-2xl transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Diseño arquitectónico moderno"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-serif text-2xl font-bold mb-2">Diseño Arquitectónico</h3>
                <p className="text-sm opacity-90">Innovación y elegancia en cada proyecto</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#D6B77A] rounded-2xl -z-0"></div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll (solo escritorio) */}
      <div className="hidden lg:block absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-y-4 animate-bounce">
        <div className="w-10 h-16 border-2 border-[#2C3E50] rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-[#2C3E50] rounded-full animate-pulse"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
