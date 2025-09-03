// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

// Tipos para el contexto de tema
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Creación del contexto con valores por defecto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Hook personalizado para usar el contexto de tema
 * Proporciona acceso fácil al estado del tema y función de toggle
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};

/**
 * Proveedor del contexto de tema
 * Maneja el estado global del tema y su persistencia en localStorage
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  // Inicializar tema desde localStorage o preferencia del sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
  }, []);

  // Aplicar clase 'dark' al HTML cuando el tema cambie
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Guardar preferencia en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Función para alternar entre temas
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};