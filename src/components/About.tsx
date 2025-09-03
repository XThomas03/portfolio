import React from 'react';
import { motion } from 'framer-motion';

// --- INICIO DE LA CORRECCIÓN DE ERRORES DE COMPILACIÓN ---
// Datos y componentes de ejemplo para que el código compile de forma aislada
const aboutMe = {
  title: "Acerca de mí",
  content: "Soy un desarrollador de software con una sólida base académica en la Tecnicatura en Programación. Tengo conocimientos en el ciclo de desarrollo de aplicaciones, desde el manejo de datos con SQL y Python hasta la creación de interfaces de usuario. Me considero una persona responsable, resolutiva y colaborativa, con un gran deseo de seguir creciendo en entornos IT. Busco aplicar y ampliar mis habilidades en proyectos desafiantes, aportando ideas y soluciones que potencien al equipo y contribuyan al crecimiento de la empresa."
};

const Section: React.FC<{ id: string; title: string; className?: string; children: React.ReactNode }> = ({ id, title, className, children }) => (
  <section id={id} className={`py-20 ${className}`}>
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-12 text-custom-black dark:text-dark-text">{title}</h2>
      {children}
    </div>
  </section>
);
// --- FIN DE LA CORRECCIÓN DE ERRORES DE COMPILACIÓN ---

/**
 * Componente About - Sección "Acerca de mí"
 * Muestra la información personal y profesional del desarrollador
 * Utiliza el componente Section para mantener consistencia en el layout
 * Soporte para modo oscuro
 */
const About: React.FC = () => {
  return (
    <Section id="acerca" title={aboutMe.title} className="bg-custom-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        {/* Card principal con información personal */}
        <motion.div 
          className="bg-gray-50 dark:bg-dark-surface rounded-lg p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Contenido de la descripción personal */}
          <motion.p 
            className="text-lg md:text-xl text-custom-black dark:text-dark-text leading-relaxed text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {aboutMe.content}
          </motion.p>

          {/* Elementos decorativos con animación */}
          <motion.div 
            // --- CORRECCIÓN DE RESPONSIVE APLICADA AQUÍ ---
            className="flex flex-wrap justify-center mt-8 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Indicadores visuales de características */}
            <motion.div 
              className="bg-river-red text-custom-white px-4 py-2 rounded-full text-sm font-semibold"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Responsable
            </motion.div>
            <motion.div 
              className="bg-bayern-red text-custom-white px-4 py-2 rounded-full text-sm font-semibold"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Resolutivo
            </motion.div>
            <motion.div 
              className="bg-custom-black text-custom-white px-4 py-2 rounded-full text-sm font-semibold"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Colaborativo
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;

