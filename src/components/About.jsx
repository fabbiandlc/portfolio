import aboutImg from "../assets/about.jpg";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref: aboutRef, inView: isAboutInView } = useInView({
    triggerOnce: true, // La animación se dispara solo una vez
    threshold: 0.2, // Se activa cuando el 20% del componente es visible
  });
  return (
    <div ref={aboutRef} className="my-20 pt-0 p-20">
      <motion.div
        className="border-b border-neutral-900 pb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : {}} // Se anima solo si es visible
        transition={{ duration: 0.8, easing: "ease-out" }}
      >
        <h2 className="my-20 text-center text-4xl">
          Sobre <span className="text-neutral-500">Mí</span>
        </h2>
        <div className="flex flex-wrap justify-around">
          <div className="w-full flex justify-center lg:w-1/2 lg:pr-8 pb-8">
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={aboutImg} alt="sobre_mi" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    2010 - 2014
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Informatica Avanzada Del Golfo
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Estudie en esta escuela de computacion donde aprendí los
                    conceptos básicos de la informática obteniendo experiencia
                    en el armado y desarmado de equipos de cómputo.
                  </p>
                </li>
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    2017 - 2020
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Centro De Bachillerato Tecnológico Industrial Y De Servicios
                    No.250
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Estudié la preparatoria en esta institución donde cursé la
                    carrera de programación, obteniendo conocimientos en los
                    lenguajes de programación JAVA y C++, también obteniendo
                    conocimiento en los fundamentos de desarrollo web.
                  </p>
                </li>
                <li className="ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    2020 - Presente
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Instituto Tecnológico Superior De Coatzacoalcos
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Mi instancia en el ITESCO fue muy beneficiente ya que obtuve
                    conocimientos en redes, incluyendo configuración de routers
                    RIP, VLANs, VPN, segmentación de redes y switches; manejo de
                    sistemas operativos como Windows, Linux y versiones ligeras;
                    programación básica en HTML, CSS, .NET MAUI, Java, PHP y
                    JavaScript; manejo básico de bases de datos SQL; seguridad
                    informática enfocada en antivirus y medidas de protección en
                    redes; así como habilidades en hardware para ensamblar y
                    mantener equipos.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
