import { PROJECTS } from "../assets/constants";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

function Proyectos() {
  const { ref: aboutRef, inView: isAboutInView } = useInView({
    triggerOnce: true, // La animación se dispara solo una vez
    threshold: 0.4, // Se activa cuando el 20% del componente es visible
  });
  return (
    <div ref={aboutRef} className="my-20">
      <motion.div
        className="border-b border-neutral-900 pb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : {}} // Se anima solo si es visible
        transition={{ duration: 0.8, easing: "ease-out" }}
      >
        <h2 className="my-20 text-center text-4xl">
          Proyectos <span>Académicos</span>
        </h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Proyectos;
