'use client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CanvasArea from './../components/CanvasArea';
import Sidebar from './../components/Sidebar';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { templates } from '../data/templates';

const EditorPage = () => {
  const searchParams = useSearchParams();
  const templateId = searchParams.get('templateId');
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    if (templateId) {
      const selectedTemplate = templates.find((t) => t.id === Number(templateId));
      setTemplate(selectedTemplate);
    }
  }, [templateId]);

  if (!template) {
    return <div>Cargando plantilla...</div>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <CanvasArea template={template} />
      </div>
    </DndProvider>
  );
};

export default EditorPage;