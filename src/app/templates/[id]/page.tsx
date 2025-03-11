'use client';

import { useParams, useRouter } from 'next/navigation';
import { templates } from '../../data/templates';
import { FaStar, FaCheck, FaArrowRight, FaThumbsUp, FaUsers, FaRocket } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import { useState } from 'react';

const TemplateDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const template = templates.find((t) => t.id === Number(id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [rating, setRating] = useState(template?.rating || 0);
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Juan Pérez",
      comment: "¡Esta plantilla es increíble! Muy fácil de personalizar.",
      rating: 5,
    },
    {
      id: 2,
      user: "Ana Gómez",
      comment: "El diseño es moderno y atractivo. Mis clientes están impresionados.",
      rating: 4,
    },
    {
      id: 3,
      user: "Carlos Ruiz",
      comment: "La mejor inversión que he hecho para mi sitio web. ¡Altamente recomendada!",
      rating: 5,
    },
  ]);

  if (!template) {
    return <div>Plantilla no encontrada</div>;
  }

  const recommendedTemplates = templates.filter((t) => t.id !== Number(id)).slice(0, 4);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: comments.length + 1,
      user: "Usuario Anónimo",
      comment: e.target.comment.value,
      rating: rating,
    };
    setComments([...comments, newComment]);
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative group">
              <img
                src={template.images[selectedImageIndex]}
                alt={template.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button
                  className="px-6 py-3 bg-white/90 text-gray-800 rounded-lg hover:bg-white transition duration-300"
                  onClick={() => alert(`Vista previa de: ${template.name}`)}
                >
                  Preview
                </button>
              </div>
              {template.purchases > 50 && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
            </div>
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center mb-6"
              onClick={() => router.push(`/editor?templateId=${template.id}`)}
            >
              <span>Usar Plantilla</span>
              <FaArrowRight className="ml-2" />
            </motion.button>
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
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex items-center mb-2">
                    <span className="font-bold text-gray-800 dark:text-white">{comment.user}</span>
                    <div className="flex items-center ml-4">
                      {Array(comment.rating)
                        .fill(0)
                        .map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{comment.comment}</p>
                </div>
              ))}
            </div>
            <form onSubmit={handleCommentSubmit} className="mt-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  Puntúa esta plantilla
                </h3>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      className={`text-${star <= rating ? 'yellow-400' : 'gray-300'} mr-2`}
                    >
                      <FaStar size={24} />
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                name="comment"
                className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                rows="4"
                placeholder="Escribe tu comentario..."
                required
              ></textarea>
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Enviar comentario
              </button>
            </form>
          </div>
        </motion.div>

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
              <motion.div
                key={recommendedTemplate.id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => router.push(`/templates/${recommendedTemplate.id}`)}
              >
                <div className="relative group">
                  <img
                    src={recommendedTemplate.previewImage}
                    alt={recommendedTemplate.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                      className="px-6 py-3 bg-white/90 text-gray-800 rounded-lg hover:bg-white transition duration-300"
                      onClick={() => alert(`Vista previa de: ${recommendedTemplate.name}`)}
                    >
                      Preview
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {recommendedTemplate.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {recommendedTemplate.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button
            className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => router.push('/templates')}
          >
            Ver todas las plantillas
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TemplateDetail;