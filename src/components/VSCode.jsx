import React, { useState } from 'react';
import { FileCode, Folder, ChevronRight, ChevronDown } from 'lucide-react';

const VSCode = () => {
  const [activeFile, setActiveFile] = useState('about-me.js');
  const [openTabs, setOpenTabs] = useState(['about-me.js']);
  const [expandedFolders, setExpandedFolders] = useState(['proyectos']);

  const files = {
    'about-me.js': {
      language: 'javascript',
      content: `// 👨‍💻 Sobre mí
const developer = {
\u200B  nombre: " Sebastian Mesa",
\u200B  rol: "Full Stack Developer",
\u200B  ubicacion: "Medellín, Colombia",
\u200B  
\u200B  habilidades: [
\u200B    "React", "JavaScript", "TailwindCSS",
\u200B    "Node.js", "MongoDB", "Git"
\u200B  ],
\u200B  
\u200B  pasiones: [
\u200B    "Crear interfaces hermosas",
\u200B    "Resolver problemas complejos",
\u200B    "Aprender nuevas tecnologías"
\u200B  ],
\u200B  
\u200B  getCafe: function() {
\u200B    return "☕ Siempre listo para programar";
\u200B  }
};

console.log(developer.getCafe());
// Output: ☕ Siempre listo para programar`
    },
    'proyectos/ecommerce.jsx': {
      language: 'jsx',
      content: `// 🛒 E-Commerce Platform
import React from 'react';

const EcommercePlatform = () => {
\u200B  const proyecto = {
\u200B    nombre: "ShopHub",
\u200B    descripcion: "Plataforma de comercio electrónico completa",
\u200B    tecnologias: ["React", "Node.js", "Stripe", "MongoDB"],
\u200B    caracteristicas: [
\u200B      "Carrito de compras en tiempo real",
\u200B      "Pasarela de pagos integrada",
\u200B      "Panel de administración",
\u200B      "Sistema de reviews"
\u200B    ],
\u200B    estado: "Producción ✅"
\u200B  };

\u200B  return (
\u200B    <div className="proyecto">
\u200B      <h2>{proyecto.nombre}</h2>
\u200B      <p>{proyecto.descripcion}</p>
\u200B    </div>
\u200B  );
};

export default EcommercePlatform;`
    },
    'proyectos/portfolio.tsx': {
      language: 'typescript',
      content: `// 🎨 Portfolio Personal
interface Portfolio {
\u200B  nombre: string;
\u200B  tipo: string;
\u200B  tecnologias: string[];
\u200B  caracteristicas: string[];
}

const miPortfolio: Portfolio = {
\u200B  nombre: "Portfolio Interactivo",
\u200B  tipo: "macOS Style Interface",
\u200B  tecnologias: ["React", "TypeScript", "TailwindCSS"],
\u200B  caracteristicas: [
\u200B    "Interfaz estilo macOS",
\u200B    "Aplicaciones interactivas",
\u200B    "Animaciones fluidas",
\u200B    "Totalmente responsive"
\u200B  ]
};

// Este proyecto que estás viendo ahora mismo! 🚀
console.log("Bienvenido a mi mundo digital");`
    },
    'mi-stack.json': {
      language: 'json',
      content: `{
\u200B  "frontend": {
\u200B    "frameworks": ["React", "Next.js"],
\u200B    "styling": ["TailwindCSS", "CSS3"],
\u200B    "tools": ["Vite", "Webpack"]
\u200B  },
\u200B  "backend": {
\u200B    "runtime": ["Node.js"],
\u200B    "frameworks": ["Express"],
\u200B    "databases": ["MongoDB", "PostgreSQL"]
\u200B  },
\u200B  "devTools": {
\u200B    "versionControl": "Git & GitHub",
\u200B    "editor": "VS Code",
\u200B    "diseño": "Figma"
\u200B  },
\u200B  "learning": ["TypeScript", "Three.js", "AWS"]
}`
    }
  };

  const fileStructure = [
    { name: 'about-me.js', type: 'file', icon: '📄' },
    { 
      name: 'proyectos', 
      type: 'folder', 
      icon: '📁',
      children: [
        { name: 'ecommerce.jsx', type: 'file', icon: '⚛️' },
        { name: 'portfolio.tsx', type: 'file', icon: '💎' }
      ]
    },
    { name: 'mi-stack.json', type: 'file', icon: '📋' }
  ];

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => 
      prev.includes(folderName) 
        ? prev.filter(f => f !== folderName)
        : [...prev, folderName]
    );
  };

  const openFile = (fileName) => {
    setActiveFile(fileName);
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
  };

  const closeTab = (fileName, e) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(tab => tab !== fileName);
    setOpenTabs(newTabs);
    if (activeFile === fileName && newTabs.length > 0) {
      setActiveFile(newTabs[newTabs.length - 1]);
    }
  };

  const getFileIcon = (fileName) => {
    if (fileName.endsWith('.js')) return '📄';
    if (fileName.endsWith('.jsx')) return '⚛️';
    if (fileName.endsWith('.tsx')) return '💎';
    if (fileName.endsWith('.json')) return '📋';
    return '📄';
  };

  const renderCode = (content, language) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      let coloredLine = line;
      
      // Comments
      if (line.trim().startsWith('//')) {
        return <div key={i} className="text-gray-500">{line}</div>;
      }
      
    //   // Keywords
    //   const keywords = ['const', 'let', 'var', 'function', 'return', 'import', 'export', 'from', 'default', 'interface', 'class'];
    //   keywords.forEach(keyword => {
    //     coloredLine = coloredLine.replace(
    //       new RegExp(`\\b${keyword}\\b`, 'g'),
    //       `<span class="text-purple-400">${keyword}</span>`
    //     );
    //   });
      
      // Strings
      coloredLine = coloredLine.replace(
        /(["'`])(?:(?=(\\?))\2.)*?\1/g,
        '<span class="text-green-400">$&</span>'
      );
      
      return (
        <div key={i} className="flex">
          <span className="text-gray-600 w-12 text-right pr-4 select-none">{i + 1}</span>
          <span dangerouslySetInnerHTML={{ __html: coloredLine }} />
        </div>
      );
    });
  };

  return (
    <div className="flex h-full bg-[#1e1e1e] text-gray-300 font-mono text-sm">
      {/* Sidebar */}
      <div className="w-64 bg-[#252526] border-r border-[#3e3e42] flex flex-col">
        <div className="p-3 text-xs text-gray-400 uppercase tracking-wider border-b border-[#3e3e42]">
          Explorer
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          {fileStructure.map((item) => (
            <div key={item.name}>
              {item.type === 'folder' ? (
                <>
                  <div
                    onClick={() => toggleFolder(item.name)}
                    className="flex items-center gap-1 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer rounded"
                  >
                    {expandedFolders.includes(item.name) ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                    <Folder size={16} className="text-blue-400" />
                    <span>{item.name}</span>
                  </div>
                  {expandedFolders.includes(item.name) && (
                    <div className="ml-4">
                      {item.children.map((child) => (
                        <div
                          key={child.name}
                          onClick={() => openFile(`${item.name}/${child.name}`)}
                          className={`flex items-center gap-2 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer rounded ${
                            activeFile === `${item.name}/${child.name}` ? 'bg-[#37373d]' : ''
                          }`}
                        >
                          <span>{child.icon}</span>
                          <span>{child.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div
                  onClick={() => openFile(item.name)}
                  className={`flex items-center gap-2 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer rounded ${
                    activeFile === item.name ? 'bg-[#37373d]' : ''
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 flex flex-col">
        {/* Tabs */}
        <div className="flex bg-[#252526] border-b border-[#3e3e42] overflow-x-auto">
          {openTabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveFile(tab)}
              className={`flex items-center gap-2 px-4 py-2 border-r border-[#3e3e42] cursor-pointer group ${
                activeFile === tab ? 'bg-[#1e1e1e]' : 'hover:bg-[#2a2d2e]'
              }`}
            >
              <span className="text-xs">{getFileIcon(tab)}</span>
              <span className="text-sm whitespace-nowrap">{tab.split('/').pop()}</span>
              <button
                onClick={(e) => closeTab(tab, e)}
                className="ml-2 opacity-0 group-hover:opacity-100 hover:bg-[#3e3e42] rounded px-1"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Code Editor */}
        <div className="flex-1 overflow-auto p-4 bg-[#1e1e1e]">
          {activeFile && files[activeFile] ? (
            <div className="leading-6">
              {renderCode(files[activeFile].content, files[activeFile].language)}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-600">
              <div className="text-center">
                <FileCode size={64} className="mx-auto mb-4 opacity-50" />
                <p>Selecciona un archivo para empezar</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VSCode;