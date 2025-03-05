'use client';

import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-32 text-white overflow-hidden">
      {/* Fondo Animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 animate-gradient"
      ></motion.div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-4"
        >
          <Typewriter
            options={{
              strings: ['Crea tu Sitio Web en Minutos', 'Diseña sin Límites'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl mb-8"
        >
          Elige entre nuestras plantillas personalizables y comienza hoy mismo.
        </motion.p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Comenzar Ahora
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Ver Demo
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;