import React from 'react';
import { BiCodeAlt, BiServer, BiPaint } from "react-icons/bi";
import { SiReact, SiNodedotjs, SiTailwindcss, SiJavascript } from "react-icons/si";

const Expertise = () => {
    return (
        <section className="relative w-full">
            {/* Título de la sección con impacto */}
            <div className="mb-16">
                <h2 className="text-[#00F5FF] font-mono text-lg mb-2 tracking-widest uppercase">
                    Core Competencies
                </h2>
                <h3 className="text-white md:text-[3.5rem] text-[2.5rem] font-bold leading-tight">
                    Especialización <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7127BA] to-[#BC13FE]">
                        Técnica y Creativa.
                    </span>
                </h3>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Tarjeta 1: Frontend (Ocupa 7 columnas en escritorio) */}
                <div className="md:col-span-7 group relative bg-[#050505] border border-white/10 p-8 md:p-10 rounded-3xl hover:border-[#7127BA]/50 transition-colors duration-500 overflow-hidden">
                    {/* Resplandor interno en hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7127BA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <BiCodeAlt className="text-[3rem] text-[#00F5FF] mb-6" />
                            <h4 className="text-[1.8rem] text-white font-bold mb-4">Ingeniería Frontend</h4>
                            <p className="text-[1.1rem] text-[#a1a1a1] font-light leading-relaxed mb-8">
                                Desarrollo interfaces de usuario escalables y de alto rendimiento. Enfoque en la arquitectura de componentes, manejo de estado complejo y micro-interacciones que elevan la experiencia final.
                            </p>
                        </div>
                        
                        {/* Stack de tecnologías */}
                        <div className="flex gap-4 items-center">
                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-sm text-white">
                                <SiReact className="text-[#61DAFB]" /> React
                            </span>
                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-sm text-white">
                                <SiJavascript className="text-[#F7DF1E]" /> JavaScript
                            </span>
                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-sm text-white">
                                <SiTailwindcss className="text-[#06B6D4]" /> Tailwind CSS
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tarjeta 2: Backend (Ocupa 5 columnas en escritorio) */}
                <div className="md:col-span-5 group relative bg-[#050505] border border-white/10 p-8 md:p-10 rounded-3xl hover:border-[#00F5FF]/50 transition-colors duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#00F5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                        <BiServer className="text-[3rem] text-[#7127BA] mb-6" />
                        <h4 className="text-[1.8rem] text-white font-bold mb-4">Arquitectura Backend</h4>
                        <p className="text-[1.1rem] text-[#a1a1a1] font-light leading-relaxed mb-8">
                            Construcción de APIs RESTful robustas y seguras. Diseño de bases de datos relacionales y NoSQL, asegurando la integridad de los datos y tiempos de respuesta óptimos para plataformas exigentes.
                        </p>
                        
                        <div className="flex gap-4 items-center flex-wrap">
                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-sm text-white">
                                <SiNodedotjs className="text-[#339933]" /> Node.js
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tarjeta 3: UI/UX & Prototipado (Ocupa las 12 columnas) */}
                <div className="md:col-span-12 group relative bg-[#050505] border border-white/10 p-8 md:p-10 rounded-3xl hover:border-white/30 transition-colors duration-500 overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="relative z-10 flex-1">
                        <BiPaint className="text-[3rem] text-white mb-6" />
                        <h4 className="text-[1.8rem] text-white font-bold mb-4">Prototipado Visual y UI</h4>
                        <p className="text-[1.1rem] text-[#a1a1a1] font-light leading-relaxed">
                            No solo programo; visualizo. Integro herramientas de generación de imágenes por inteligencia artificial y metodologías de diseño para crear mockups de alta fidelidad, asegurando que el código final refleje una estética premium antes de escribir la primera línea.
                        </p>
                    </div>

                    {/* Decoración visual para la tarjeta amplia */}
                    <div className="flex-1 w-full flex justify-center md:justify-end opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-full max-w-[300px] h-20 border border-[#333] rounded-xl flex items-center px-4 gap-3 bg-black">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="h-2 w-1/2 bg-[#333] rounded-full ml-2"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Expertise;