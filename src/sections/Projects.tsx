import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Casa Lago',
    type: 'Residencial',
    location: 'Bariloche, Argentina',
    year: '2023',
    description: 'Vivienda unifamiliar con vistas al lago y diseño sustentable que se integra armoniosamente con el entorno natural.',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Diseño Sustentable', 'Vistas al Lago', 'Madera y Vidrio']
  },
  {
    id: 2,
    title: 'Edificio Centro',
    type: 'Multifamiliar',
    location: 'Buenos Aires, Argentina',
    year: '2022',
    description: 'Edificio de departamentos con amenities y espacios flexibles en el corazón de la ciudad.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Diseño Urbano', 'Eficiencia Energética', 'Espacios Comunes']
  },
  {
    id: 3,
    title: 'Casa Patio',
    type: 'Residencial',
    location: 'Córdoba, Argentina',
    year: '2023',
    description: 'Casa con patio central que organiza los espacios interiores y crea una conexión única con el exterior.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Patio Central', 'Luz Natural', 'Integración Interior-Exterior']
  },
  {
    id: 4,
    title: 'Oficinas Creativas',
    type: 'Comercial',
    location: 'Mendoza, Argentina',
    year: '2023',
    description: 'Espacio de trabajo colaborativo con diseño innovador que fomenta la creatividad y el bienestar laboral.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Diseño de Interiores', 'Eficiencia', 'Espacios Flexibles']
  }
];

const Projects: React.FC = () => {
  // Estado para manejar el hover en los proyectos
  const [, setHoveredProject] = React.useState<number | null>(null);

  return (
    <SectionWrapper 
      id="proyectos" 
      className="py-24 bg-white overflow-hidden"
      withTopDivider
    >
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#F4F4F5] text-[#D6B77A] font-medium rounded-full text-sm mb-4 shadow-sm">
            Portafolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            Nuestros <span className="text-[#2C3E50]">Proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-[#D6B77A] mx-auto mb-12"></div>
          <p className="max-w-3xl mx-auto text-[#6B7280] text-lg leading-relaxed">
            Descubre una selección de nuestros trabajos más representativos, donde la innovación y el diseño se fusionan para crear espacios únicos y funcionales.
          </p>
        </div>

        {/* Galería de proyectos */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative rounded-xl overflow-hidden shadow-lg h-[500px]"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Imagen de fondo con borde dorado mejorado */}
              <div className="absolute inset-0 overflow-hidden group">
                {/* Capa de borde dorado exterior */}
                <div 
                  className="absolute inset-0 border-3 border-transparent group-hover:border-[#D6B77A] transition-all duration-500 rounded-xl z-10 pointer-events-none"
                  style={{
                    boxShadow: '0 0 0 1px rgba(214, 183, 122, 0.3) inset'
                  }}
                ></div>
                
                {/* Contenedor de la imagen con borde interior */}
                <div className="absolute inset-1.5 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay de gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Efecto de brillo dorado al hacer hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500" 
                  style={{
                    boxShadow: 'inset 0 0 40px rgba(214, 183, 122, 0.4)',
                    border: '1px solid rgba(214, 183, 122, 0.5)'
                  }}
                ></div>
                
                {/* Efecto de resplandor exterior */}
                <div 
                  className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: '0 0 25px rgba(214, 183, 122, 0.4)',
                    zIndex: -1
                  }}
                ></div>
              </div>

              {/* Contenido */}
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                {/* Etiqueta de tipo */}
                <span className="inline-block px-3 py-1 bg-[#D6B77A] text-white text-xs font-medium rounded-full mb-4 self-start">
                  {project.type}
                </span>
                
                {/* Título y ubicación */}
                <div className="mb-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-1">{project.title}</h3>
                  <div className="flex items-center text-sm text-gray-300">
                    <span>{project.location}</span>
                    <span className="mx-2">•</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Descripción */}
                <p className="text-gray-200 mb-6 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* <button 
                  className="flex items-center px-6 py-2 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#2C3E50] transition-all duration-300"
                  onClick={() => {
                    // Aquí podrías agregar la lógica para ver más detalles del proyecto
                    console.log(`Ver proyecto: ${project.title}`);
                  }}
                >
                  Ver proyecto
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>  */}
              </div>

              {/* Efecto de hover */}
              <div className={`absolute inset-0 bg-gradient-to-t from-[#2C3E50] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </div>

        {/* Llamado a la acción */}
        <div className="mt-20 text-center">
          <p className="text-[#6B7280] mb-6">¿Te gustaría ver más de nuestros proyectos?</p>
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
};

export default Projects;
