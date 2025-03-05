'use client';

import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TemplateSection from './components/TemplateSection';

const Home = () => {
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
    },
    // Agrega más plantillas aquí
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <HeroSection />
      <div className="space-y-20">
        {templates.map((template, index) => (
          <TemplateSection key={template.id} template={template} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;