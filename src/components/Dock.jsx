import React from "react";
import DockItem from "./DockItem";

import VisualStudioLogo from "../assets/visual.webp";
import Safari from "../assets/safari.png";
import Photos from "../assets/photos.png";
import Notes from "../assets/notes.png";
import Instagram from "../assets/instagram.png";
import Mail from "../assets/mail.png";
import Bin from "../assets/bin.png";
import Youtube from "../assets/youtube.png";

const Dock = ({ setOpenApp }) => {
  return (
    <div className="flex items-center md:items-end md:justify-center min-h-screen">
      <div className="bg-glass-mac mb-[4rem] px-[20px] py-[10px] text-center mx-[16px]">
        <div className="flex md:flex-row flex-col items-center gap-[1rem]">
          <DockItem
            icon={VisualStudioLogo}
            label="Visual Studio"
            onClick={() => setOpenApp("visual")}
          />
          <DockItem
            icon={Safari}
            label="Safari"
            onClick={() => setOpenApp("safari")}
          />
          <DockItem
            icon={Youtube}
            label="Youtube Music"
            onClick={() => setOpenApp("spotify")}
          />

          <div className="w-[2px] h-[40px] bg-white/20 hidden md:block" />

          <DockItem
            icon={Photos}
            label="Fotos"
            onClick={() => setOpenApp("photos")}
          />
          <DockItem
            icon={Notes}
            label="Notas"
            onClick={() => setOpenApp("notes")}
          />

          <div className="w-[2px] h-[40px] bg-white/20 hidden md:block" />

          <DockItem
            icon={Instagram}
            label="Instagram"
            href="https://instagram.com/lefiamma"
          />
          <DockItem icon={Mail} label="Mail" />
          <div className="w-[2px] h-[40px] bg-white/20 hidden md:block" />
          <DockItem icon={Bin} label="Papelera" />
        </div>
      </div>
    </div>
  );
};

export default Dock;
