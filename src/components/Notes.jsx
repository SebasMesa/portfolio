import React, { useState } from 'react';
import { ChevronRight, Tag, Trash2, Folder } from 'lucide-react';

const Notes = () => {
  const [selectedNote, setSelectedNote] = useState('about');

  const folders = [
    { id: 'icloud', name: 'iCloud', icon: '☁️' },
    { id: 'notes', name: 'Notas', count: 3, isFolder: true },
    { id: 'recent', name: 'Eliminadas recientemente', count: 0, isFolder: true }
  ];

  const notes = [
    { id: 'about', title: 'Sobre Mí 👨‍💻', preview: 'Juan Sebastian Mesa • Full Stack Developer', date: 'Actualizado hoy' },
    { id: 'skills', title: 'Habilidades Técnicas 🚀', preview: 'React, Angular, JavaScript, Python...', date: 'Actualizado hoy' },
    { id: 'projects', title: 'Mis Proyectos ✨', preview: 'Portafolio interactivo, E-commerce...', date: 'Actualizado hoy' }
  ];

  const tags = [
    { name: '#Desarrollo', color: 'blue' },
    { name: '#Diseño', color: 'slate' },
    { name: '#Creatividad', color: 'teal' }
  ];

  return (
    <div className="h-full bg-[#1e1e1e] flex overflow-hidden text-gray-200">
      {/* Sidebar izquierdo - Folders */}
      <div className="w-56 bg-[#252526] border-r border-gray-700 flex flex-col">
        <div className="p-3 border-b border-gray-700">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2">iCloud</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto py-2">
          {folders.map((folder) => (
            <div
              key={folder.id}
              className="flex items-center justify-between px-3 py-1.5 hover:bg-[#333333] cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                {folder.isFolder ? (
                  <Folder size={14} className="text-blue-400" fill="#3b82f6" />
                ) : (
                  <span className="text-sm">{folder.icon}</span>
                )}
                <span className="text-sm text-gray-200">{folder.name}</span>
              </div>
              {folder.count !== undefined && (
                <span className="text-xs text-gray-400">{folder.count}</span>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 p-3">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Etiquetas</div>
          {tags.map((tag, idx) => (
            <div key={idx} className="flex items-center gap-2 px-2 py-1 hover:bg-[#333333] rounded cursor-pointer">
              <Tag size={12} className="text-gray-400" />
              <span className="text-xs text-gray-300">{tag.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lista de notas */}
      <div className="w-64 bg-[#1e1e1e] border-r border-gray-700 flex flex-col">
        <div className="p-3 border-b border-gray-700 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-200">Notas</h2>
          <span className="text-sm text-gray-400">{notes.length}</span>
        </div>

        <div className="flex-1 overflow-y-auto">
          {notes.map((note) => (
            <div
              key={note.id}
              onClick={() => setSelectedNote(note.id)}
              className={`p-3 border-b border-gray-800 cursor-pointer hover:bg-[#2a2a2a] transition-colors
                ${selectedNote === note.id ? 'bg-[#2e2e2e] border-l-4 border-l-yellow-500' : ''}`}
            >
              <h3 className="text-sm font-semibold text-gray-100 mb-1">{note.title}</h3>
              <p className="text-xs text-gray-400 mb-1 line-clamp-2">{note.preview}</p>
              <span className="text-xs text-gray-500">{note.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contenido de la nota */}
      <div className="flex-1 bg-[#1e1e1e] overflow-y-auto">
        {selectedNote === 'about' && <AboutContent />}
        {selectedNote === 'skills' && <SkillsContent />}
        {selectedNote === 'projects' && <ProjectsContent />}
      </div>
    </div>
  );
};

const AboutContent = () => {
  return (
    <div className="p-8 max-w-3xl text-gray-200">
      <h1 className="text-3xl font-bold text-gray-100 mb-4">Sobre Mí 👨‍💻</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200 mb-3">Juan Sebastian Mesa</h2>
        <div className="space-y-2 text-gray-400">
          <p><span className="font-semibold text-gray-200">Edad:</span> 18 años</p>
          <p><span className="font-semibold text-gray-200">Nacimiento:</span> 7 de julio, 2007 🎂</p>
          <p><span className="font-semibold text-gray-200">Ubicación:</span> Medellín, Colombia 🇨🇴</p>
          <p><span className="font-semibold text-gray-200">Profesión:</span> Desarrollador Full Stack</p>
        </div>
      </div>

      <div className="mb-6 p-4 bg-[#2e2e2e] rounded-lg border border-gray-700">
        <h3 className="text-lg font-semibold text-gray-100 mb-2">¿Quién soy? 🌟</h3>
        <p className="text-gray-300 leading-relaxed">
          {/* Desarrollador Full Stack, Diseñador, pero honestamente, hago mucho más que eso...
          Para simplificarlo, llevo ideas a la vida a través de código y diseño, gestionando todo lo que hace que 
          un proyecto cobre vida al final. */}

          Yo
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-100 mb-3">Mi Filosofía 💭</h3>
        <p className="text-gray-400 leading-relaxed italic">
          "El mejor código es el que resuelve problemas reales mientras crea experiencias memorables"
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-100 mb-3">Contacto 📧</h3>
        <p className="text-blue-400 hover:underline cursor-pointer">sebasmesaga@hotmail.com</p>
      </div>
    </div>
  );
};

const SkillsContent = () => {
  const frontendSkills = ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'];
  const backendSkills = ['Python', 'PHP', 'Node.js', 'MySQL', 'Firebase'];
  const toolsSkills = ['Git', 'Figma', 'Adobe Suite', 'VS Code'];

  return (
    <div className="p-8 max-w-3xl text-gray-200">
      <h1 className="text-3xl font-bold text-gray-100 mb-6">Habilidades Técnicas 🚀</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200 mb-3">Frontend Development 💻</h2>
        <div className="flex flex-wrap gap-2">
          {frontendSkills.map((skill, idx) => (
            <span key={idx} className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200 mb-3">Backend Development ⚙️</h2>
        <div className="flex flex-wrap gap-2">
          {backendSkills.map((skill, idx) => (
            <span key={idx} className="px-3 py-1 bg-green-900 text-green-200 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200 mb-3">Herramientas 🛠️</h2>
        <div className="flex flex-wrap gap-2">
          {toolsSkills.map((skill, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 bg-[#2e2e2e] rounded-lg border border-gray-700">
        <h3 className="text-lg font-semibold text-gray-100 mb-3">Puedo hacer... ✨</h3>
        <ul className="space-y-2 text-gray-300">
          <li>🎨 Diseño UI/UX Creativo e Innovador</li>
          <li>⚛️ Aplicaciones Web Modernas con React & Angular</li>
          <li>🔥 Sistemas Backend Escalables</li>
          <li>🪩 Interfaces Responsivas con Tailwind</li>
          <li>📱 Progressive Web Apps (PWA)</li>
          {/* <li>🎭 Animaciones y Microinteracciones</li> */}
          {/* <li>📸 Fotografía y Edición Visual</li> */}
          {/* <li>🎬 Motion Design</li> */}
        </ul>
      </div>
    </div>
  );
};

const ProjectsContent = () => {
  return (
    <div className="p-8 max-w-3xl text-gray-200">
      <h1 className="text-3xl font-bold text-gray-100 mb-6">Mis Proyectos ✨</h1>

      <div className="space-y-6">
        <div className="p-5 border border-gray-700 rounded-lg hover:shadow-lg hover:shadow-gray-900 transition-shadow bg-[#252526]">
          <h3 className="text-xl font-semibold text-gray-100 mb-2">ProRoute 💻</h3>
          <p className="text-gray-400 mb-3">
            ProRoute
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">React</span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Tailwind</span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">TypeScript</span>
          </div>
        </div>

        {/* <div className="p-5 border border-gray-700 rounded-lg hover:shadow-lg hover:shadow-gray-900 transition-shadow bg-[#252526]">
          <h3 className="text-xl font-semibold text-gray-100 mb-2">E-Commerce Platform 🛒</h3>
          <p className="text-gray-400 mb-3">
            Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos integrada 
            y panel de administración.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">React</span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Node.js</span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">MySQL</span>
          </div>
        </div>

        <div className="p-5 border border-gray-700 rounded-lg hover:shadow-lg hover:shadow-gray-900 transition-shadow bg-[#252526]">
          <h3 className="text-xl font-semibold text-gray-100 mb-2">Sistema de Gestión 📊</h3>
          <p className="text-gray-400 mb-3">
            Aplicación web para gestión empresarial con dashboard analítico, gestión de usuarios y reportes en tiempo real.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Angular</span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Firebase</span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">Python</span>
          </div>
        </div>*/}
      </div> 

      <div className="mt-8 p-4 bg-[#2e2e2e] rounded-lg border border-gray-700">
        <h3 className="text-lg font-semibold text-gray-100 mb-2">En desarrollo 🚧</h3>
        <p className="text-gray-400">
          Actualmente trabajando en nuevos proyectos experimentales que combinan 3D.js, WebGL y experiencias inmersivas.
        </p>
      </div>
    </div>
  );
};

export default Notes;
