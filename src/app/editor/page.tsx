'use client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CanvasArea from './../components/CanvasArea';
import Sidebar from './../components/Sidebar';

const EditorPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <CanvasArea />
      </div>
    </DndProvider>
  );
};

export default EditorPage;