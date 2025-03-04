import profilePic from "../assets/fotodeperfil.png";
import { motion } from "framer-motion"; // Corregí la importación

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-10 px-6 lg:px-16"> {/* Aumenté el padding lateral */}
      <motion.div
        className="flex flex-wrap justify-between pt-16 max-w-7xl mx-auto" // Contenedor centrado con ancho máximo
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }} // Corregí easing a ease
      >
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="pb-16 text-5xl font-thin tracking-tight lg:text-8xl">
              Fabián Huervo De La Cruz
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Estudiante de Ingeniería en sistemas
            </span>
            <p className="my-6 font-light tracking-tighter">
              Estudiante con conocimientos en HTML, CSS y JavaScript para el desarrollo
              frontend, complementado con Java y Node.js para el backend. Manejo
              herramientas de control de versiones como Git, lo que me permite
              colaborar eficientemente en proyectos de desarrollo.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-80 mt-8 lg:mt-0 flex justify-center">
          <img 
            src={profilePic} 
            alt="Fabián Huervo De La Cruz" 
            className="max-w-full h-auto"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;