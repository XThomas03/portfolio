// src/components/Experience.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolioData';
import Section from './Section';

/**
 * Componente Experience - Sección de experiencia laboral
 * Muestra el historial profesional con detalles de cada posición
 * Cards interactivas con animaciones y efectos hover
 * Soporte para modo oscuro
 */
const Experience: React.FC = () => {
  return (
    <Section id="experiencia" title="Experiencia Laboral" className="bg-custom-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        {/* Timeline de experiencias */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              // CORRECCIÓN: Reducida la duración de la transición de hover de Tailwind
              className="bg-gray-50 dark:bg-dark-surface rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-200"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              // CORRECCIÓN: Reducida la duración y el delay para una aparición más rápida
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Header del trabajo */}
              <div className="flex items-start justify-between mb-4 flex-wrap">
                <div className="flex items-center mb-2">
                  <motion.div 
                    className="bg-river-red p-2 rounded-full text-custom-white mr-3"
                    whileHover={{ rotate: 360 }}
                    // CORRECCIÓN: Reducida la duración de la rotación
                    transition={{ duration: 0.4 }}
                  >
                    <Briefcase size={20} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-custom-black dark:text-dark-text">{exp.role}</h3>
                    <p className="text-lg text-bayern-red font-semibold">{exp.company}</p>
                  </div>
                </div>
                
                {/* Período de trabajo */}
                <motion.div 
                  className="flex items-center text-custom-gray dark:text-dark-text-secondary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Calendar size={16} className="mr-1" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </motion.div>
              </div>

              {/* Lista de tareas y responsabilidades */}
              <div className="space-y-3">
                {exp.tasks.map((task, taskIndex) => (
                  <motion.div
                    key={taskIndex}
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    // CORRECCIÓN: Reducida la duración y el delay para que las tareas aparezcan más rápido
                    transition={{ duration: 0.25, delay: 0.1 + taskIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="text-river-red mr-3 mt-1 group-hover:scale-110 transition-transform duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <ChevronRight size={16} />
                    </motion.div>
                    <p className="text-custom-black dark:text-dark-text leading-relaxed">{task}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
