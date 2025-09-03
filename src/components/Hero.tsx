// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

/**
 * Componente Hero - Sección principal de presentación del portfolio
 */
const Hero: React.FC = () => {
  return (
    // Se restauró el fondo original para que el modo oscuro funcione correctamente
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-surface flex items-center justify-center px-4 transition-colors duration-300 bg-dotted-pattern">
      
      {/* Contenido del Hero */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Animación del nombre principal */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-custom-black dark:text-dark-text mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {personalInfo.name}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-custom-gray dark:text-dark-text-secondary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.1 }}
        >
          📍 {personalInfo.location}
        </motion.p>
        <motion.p 
          className="text-lg md:text-xl text-custom-black dark:text-dark-text max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.15 }}
        >
          {personalInfo.tagline}
        </motion.p>
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.2 }}
        >
          <motion.a
            href="/CV-Kevin-Thomas-Avila.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-river-red hover:bg-bayern-red text-custom-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-river-red focus:ring-opacity-50"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Descargar CV en formato PDF"
          >
            <Download size={24} className="mr-3" />
            Descargar CV
          </motion.a>
        </motion.div>
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.25 }}
        >
          {personalInfo.socials.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="bg-custom-black dark:bg-dark-surface text-custom-white dark:text-dark-text p-4 rounded-full shadow-lg hover:bg-river-red dark:hover:bg-river-red hover:text-custom-white transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-river-red focus:ring-opacity-50"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.3 + index * 0.05 }}
                aria-label={`Ir a mi perfil de ${social.name}`}
              >
                <IconComponent size={24} />
              </motion.a>
            );
          })}
        </motion.div>
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-custom-gray dark:text-dark-text-secondary text-sm"
          >
            <div className="w-1 h-8 bg-custom-gray dark:bg-dark-text-secondary mx-auto rounded-full"></div>
            <p className="mt-2">Desplázate para conocer más</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
