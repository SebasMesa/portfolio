import React, { useEffect, useState } from "react";
import logo from "../assets/logo3.png";
import Wallpaper from "../assets/wallpaper.png";
import "../desktop.css";

import LoadingScreen from "../components/LoadingScreen";
import Dock from "../components/Dock";
import AppWindows from "../components/AppWindows";

const Dev = () => {
  const [openApp, setOpenApp] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 2200;

    function step(now) {
      const elapsed = now - start;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        raf = requestAnimationFrame(step);
      } else {
        setTimeout(() => setIsFadingOut(true), 250);
        setTimeout(() => setIsLoading(false), 800);
      }
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <LoadingScreen progress={progress} isFadingOut={isFadingOut} isLoading={isLoading} />

      <div
        className={`min-h-screen ${
          isLoading ? "pointer-events-none opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        <div
          className="min-h-screen w-full bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${Wallpaper})` }}
        >
          <img
            src={logo}
            alt="Logo"
            className="absolute top-1/2 left-1/2 w-40 -translate-x-1/2 -translate-y-1/2 opacity-[0.6] pointer-events-none select-none"
          />

          <Dock setOpenApp={setOpenApp} />
          <AppWindows openApp={openApp} setOpenApp={setOpenApp} />
        </div>
      </div>
    </>
  );
};

export default Dev;
