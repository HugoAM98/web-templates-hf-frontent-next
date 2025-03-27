'use client';

const navbarTemplates = [
  {
    id: 'navbar1',
    name: 'Navbar Básico',
    html: `
      <nav class="template-navbar editable-section" data-editable data-id="navbar">
        <div class="template-navbar-logo editable-text" data-editable data-id="logo">Mi Logo</div>
        <ul class="template-navbar-links">
          <li><a href="#" class="editable-text" data-editable data-id="nav-link-1">Inicio</a></li>
          <li><a href="#" class="editable-text" data-editable data-id="nav-link-2">Servicios</a></li>
          <li><a href="#" class="editable-text" data-editable data-id="nav-link-3">Contacto</a></li>
        </ul>
      </nav>
    `
  },
  {
    id: 'navbar2',
    name: 'Navbar Centrado',
    html: `
      <nav class="template-navbar editable-section" style="text-align: center;" data-editable data-id="navbar">
        <div class="template-navbar-logo editable-text" data-editable data-id="logo">Logo Centrado</div>
        <ul class="template-navbar-links" style="justify-content: center;">
          <li><a href="#" class="editable-text" data-editable data-id="nav-link-1">Home</a></li>
          <li><a href="#" class="editable-text" data-editable data-id="nav-link-2">About</a></li>
          <li><a href="#" class="editable-text" data-editable data-id="nav-link-3">Contact</a></li>
        </ul>
      </nav>
    `
  }
];

const NavbarPopup = ({ onSelect, onClose }) => {
  const [selectedNavbar, setSelectedNavbar] = useState(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Selecciona un diseño de Navbar</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {navbarTemplates.map((navbar) => (
            <div 
              key={navbar.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedNavbar === navbar.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedNavbar(navbar.id)}
            >
              <div 
                className="h-32 mb-3 overflow-hidden border"
                dangerouslySetInnerHTML={{ __html: navbar.html }}
              />
              <p className="text-center font-medium">{navbar.name}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-end space-x-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button 
            onClick={() => selectedNavbar && onSelect(navbarTemplates.find(n => n.id === selectedNavbar))}
            className={`px-4 py-2 rounded-md ${
              selectedNavbar 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!selectedNavbar}
          >
            Insertar Navbar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarPopup;