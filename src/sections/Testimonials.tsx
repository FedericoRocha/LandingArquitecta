import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { useSwipeable } from 'react-swipeable';

const testimonials = [
  {
    id: 1,
    text: 'Trabajar con Tamara fue una experiencia excelente. Supo interpretar nuestras ideas y el resultado superó nuestras expectativas. Su atención al detalle y profesionalismo hicieron que todo el proceso fuera fluido y sin complicaciones.',
    author: 'María González',
    role: 'Cliente Residencial',
    rating: 5,
    project: 'Casa Lago, Bariloche'
  },
  {
    id: 2,
    text: 'Profesionalismo y dedicación en cada detalle. Como colega, valoro mucho su enfoque innovador y su capacidad para encontrar soluciones creativas a desafíos complejos. Recomiendo su trabajo sin dudarlo.',
    author: 'Carlos Mendoza',
    role: 'Arquitecto Colaborador',
    rating: 5,
    project: 'Proyecto Edificio Centro'
  },
  {
    id: 3,
    text: 'Increíble experiencia trabajando con Tamara. Su visión para el espacio y su capacidad para materializar ideas en diseños funcionales es excepcional. Definitivamente volvería a trabajar con ella en futuros proyectos.',
    author: 'Ana Lucía Ríos',
    role: 'Cliente Comercial',
    rating: 5,
    project: 'Oficinas Creativas, Mendoza'
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(0);

  const nextTestimonial = useCallback(() => {
    setSwipeDirection(1);
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prevTestimonial = useCallback(() => {
    setSwipeDirection(-1);
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const goToTestimonial = (index: number) => {
    setSwipeDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  // Configuración mejorada para el deslizamiento táctil
  const handlers = useSwipeable({
    onSwipedLeft: () => nextTestimonial(),
    onSwipedRight: () => prevTestimonial(),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
    delta: 10,
    swipeDuration: 300,
    touchEventOptions: { passive: true },
  });

  return (
    <SectionWrapper 
      id="testimonios" 
      className="bg-white pt-24 pb-16 overflow-hidden"
      withTopDivider
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#F4F4F5] text-[#D6B77A] font-medium rounded-full text-sm mb-4 shadow-sm">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            Testimonios <span className="text-[#2C3E50]">Destacados</span>
          </h2>
          <div className="w-20 h-1 bg-[#D6B77A] mx-auto mb-8"></div>
        </div>

        {/* Contenedor de testimonios */}
        <div className="relative">
          {/* Flechas de navegación */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-3 rounded-full shadow-lg z-20 text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-colors duration-300 hidden md:block"
            aria-label="Anterior testimonio"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-3 rounded-full shadow-lg z-20 text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-colors duration-300 hidden md:block"
            aria-label="Siguiente testimonio"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial activo - Contenedor de deslizamiento */}
          <div 
            className="relative w-full flex items-center py-8"
            {...handlers}
          >
            <div className="w-full">
              <AnimatePresence mode="wait" custom={swipeDirection}>
                <motion.div
                  key={currentTestimonial}
                  custom={swipeDirection}
                  initial={{ opacity: 0, x: swipeDirection > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: swipeDirection > 0 ? -100 : 100 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full group" style={{ minHeight: 'auto' }}
                >
                {/* Borde dorado */}
              <div className="absolute inset-0 border-3 border-transparent group-hover:border-[#D6B77A] transition-all duration-500 rounded-2xl pointer-events-none z-0"></div>
              
              {/* Efecto de brillo al hacer hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(214, 183, 122, 0.2)',
                  border: '1px solid rgba(214, 183, 122, 0.3)'
                }}
              ></div>
              
              {/* Resplandor exterior sutil */}
              <div 
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: '0 0 20px rgba(214, 183, 122, 0.2)'
                }}
              ></div>
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Imagen de perfil */}
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="bg-gradient-to-br from-[#2C3E50] to-[#D6B77A] p-1 rounded-full inline-block">
                    <div className="bg-white p-1 rounded-full">
                      <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-[#F4F4F5] flex items-center justify-center text-4xl text-[#2C3E50] font-bold">
                          {testimonials[currentTestimonial].author.charAt(0)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contenido del testimonio */}
                <div className="w-full md:w-2/3 flex flex-col h-full">
                  <div className="flex flex-col gap-4">
                    {/* Estrellas de valoración */}
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-[#D6B77A] fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    {/* Texto del testimonio */}
                    <blockquote className="text-base md:text-lg text-[#4B5563] italic mb-6 text-center md:text-left">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    
                    {/* Información del autor */}
                    <div className="mt-auto">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="font-bold text-[#2C3E50] text-center md:text-left">
                          {testimonials[currentTestimonial].author}
                        </p>
                        <p className="text-sm text-[#6B7280] text-center md:text-left">
                          {testimonials[currentTestimonial].role}
                          <span className="mx-2">•</span>
                          {testimonials[currentTestimonial].project}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-[#2C3E50] w-8' : 'bg-gray-300 hover:bg-[#D6B77A]'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
