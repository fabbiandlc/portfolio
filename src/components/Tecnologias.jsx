import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { BsFiletypeXml } from "react-icons/bs";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

function Tecnologias() {
  const { ref: aboutRef, inView: isAboutInView } = useInView({
    triggerOnce: true, // La animación se dispara solo una vez
    threshold: 0.4, // Se activa cuando el 20% del componente es visible
  });
  return (
    <div ref={aboutRef} className="my-20">
      <motion.div
        className="border-b border-neutral-800 pb-24"
        initial={{ opacity: 0, y: -50 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : {}} // Se anima solo si es visible
        transition={{ duration: 0.8, easing: "ease-out" }}
      >
        <h2 className="my-20 text-center text-4xl">Tecnologías</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 ">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl" />
            <p className="text-center mt-3">HTML</p>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3 className="text-7xl" />
            <p className="text-center mt-3">CSS</p>

          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJs className="text-7xl" />
            <p className="text-center mt-3">JS</p>

          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaReact className="text-7xl" />
            <p className="text-center mt-3">REACT</p>

          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl" />
            <p className="text-center mt-3">JAVA</p>

          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BsFiletypeSql className="text-7xl" />
            <p className="text-center mt-3">MYSQL</p>

          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BsFiletypeXml className="text-7xl" />
            <p className="text-center mt-3">.NET</p>

          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Tecnologias;
