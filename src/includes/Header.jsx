// import React from 'react'
// import styles from '../styles'
// import { PiDotsNineBold } from "react-icons/pi";
// import { MdOutlineClose } from "react-icons/md";

// const Header = () => {
//     const [isHovered, setIsHovered] = React.useState(false);
//     const [isHovered2, setIsHovered2] = React.useState(false);
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//     return (
//         <div>
//             <div className={`logo text-[1.4rem] flex justify-between items-center w-full py-[4rem]`}>
//                 <h1 className='text-[1.7rem] font-mono'>[Sebastian Mesa]</h1>
//                 <div
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                 >
//                     {/* <PiDotsNineBold 
//                         className={`text-[2.3rem] transition-transform duration-300 ${isHovered ? 'rotate-[135deg]' : ''} cursor-pointer`}
//                     /> */}

//                     <button onClick={() => setIsMenuOpen(true)} className={`transition-transform duration-300 grid grid-cols-2 gap-[1rem] p-2 hover:opacity-80 cursor-pointer relative z-[1] ${isHovered ? 'rotate-[45deg]' : ''}`}>
//                         <span className="w-2 h-2 rounded-full bg-white"></span>
//                         <span className="w-2 h-2 rounded-full bg-white"></span>
//                         <span className="w-2 h-2 rounded-full bg-white"></span>
//                         <span className="w-2 h-2 rounded-full bg-white"></span>
//                     </button>

//                 </div>
//             </div>

//             <div className={`fixed left-0 w-full h-full bg-glass-black z-10 ${isMenuOpen ? 'bottom-0' : 'bottom-[-100%]'} transition-all duration-500`}>
//                 <button
//                     onMouseEnter={() => setIsHovered2(true)}
//                     onMouseLeave={() => setIsHovered2(false)}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={`absolute top-[2rem] md:top-[5rem] right-[2rem] md:right-[13rem] transition-transform duration-300 grid grid-cols-3 gap-[.4rem] p-2 hover:opacity-80 cursor-pointer ${isHovered2 ? 'rotate-[45deg]' : ''}`}
//                 >
//                     <span className="w-2 h-2 rounded-full bg-white"></span>
//                     <span></span>
//                     <span className="w-2 h-2 rounded-full bg-white"></span>
//                     <span></span>
//                     <span className="w-2 h-2 rounded-full bg-white"></span>
//                     <span></span>
//                     <span className="w-2 h-2 rounded-full bg-white"></span>
//                     <span></span>
//                     <span className="w-2 h-2 rounded-full bg-white"></span>
//                 </button>                
             
//                 <ul className='flex flex-col justify-center items-center h-full gap-10 text-[2.5rem] md:text-[4rem] font-bold'>
//                     <li onClick={() => setIsMenuOpen(false)} className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'><a href="#">Inicio</a></li>
//                     <li onClick={() => setIsMenuOpen(false)} className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'><a href="#about">Sobre mí</a></li>
//                     <li onClick={() => setIsMenuOpen(false)} className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'><a href="#projects">Proyectos</a></li>
//                     <li onClick={() => setIsMenuOpen(false)} className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'><a href="#contact">Contacto</a></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Header



import React, { useState, useEffect } from 'react';
import { PiDotsNineBold } from "react-icons/pi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Lógica para detectar el scroll
    useEffect(() => {
        const handleScroll = () => {
            // Se activa cuando bajas más de 300px (ajustable a la mitad de tu Hero)
            if (window.scrollY > 300) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Inicio', link: '#' },
        { name: 'Sobre mí', link: '#about' },
        { name: 'Proyectos', link: '#projects' },
        { name: 'Contacto', link: '#contact' },
    ];

    return (
        <>
            {/* NAV PRINCIPAL: Cambia de estilo según el scroll */}
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-16
                ${scrolled 
                    ? 'py-8 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-2xl' 
                    : 'py-10 bg-transparent'}`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* LOGO con el color de acento Cian que sugerimos antes */}
                <h1 className={`font-mono transition-all duration-300 ${scrolled ? 'text-[1.3rem]' : 'text-[1.7rem]'}`}>
                    <span className="text-purple-500">[</span>
                    Sebastian Mesa
                    <span className="text-purple-500">]</span>
                </h1>

                    {/* BOTÓN MENÚ (Optimizado) */}
                    <button 
                        onClick={() => setIsMenuOpen(true)}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`transition-transform duration-300 grid grid-cols-2 gap-[1rem] p-2 group relative z-50
                            ${isHovered ? 'rotate-90' : ''}`}
                    >
                        {[...Array(4)].map((_, i) => (
                            <span key={i} className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 
                                ${isHovered ? 'bg-[#00F5FF]' : 'bg-white'}`}></span>
                        ))}
                    </button>
                </div>
            </header>

            {/* OVERLAY DEL MENÚ FULLSCREEN */}
            <div className={`fixed inset-0 w-full h-full bg-glass-black z-[60] flex flex-col justify-center items-center transition-all duration-700 ease-in-out
                ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                
                {/* Botón cerrar con icono de cierre dinámico */}
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-10 right-10 md:right-24 p-4 group transition-transform hover:rotate-90"
                >
                    <div className="relative w-8 h-8">
                        <span className="absolute block w-full h-1 bg-white rotate-45 top-4"></span>
                        <span className="absolute block w-full h-1 bg-white -rotate-45 top-4"></span>
                    </div>
                </button>

                <nav>
                    <ul className='flex flex-col gap-8 text-center'>
                        {menuItems.map((item, index) => (
                            <li 
                                key={index}
                                onClick={() => setIsMenuOpen(false)}
                                className='text-[2.5rem] md:text-[4rem] font-bold text-[#666] hover:text-white transition-all duration-500 transform hover:scale-110'
                            >
                                <a href={item.link} className="relative group">
                                    {item.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-[#7127BA] to-[#00F5FF] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;