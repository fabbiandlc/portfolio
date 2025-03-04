import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref: aboutRef, inView: isAboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={aboutRef} className="my-20 px-6 lg:px-16">
      <motion.div
        className="border-b border-neutral-900 pb-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="my-10 text-center text-4xl"> {/* Reduje my-20 a my-10 */}
          Sobre <span className="text-neutral-500">Mí</span>
        </h2>
        <div className="max-w-3xl mx-auto"> {/* Contenedor para centrar el texto */}
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-8 ms-4"> {/* Reduje mb-10 a mb-8 */}
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2010 - 2014
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Informática Avanzada Del Golfo
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Estudié en esta escuela de computación donde aprendí los
                conceptos básicos de la informática, obteniendo experiencia en
                el armado y desarmado de equipos de cómputo.
              </p>
            </li>
            <li className="mb-8 ms-4"> {/* Reduje mb-10 a mb-8 */}
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2017 - 2020
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Centro De Bachillerato Tecnológico Industrial Y De Servicios No.250
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Estudié la preparatoria en esta institución donde cursé la
                carrera de programación, obteniendo conocimientos en los
                lenguajes JAVA y C++, y fundamentos de desarrollo web.
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
                En el ITESCO adquirí conocimientos en redes (configuración de
                routers RIP, VLANs, VPN, segmentación y switches), sistemas
                operativos (Windows, Linux), programación (HTML, CSS, .NET MAUI,
                Java, PHP, JavaScript), bases de datos SQL, seguridad
                informática y ensamblaje de hardware.
              </p>
            </li>
          </ol>
        </div>
      </motion.div>
    </div>
  );
}

export default About;