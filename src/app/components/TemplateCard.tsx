'use client';

import { motion } from 'framer-motion';

const TemplateCard = ({ template }: { template: any }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={template.previewImage}
        alt={template.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {template.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{template.category}</p>
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={() => alert(`Seleccionaste: ${template.name}`)}
        >
          Usar Plantilla
        </button>
      </div>
    </motion.div>
  );
};

export default TemplateCard;