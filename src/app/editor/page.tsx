'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { templates } from '../data/templates';
import CanvasArea from '../components/CanvasArea';
import ComponentsSidebar from '../components/ComponentsSidebar';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const EditorPage = () => {
  const searchParams = useSearchParams();
  const templateId = searchParams.get('templateId');
  const [template, setTemplate] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (templateId) {
      const selectedTemplate = templates.find((t) => t.id === Number(templateId));
      setTemplate(selectedTemplate);
    }
  }, [templateId]);

  if (!template) {
    return <div className="flex items-center justify-center h-screen">Cargando plantilla...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div className={`h-full flex-shrink-0 transition-all duration-300 ease-in-out ${
        sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'
      }`}>
        <ComponentsSidebar onClose={() => setSidebarOpen(false)} />
      </div>
      
      {/* Botón de toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`absolute z-30 bg-white border border-gray-200 rounded-r-md p-2 shadow-md hover:bg-gray-50 transition-transform duration-300 ${
          sidebarOpen ? 'left-64' : 'left-0'
        }`}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        {sidebarOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
      </button>

      {/* Área principal */}
      <div className="flex-1 h-full overflow-hidden relative">
        <CanvasArea template={template} />
      </div>
    </div>
  );
};

export default EditorPage;