import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import styles from '../styles';
import { TbWorldWww } from "react-icons/tb";

const Main = () => {
    return (
        <>
            <div className={`w-full relative py-[5rem]`}>

                <h2 className='text-glass-macos md:text-[3.5rem] font-bold text-[2.5rem]'>
                    Creo en proyectos con propósito. 
                </h2>
                <p className='text-[1.3rem] text-[#a1a1a1] font-light mt-[1rem] mb-[4rem]'>
                    No se trata solo de escribir código. <br />
                    Se trata de darle vida a experiencias digitales que conecten con las personas, que se vean increíbles y funcionen mejor aún. 💡
                </p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-[3rem] mb-[4rem]'>
                        <div className='border border-[#333] dark:border-[#444] p-5 rounded-[1rem] hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col bg-discount-gradient-alt'>
                            <TbWorldWww className='text-[4rem] mx-auto mb-[1rem]'/>
                            <h3 className='text-[1.5rem] font-bold mb-[1rem] text-center'>Desarrollo Web</h3>
                            <p className='text-[1rem] text-[#a1a1a1] font-light'>Construyo sitios web modernos y responsivos que ofrecen experiencias de usuario excepcionales. </p>
                        </div>
                        <div className='scale-105 border border-[#333] dark:border-[#444] p-5 rounded-[1rem] hover:scale-110 transition-all duration-300 cursor-pointer flex flex-col bg-discount-gradient-glass--light '>
                            <TbWorldWww className='text-[4rem] mx-auto mb-[1rem]'/>
                            <h3 className='text-[1.5rem] font-bold mb-[1rem]'>Diseño UI/UX</h3>
                            <p className='text-[1rem] text-[#a1a1a1] font-light'>Diseño interfaces intuitivas y atractivas que mejoran la experiencia del usuario. </p>
                        </div>
                        <div className='border border-[#333] dark:border-[#444] p-5 rounded-[1rem] hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col bg-discount-gradient-alt'>
                            <TbWorldWww className='text-[4rem] mx-auto mb-[1rem]'/>

                            <h3 className='text-[1.5rem] font-bold mb-[1rem]'>💼 Consultoría Tecnológica</h3>
                            <p className='text-[1rem] text-[#a1a1a1] font-light'>Ofrezco asesoramiento experto para ayudarte a elegir las mejores tecnologías para tu proyecto. </p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Main