import React from 'react'
import Textra from 'react-textra';

const HeroAlt = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-5 mt-[2rem] mb-[8rem]'>
                <h1 className='text-[3.5rem] md:text-[6rem] font-bold text-center'>Código simple. <br />Resultados <Textra effect='rightLeft' data={['grandes', 'memorables', 'impactantes']} /></h1>
                <p className='text-[1.3rem] md:text-[1.4rem] text-[#a1a1a1] font-light md:w-[60%] text-center mt-[2rem]'>Cada línea de código importa: diseño experiencias simples que generan  resultados reales.</p>
                <button className='text-[1.1rem] mt-[2rem] px-6 py-3 rounded-[10px]  text-white hover:opacity-80 transition-opacity duration-300 bg-discount-gradient font-semibold'>Hablemos de tu proyecto</button>
            </div>

        </>
    )
}

export default HeroAlt