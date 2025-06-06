import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import perfilImage from '../assets/images/perfil.jpeg';

const About: React.FC = () => {
  return (
    <SectionWrapper 
      id="sobre" 
      className="py-24 bg-white overflow-hidden"
      withTopDivider
    >
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#F4F4F5] text-[#D6B77A] font-medium rounded-full text-sm mb-4">Sobre Mí</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            Pasión por el <span className="text-[#2C3E50]">diseño arquitectónico</span>
          </h2>
          <div className="w-20 h-1 bg-[#D6B77A] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Columna de la imagen */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl w-full h-[28rem] flex items-center justify-center bg-gray-50 p-4 transition-transform duration-700 hover:scale-105 hover:shadow-xl">
              <div className="w-full h-full relative">
                <img 
                  src={perfilImage} 
                  alt="Tamara Gómez - Arquitecta" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#D6B77A] rounded-lg -z-0"></div>
            
            {/* Experiencia destacada */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 shadow-lg rounded-lg z-20 max-w-[200px]">
              <div className="text-3xl font-bold text-[#2C3E50] mb-1">4+</div>
              <div className="text-xs text-[#6B7280]">Años de experiencia en diseño arquitectónico</div>
            </div>
          </div>

          {/* Columna del texto */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#111827] font-bold mb-6">
              Transformando ideas en espacios excepcionales
            </h3>
            
            <p className="text-[#6B7280] mb-8 leading-relaxed">
              Como arquitecta apasionada por el diseño, me especializo en crear espacios que combinan funcionalidad, estética y sostenibilidad. 
              Mi enfoque se centra en entender las necesidades únicas de cada cliente para ofrecer soluciones personalizadas que superen expectativas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#F4F4F5] p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#D6B77A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#111827] mb-1">Diseño Arquitectónico</h4>
                  <p className="text-sm text-[#6B7280]">Soluciones creativas y funcionales adaptadas a tus necesidades</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#F4F4F5] p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#D6B77A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#111827] mb-1">Dirección de Obra</h4>
                  <p className="text-sm text-[#6B7280]">Supervisión profesional para garantizar la excelencia en cada detalle</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#F4F4F5] p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#D6B77A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#111827] mb-1">Visualización 3D</h4>
                  <p className="text-sm text-[#6B7280]">Representaciones fotorrealistas de tus futuros espacios</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                variant="primary" 
                className="bg-[#2C3E50] hover:bg-[#1F2937] text-white px-8 py-4 text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl mr-4"
                onClick={() => window.open('https://www.linkedin.com/in/tu-perfil', '_blank')}
              >
                <svg className="w-5 h-5 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Conectar en LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
