import React, { useState } from 'react';
import { FiCopy, FiCheck, FiArrowUpRight } from 'react-icons/fi'; // Necesitas react-icons

const ContactMe = () => {
    const [copied, setCopied] = useState(false);
    const email = "sebasmesadev@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="relative">
            {/* Elemento decorativo de fondo (El 30% Púrpura) */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#7127BA]/20 blur-[120px] rounded-full -z-10" />
            
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="text-[#00F5FF] font-mono text-lg mb-2 block uppercase tracking-widest">
                            ¿Tienes una idea?
                        </span>
                        <h3 className="md:text-[4rem] text-[2.5rem] font-bold text-white leading-none">
                            Trabajemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7127BA] to-[#BC13FE]">juntos.</span>
                        </h3>
                    </div>
                    
                    <button 
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 text-[#a1a1a1] hover:text-[#00F5FF] transition-colors duration-300 text-sm font-mono"
                    >
                        {copied ? <FiCheck className="text-green-400" /> : <FiCopy />}
                        {copied ? "COPIADO" : "COPIAR CORREO"}
                    </button>
                </div>

                <div className="relative mt-12 group">
                    <a 
                        href={`mailto:${email}`}
                        className="block break-words md:text-[7rem] text-[3rem] font-black tracking-tighter leading-[0.9] transition-all duration-500 text-white/90 hover:text-white"
                    >
                        {/* Efecto de texto con borde y relleno animado */}
                        <span className="relative inline-block group-hover:translate-x-4 transition-transform duration-500">
                            sebasmesadev
                            <span className="text-[#00F5FF]">@</span>
                            <br />
                            gmail
                            <span className="text-[#7127BA]">.</span>
                            com
                        </span>
                        
                        {/* Flecha indicadora de link que aparece en hover */}
                        <FiArrowUpRight className="inline-block md:text-[5rem] text-[2.5rem] text-[#00F5FF] opacity-0 group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500" />
                    </a>

                    {/* Línea decorativa inferior con gradiente */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-[#7127BA] via-[#00F5FF] to-transparent mt-8 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>

                <div className="mt-20 flex flex-wrap gap-8 text-[#666] font-mono text-sm">
                    <div className="flex flex-col">
                        <span className="text-white mb-1">LOCALIZACIÓN</span>
                        <span>Medellín, Colombia 🇨🇴</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white mb-1">DISPONIBILIDAD</span>
                        <span>Freelance / Full-time</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;