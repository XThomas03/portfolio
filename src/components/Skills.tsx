// src/components/Skills.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Wrench, Monitor, Settings } from 'lucide-react';
import { skills } from '../data/portfolioData';
import Section from './Section';

/**
 * Componente Skills - Sección de habilidades técnicas
 * Organiza las habilidades en categorías con iconos representativos
 * Animaciones en grid con efectos hover individuales
 * Soporte para modo oscuro
 */
const Skills: React.FC = () => {
  // Mapeo de iconos para cada categoría de habilidades
  const categoryIcons = {
    'Lenguajes': Code,
    'Frameworks': Wrench,
    'Herramientas': Monitor,
    'Otros': Settings,
  };

  return (
    <Section id="habilidades" title={skills.title} className="bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        {/* Grid de categorías de habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.categories.map((category, categoryIndex) => {
            const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || Code;
            
            return (
              <motion.div
                key={category.name}
                // CORRECCIÓN: Reducida la duración de la transición de hover de Tailwind
                className="bg-custom-white dark:bg-dark-bg rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                // CORRECCIÓN: Reducida la duración y el delay
                transition={{ duration: 0.3, delay: categoryIndex * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Header de la categoría */}
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="bg-river-red p-2 rounded-full text-custom-white mr-3"
                    whileHover={{ rotate: 360 }}
                    // CORRECCIÓN: Reducida la duración de la rotación
                    transition={{ duration: 0.4 }}
                  >
                    <IconComponent size={20} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-custom-black dark:text-dark-text">{category.name}</h3>
                </div>

                {/* Lista de habilidades de la categoría */}
                <div className="space-y-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      // CORRECCIÓN: Reducida la duración de la transición de hover de Tailwind
                      className="bg-gray-100 dark:bg-dark-surface px-3 py-2 rounded-md text-sm text-custom-black dark:text-dark-text font-medium hover:bg-bayern-red hover:text-custom-white transition-all duration-200 cursor-default"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      // CORRECCIÓN: Reducida la duración y el delay
                      transition={{ 
                        duration: 0.2, 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mensaje motivacional */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          // CORRECCIÓN: Reducida la duración y el delay
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-custom-black dark:text-dark-text italic">
            "Siempre en constante aprendizaje y evolución tecnológica"
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
