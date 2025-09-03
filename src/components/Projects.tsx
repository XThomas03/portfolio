// src/components/Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/portfolioData';
import Section from './Section';

/**
 * Componente Projects - Sección de proyectos destacados
 * Muestra una galería de proyectos con información detallada
 * Incluye enlaces a GitHub y demos en vivo con animaciones
 */
const Projects: React.FC = () => {
  return (
    <Section id="proyectos" title={projects.title} className="bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        {/* Grid responsivo de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-custom-white dark:bg-dark-bg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Imagen del proyecto con overlay */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`Captura de pantalla del proyecto ${project.title}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Badge para proyectos destacados */}
                {project.featured && (
                  <motion.div 
                    className="absolute top-3 right-3 bg-river-red text-custom-white px-2 py-1 rounded-full text-xs font-semibold flex items-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Star size={12} className="mr-1" />
                    Destacado
                  </motion.div>
                )}

                {/* Overlay con enlaces que aparece en hover */}
                <motion.div 
                  className="absolute inset-0 bg-custom-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-custom-white text-custom-black p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Ver código fuente de ${project.title} en GitHub`}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-river-red text-custom-white p-2 rounded-full hover:bg-bayern-red transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Ver demo en vivo de ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-custom-black dark:text-dark-text mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-custom-gray dark:text-dark-text-secondary mb-4 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                {/* Tecnologías utilizadas */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="bg-gray-100 dark:bg-dark-surface text-custom-black dark:text-dark-text px-2 py-1 rounded-md text-xs font-medium hover:bg-river-red hover:text-custom-white transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Enlaces de acción */}
                <motion.div 
                  className="flex space-x-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-custom-black dark:text-dark-text hover:text-river-red dark:hover:text-river-red transition-colors duration-200 text-sm font-medium"
                    whileHover={{ x: 3 }}
                    aria-label={`Ver código fuente de ${project.title}`}
                  >
                    <Github size={16} className="mr-1" />
                    Código
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-custom-black dark:text-dark-text hover:text-bayern-red dark:hover:text-bayern-red transition-colors duration-200 text-sm font-medium"
                    whileHover={{ x: 3 }}
                    aria-label={`Ver demo de ${project.title}`}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mensaje motivacional */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-custom-black dark:text-dark-text italic">
            "Cada proyecto es una oportunidad de aprender y crear algo extraordinario"
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Projects;