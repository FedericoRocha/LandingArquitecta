import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-[#D6B77A] hover:text-[#2C3E50] transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
            Política de Privacidad
          </h1>
          <div className="w-20 h-1 bg-[#D6B77A] mb-8"></div>
          
          <div className="prose max-w-none text-[#6B7280] space-y-6">
            <p>Última actualización: 7 de junio de 2025</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">1. Introducción</h2>
              <p>
                En Tamara Gomez, valoramos su privacidad y nos comprometemos a proteger su información personal. 
                Esta política explica cómo recopilamos, usamos y protegemos su información cuando visita nuestro sitio web.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">2. Información que Recopilamos</h2>
              <p>Podemos recopilar la siguiente información:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Información de contacto (nombre, correo electrónico, teléfono)</li>
                <li>Información de navegación (dirección IP, tipo de navegador, páginas visitadas)</li>
                <li>Información que nos proporciona al contactarnos o solicitar nuestros servicios</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">3. Uso de la Información</h2>
              <p>Utilizamos su información para:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Responder a sus consultas y solicitudes</li>
                <li>Enviar actualizaciones y comunicaciones relacionadas con nuestros servicios</li>
                <li>Mejorar la experiencia del usuario en nuestro sitio web</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">4. Protección de Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal 
                contra el acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">5. Sus Derechos</h2>
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Acceder a su información personal</li>
                <li>Solicitar la corrección de datos inexactos</li>
                <li>Solicitar la eliminación de sus datos personales</li>
                <li>Oponerse al procesamiento de sus datos</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, contáctenos en <a href="mailto:privacidad@tamaraarquitecta.com" className="text-[#D6B77A] hover:underline">privacidad@tamaraarquitecta.com</a>.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">6. Cambios en esta Política</h2>
              <p>
                Podemos actualizar esta política ocasionalmente. Le notificaremos cualquier cambio publicando 
                la nueva política en esta página y actualizando la fecha de "Última actualización".
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">7. Contacto</h2>
              <p>
                Si tiene preguntas sobre esta política de privacidad, contáctenos en:
              </p>
              <address className="not-italic mt-2">
                <p>Email: <a href="mailto:privacidad@tamaraarquitecta.com" className="text-[#D6B77A] hover:underline">privacidad@tamaraarquitecta.com</a></p>
                <p>Teléfono: +54 9 11 1234-5678</p>
                <p>Dirección: Buenos Aires, Argentina</p>
              </address>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
