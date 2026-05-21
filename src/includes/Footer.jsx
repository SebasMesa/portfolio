import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Iconos sociales
import { TbBrandFiverr } from "react-icons/tb";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/sebasmesa", label: "GitHub" },
        { icon: <TbBrandFiverr />, href: "https://www.fiverr.com/sebasmdev_/", label: "Fiverr" },
        { icon: <FaInstagram />, href: "https://instagram.com/lefiamma", label: "Instagram" },
    ];

    return (
        <footer className="w-full py-12 border-t border-white/5 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="flex flex-col items-center md:items-start">
                    <span className='font-mono transition-all duration-300 text-[1.7rem]'>
                        <span className="text-purple-500">[</span>
                        Sebastian Mesa
                        <span className="text-purple-500">]</span>
                    </span>
                    <p className="text-[#666] text-sm mt-2 font-light">
                        Construyendo el futuro de la web desde Medellín.
                    </p>
                </div>

                <div className="flex gap-6">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="text-[#a1a1a1] text-2xl hover:text-[#7127BA] transition-all duration-300 hover:-translate-y-1"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                <div className="text-center md:text-right">
                    <p className="text-[0.9rem] text-[#a1a1a1] font-light">
                        &copy; {currentYear} <span className="text-white font-medium text-gradient">Sebastian Mesa</span>.
                    </p>
                    <p className="text-[0.7rem] text-[#444] uppercase tracking-[2px] mt-1">
                        Todos los derechos reservados
                    </p>
                </div>
            </div>

            <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7127BA]/30 to-transparent" />
        </footer>
    );
};

export default Footer;