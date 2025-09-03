// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navSections } from '../data/portfolioData';
import { useTheme } from '../contexts/ThemeContext';

// Props del componente Navbar
interface NavbarProps {
  activeSection: string;
}

/**
 * Componente de navegación principal del portfolio
 * - Navegación sticky en la parte superior
 * - Indicador visual de la sección activa
 * - Menú hamburguesa responsivo para móviles
 * - Animaciones suaves en las transiciones
 * - Toggle de modo oscuro/claro
 * * @param activeSection - Sección actualmente visible (para resaltar en el menú)
 */
const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  // Estado para controlar la visibilidad del menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Hook para manejar el tema
  const { theme, toggleTheme } = useTheme();

  /**
   * Maneja el clic en los enlaces de navegación
   * Cierra el menú móvil y hace scroll suave a la sección
   */
  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-custom-black dark:bg-dark-bg shadow-lg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo con fondo luminoso para visibilidad */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href="#inicio" 
              aria-label="Volver al inicio"
              // Contenedor con un gradiente radial que simula un resplandor
              className="flex items-center justify-center rounded-full p-1 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),rgba(255,255,255,0))] transition-all duration-300 hover:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2),rgba(255,255,255,0))]"
            >
              {/* Usamos solo el logo principal (letras negras) que ahora resalta sobre el resplandor */}
              <img
                className="h-12 w-auto" // Ajustamos el tamaño para que se vea bien con el padding
                src="/assets/logo-principal.png"
                alt="Logo de Kevin Thomas Avila"
              />
            </a>
          </motion.div>

          {/* Navegación desktop con toggle de tema */}
          <div className="hidden md:flex items-center space-x-8">
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                // CORRECCIÓN: Eliminadas las clases focus:ring-*
                className={`text-custom-white dark:text-dark-text hover:text-river-red transition-colors duration-300 pb-1 focus:outline-none rounded ${
                  activeSection === section.id 
                    ? 'border-b-2 border-river-red text-river-red' 
                    : ''
                }`}
                aria-label={`Navegar a la sección ${section.label}`}
              >
                {section.label}
              </button>
            ))}
            
            {/* Toggle de modo oscuro */}
            <motion.button
              onClick={toggleTheme}
              // CORRECCIÓN: Eliminadas las clases focus:ring-*
              className="text-custom-white dark:text-dark-text hover:text-river-red transition-colors duration-300 p-2 rounded-full hover:bg-gray-800 dark:hover:bg-dark-surface focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
          </div>

          {/* Controles móviles */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Toggle de tema móvil */}
            <motion.button
              onClick={toggleTheme}
              className="text-custom-white dark:text-dark-text hover:text-river-red transition-colors duration-300 p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
            
            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              // CORRECCIÓN: Eliminadas las clases focus:ring-*
              className="text-custom-white dark:text-dark-text hover:text-river-red transition-colors duration-300 focus:outline-none rounded"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-custom-black dark:bg-dark-bg border-t border-custom-gray dark:border-dark-text-secondary"
            >
              <div className="py-4 space-y-2">
                {navSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleNavClick(section.id)}
                    // CORRECCIÓN: Eliminadas las clases focus:ring-*
                    className={`block w-full text-left px-4 py-2 text-custom-white dark:text-dark-text hover:text-river-red hover:bg-gray-800 dark:hover:bg-dark-surface transition-all duration-300 focus:outline-none ${
                      activeSection === section.id ? 'text-river-red bg-gray-800' : ''
                    }`}
                    aria-label={`Navegar a la sección ${section.label}`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
