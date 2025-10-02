import React from 'react'
import SafariWallpaper from "../assets/safarii.png";
import Instagram from "../assets/instagram.png";
import Awards from "../assets/awards.png";
import Youtube from "../assets/youtube.png";
import GitHub from "../assets/github.png";
import Ui from "../assets/ui.png";
import MusicFor from "../assets/musicfor.jpg";


const Safari = () => {
    return (
        <div
            className="w-full h-full flex items-center bg-white bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${SafariWallpaper})` }}
        >
            {/* Favoritos de Safari */}
            <div className="w-[56%] mx-auto">
                <h2 className="text-[1.7rem]">Mis favoritos</h2>
                <div className="flex items-center gap-[.9rem] mt-[.9rem]">
                    <a href="https://instagram.com/lefiamma" target="_blank" rel="noopener noreferrer" className="relative group flex flex-col items-center cursor-pointer">
                        <img
                            src={Instagram}
                            alt="Instagram"
                            className="w-[70px] cursor-pointer"
                        />

                        <span className="font-light text-[.8rem] mt-[.4rem]">
                            Instagram
                        </span>
                    </a>

                    <a href="https://www.awwwards.com/" target="_blank" rel="noopener noreferrer" className="relative group flex flex-col items-center" >
                        <img
                            src={Awards}
                            alt="Awwwards"
                            className="w-[70px] h-[69px] cursor-pointer rounded-[22%]"
                        />


                        <span className="font-light text-[.8rem] mt-[.4rem]">
                            Awwwards
                        </span>
                    </a>

                    <div className="flex items-center gap-[.9rem]">
                        <a href="https://music.youtube.com/channel/UCC3xLe037h9TlbNWe0uiHig" target="_blank" rel="noopener noreferrer" className="relative group flex flex-col items-center cursor-pointer">
                            <img
                                src={Youtube}
                                alt="Youtube Music"
                                className="w-[70px] cursor-pointer"
                            />

                            <span className="font-light text-[.8rem] mt-[.4rem]">
                                Youtube Music
                            </span>
                        </a>

                    </div>

                    <div className="flex items-center gap-[.9rem]">
                        <a href="https://github.com/SebasMesa/" target="_blank" rel="noopener noreferrer" className="relative group flex flex-col items-center cursor-pointer">
                            <img
                                src={GitHub}
                                alt="Github"
                                className="w-[70px] cursor-pointer"
                            />

                            <span className="font-light text-[.8rem] mt-[.4rem]">
                                Github
                            </span>
                        </a>

                    </div>

                    <div className="flex items-center gap-[.9rem]">
                        <a href="https://uiverse.io" target="_blank" rel="noopener noreferrer" className="relative group flex flex-col items-center cursor-pointer">
                            <img
                                src={Ui}
                                alt="Uiverse"
                                className="w-[70px] h-[69px] cursor-pointer rounded-[22%]"
                            />

                            <span className="font-light text-[.8rem] mt-[.4rem]">
                                Uiverse
                            </span>
                        </a>

                    </div>

                    <div className="flex items-center gap-[.9rem]">
                        <a href="https://musicforprogramming.net/one" target="_blank" rel="noopener noreferrer" className="relative group flex flex-col items-center cursor-pointer">
                            <img
                                src={MusicFor}
                                alt="Music For Programming"
                                className="w-[70px] h-[69px] cursor-pointer rounded-[22%]"
                            />

                            <span className="font-light text-[.8rem] mt-[.4rem]">
                                MFP
                            </span>
                        </a>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Safari