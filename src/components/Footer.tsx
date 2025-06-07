import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import ScrollLink from './ScrollLink';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Definición de tipos para los elementos del footer
  type FooterLinkItem = {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };

  type FooterLinkColumn = {
    title: string;
    items: FooterLinkItem[];
  };

  const footerLinks: FooterLinkColumn[] = [
    {
      title: 'Contacto',
      items: [
        { icon: <FiMail className="w-5 h-5" />, text: 'tamara@arquitecta.com', href: 'mailto:tamara@arquitecta.com' },
        { icon: <FiPhone className="w-5 h-5" />, text: '+54 9 11 1234-5678', href: 'tel:+541112345678' },
        { icon: <FiMapPin className="w-5 h-5" />, text: 'Buenos Aires, Argentina', href: 'https://maps.google.com/?q=Buenos+Aires' }
      ]
    },
    {
      title: 'Enlaces Rápidos',
      items: [
        { text: 'Inicio', href: '#hero' },
        { text: 'Sobre Mí', href: '#sobre-mi' },
        { text: 'Servicios', href: '#servicios' },
        { text: 'Proyectos', href: '#proyectos' },
        { text: 'Testimonios', href: '#testimonios' },
        { text: 'Contacto', href: '#contacto' }
      ]
    },
    {
      title: 'Redes Sociales',
      items: [
        { icon: <FiInstagram className="w-5 h-5" />, text: '@tamara.arquitecta', href: 'https://instagram.com' },
        { icon: <FiLinkedin className="w-5 h-5" />, text: 'Tamara Gomez', href: 'https://linkedin.com' }
      ]
    }
  ];

  return (
    <footer className="relative bg-[#F9FAFB] border-t border-gray-200 pt-12 pb-8">
      {/* Elemento decorativo superior - Versión simplificada */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-[#2C3E50] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-[#D6B77A] via-[#2C3E50] to-[#D6B77A]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Contenido principal - Versión móvil */}
        <div className="md:hidden text-center mb-8">
          <h3 className="font-serif text-2xl font-bold text-[#2C3E50] mb-4">Tamara Gomez</h3>
          <p className="text-[#6B7280] mb-6">
            Transformando ideas en espacios que inspiran, innovan y perduran en el tiempo.
          </p>
          
          {/* Redes sociales */}
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-[#2C3E50] hover:bg-[#D6B77A] hover:text-white transition-colors shadow-md"
              whileHover={{ y: -3 }}
            >
              <FiInstagram className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-[#2C3E50] hover:bg-[#D6B77A] hover:text-white transition-colors shadow-md"
              whileHover={{ y: -3 }}
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
          </div>
          
          {/* Contacto simplificado */}
          <div className="space-y-4 mb-6">
            <a 
              href="mailto:tamara@arquitecta.com" 
              className="flex items-center justify-center text-[#6B7280] hover:text-[#D6B77A] transition-colors"
            >
              <FiMail className="w-5 h-5 mr-2" />
              <span>tamara@arquitecta.com</span>
            </a>
            <a 
              href="tel:+541112345678" 
              className="flex items-center justify-center text-[#6B7280] hover:text-[#D6B77A] transition-colors"
            >
              <FiPhone className="w-5 h-5 mr-2" />
              <span>+54 9 11 1234-5678</span>
            </a>
          </div>
        </div>
        
        {/* Versión escritorio */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-[#2C3E50] mb-4">Tamara Gomez</h3>
            <p className="text-[#6B7280] mb-6">
              Transformando ideas en espacios que inspiran, innovan y perduran en el tiempo.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#2C3E50] hover:bg-[#D6B77A] hover:text-white transition-colors shadow-md"
                whileHover={{ y: -3 }}
              >
                <FiInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#2C3E50] hover:bg-[#D6B77A] hover:text-white transition-colors shadow-md"
                whileHover={{ y: -3 }}
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Columnas de enlaces */}
          {footerLinks.map((column, index) => (
            <div key={index} className="lg:pl-8">
              <h4 className="font-serif text-lg font-semibold text-[#2C3E50] mb-4 relative pb-2">
                {column.title}
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#D6B77A]"></span>
              </h4>
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <motion.div whileHover={{ x: 5 }}>
                      {item.href.startsWith('#') ? (
                        <ScrollLink 
                          to={item.href.substring(1)} 
                          className="flex items-center text-[#6B7280] hover:text-[#D6B77A] transition-colors"
                        >
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          <span>{item.text}</span>
                        </ScrollLink>
                      ) : (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-[#6B7280] hover:text-[#D6B77A] transition-colors"
                        >
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          <span>{item.text}</span>
                        </a>
                      )}
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Derechos de autor */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-[#6B7280] text-sm mb-4 md:mb-0">
            © {currentYear} Tamara Gomez. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link to="/politica-de-privacidad" className="text-[#6B7280] hover:text-[#D6B77A] text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/terminos-de-servicio" className="text-[#6B7280] hover:text-[#D6B77A] text-sm transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
