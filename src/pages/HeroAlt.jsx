import React from 'react'
import Textra from 'react-textra';


const HeroAlt = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-5 mt-[15rem] mb-[8rem]'>
                <h1 className='text-[3.5rem] md:text-[6rem] font-bold text-center '><span className='text-glass-macos'>Código simple. <br />Resultados</span> <Textra className='text-glass-macos' effect='rightLeft' data={['grandes', 'memorables', 'impactantes']} /></h1>
                {/* <p className='text-[1.3rem] md:text-[1.4rem] text-[#a1a1a1] font-light md:w-[60%] text-center mt-[2rem]'>Cada línea de código importa: diseño experiencias simples que generan  resultados reales.</p> */}

                <p className='text-[1.3rem] md:text-[1.4rem] text-[#a1a1a1] font-light md:w-[60%] text-center mt-[2rem]'>Desarrollador Full Stack apasionado por crear aplicaciones web eficientes, escalables y centradas en el usuario. Especializado en JavaScript/TypeScript, React y Node.js</p>

                <button className='text-[1.1rem] mt-[2rem] px-6 py-3 rounded-[10px] moradoGradiente text-white hover:opacity-80 transition-opacity duration-300 bg-glass-mac font-semibold'>Hablemos de tu proyecto</button>
            </div>

        </>
    )
}

export default HeroAlt