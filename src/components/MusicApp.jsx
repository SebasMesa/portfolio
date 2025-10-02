import { useState, useRef, useEffect } from "react";
import RapSong1 from "../assets/Music/Rap/DoForLove.mp3";
import SalsaSong1 from "../assets/Music/Salsa/Mentira.mp3";
import HouseSong1 from "../assets/music/House/DaFonk.mp3";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import DoForLove from '../assets/cover/doforlove.jpeg'
import Mentira from '../assets/cover/mentira.jpeg'
import DaFonk from '../assets/cover/dafonk.jpg'


const songs = [
    { title: "Do For Love", artist: "2Pac", src: RapSong1, cover: DoForLove },
    { title: "Mentira", artist: "Cheo Feliciano", src: SalsaSong1, cover: Mentira },
    { title: "Da Fonk", artist: "Mochakk", src: HouseSong1, cover: DaFonk },
];

export default function MusicApp() {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const currentSong = songs[currentSongIndex];

    // Reproducir/Pausar
    const handlePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    // Canción siguiente
    const handleNext = () => {
        setCurrentSongIndex((prev) => (prev + 1) % songs.length);
        setIsPlaying(true);
    };

    // Canción anterior
    const handlePrev = () => {
        setCurrentSongIndex((prev) =>
            prev === 0 ? songs.length - 1 : prev - 1
        );
        setIsPlaying(true);
    };

    // Reproducir automáticamente al cambiar de canción
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
    }, [currentSongIndex]);

    return (
        <div className="">
            <div className="fixed w-[400px] top-5 right-5 bg-glass-mac backdrop-blur-md px-6 py-4 rounded-2xl flex justify-between items-center shadow-2xl border border-white/10">


                {/* Info canción */}
                <div className="flex gap-[1rem]">
                    <div className={`bg-white w-[50px] h-[50px] rounded-full bg-cover bg-center ${isPlaying ? 'animate-spin' : ''} [animation-duration:5s]`} style={{ backgroundImage: `url(${currentSong.cover})` }}> </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold">{currentSong.title}</p>
                        <p className="text-sm text-gray-400">{currentSong.artist}</p>
                    </div>
                </div>

                {/* Controles */}
                <div className="flex items-center gap-5">
                    <button onClick={handlePrev} className="text-gray-300 hover:text-white">
                        <TbPlayerTrackPrevFilled className="text-[22px]" />

                    </button>
                    <button onClick={handlePlayPause} className="text-gray-300 hover:text-white">
                        {isPlaying ? <FaPause className="text-[22px]" /> : <FaPlay className="text-[22px]" />}
                    </button>
                    <button onClick={handleNext} className="text-gray-300 hover:text-white">
                        <TbPlayerTrackNextFilled className="text-[22px]" />
                    </button>
                </div>

                {/* Audio oculto */}
                <audio ref={audioRef} src={currentSong.src} />
            </div>
        </div>
    );
}
