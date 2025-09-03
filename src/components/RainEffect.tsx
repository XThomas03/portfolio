import React, { useEffect, useState } from 'react';

/**
 * Componente que genera un efecto de lluvia en diagonal utilizando SVGs.
 * Crea múltiples gotas de lluvia con forma de lágrima y animaciones aleatorias
 * para un efecto visual más realista y estilizado.
 */
const RainEffect: React.FC = () => {
  const [raindrops, setRaindrops] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const createRaindrops = () => {
      const drops = [];
      const numberOfDrops = 150; // Ajustado para un buen rendimiento y densidad

      for (let i = 0; i < numberOfDrops; i++) {
        // Estilos aleatorios para cada gota, pasados como variables CSS
        const style: React.CSSProperties = {
          '--x': Math.floor(Math.random() * 120 - 20), // Posición horizontal (% de la pantalla)
          '--y': Math.floor(Math.random() * 100), // Posición vertical inicial (negativa)
          '--o': Math.random(), // Opacidad
          '--a': 0.8 + Math.random() * 0.6, // Duración de la animación
          '--d': Math.random() * 2, // Retraso de la animación
          '--s': Math.random() * 0.5 + 0.5, // Escala (tamaño)
        } as React.CSSProperties;

        drops.push(
          <svg 
            key={i} 
            className="raindrop" 
            style={style} 
            preserveAspectRatio="xMinYMin" 
            viewBox='0 0 5 50'
          >
            <path 
              stroke='none' 
              d="M 2.5,0 C 2.69,3.53 3.34,20.52 4.44,30.95 C 5.75,42.66 4.59,50 2.5,50 C 0.40,50 -0.75,42.66 0.55,30.95 C 1.65,20.52 2.30,3.53 2.5,0 Z"
            />
          </svg>
        );
      }
      return drops;
    };
    
    setRaindrops(createRaindrops());
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {raindrops}
    </div>
  );
};

export default RainEffect;

