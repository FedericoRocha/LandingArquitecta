import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
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
            Términos de Servicio
          </h1>
          <div className="w-20 h-1 bg-[#D6B77A] mb-8"></div>
          
          <div className="prose max-w-none text-[#6B7280] space-y-6">
            <p>Última actualización: 7 de junio de 2025</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar el sitio web de Tamara Gomez, usted acepta cumplir con estos Términos de Servicio. 
                Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">2. Uso del Sitio</h2>
              <p>Usted acepta utilizar el sitio web únicamente para fines legales y de acuerdo con estos Términos de Servicio. No debe:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Utilizar el sitio de manera fraudulenta o engañosa</li>
                <li>Intentar acceder a áreas restringidas sin autorización</li>
                <li>Interferir con la seguridad o el funcionamiento del sitio</li>
                <li>Utilizar el sitio para enviar material publicitario no solicitado</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">3. Propiedad Intelectual</h2>
              <p>
                Todo el contenido del sitio, incluyendo textos, gráficos, logotipos, imágenes y software, 
                es propiedad de Tamara Gomez y está protegido por las leyes de propiedad intelectual.
              </p>
              <p className="mt-4">
                No está permitido copiar, modificar, distribuir o utilizar el contenido sin autorización previa por escrito.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">4. Limitación de Responsabilidad</h2>
              <p>
                El sitio se proporciona "tal cual" y "según disponibilidad". Tamara Gomez no garantiza que el sitio 
                esté libre de errores o que esté disponible de forma ininterrumpida.
              </p>
              <p className="mt-4">
                En la máxima medida permitida por la ley, Tamara Gomez no será responsable por daños indirectos, incidentales, 
                especiales, consecuentes o punitivos que resulten del uso o la imposibilidad de usar el sitio.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">5. Enlaces a Terceros</h2>
              <p>
                El sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia. 
                No tenemos control sobre el contenido de estos sitios y no asumimos responsabilidad por ellos.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">6. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Las modificaciones 
                entrarán en vigor inmediatamente después de su publicación en el sitio. El uso continuado del sitio después de 
                dichas modificaciones constituye su aceptación de los nuevos términos.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">7. Ley Aplicable</h2>
              <p>
                Estos Términos de Servicio se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con 
                estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de la Ciudad Autónoma de Buenos Aires.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#2C3E50] mt-8 mb-4">8. Contacto</h2>
              <p>
                Si tiene preguntas sobre estos Términos de Servicio, contáctenos en:
              </p>
              <address className="not-italic mt-2">
                <p>Email: <a href="mailto:legal@tamaraarquitecta.com" className="text-[#D6B77A] hover:underline">legal@tamaraarquitecta.com</a></p>
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

export default TermsOfService;
