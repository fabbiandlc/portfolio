import profilePic from "../assets/fotodeperfil.png";
import { motion } from "motion/react";

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-10">
      <motion.div
        className="flex flex-wrap justify-around"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, easing: "ease-out" }}
      >
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Fabián Huervo De La Cruz
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Estudiante de Ingeniería en sistemas
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              Estudiante con conocimientos en HTML, CSS y JavaScript para el desarrollo
              frontend, complementado con Java y Node.js para el backend. Manejo
              herramientas de control de versiones como Git, lo que me permite
              colaborar eficientemente en proyectos de desarrollo.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-96 lg:mt-10 lg:ml-56 jusflex justify-center">
          <div className="flex justify-center">
            <img src={profilePic} alt="Fabián Huervo De La Cruz" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
