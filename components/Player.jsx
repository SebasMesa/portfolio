import React from "react";

const Player = () => {
  const sections = [
    {
      title: "Reproductor de canciones",
      items: [
        { title: "Track 1", artist: "Artista X", cover: "https://picsum.photos/400?1" },
        { title: "Track 2", artist: "Artista Y", cover: "https://picsum.photos/400?2" },
        { title: "Track 3", artist: "Artista Z", cover: "https://picsum.photos/400?3" },
        { title: "Track 4", artist: "Artista W", cover: "https://picsum.photos/400?4" },
        { title: "Track 4", artist: "Artista W", cover: "https://picsum.photos/400?4" },

      ],
    },
    {
      title: "Mis listas de reproduccion",
      items: [
        { title: "Track 5", artist: "Artista A", cover: "https://picsum.photos/400?5" },
        { title: "Track 6", artist: "Artista B", cover: "https://picsum.photos/400?6" },
        { title: "Track 7", artist: "Artista C", cover: "https://picsum.photos/400?7" },
        { title: "Track 8", artist: "Artista D", cover: "https://picsum.photos/400?8" },
        { title: "Track 4", artist: "Artista W", cover: "https://picsum.photos/400?4" },
        { title: "Track 4", artist: "Artista W", cover: "https://picsum.photos/400?4" },

      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b relative from-black via-neutral-900 to-black text-white rounded-b-2xl overflow-y-hidden h-full">
      <div className="bg-glass-black absolute h-full w-full z-[10] flex justify-center items-center">
        <div className="text-center">
          <h3 className="text-white text-[2rem]">Estamos en mantenimiento</h3>
          <p className="text-[1.15rem] w-[60%] mx-auto mt-[.6rem] font-delgada">Una parte de nuestro sitio web está siendo actualizada para mejorar tu experiencia.
            Volverá a estar disponible muy pronto. </p>
        </div>
      </div>
      <div className="py-[2rem] px-[4rem]">
        {/* Barra superior de búsqueda */}
        <div className="flex items-center bg-neutral-800 rounded-full px-4 py-2 mb-6 shadow-lg">
          <input
            type="text"
            placeholder="Buscar canciones, álbumes, artistas..."
            className="bg-transparent outline-none flex-1 text-sm text-gray-300 placeholder-gray-500"
          />
          <span className="text-gray-400">🔍</span>
        </div>

        {/* Secciones */}
        {sections.map((section, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{section.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {section.items.map((item, j) => (
                <div key={j} className="cursor-pointer group">
                  {/* Portada cuadrada */}
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-[20%]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition">
                      <button className="p-3 rounded-full shadow-lg">▶</button>
                    </div>
                  </div>
                  {/* Texto debajo */}
                  <div className="mt-2 ml-[.5rem]">
                    <p className="text-sm font-semibold truncate">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Player;
