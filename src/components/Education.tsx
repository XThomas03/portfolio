// src/components/Education.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react';
import { education } from '../data/portfolioData';
import Section from './Section';

/**
 * Componente Education - Sección de información educativa
 * Muestra los estudios actuales, progreso y conocimientos adquiridos
 * Incluye animaciones de entrada y efectos hover en elementos interactivos
 * Soporte para modo oscuro
 */
const Education: React.FC = () => {
  return (
    <Section id="educacion" title={education.title} className="bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-4xl mx-auto">
        {/* Card principal de educación */}
        <motion.div 
          // CORRECCIÓN: Reducida la duración de la transición de hover de Tailwind
          className="bg-custom-white dark:bg-dark-bg rounded-lg shadow-lg hover:shadow-2xl p-8 md:p-12 transition-all duration-200"
          whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
          // CORRECCIÓN: Reducida la duración de la animación de Framer Motion
          transition={{ duration: 0.2 }}
        >
          {/* Header con icono y título de la institución */}
          <div className="flex items-center mb-6">
            <motion.div 
              className="bg-river-red p-3 rounded-full text-custom-white mr-4"
              whileHover={{ rotate: 360 }}
              // CORRECCIÓN: Reducida la duración de la rotación
              transition={{ duration: 0.4 }}
            >
              <GraduationCap size={24} />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-custom-black dark:text-dark-text">{education.institution}</h3>
              <p className="text-custom-gray dark:text-dark-text-secondary">{education.period}</p>
            </div>
          </div>

          {/* Información del título y progreso */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            // CORRECCIÓN: Reducida la duración y el delay
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-custom-black dark:text-dark-text mb-2">{education.degree}</h4>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <p className="text-custom-black dark:text-dark-text font-medium">{education.progress}</p>
            </div>
          </motion.div>

          {/* Sección de conocimientos adquiridos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // CORRECCIÓN: Reducida la duración y el delay
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <BookOpen className="text-bayern-red mr-2" size={20} />
              <h5 className="text-lg font-semibold text-custom-black dark:text-dark-text">Conocimientos Adquiridos</h5>
            </div>
            
            {/* Grid de conocimientos con animaciones escalonadas */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {education.knowledge.map((skill, index) => (
                <motion.div
                  key={skill}
                  // CORRECCIÓN: Reducida la duración de la transición de hover de Tailwind
                  className="bg-gray-100 dark:bg-dark-surface px-3 py-2 rounded-lg text-sm text-custom-black dark:text-dark-text font-medium text-center hover:bg-river-red hover:text-custom-white transition-all duration-200 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  // CORRECCIÓN: Reducida la duración y el delay para un efecto más rápido
                  transition={{ duration: 0.2, delay: 0.25 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Education;
