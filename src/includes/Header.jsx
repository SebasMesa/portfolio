import React from 'react'
import styles from '../styles'
import { PiDotsNineBold } from "react-icons/pi";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isHovered2, setIsHovered2] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div>
            <div className={`logo text-[1.4rem] flex justify-between items-center w-full ${styles.paddingY}`}>
                <h1 className='text-[1.7rem]'>[Sebastian Mesa]</h1>
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* <PiDotsNineBold 
                        className={`text-[2.3rem] transition-transform duration-300 ${isHovered ? 'rotate-[135deg]' : ''} cursor-pointer`}
                    /> */}

                    <button onClick={() => setIsMenuOpen(true)} className={`transition-transform duration-300 grid grid-cols-2 gap-[1rem] p-2 hover:opacity-80 cursor-pointer relative z-[1] ${isHovered ? 'rotate-[45deg]' : ''}`}>
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                    </button>

                </div>
            </div>

            <div className={`fixed left-0 w-full h-full bg-glass-black z-10 ${isMenuOpen ? 'bottom-0' : 'bottom-[-100%]'} transition-all duration-500`}>
                <button
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                    onClick={() => setIsMenuOpen(false)}
                    className={`absolute top-[2rem] md:top-[5rem] right-[2rem] md:right-[13rem] transition-transform duration-300 grid grid-cols-3 gap-[.4rem] p-2 hover:opacity-80 cursor-pointer ${isHovered2 ? 'rotate-[45deg]' : ''}`}
                >
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span></span>
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span></span>
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span></span>
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span></span>
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                </button>                
             
                <ul className='flex flex-col justify-center items-center h-full gap-10 text-[2.5rem] md:text-[4rem] font-bold'>
                    <li className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>Inicio</li>
                    <li className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>Sobre mi</li>
                    <li className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>Proyectos</li>
                    <li className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>Contacto</li>
                </ul>
            </div>
        </div>
    )
}

export default Header