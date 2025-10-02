import React, { useState } from "react";
import MacWindow from "../ui/MacWindow";

const Desktop = () => {
  const [openApp, setOpenApp] = useState(null);

  return (
    <div className="">
      {/* Íconos de aplicaciones */}
      <div className="p-4 flex flex-col space-y-4">
        <button
          className="text-white"
          onClick={() => setOpenApp("proyectos")}
        >
          📁 Proyectos
        </button>
        <button
          className="text-white"
          onClick={() => setOpenApp("notas")}
        >
          📝 Notas
        </button>
        <button
          className="text-white"
          onClick={() => setOpenApp("musica")}
        >
          🎵 Música
        </button>
      </div>

      {/* Ventanas */}
      {openApp === "proyectos" && (
        <MacWindow title="Proyectos" onClose={() => setOpenApp(null)}>
          <p>Aquí puedes mostrar tus proyectos del portafolio 🚀</p>
        </MacWindow>
      )}
      {openApp === "notas" && (
        <MacWindow title="Notas" onClose={() => setOpenApp(null)}>
          <p>Algunos pensamientos o reflexiones sobre ti ✍️</p>
        </MacWindow>
      )}
      {openApp === "musica" && (
        <MacWindow title="Música" onClose={() => setOpenApp(null)}>
          <p>Tu playlist favorita de Spotify 🎧</p>
        </MacWindow>
      )}
    </div>
  );
};

export default Desktop;
