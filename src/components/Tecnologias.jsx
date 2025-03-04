import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { BsFiletypeXml } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa"; // Icono para Git
import { FaNodeJs } from "react-icons/fa"; // Icono para Node.js
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Tecnologias() {
  const { ref: aboutRef, inView: isAboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={aboutRef} className="my-20 px-6 lg:px-16"> {/* Agregué padding consistente */}
      <motion.div
        className="border-b border-neutral-800 pb-24 max-w-7xl mx-auto" // Contenedor centrado
        initial={{ opacity: 0, y: -50 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="my-20 text-center text-4xl">Tecnologías</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaHtml5 className="text-7xl" />
            <p className="text-center mt-3">HTML</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaCss3 className="text-7xl" />
            <p className="text-center mt-3">CSS</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaJs className="text-7xl" />
            <p className="text-center mt-3">JS</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaReact className="text-7xl" />
            <p className="text-center mt-3">REACT</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaJava className="text-7xl" />
            <p className="text-center mt-3">JAVA</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BsFiletypeSql className="text-7xl" />
            <p className="text-center mt-3">MYSQL</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BsFiletypeXml className="text-7xl" />
            <p className="text-center mt-3">.NET</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaGitAlt className="text-7xl" />
            <p className="text-center mt-3">GIT</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaNodeJs className="text-7xl" />
            <p className="text-center mt-3">NODE.JS</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Tecnologias;