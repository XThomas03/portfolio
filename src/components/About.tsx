// src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { aboutMe } from '../data/portfolioData';
import Section from './Section';

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
            className="flex justify-center mt-8 space-x-4"
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