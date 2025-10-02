import React from 'react'
import { PiArrowBendUpRight } from "react-icons/pi";
import Tablet from '../assets/mockuper.png';

const Works = () => {
    return (
        <>
            <section className='mt-[4rem]'>
                <h2 className='md:text-[3.5rem] font-bold text-[2.5rem] text-center'>
                    🚀 Mis proyectos y trabajos
                </h2>
                <p className='text-[1.3rem] text-center text-[#a1a1a1] font-light mt-[1rem] mb-[4rem]'>
                    Cada línea de código cuenta una historia 📖
                </p>


                <section>
                    <div
                        className='border border-[#333] dark:border-[#444] px-[3rem] pt-4 rounded-[1rem] hover:scale-105 transition-all duration-300 cursor-pointer mb-[2rem] overflow-hidden h-[65vh] group'
                    >
                        <section className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-black w-[60px] h-[60px] flex justify-center items-center rounded-[10px] '>
                                    Pr
                                </div>
                                <h3 className='text-[2.5rem] font-bold mb-[1rem] mt-[1rem]'>ProRoute</h3>
                            </div>

                            <PiArrowBendUpRight className='text-[3rem] hover:translate-x-2 transition-transform duration-300' />
                        </section>
                        <p className='text-[1.3rem] text-[#a1a1a1] md:w-[55%]'>
                            Con ProRoute aprendes a programar 💻 desde cero, acompañado de una comunidad que impulsa tu crecimiento.                        </p>

                        <section className='flex gap-[1rem] items-center mt-[7rem] group-hover:mt-[5rem] transition-all duration-300'>
                            <div className='card-blue w-[550px] h-[450px] rounded-t-[10px] group-hover:rotate-[-8deg] rotate-[-2deg] mt-[2rem] transition-all duration-300 hidden md:block'>
                                <div className='flex flex-col justify-between h-full'>
                                    <div className='flex items-center gap-3 p-4'>
                                        <h2 className='text-[2rem] font-bold'>ProRoute</h2>
                                    </div>

                                    <div className='bg-glass w-full h-[200px] p-4'>
                                        <p className='text-[1.5rem] font-[RegradeRegular] '>De cero a programador.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-[#222] h-[450px] w-full rounded-t-[10px] rotate-[1deg] group-hover:rotate-[5deg] transition-all duration-300'>
                                <img src={Tablet} alt="tablet" className='w-full h-full object-cover rounded-t-[10px]' />
                            </div>
                        </section>
                    </div>

                </section>
            </section>
        </>
    )
}

export default Works