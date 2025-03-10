'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUser,
  FaSignInAlt,
  FaSun,
  FaMoon,
  FaCaretDown,
  FaArrowRight,
} from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuToggle = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const megaMenuContent = {
    producto: {
      links: [
        {
          title: 'Plantillas Web',
          href: '/templates',
          description: 'Elige entre cientos de plantillas modernas y personalizables.',
        },
        {
          title: 'Editor Drag & Drop',
          href: '/editor',
          description: 'Crea tu sitio web sin código con nuestro editor intuitivo.',
        },
        {
          title: 'Hosting y Dominio',
          href: '/hosting',
          description: 'Alojamiento rápido y dominios personalizados para tu sitio.',
        },
      ],
      image: '/images/promo.webp',
    },
    soluciones: {
      links: [
        {
          title: 'Tiendas Online',
          href: '/ecommerce',
          description: 'Construye una tienda online profesional en minutos.',
        },
        {
          title: 'Portafolios',
          href: '/portfolio',
          description: 'Muestra tu trabajo con un portafolio impresionante.',
        },
        {
          title: 'Blogs',
          href: '/blogging',
          description: 'Crea un blog atractivo y comparte tus ideas con el mundo.',
        },
      ],
      image: '/images/promo.webp',
    },
    recursos: {
      links: [
        {
          title: 'Blog',
          href: '/blog',
          description: 'Consejos y tendencias para crear sitios web increíbles.',
        },
        {
          title: 'Cursos y Tutoriales',
          href: '/learn',
          description: 'Aprende a crear sitios web con nuestros cursos en vídeo.',
        },
        {
          title: 'Inspiración de Diseño',
          href: '/inspiration',
          description: 'Explora ejemplos de sitios web diseñados por profesionales.',
        },
      ],
      image: '/images/promo.webp',
    },
    soporte: {
      links: [
        {
          title: 'Centro de Ayuda',
          href: '/help',
          description: 'Encuentra respuestas y soluciones a tus preguntas.',
        },
        {
          title: 'Contrata un Profesional',
          href: '/pro',
          description: 'Obtén ayuda personalizada de expertos en diseño web.',
        },
      ],
      image: '/images/promo.webp',
    },
    herramientas: {
      links: [
        {
          title: 'Creador de Logos',
          href: '/logo-maker',
          description: 'Diseña un logo único para tu marca en minutos.',
        },
        {
          title: 'Tarjetas de Presentación',
          href: '/business-cards',
          description: 'Crea tarjetas de presentación profesionales y modernas.',
        },
        {
          title: 'Creador de Landing Pages',
          href: '/landing-pages',
          description: 'Diseña páginas de aterrizaje que convierten visitantes en clientes.',
        },
      ],
      image: '/images/promo.webp',
    },
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
          <span className="mr-2">TemplatesWebHF</span>
        </Link>

        {/* Enlaces y Mega Menú */}
        <div className="hidden md:flex space-x-6 relative">
          {/* Producto */}
          <div
            className="relative"
            onMouseEnter={() => handleMenuToggle('producto')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className="text-gray-800 dark:text-white hover:text-blue-500 flex items-center"
              onClick={() => handleMenuToggle('producto')}
            >
              <span>Producto</span>
              <motion.span
                animate={{ rotate: openMenu === 'producto' ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-2"
              >
                <FaCaretDown />
              </motion.span>
            </button>
          </div>

          {/* Soluciones */}
          <div
            className="relative"
            onMouseEnter={() => handleMenuToggle('soluciones')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className="text-gray-800 dark:text-white hover:text-blue-500 flex items-center"
              onClick={() => handleMenuToggle('soluciones')}
            >
              <span>Soluciones</span>
              <motion.span
                animate={{ rotate: openMenu === 'soluciones' ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-2"
              >
                <FaCaretDown />
              </motion.span>
            </button>
          </div>

          {/* Recursos */}
          <div
            className="relative"
            onMouseEnter={() => handleMenuToggle('recursos')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className="text-gray-800 dark:text-white hover:text-blue-500 flex items-center"
              onClick={() => handleMenuToggle('recursos')}
            >
              <span>Recursos</span>
              <motion.span
                animate={{ rotate: openMenu === 'recursos' ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-2"
              >
                <FaCaretDown />
              </motion.span>
            </button>
          </div>

          {/* Soporte */}
          <div
            className="relative"
            onMouseEnter={() => handleMenuToggle('soporte')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className="text-gray-800 dark:text-white hover:text-blue-500 flex items-center"
              onClick={() => handleMenuToggle('soporte')}
            >
              <span>Soporte</span>
              <motion.span
                animate={{ rotate: openMenu === 'soporte' ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-2"
              >
                <FaCaretDown />
              </motion.span>
            </button>
          </div>

          {/* Herramientas */}
          <div
            className="relative"
            onMouseEnter={() => handleMenuToggle('herramientas')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className="text-gray-800 dark:text-white hover:text-blue-500 flex items-center"
              onClick={() => handleMenuToggle('herramientas')}
            >
              <span>Herramientas</span>
              <motion.span
                animate={{ rotate: openMenu === 'herramientas' ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-2"
              >
                <FaCaretDown />
              </motion.span>
            </button>
          </div>
        </div>

        {/* Botones */}
        <div className="flex items-center space-x-4">
          {/* Botón de cambio de tema */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Botón de Iniciar Sesión */}
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center"
          >
            <FaSignInAlt className="mr-2" />
            <span>Iniciar Sesión</span>
          </Link>

          {/* Botón de Registrarse */}
          <Link
            href="/register"
            className="px-4 py-2 bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white flex items-center"
          >
            <FaUser className="mr-2" />
            <span>Registrarse</span>
          </Link>
        </div>
      </div>

      {/* Mega Menú */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 bg-white dark:bg-gray-800 shadow-lg mt-0"
            onMouseEnter={() => setOpenMenu(openMenu)}
            onMouseLeave={() => setOpenMenu(null)}
            >
            <div className="container mx-auto px-6 py-8 grid grid-cols-[2fr_1px_1fr] gap-8">
              {/* Enlaces */}
              <div className="grid grid-cols-2 gap-6">
                {megaMenuContent[openMenu].links.map((link, index) => (
                  <div key={index} className="space-y-2 group">
                    <Link
                      href={link.href}
                      className="text-gray-800 dark:text-white hover:text-blue-500 font-semibold flex items-center"
                    >
                      <span>{link.title}</span>
                      <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {link.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Línea Divisoria */}
              <div className="border-l border-gray-200 dark:border-gray-700 h-48 self-center"></div>

              {/* Imagen Promocional */}
              <div>
                <img
                  src={megaMenuContent[openMenu].image}
                  alt={openMenu}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;