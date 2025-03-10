'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaTimes, FaChevronDown, FaChevronUp, FaStar, FaFire, FaSun, FaMoon } from 'react-icons/fa';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // Estado para la categoría seleccionada
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Estado para abrir/cerrar el menú lateral
  const [selectedColors, setSelectedColors] = useState<string[]>([]); // Estado para colores seleccionados
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]); // Estado para rango de precios
  const [selectedServices, setSelectedServices] = useState<string[]>([]); // Estado para servicios seleccionados
  const [selectedRating, setSelectedRating] = useState<number | null>(null); // Estado para valoración seleccionada
  const [selectedSort, setSelectedSort] = useState<string>(''); // Estado para ordenar por
  const [isColorsOpen, setIsColorsOpen] = useState(true); // Estado para abrir/cerrar sección de colores
  const [isPriceOpen, setIsPriceOpen] = useState(true); // Estado para abrir/cerrar sección de precios
  const [isServicesOpen, setIsServicesOpen] = useState(true); // Estado para abrir/cerrar sección de servicios
  const [isRatingOpen, setIsRatingOpen] = useState(true); // Estado para abrir/cerrar sección de valoración
  const [isSortOpen, setIsSortOpen] = useState(true); // Estado para abrir/cerrar sección de ordenar por
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para el tema oscuro

  // Cambiar entre tema claro y oscuro
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const templates = [
    {
      id: 1,
      name: 'Tienda Online',
      previewImage: '/images/template1-preview.jpg',
      category: 'E-commerce',
      description: 'La solución perfecta para tu negocio online.',
      features: ['Diseño responsive', 'Integración con pasarelas de pago', 'SEO optimizado'],
      price: 99,
      discountPrice: 69,
      colors: ['azul', 'blanco'],
      services: ['SEO', 'Pasarela de pagos'],
      rating: 4.5,
      isPopular: true,
    },
    {
      id: 2,
      name: 'Blog Personal',
      previewImage: '/images/template2-preview.jpg',
      category: 'Blog',
      description: 'Comparte tus ideas con el mundo.',
      features: ['Diseño minimalista', 'Soporte para multimedia', 'Integración con redes sociales'],
      price: 79,
      discountPrice: 49,
      colors: ['negro', 'blanco'],
      services: ['SEO', 'Correo'],
      rating: 4.0,
      isPopular: false,
    },
    {
      id: 3,
      name: 'Portafolio Creativo',
      previewImage: '/images/template3-preview.jpg',
      category: 'Portafolio',
      description: 'Muestra tu trabajo de manera profesional.',
      features: ['Diseño moderno', 'Galería de imágenes', 'Integración con redes sociales'],
      price: 89,
      discountPrice: 59,
      colors: ['gris', 'blanco'],
      services: ['SEO'],
      rating: 3.5,
      isPopular: true,
    },
    {
      id: 4,
      name: 'Landing Page',
      previewImage: '/images/template4-preview.jpg',
      category: 'Landing Page',
      description: 'Páginas de aterrizaje que convierten visitantes en clientes.',
      features: ['Diseño optimizado para conversiones', 'Integración con formularios', 'SEO avanzado'],
      price: 109,
      discountPrice: 79,
      colors: ['azul', 'gris'],
      services: ['SEO', 'Pasarela de pagos', 'Correo'],
      rating: 5.0,
      isPopular: true,
    },
  ];

  // Filtrar plantillas por categoría, colores, rango de precios, servicios, valoración y popularidad
  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesColors = selectedColors.length === 0 || selectedColors.some((color) => template.colors.includes(color));
    const matchesPrice = template.price >= priceRange[0] && template.price <= priceRange[1];
    const matchesServices =
      selectedServices.length === 0 || selectedServices.every((service) => template.services.includes(service));
    const matchesRating = selectedRating === null || template.rating >= selectedRating;
    const matchesSort =
      selectedSort === '' ||
      (selectedSort === 'popular' && template.isPopular) ||
      (selectedSort === 'rating' && template.rating >= 4);
    return matchesCategory && matchesColors && matchesPrice && matchesServices && matchesRating && matchesSort;
  });

  // Manejar selección de colores
  const handleColorChange = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  // Manejar selección de servicios
  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  // Limpiar todos los filtros
  const clearFilters = () => {
    setSelectedColors([]);
    setPriceRange([0, 200]);
    setSelectedServices([]);
    setSelectedRating(null);
    setSelectedSort('');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-gray-900">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <HeroSection />

        {/* Botón para abrir/cerrar el menú lateral */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed top-20 left-4 z-50 p-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex items-center"
        >
          {isSidebarOpen ? <FaTimes size={20} /> : <FaFilter size={20} />}
        </button>

        {/* Contenedor principal */}
        <div className="flex">
          {/* Menú lateral de filtros */}
          <motion.div
            initial={{ width: isSidebarOpen ? '300px' : '0px' }}
            animate={{ width: isSidebarOpen ? '300px' : '0px' }}
            transition={{ duration: 0.3 }}
            className="h-screen bg-white dark:bg-gray-800 shadow-lg overflow-y-auto sticky top-0"
          >
            <div className="p-6">
              {/* Título y botón de limpiar filtros */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filtros</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  Limpiar todo
                </button>
              </div>

              {/* Filtro por colores */}
              <div className="mb-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsColorsOpen(!isColorsOpen)}
                >
                  <h3 className="text-lg font-bold">Colores</h3>
                  {isColorsOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <AnimatePresence>
                  {isColorsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      {['azul', 'blanco', 'negro', 'gris'].map((color) => (
                        <label key={color} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            checked={selectedColors.includes(color)}
                            onChange={() => handleColorChange(color)}
                            className="mr-2"
                          />
                          {color.charAt(0).toUpperCase() + color.slice(1)}
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Filtro por rango de precios */}
              <div className="mb-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsPriceOpen(!isPriceOpen)}
                >
                  <h3 className="text-lg font-bold">Rango de Precios</h3>
                  {isPriceOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <AnimatePresence>
                  {isPriceOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm mt-2">
                        <span>€{priceRange[0]}</span>
                        <span>€{priceRange[1]}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Filtro por servicios */}
              <div className="mb-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <h3 className="text-lg font-bold">Servicios</h3>
                  {isServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      {['SEO', 'Pasarela de pagos', 'Correo'].map((service) => (
                        <label key={service} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            className="mr-2"
                          />
                          {service}
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Filtro por valoración */}
              <div className="mb-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsRatingOpen(!isRatingOpen)}
                >
                  <h3 className="text-lg font-bold">Valoración</h3>
                  {isRatingOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <AnimatePresence>
                  {isRatingOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <label key={rating} className="flex items-center mb-2">
                          <input
                            type="radio"
                            name="rating"
                            checked={selectedRating === rating}
                            onChange={() => setSelectedRating(rating)}
                            className="mr-2"
                          />
                          {Array(rating)
                            .fill(0)
                            .map((_, i) => (
                              <FaStar key={i} className="text-yellow-400" />
                            ))}
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Filtro por ordenar */}
              <div className="mb-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                >
                  <h3 className="text-lg font-bold">Ordenar por</h3>
                  {isSortOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <AnimatePresence>
                  {isSortOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <label className="flex items-center mb-2">
                        <input
                          type="radio"
                          name="sort"
                          checked={selectedSort === 'popular'}
                          onChange={() => setSelectedSort('popular')}
                          className="mr-2"
                        />
                        <FaFire className="text-red-500 mr-2" />
                        Popularidad
                      </label>
                      <label className="flex items-center mb-2">
                        <input
                          type="radio"
                          name="sort"
                          checked={selectedSort === 'rating'}
                          onChange={() => setSelectedSort('rating')}
                          className="mr-2"
                        />
                        <FaStar className="text-yellow-400 mr-2" />
                        Mejor valorados
                      </label>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Contenido principal */}
          <div className="flex-1 container mx-auto px-6 py-12">
            {/* Filtros de Categoría */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === 'all'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                } hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer`}
              >
                Todas
              </button>
              <button
                onClick={() => setSelectedCategory('E-commerce')}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === 'E-commerce'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                } hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer`}
              >
                E-commerce
              </button>
              <button
                onClick={() => setSelectedCategory('Blog')}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === 'Blog'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                } hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer`}
              >
                Blog
              </button>
              <button
                onClick={() => setSelectedCategory('Portafolio')}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === 'Portafolio'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                } hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer`}
              >
                Portafolio
              </button>
              <button
                onClick={() => setSelectedCategory('Landing Page')}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === 'Landing Page'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                } hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer`}
              >
                Landing Page
              </button>
            </div>

            {/* Lista de Plantillas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Contenedor de la imagen con overlay */}
                  <div className="relative group">
                    <img
                      src={template.previewImage}
                      alt={template.name}
                      className="w-full h-48 object-cover"
                    />
                    {/* Overlay y botón Preview */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button
                        className="px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer"
                        onClick={() => alert(`Vista previa de: ${template.name}`)}
                      >
                        Preview
                      </button>
                    </div>
                  </div>

                  {/* Contenido de la plantilla */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {template.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {template.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {template.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700 dark:text-gray-200">
                          <span className="mr-2">✔️</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-800 dark:text-white">
                        €{template.discountPrice}
                      </span>
                      <span className="text-gray-500 line-through">
                        €{template.price}
                      </span>
                      <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full ml-2">
                        {Math.round(((template.price - template.discountPrice) / template.price) * 100)}% OFF
                      </span>
                    </div>
                    <button
                      className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
                      onClick={() => alert(`Seleccionaste: ${template.name}`)}
                    >
                      Usar Plantilla
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
