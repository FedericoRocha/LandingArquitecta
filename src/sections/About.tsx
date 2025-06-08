import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import perfilImage from '../assets/images/perfil.jpeg';

// Estilos base para la tarjeta
const baseCardStyle: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  borderRadius: '0.5rem',
  padding: '0.75rem',
  backgroundColor: 'white',
  border: '1px solid rgba(214, 183, 122, 0.3)',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
  overflow: 'hidden'
};


const cardContainerStyle: React.CSSProperties = {
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  WebkitTransformStyle: 'preserve-3d',
  width: '100%',
  height: '100%',
  position: 'relative',
  cursor: 'pointer'
};

// Estilo para el frente de la tarjeta
const frontCardStyle: React.CSSProperties = {
  ...baseCardStyle,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  background: 'linear-gradient(135deg, #fff 0%, #f9fafb 100%)',
  '--tw-ring-color': 'rgba(214, 183, 122, 0.5)'
} as React.CSSProperties;

// Estilo para el reverso de la tarjeta
const backCardStyle: React.CSSProperties = {
  ...baseCardStyle,
  transform: 'rotateY(180deg)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #fff 0%, #f9fafb 100%)',
  borderColor: 'rgba(214, 183, 122, 0.5)'
};

// Estilo para el efecto de borde dorado
const borderGlowStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: '0.5rem',
  padding: '1px',
  background: 'linear-gradient(135deg, rgba(214, 183, 122, 0.3) 0%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0) 60%, rgba(214, 183, 122, 0.3) 100%)',
  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
  WebkitMaskComposite: 'xor',
  maskComposite: 'exclude',
  pointerEvents: 'none'
};

const About: React.FC = () => {
  // Estado para controlar el giro de la tarjeta (solo en desktop)
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  // Detectar si es móvil
  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verificar al cargar
    checkIfMobile();
    
    // Y si cambia el tamaño de la ventana
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Manejar hover solo en desktop
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsFlipped(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsFlipped(false);
    }
  };

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
            <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl w-full h-[28rem] flex items-center justify-center bg-gray-50 p-2 transition-transform duration-700 hover:scale-105 hover:shadow-xl border-2 border-[#D6B77A] md:border-0">
              <div className="w-full h-full relative">
                <img 
                  src={perfilImage} 
                  alt="Tamara Gomez - Arquitecta" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 w-full h-full border-2 border-[#D6B77A] rounded-lg -z-0"></div>
            
            {/* Tarjeta de experiencia con efecto flip */}
            {isMobile ? (
              // Versión estática para móviles
              <div className="absolute -bottom-2 -left-2 z-20 w-[140px] h-20 sm:w-[160px] sm:h-24 bg-white shadow-lg rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#2C3E50] mb-0.5">4+</div>
                <div className="text-[11px] sm:text-xs font-medium text-[#6B7280] tracking-wide leading-tight">Años de experiencia</div>
              </div>
            ) : (
              // Versión con efecto flip para escritorio
              <div 
                className="absolute -bottom-2 -left-2 z-20 w-[200px] h-28" 
                style={{ perspective: '1000px' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  className="relative w-full h-full"
                  style={{
                    ...cardContainerStyle,
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
                    WebkitTransform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'
                  }}
                >
                  {/* Efecto de borde dorado */}
                  <div style={borderGlowStyle}></div>
                  
                  {/* Frente de la tarjeta */}
                  <div style={frontCardStyle}>
                    <div className="relative z-10">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3E50] mb-0.5">4+</div>
                      <div className="text-[11px] sm:text-xs font-medium text-[#6B7280] tracking-wide leading-tight">Años de experiencia</div>
                    </div>
                  </div>
                  
                  {/* Reverso de la tarjeta */}
                  <div style={backCardStyle}>
                    <div className="text-xs text-[#4B5563] space-y-1.5">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-[#D6B77A] rounded-full mr-2 flex-shrink-0"></div>
                        <span className="font-medium">+10 Proyectos</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-[#D6B77A] rounded-full mr-2 flex-shrink-0"></div>
                        <span className="font-medium">Arquitecta Certificada</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
              <div className="flex items-start group">
                <div className="bg-[#F4F4F5] p-2 rounded-full mr-4 transition-all duration-300 group-hover:bg-[#D6B77A] group-hover:scale-110">
                  <svg className="w-6 h-6 text-[#D6B77A] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#111827] mb-1">Diseño Arquitectónico</h4>
                  <p className="text-sm text-[#6B7280]">Soluciones creativas y funcionales adaptadas a tus necesidades</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-[#F4F4F5] p-2 rounded-full mr-4 transition-all duration-300 group-hover:bg-[#D6B77A] group-hover:scale-110">
                  <svg className="w-6 h-6 text-[#D6B77A] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#111827] mb-1">Dirección de Obra</h4>
                  <p className="text-sm text-[#6B7280]">Supervisión profesional para garantizar la excelencia en cada detalle</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-[#F4F4F5] p-2 rounded-full mr-4 transition-all duration-300 group-hover:bg-[#D6B77A] group-hover:scale-110">
                  <svg className="w-6 h-6 text-[#D6B77A] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#111827] mb-1">Visualización 3D</h4>
                  <p className="text-sm text-[#6B7280]">Representaciones fotorrealistas de tus futuros espacios</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center md:text-left">
              <Button 
                variant="primary" 
                className="bg-[#2C3E50] hover:bg-[#1F2937] text-white px-8 py-4 text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl md:mr-4 group"
                onClick={() => window.open('https://www.linkedin.com/in/tu-perfil', '_blank')}
              >
                <svg className="w-5 h-5 mr-2 inline-block transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="inline-flex items-center">
                  Conectar en LinkedIn
                  <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
