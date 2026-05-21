// import React from 'react'
// import Laptop from '../assets/pro.png';
// import { useNavigate } from 'react-router-dom'

// const Action = () => {
//     const navigate = useNavigate();
//     return (
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center'>
//             <div className=''>
//                 <h2 className='text-glass-macos md:text-[3.5rem] font-bold text-[2.5rem] '>
//                     👾 ¿Quieres descubrir más sobre mí?
//                 </h2>

//                 <p className='text-[1.3rem] text-[#a1a1a1] font-light mt-[1rem] mb-[2rem] w-[90%]'>
//                     Te invito a descubrir quién soy de una manera diferente, a través de una experiencia interactiva pensada para ti.
//                     Explora, diviértete y encuentra más de mí en cada detalle.
//                     <span className="text-white font-medium"> ¡Dale clic y comienza el viaje! </span>
//                 </p>
//             </div>

//             <img
//                 src={Laptop}
//                 alt="Laptop"
//                 onClick={() => navigate("/dev")}
//                 className='h-auto object-contain w-[90%] hover:scale-105 transition-all duration-300 laptop-glow cursor-pointer'
//             />        
//         </div>
//     )
// }

// export default Action


import React from 'react'
import Laptop from '../assets/pro.png';
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'; // Necesitas react-icons

const Action = () => {
    const navigate = useNavigate();
    
    return (
        <section className='relative'>
            {/* Fondo con resplandor púrpura sutil (el 30%) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7127BA]/10 blur-[120px] rounded-full -z-10" />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center max-w-7xl mx-auto px-6'>
                
                {/* LADO IZQUIERDO: TEXTO */}
                <div className='order-2 md:order-1'>
                    <h2 className='text-white md:text-[3.5rem] font-bold text-[2.5rem] leading-tight'>
                        ¿Listo para una <br />
                        <span className="">
                           experiencia interactiva?
                        </span>
                    </h2>

                    <p className='text-[1.1rem] md:text-[1.3rem] text-[#bbb] font-light mt-6 mb-8 leading-relaxed max-w-[500px]'>
                        No es solo un portafolio, es un viaje por mi proceso creativo. Descubre mis habilidades de una forma 
                        <span className="font-medium"> totalmente diferente y dinámica.</span>
                    </p>

                    <button 
                        onClick={() => navigate("/dev")}
                        className="group flex items-center gap-3 bg-transparent border-2 border-purple-500/20 px-8 py-3 moradoGradiente rounded-lg font-bold text-lg transition-all duration-300 hover:opacity-80"
                    >
                        Comenzar experiencia
                        <HiOutlineArrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>

                {/* LADO DERECHO: LAPTOP INTERACTIVA */}
                <div className='order-1 md:order-2 flex justify-center relative'>
                    {/* Anillo de pulso para indicar interactividad */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[80%] h-[80%] border border-[#00F5FF]/30 rounded-full animate-ping opacity-20" />
                    </div>

                    <div 
                        className="relative group cursor-pointer"
                        onClick={() => navigate("/dev")}
                    >
                        <img
                            src={Laptop}
                            alt="Laptop Interactiva"
                            className='h-auto object-contain w-full max-w-[500px] transition-all duration-500 transform group-hover:scale-105 group-hover:-rotate-2'
                        />
                        
                        {/* Tooltip flotante que aparece en hover */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#00F5FF] text-black px-4 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            CLICK PARA ENTRAR
                        </div>

                        {/* Glow efecto "ola" morada detrás de la laptop */}
                        <div className="absolute inset-0 bg-[#7127BA]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Action