// src/data/portfolioData.ts
import { Mail, Linkedin, Github } from 'lucide-react';

// Información de contacto y personal
export const personalInfo = {
  name: "Kevin Thomas Avila",
  location: "Buenos Aires, Argentina",
  tagline: "Desarrollador de Software con experiencia en aplicaciones web y manejo de datos.",
  email: "kevintavila03@gmail.com",
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kthomasavila/', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/XThomas03', icon: Github },
    { name: 'Email', url: 'mailto:kevintavila03@gmail.com', icon: Mail },
  ]
};

// Secciones de la navegación
export const navSections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'acerca', label: 'Acerca' },
  { id: 'educacion', label: 'Educación' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'habilidades', label: 'Habilidades' },
];

// Contenido de la sección "Acerca de mí"
export const aboutMe = {
  title: "Acerca de mí",
  content: "Soy un desarrollador de software con una sólida formación como Técnico en Programación. Mi experiencia abarca desde la Programación Orientada a Objetos y el manejo de bases de datos con herramientas como SQL, hasta la construcción de aplicaciones web interactivas. Me considero responsable, resolutivo y colaborativo, con ganas de seguir creciendo en entornos IT para aplicar y ampliar mis habilidades mediante proyectos desafiantes, aportando ideas y soluciones que potencien al equipo y contribuyan al crecimiento de la empresa."
};

// Contenido de la sección "Educación"
export const education = {
  title: "Educación",
  institution: "Universidad Nacional de Hurlingham",
  degree: "Técnico Universitario en Programación (En curso)",
  period: "2021 – Actualidad",
  progress: "13 materias aprobadas de 19.",
  knowledge: [
    'Lógica de programación', 'Estructuras de datos', 'HTML, CSS, JavaScript',
    'Python', 'POO en Java', 'Bootstrap', 'React', 'Fundamentos de redes', 'Sistemas operativos'
  ]
};

// Contenido de la sección "Experiencia Laboral"
export const experience = [
  {
    role: "Pasante de SAP / Análisis de Datos",
    company: "ARTECH / Fundación Pescar",
    period: "Julio 2025– Actualidad",
    tasks: [
      "Formación técnica (237 hs) en SAP (SQL, ABAP, Fiori, JavaScript, SAP BTP) y análisis de datos (SQL, Power BI, Python, Databricks, PowerApps).",
      "Desarrollo de habilidades socioemocionales (180 hs) en comunicación, liderazgo, trabajo en equipo y empleabilidad.",
      "Aplicación práctica de conocimientos en entornos IT reales."
    ]
  },
  {
    role: "Desarrollador Frontend Web",
    company: "No Country",
    period: "Marzo – Mayo 2024",
    tasks: [
      "Diseño e implementación de interfaces responsivas con HTML, CSS y JavaScript.",
      "Trabajo colaborativo bajo metodología ágil con entregas semanales.",
      "Certificado de participación por desempeño y compromiso."
    ]
  },
  {
    role: "Atención al Cliente",
    company: "Distribuidora Echevarría",
    period: "Enero – Agosto 2021",
    tasks: [
      "Gestión y control de stock, coordinación de pedidos.",
      "Atención a consultas y reclamos con enfoque profesional."
    ]
  }
];

// Contenido de la sección "Habilidades"
export const skills = {
  title: "Habilidades Técnicas",
  categories: [
    { name: "Lenguajes", items: ['HTML', 'CSS', 'JavaScript', 'Java (POO)', 'Python'] },
    { name: "Frameworks", items: ['Bootstrap', 'React'] },
    { name: "Herramientas", items: ['Git', 'GitHub', 'Visual Studio Code', 'Paquete Office'] },
    { name: "Otros", items: ['Sistemas Windows', 'Manejo de tickets', 'Control de stock'] }
  ]
};

// Contenido de la sección "Proyectos"
export const projects = {
  title: "Mis Proyectos",
  items: [
    {
      id: 1,
      title: "E-Commerce React",
      description: "Plataforma de comercio electrónico completa con carrito de compras, autenticación y pasarela de pagos.",
      image: "https://via.placeholder.com/400x200/E41B17/FFFFFF?text=E-Commerce+React",
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      githubUrl: "https://github.com/XThomas03/ecommerce-react",
      liveUrl: "https://ecommerce-demo.netlify.app",
      featured: true
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Panel de control interactivo para visualización de datos con gráficos dinámicos y métricas en tiempo real.",
      image: "https://via.placeholder.com/400x200/DC052D/FFFFFF?text=Dashboard+Analytics",
      technologies: ['React', 'Chart.js', 'API REST', 'CSS3', 'JavaScript'],
      githubUrl: "https://github.com/XThomas03/dashboard-analytics",
      liveUrl: "https://analytics-dashboard-demo.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "Task Manager App",
      description: "Aplicación de gestión de tareas con funcionalidades de drag & drop, categorías y recordatorios.",
      image: "https://via.placeholder.com/400x200/000000/FFFFFF?text=Task+Manager",
      technologies: ['React', 'Local Storage', 'CSS Grid', 'JavaScript ES6'],
      githubUrl: "https://github.com/XThomas03/task-manager",
      liveUrl: "https://task-manager-demo.netlify.app",
      featured: false
    }
  ]
};