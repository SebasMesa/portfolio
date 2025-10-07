import React from 'react'
import SafariWallpaper from "../assets/safarii.png";
import Instagram from "../assets/instagram.png";
import Awards from "../assets/awards.png";
import Youtube from "../assets/youtube.png";
import GitHub from "../assets/github.png";
import Ui from "../assets/ui.png";
import MusicFor from "../assets/musicfor.jpg";


const Safari = () => {
    const isMobile = window.innerWidth < 768;

    return (
        <div
            className="w-full h-full flex items-center bg-white bg-cover bg-center overflow-auto"
            style={{ backgroundImage: `url(${SafariWallpaper})` }}
        >
            {/* Favoritos de Safari */}
            <div className={`${isMobile ? 'w-full px-4' : 'w-[56%]'} mx-auto py-6`}>
                <h2 className="text-xl md:text-[1.7rem] mb-4 md:mb-6 ml-2 md:ml-0">Mis favoritos</h2>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    
                    <a href="https://instagram.com/lefiamma" target="_blank" rel="noopener noreferrer" 
                       className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
                        <img
                            src={Instagram}
                            alt="Instagram"
                            className="w-[60px] md:w-[70px] cursor-pointer"
                        />
                        <span className="font-light text-[.7rem] md:text-[.8rem] mt-2 text-center">
                            Instagram
                        </span>
                    </a>

                    <a href="https://www.awwwards.com/" target="_blank" rel="noopener noreferrer" 
                       className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
                        <img
                            src={Awards}
                            alt="Awwwards"
                            className="w-[60px] h-[60px] md:w-[70px] md:h-[69px] cursor-pointer rounded-[22%]"
                        />
                        <span className="font-light text-[.7rem] md:text-[.8rem] mt-2 text-center">
                            Awwwards
                        </span>
                    </a>

                    <a href="https://music.youtube.com/channel/UCC3xLe037h9TlbNWe0uiHig" target="_blank" rel="noopener noreferrer" 
                       className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
                        <img
                            src={Youtube}
                            alt="Youtube Music"
                            className="w-[60px] md:w-[70px] cursor-pointer"
                        />
                        <span className="font-light text-[.7rem] md:text-[.8rem] mt-2 text-center">
                            Youtube Music
                        </span>
                    </a>

                    <a href="https://github.com/SebasMesa/" target="_blank" rel="noopener noreferrer" 
                       className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
                        <img
                            src={GitHub}
                            alt="Github"
                            className="w-[60px] md:w-[70px] cursor-pointer"
                        />
                        <span className="font-light text-[.7rem] md:text-[.8rem] mt-2 text-center">
                            Github
                        </span>
                    </a>

                    <a href="https://uiverse.io" target="_blank" rel="noopener noreferrer" 
                       className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
                        <img
                            src={Ui}
                            alt="Uiverse"
                            className="w-[60px] h-[60px] md:w-[70px] md:h-[69px] cursor-pointer rounded-[22%]"
                        />
                        <span className="font-light text-[.7rem] md:text-[.8rem] mt-2 text-center">
                            Uiverse
                        </span>
                    </a>

                    <a href="https://musicforprogramming.net/one" target="_blank" rel="noopener noreferrer" 
                       className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
                        <img
                            src={MusicFor}
                            alt="Music For Programming"
                            className="w-[60px] h-[60px] md:w-[70px] md:h-[69px] cursor-pointer rounded-[22%]"
                        />
                        <span className="font-light text-[.7rem] md:text-[.8rem] mt-2 text-center">
                            MFP
                        </span>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Safari