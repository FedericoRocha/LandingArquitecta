import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { FiExternalLink } from 'react-icons/fi';

const services = [
  {
    icon: (
      <svg className="w-12 h-12 text-[#D6B77A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Diseño Residencial',
    description: 'Proyectos de viviendas personalizadas, reformas y ampliaciones que combinan funcionalidad y estética.',
    features: ['Diseño a medida', 'Reformas integrales', 'Ampliaciones', 'Rehabilitación']
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#D6B77A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Visualización 3D',
    description: 'Representaciones fotorrealistas que te permitirán visualizar tus espacios antes de construirlos.',
    features: ['Renders 3D', 'Recorridos virtuales', 'Fotomontajes', 'Infografías']
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#D6B77A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Dirección de Obra',
    description: 'Supervisión profesional para garantizar la excelencia en cada detalle de tu proyecto constructivo.',
    features: ['Planificación', 'Coordinación', 'Control de calidad', 'Entrega llave en mano']
  },
];

const Services: React.FC = () => (
  <SectionWrapper 
    id="servicios" 
    className="py-24 bg-[#F9FAFB]"
    withTopDivider
  >
    
    <div className="max-w-7xl mx-auto px-6">
      {/* Encabezado */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-white text-[#D6B77A] font-medium rounded-full text-sm mb-4 shadow-sm">
          Servicios Profesionales
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111827] mb-6">
          Soluciones a <span className="text-[#2C3E50]">tu medida</span>
        </h2>
        <div className="w-20 h-1 bg-[#D6B77A] mx-auto"></div>
      </div>

      {/* Grid de servicios */}
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {services.map((service, idx) => (
          <div 
            key={idx}
            className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Borde dorado */}
            <div 
              className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
              style={{
                border: '2px solid #D6B77A',
                zIndex: 1,
                opacity: 0.7
              }}
            />
            {/* Efecto de brillo al hacer hover */}
            <div 
              className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{
                boxShadow: '0 0 20px rgba(214, 183, 122, 0.7)',
                zIndex: 0
              }}
            />
            <div className="p-8 relative z-10">
              {/* Icono */}
              <div className="w-16 h-16 flex items-center justify-center bg-[#F4F4F5] rounded-full mb-6 group-hover:bg-[#D6B77A] transition-colors duration-300">
                <div className="text-[#D6B77A] group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(service.icon, {
                    className: 'w-12 h-12',
                    fill: 'none',
                    stroke: 'currentColor'
                  })}
                </div>
              </div>
              
              {/* Título */}
              <h3 className="font-serif text-2xl font-bold text-[#111827] mb-4">
                {service.title}
              </h3>
              
              {/* Descripción */}
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Características */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center group/feature">
                    <div className="relative flex-shrink-0 w-4 h-4 mr-2">
                      {/* Fondo circular dorado */}
                      <div className="absolute inset-0 bg-[#D6B77A] rounded-full group-hover/feature:bg-[#D6B77A] transition-colors duration-300"></div>
                      {/* Ícono de check en blanco */}
                      <svg 
                        className="relative w-full h-full text-white p-0.5" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#6B7280] group-hover/feature:text-[#2C3E50] transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Botón */}
              <div className="mt-8">
                <Button 
                  variant="primary" 
                  className="w-full border-2 border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white px-8 py-3 text-lg transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => {
                    const element = document.getElementById('contacto');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Saber más
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Llamado a la acción */}
      <div className="mt-20 text-center relative z-10">
        <p className="text-[#6B7280] mb-6">¿Necesitas un servicio personalizado?</p>
        <Button 
          variant="primary" 
          className="bg-[#2C3E50] hover:bg-[#1F2937] text-white px-8 py-4 text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          onClick={() => {
            const element = document.getElementById('contacto');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span>Hablemos de tu proyecto</span>
          <FiExternalLink className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  </SectionWrapper>
);

export default Services;
