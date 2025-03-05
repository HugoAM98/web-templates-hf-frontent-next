'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const TemplateSection = ({ template, index }: { template: any; index: number }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`container mx-auto px-6 py-12 ${
        index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={template.previewImage}
            alt={template.name}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Información */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            {template.name}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {template.description}
          </p>
          <ul className="space-y-3">
            {template.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-500" />
                <span className="text-gray-700 dark:text-gray-200">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              {template.discountPrice}€
            </span>
            <span className="text-xl text-gray-500 line-through">
              {template.price}€
            </span>
            <span className="text-lg text-green-500">
              {Math.round(((template.price - template.discountPrice) / template.price) * 100)}% OFF
            </span>
          </div>
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => alert(`Seleccionaste: ${template.name}`)}
          >
            Usar Plantilla
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default TemplateSection;