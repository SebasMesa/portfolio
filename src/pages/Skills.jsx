import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { FaAngular } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const allSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "Firebase", icon: <IoLogoFirebase className="text-[#FFCA28]" /> },
    { name: "SQL", icon: <GrMysql className="text-[#4479A1]" /> },
    { name: "Angular", icon: <FaAngular className="text-[#DD0031]" /> },
    { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-[#38BDF8]" /> },
];

// Helper to chunk array
function chunkArray(arr, size) {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    return res;
}

const Skills = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const skillsData = isMobile
        ? chunkArray(allSkills, 2)
        : [
                [
                    allSkills[0],
                    allSkills[1],
                    allSkills[2],
                    allSkills[3],
                ],
                [
                    allSkills[4],
                    allSkills[7],
                    allSkills[8],
                    allSkills[9],

                ],
                [
                    allSkills[5],
                    allSkills[6],
                ],
            ];

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 7000, stopOnInteraction: true })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <section className="py-[2rem]">
            <div className="mx-auto px-6">
                <h2 className="md:text-[3.5rem] font-bold text-[2.5rem] text-center text-white mb-12">
                    🛠️ Habilidades Técnicas
                </h2>

                <div className="relative">
                    <div className="overflow-x-hidden py-[2rem] max-w-[1050px] mx-auto" ref={emblaRef}>
                        <div className="flex">
                            {skillsData.map((group, i) => (
                                <div
                                    className="flex-[0_0_100%] flex justify-center"
                                    key={i}
                                >
                                    <div className="flex justify-center gap-6 flex-wrap">
                                        {group.map((skill, j) => (
                                            <div
                                                key={j}
                                                className="px-[2rem] py-[1rem] text-white shadow-sm hover:scale-105 transition-transform flex flex-col items-center justify-center border-[#444] border-[1px] rounded-lg"
                                            >
                                                <div className="text-[8rem] mb-4">{skill.icon}</div>
                                                <span className="text-[1.2rem] font-medium">{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => emblaApi && emblaApi.scrollPrev()}
                        className="absolute top-1/2 left-[-3rem] -translate-y-1/2 border border-white w-10 h-10 flex items-center justify-center rounded-full text-white hover:scale-110 transition"
                    >
                        ❮
                    </button>

                    <button
                        onClick={() => emblaApi && emblaApi.scrollNext()}
                        className="absolute top-1/2 right-[-3rem] -translate-y-1/2 border border-white w-10 h-10 flex items-center justify-center rounded-full text-white hover:scale-110 transition"
                    >
                        ❯
                    </button>
                </div>

                {/* Paginación */}
                <div className="flex justify-center mt-[4rem] gap-3">
                    {skillsData.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi && emblaApi.scrollTo(i)}
                            className={`w-3 h-3 rounded-full border transition ${i === selectedIndex ? "bg-white" : "border-white"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
