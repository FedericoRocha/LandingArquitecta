import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

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
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [direction, setDirection] = React.useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  return (
    <SectionWrapper 
      id="testimonios" 
      className="bg-white py-24 overflow-hidden"
      withTopDivider
    >
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#F4F4F5] text-[#D6B77A] font-medium rounded-full text-sm mb-4 shadow-sm">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            Testimonios <span className="text-[#2C3E50]">Destacados</span>
          </h2>
          <div className="w-20 h-1 bg-[#D6B77A] mx-auto mb-12"></div>
        </div>

        {/* Contenedor de testimonios */}
        <div className="relative">
          {/* Flechas de navegación */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-3 rounded-full shadow-lg z-10 text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-colors duration-300 hidden md:block"
            aria-label="Anterior testimonio"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-3 rounded-full shadow-lg z-10 text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-colors duration-300 hidden md:block"
            aria-label="Siguiente testimonio"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial activo */}
          <div className="relative">
            <motion.div
              key={testimonials[currentTestimonial].id}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white p-8 rounded-xl shadow-xl max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-gradient-to-br from-[#2C3E50] to-[#D6B77A] p-1 rounded-full inline-block">
                    <div className="bg-white p-1 rounded-full">
                      <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-[#F4F4F5] flex items-center justify-center text-4xl text-[#2C3E50] font-bold">
                          {testimonials[currentTestimonial].author.charAt(0)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-[#D6B77A] fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg text-[#4B5563] italic mb-6">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-[#2C3E50]">{testimonials[currentTestimonial].author}</p>
                    <p className="text-sm text-[#6B7280]">
                      {testimonials[currentTestimonial].role}
                      <span className="mx-2">•</span>
                      {testimonials[currentTestimonial].project}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
