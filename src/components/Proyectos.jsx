import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import miniaturaRefineria from "../assets/miniatura_refinería.png";

function Proyectos() {
  const { ref: aboutRef, inView: isAboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const projects = [
    {
      title: "Refinería Dos Bocas",
      description: "Página web de la Refinería Dos Bocas en Veracruz, México.",
      link: "https://refineria-git-main-fabbiandlcs-projects.vercel.app/",
      technologies: ["React", "Vite", "Tailwind CSS"],
      image: miniaturaRefineria,
    },
    {
      title: "Aplicación de Gestión Administrativa",
      description: "App móvil para gestión administrativa (En desarrollo).",
      link: null, // Sin link porque está en desarrollo
      technologies: ["React Native", "Expo"],
      image: null, // Sin imagen por ahora
    },
    {
      title: "Aplicación de Gestión de Consultas",
      description: "App móvil para gestión de consultas (En desarrollo).",
      link: null, // Sin link porque está en desarrollo
      technologies: ["React Native", "Expo"],
      image: null, // Sin imagen por ahora
    },
  ];

  const handleCardClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div ref={aboutRef} className="my-20 px-6 lg:px-16">
      <motion.div
        className="border-b border-neutral-900 pb-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="my-20 text-center text-4xl">
          Proyectos <span>Académicos</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg p-6 cursor-pointer hover:bg-neutral-700 transition-colors duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleCardClick(project.link)}
            >
              {project.image ? (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="mb-4 h-48 flex items-center justify-center bg-neutral-800 rounded-lg">
                  <span className="text-neutral-400 text-center">
                    En desarrollo - Imagen no disponible
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h6 className="mb-2 text-xl font-semibold text-white">
                  {project.title}
                </h6>
                <p className="mb-4 text-neutral-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Proyectos;
