'use client';

import { useParams } from 'next/navigation';
import { templates } from '../../data/templates'; // Importa tus plantillas
import { FaStar, FaCheck, FaArrowRight, FaThumbsUp, FaUsers, FaRocket } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

const TemplateDetail = () => {
  const { id } = useParams(); // Obtén el ID de la plantilla desde la URL
  const template = templates.find((t) => t.id === Number(id)); // Busca la plantilla por ID
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Estado para la imagen seleccionada

  if (!template) {
    return <div>Plantilla no encontrada</div>;
  }

  // Filtra otras plantillas recomendadas (excluyendo la actual)
  const recommendedTemplates = templates.filter((t) => t.id !== Number(id)).slice(0, 4);

  // Maneja el cambio de imagen en el carrusel
  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Navbar y otros componentes comunes pueden ir aquí */}

      {/* Contenido principal */}
      <div className="container mx-auto px-6 py-12">
        {/* Imagen y detalles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carrusel de imágenes de la plantilla */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Imagen principal */}
            <img
              src={template.images[selectedImageIndex]}
              alt={template.name}
              className="w-full h-96 object-cover"
            />

            {/* Miniaturas */}
            <div className="flex justify-center space-x-2 p-4">
              {template.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    selectedImageIndex === index ? 'border-blue-500' : 'border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${template.name} - Imagen ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Detalles de la plantilla */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {template.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {template.description}
            </p>

            {/* Características */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Características principales
              </h2>
              <ul className="space-y-2">
                {template.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-200">
                    <FaCheck className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Precio y descuento */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Precio
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  €{template.discountPrice}
                </span>
                <span className="text-gray-500 line-through">
                  €{template.price}
                </span>
                <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">
                  {Math.round(((template.price - template.discountPrice) / template.price) * 100)}% OFF
                </span>
              </div>
            </div>

            {/* Botón para usar la plantilla */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center mb-6"
              onClick={() => alert(`Seleccionaste: ${template.name}`)}
            >
              <span>Usar Plantilla</span>
              <FaArrowRight className="ml-2" />
            </motion.button>

            {/* Beneficios */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                ¿Por qué elegir esta plantilla?
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaThumbsUp className="text-blue-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-200">Diseño moderno y profesional</span>
                </div>
                <div className="flex items-center">
                  <FaUsers className="text-blue-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-200">Fácil de personalizar</span>
                </div>
                <div className="flex items-center">
                  <FaRocket className="text-blue-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-200">Optimizada para SEO</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sección de comentarios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Comentarios
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <textarea
              className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
              rows="4"
              placeholder="Escribe tu comentario..."
            ></textarea>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Enviar comentario
            </button>
          </div>
        </motion.div>

        {/* Plantillas recomendadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Plantillas recomendadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedTemplates.map((recommendedTemplate) => (
              <div
                key={recommendedTemplate.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={recommendedTemplate.previewImage}
                  alt={recommendedTemplate.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {recommendedTemplate.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {recommendedTemplate.description}
                  </p>
                  <button
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => alert(`Seleccionaste: ${recommendedTemplate.name}`)}
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Botón para ver el listado de plantillas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button
            className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => alert('Redirigiendo al listado de plantillas')}
          >
            Ver todas las plantillas
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TemplateDetail;