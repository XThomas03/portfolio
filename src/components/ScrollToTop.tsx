// src/components/ScrollToTop.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

/**
 * Componente ScrollToTop - Botón flotante para volver al inicio
 * Aparece cuando el usuario hace scroll hacia abajo y desaparece al llegar arriba
 * Implementa scroll suave al hacer clic
 */
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detectar cuando mostrar/ocultar el botón basado en la posición del scroll
  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón cuando el usuario haya hecho scroll más de 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Agregar listener del evento scroll
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup: remover listener al desmontar
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Función para hacer scroll suave al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-river-red hover:bg-bayern-red text-custom-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-river-red focus:ring-opacity-50 dark:bg-river-red dark:hover:bg-bayern-red"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          aria-label="Volver al inicio de la página"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;