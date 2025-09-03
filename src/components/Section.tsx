// src/components/Section.tsx
import React from 'react';
import { motion } from 'framer-motion';

// Props del componente Section - usado para envolver cada sección del portfolio
interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Componente genérico reutilizable para las secciones del portfolio
 * Aplica animaciones de entrada cuando la sección entra en el viewport
 * Soporte para modo oscuro
 * 
 * @param id - ID único de la sección para navegación
 * @param title - Título opcional de la sección
 * @param children - Contenido de la sección
 * @param className - Clases CSS adicionales opcionales
 */
const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-custom-black dark:text-dark-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;