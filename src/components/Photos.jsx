import React, { useState, useEffect } from 'react';
import { X, Heart, Download, Share2, ChevronLeft, ChevronRight, Search, Grid3x3, Image as ImageIcon, Clock, Star, MapPin, Users } from 'lucide-react';
import photo1 from '../assets/photos/1.jpg';
import photo2 from '../assets/photos/2.jpg';
import photo3 from '../assets/photos/3.jpg';

const Photos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const photos = [
    { id: 1, url: photo1, title: 'Back' },
    // { id: 2, url: photo2, title: '2 de octubre 2025' },
    { id: 3, url: photo3, title: '2 de octubre 2025' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Auto-hide sidebar en pantallas pequeñas
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleLike = (photoId, e) => {
    e?.stopPropagation();
    setLikedPhotos(prev => 
      prev.includes(photoId) 
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  // Calcular columnas según ancho de ventana
  const getColumns = () => {
    if (!sidebarOpen) {
      if (windowWidth >= 1600) return 6;
      if (windowWidth >= 1400) return 5;
      if (windowWidth >= 1200) return 4;
      return 3;
    } else {
      if (windowWidth >= 1600) return 5;
      if (windowWidth >= 1400) return 4;
      if (windowWidth >= 1200) return 3;
      return 3;
    }
  };

  return (
    <div className="h-full bg-[#1e1e1e] flex overflow-hidden">
      {/* Sidebar */}
      <div className={`bg-[#252526] border-r border-[#3e3e42] transition-all duration-300 flex-shrink-0
        ${sidebarOpen ? 'w-56' : 'w-0'} overflow-hidden`}>
        <div className="p-4 space-y-1">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 px-2">Libreria</div>

          <SidebarItem icon={<ImageIcon size={16} />} label="Libreria" active />
          <SidebarItem icon={<Star size={16} />} label="Favoritos" />
          <SidebarItem icon={<Clock size={16} />} label="Recientes" />
          <SidebarItem icon={<MapPin size={16} />} label="Lugares" />
          <SidebarItem icon={<Users size={16} />} label="Personas" />

          <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 px-2 mt-6">Álbumes</div>

          <SidebarItem label="2025" count={45} />
          <SidebarItem label="2024" count={23} />
          <SidebarItem label="2023" count={12} />
          <SidebarItem label="2022" count={67} />
          
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#252526] border-b border-[#3e3e42] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 hover:bg-[#2d2d30] rounded transition-colors text-gray-400 hover:text-white"
            >
              {sidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
            <h1 className="text-white text-lg font-medium">Todas las Fotos</h1>
            <span className="text-gray-500 text-sm">{photos.length} fotos</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar"
                className="bg-[#1e1e1e] text-white text-sm pl-9 pr-4 py-1.5 rounded-md w-64 
                  focus:outline-none focus:ring-1 focus:ring-blue-500 border border-[#3e3e42]"
              />
            </div>
            <button className="p-1.5 hover:bg-[#2d2d30] rounded transition-colors text-gray-400 hover:text-white">
              <Grid3x3 size={18} />
            </button>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div 
            className="grid gap-2"
            style={{ gridTemplateColumns: `repeat(${getColumns()}, 1fr)` }}
          >
            {photos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onSelect={setSelectedPhoto}
                isLiked={likedPhotos.includes(photo.id)}
                onLike={(e) => toggleLike(photo.id, e)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <PhotoModal 
          photo={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)}
          isLiked={likedPhotos.includes(selectedPhoto.id)}
          onLike={(e) => toggleLike(selectedPhoto.id, e)}
        />
      )}
    </div>
  );
};

const SidebarItem = ({ icon, label, active, count }) => {
  return (
    <div className={`flex items-center justify-between px-2 py-1.5 rounded-md cursor-pointer transition-colors
      ${active ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-[#2d2d30]'}`}>
      <div className="flex items-center gap-2">
        {icon && <span className={active ? 'text-white' : 'text-gray-400'}>{icon}</span>}
        <span className="text-sm">{label}</span>
      </div>
      {count && <span className="text-xs text-gray-500">{count}</span>}
    </div>
  );
};

const PhotoCard = ({ photo, onSelect, isLiked, onLike }) => {
  return (
    <div
      onClick={() => onSelect(photo)}
      className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer 
        transition-all duration-300 hover:scale-[1.02] bg-[#252526]"
    >
      <img
        src={photo.url}
        alt={photo.title}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        
        <div className="absolute top-2 right-2 transform translate-y-[-10px] opacity-0 
          group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={onLike}
            className={`p-2 rounded-full backdrop-blur-md transition-all duration-200
              ${isLiked 
                ? 'bg-red-500/90 text-white' 
                : 'bg-black/40 text-white/90 hover:bg-black/60'}`}
          >
            <Heart size={14} fill={isLiked ? 'currentColor' : 'none'} strokeWidth={2} />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-2 
          group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-xs font-light">{photo.title}</p>
        </div>
      </div>
    </div>
  );
};

const PhotoModal = ({ photo, onClose, isLiked, onLike }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2.5 rounded-full bg-[#252526] hover:bg-[#2d2d30]
          text-white/90 transition-all duration-200"
      >
        <X size={20} strokeWidth={2} />
      </button>

      <div className="relative max-w-6xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.url}
          alt={photo.title}
          className="relative rounded-xl max-h-[90vh] w-auto shadow-2xl"
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
          rounded-b-xl">
          <h2 className="text-white text-xl font-light mb-3">{photo.title}</h2>
          <div className="flex gap-2">
            <button
              onClick={onLike}
              className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm
                ${isLiked 
                  ? 'bg-red-500/80 text-white hover:bg-red-500' 
                  : 'bg-white/10 text-white/90 hover:bg-white/20 backdrop-blur-sm'}`}
            >
              <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} strokeWidth={2} />
              Me gusta
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white/90 
              hover:bg-white/20 transition-all duration-200 flex items-center gap-2 text-sm">
              <Download size={16} strokeWidth={2} />
              Descargar
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white/90 
              hover:bg-white/20 transition-all duration-200 flex items-center gap-2 text-sm">
              <Share2 size={16} strokeWidth={2} />
              Compartir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;