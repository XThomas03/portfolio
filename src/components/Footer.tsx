// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

/**
 * Componente Footer - Pie de página del portfolio
 * Contiene información de copyright y enlaces a redes sociales
 * Diseño minimalista con efectos hover en los iconos sociales
 * Soporte para modo oscuro
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-black dark:bg-dark-bg text-custom-white dark:text-dark-text py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Información de copyright */}
          <motion.div 
            className="mb-6 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-custom-gray dark:text-dark-text-secondary">
              © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
            </p>
            <p className="text-xs text-custom-gray dark:text-dark-text-secondary mt-1">
              Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS
            </p>
          </motion.div>

          {/* Enlaces a redes sociales */}
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {personalInfo.socials.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="text-custom-white dark:text-dark-text hover:text-bayern-red transition-all duration-300 p-2 rounded-full hover:bg-gray-800 dark:hover:bg-dark-surface focus:outline-none focus:ring-2 focus:ring-bayern-red focus:ring-opacity-50"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  aria-label={`Ir a mi perfil de ${social.name}`}
                >
                  <IconComponent size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Línea divisoria */}
        <motion.div 
          className="border-t border-custom-gray dark:border-dark-text-secondary mt-8 pt-8 text-center"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-custom-gray dark:text-dark-text-secondary">
            "La tecnología es mejor cuando acerca a las personas" - Matt Mullenweg
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;