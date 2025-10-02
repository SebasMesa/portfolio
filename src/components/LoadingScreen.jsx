import React from "react";
import logo from "../assets/logo3.png";

const LoadingScreen = ({ progress, isFadingOut, isLoading }) => {
  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center bg-black ${
        isFadingOut ? "opacity-0" : "opacity-100"
      } transition-opacity duration-600`}
    >
      <div className="w-full max-w-lg px-6">
        <div className="flex flex-col items-center gap-6">
          <img
            src={logo}
            alt="logo"
            className="w-28 h-28 object-contain animate-pulse-slow"
          />

          <div className="w-full mt-2 bg-white/6 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-white rounded-full"
              style={{
                width: `${progress}%`,
                transition: "width 120ms linear",
              }}
            />
          </div>

          <p className="text-sm text-white/70 mt-3">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
