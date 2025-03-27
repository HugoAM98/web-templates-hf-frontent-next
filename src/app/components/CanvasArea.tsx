'use client';

import { useState, useEffect, useRef } from 'react';
import NavbarPopup from './NavbarPopup';

const CanvasArea = ({ template, onAddComponent }) => {
  const iframeRef = useRef(null);
  const [iframeContent, setIframeContent] = useState('');
  const [showNavbarPopup, setShowNavbarPopup] = useState(false);
  const [dropPosition, setDropPosition] = useState(null);
  const [iframeReady, setIframeReady] = useState(false);

  useEffect(() => {
    if (!template) return;
    
    const templateUrl = `/templates/template-${template.id}.html`;
    fetch(templateUrl)
      .then((response) => response.text())
      .then((html) => {
        setIframeContent(html);
        setIframeReady(false); // Reset ready state when content changes
      })
      .catch((error) => console.error('Error loading template:', error));
  }, [template]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      setIframeReady(true);
      console.log('Iframe loaded and ready');
    };

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, [iframeContent]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData('componentType');
    const rect = e.currentTarget.getBoundingClientRect();
    const position = { 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top 
    };
    
    setDropPosition(position);
    
    if (componentType === 'Menú') {
      setShowNavbarPopup(true);
    } else {
      addComponentToIframe(componentType, position);
    }
  };

  const addComponentToIframe = (componentType, position, content = '') => {
    try {
      const iframe = iframeRef.current;
      if (!iframe || !iframe.contentWindow) {
        console.error('Iframe no está listo');
        return;
      }
      
      console.log('Enviando mensaje al iframe:', {
        type: 'ADD_COMPONENT',
        componentType,
        x: position.x,
        y: position.y,
        content
      });
      
      iframe.contentWindow.postMessage({
        type: 'ADD_COMPONENT',
        componentType,
        x: position.x,
        y: position.y,
        content
      }, '*');
    } catch (error) {
      console.error('Error al enviar mensaje al iframe:', error);
    }
  };

  const handleNavbarSelect = (navbarType) => {
    addComponentToIframe('Menú', dropPosition, navbarType.html);
    setShowNavbarPopup(false);
  };

  return (
    <div 
      className="w-full h-full"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <iframe
        ref={iframeRef}
        srcDoc={iframeContent}
        className="w-full h-full border-0"
        sandbox="allow-scripts allow-same-origin allow-modals allow-forms allow-popups"
      />
      
      {showNavbarPopup && (
        <NavbarPopup 
          onSelect={handleNavbarSelect}
          onClose={() => setShowNavbarPopup(false)}
        />
      )}
    </div>
  );
};

export default CanvasArea;