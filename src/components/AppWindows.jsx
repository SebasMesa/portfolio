import React from "react";
import MacWindow from "../ui/MacWindow";
import Player from "../components/Player";
import Safari from "../components/Safari";
import MusicApp from "./MusicApp";
import VSCode from "./VSCode";
import Photos from "./Photos";
import Notes from "./Notes";

const AppWindows = ({ openApp, setOpenApp }) => {
  // Detectar si es móvil
  const isMobile = window.innerWidth < 768;

  // Configuración para pantalla completa en móvil
  const getWindowProps = (desktopProps) => {
    if (isMobile) {
      return {
        x: 0,
        y: 0,
        w: window.innerWidth,
        h: window.innerHeight,
      };
    }
    return desktopProps;
  };

  return (
    <>
      <MusicApp />

      {openApp === "visual" && (
        <MacWindow
          title="Visual Studio Code"
          {...getWindowProps({ x: 100, y: 100 })}
          onClose={() => setOpenApp(null)}
        >
          <VSCode />
        </MacWindow>
      )}

      {openApp === "photos" && (
        <MacWindow
          title="Photos"
          {...getWindowProps({
            x: 25,
            y: 25,
            w: window.innerWidth - 50,
            h: window.innerHeight - 50,
          })}
          onClose={() => setOpenApp(null)}
        >
          <Photos />
        </MacWindow>
      )}

      {openApp === "notes" && (
        <MacWindow
          title="Notas"
          {...getWindowProps({
            x: 75,
            y: 25,
            w: window.innerWidth - 700,
            h: window.innerHeight - 200,
          })}
          onClose={() => setOpenApp(null)}
        >
          <Notes />
        </MacWindow>
      )}

      {openApp === "spotify" && (
        <MacWindow
          title="Youtube Music"
          {...getWindowProps({ x: 500, y: 150 })}
          onClose={() => setOpenApp(null)}
        >
          <Player />
        </MacWindow>
      )}

      {openApp === "safari" && (
        <MacWindow
          title="Safari"
          {...getWindowProps({ x: 700, y: 50, w: 1100, h: 600 })}
          onClose={() => setOpenApp(null)}
        >
          <Safari />
        </MacWindow>
      )}
    </>
  );
};

export default AppWindows;
