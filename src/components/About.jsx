import aboutImg from "../assets/about.jpg";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

function About() {
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
        Sobre <span className="text-neutral-500">Mí</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="sobre_mi" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="font-light my-4 max-w-xl py-10">
              Como estudiante de Ingeniería en Sistemas Computacionales en el
              Instituto Tecnológico Superior de Coatzacoalcos (ITESCO), combino
              mi formación académica con una pasión autodidacta por el
              desarrollo de software. Mi trayectoria en esta prestigiosa
              institución me ha proporcionado una sólida base en fundamentos de
              computación, algoritmos y metodologías de desarrollo, mientras que
              mi curiosidad natural me impulsa a explorar constantemente nuevas
              tecnologías y tendencias en el mundo del desarrollo web. A lo
              largo de mi formación en el ITESCO, he adquirido valiosos
              conocimientos en estructuras de datos, programación orientada a
              objetos, y diseño de sistemas, complementando esta formación
              académica con habilidades prácticas en desarrollo web y
              programación.
              <br />
              <br />
              Mi objetivo es aplicar los conocimientos adquiridos en mi carrera
              para crear soluciones tecnológicas innovadoras y funcionales,
              mientras continúo creciendo como profesional en el campo del
              desarrollo de software. Busco constantemente oportunidades para
              poner en práctica lo aprendido y contribuir al avance tecnológico
              de nuestra sociedad.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
}

export default About;
