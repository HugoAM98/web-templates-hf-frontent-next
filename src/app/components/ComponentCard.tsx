const ComponentCard = ({ icon: Icon, name, description }) => {
    const handleDragStart = (e) => {
      e.dataTransfer.setData('componentType', name);
      e.dataTransfer.effectAllowed = 'copy';
    };
  
    return (
      <div 
        className="p-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors cursor-move mb-3 group relative"
        draggable
        onDragStart={handleDragStart}
      >
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 rounded-md text-blue-600">
            <Icon size={18} />
          </div>
          <span className="font-medium text-sm">{name}</span>
        </div>
        <div className="absolute left-0 -top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {description}
        </div>
      </div>
    );
  };