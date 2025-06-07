import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <FiMail className="w-8 h-8 text-[#D6B77A] mb-4" />,
      title: 'Correo Electrónico',
      value: 'tamara@arquitecta.com',
      href: 'mailto:tamara@arquitecta.com'
    },
    {
      icon: <FiPhone className="w-8 h-8 text-[#D6B77A] mb-4" />,
      title: 'Teléfono / WhatsApp',
      value: '+54 9 11 1234-5678',
      href: 'https://wa.me/541112345678'
    },
    {
      icon: <FiMapPin className="w-8 h-8 text-[#D6B77A] mb-4" />,
      title: 'Ubicación',
      value: 'Buenos Aires, Argentina',
      href: 'https://maps.google.com/?q=Buenos+Aires',
      isExternal: true
    }
  ];

  const socialLinks = [
    { icon: <FiInstagram className="w-6 h-6" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FiLinkedin className="w-6 h-6" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FiTwitter className="w-6 h-6" />, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <SectionWrapper id="contacto" className="bg-white py-24 pt-16 md:pt-24 relative overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D6B77A] to-[#2C3E50]"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#F4F4F5] text-[#D6B77A] font-medium rounded-full text-sm mb-4 shadow-sm mt-8 md:mt-12">
            Contáctame
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            Trabajemos <span className="text-[#2C3E50]">Juntos</span>
          </h2>
          <div className="w-20 h-1 bg-[#D6B77A] mx-auto mb-12"></div>
          <p className="max-w-2xl mx-auto text-[#6B7280] text-lg leading-relaxed">
            ¿Listo para comenzar tu próximo proyecto? Estoy aquí para ayudarte a hacerlo realidad. 
            Contáctame a través de cualquiera de estos medios y hablemos sobre cómo puedo ayudarte.
          </p>
        </div>

        {/* Tarjetas de contacto */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-center">
                <div className="inline-block p-4 bg-[#F9FAFB] rounded-full mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{method.title}</h3>
                <a 
                  href={method.href} 
                  target={method.isExternal ? "_blank" : "_self"} 
                  rel={method.isExternal ? "noopener noreferrer" : ""}
                  className="text-[#6B7280] hover:text-[#D6B77A] transition-colors duration-300 block"
                >
                  {method.value}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Redes Sociales */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-[#2C3E50] mb-6">Sígueme en redes sociales</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-[#2C3E50] text-white hover:bg-[#D6B77A] hover:text-[#2C3E50] rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {React.cloneElement(social.icon, { className: 'w-6 h-6' })}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
