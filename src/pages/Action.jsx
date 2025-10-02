import React from 'react'
import Laptop from '../assets/pro.png';
import { useNavigate } from 'react-router-dom'

const Action = () => {
    const navigate = useNavigate();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center my-[6rem]'>
            <div className=''>
                <h2 className='md:text-[3.5rem] font-bold text-[2.5rem] '>
                    👾 ¿Quieres descubrir más sobre mí?
                </h2>

                <p className='text-[1.3rem] text-[#a1a1a1] font-light mt-[1rem] mb-[2rem] w-[90%]'>
                    Te invito a descubrir quién soy de una manera diferente, a través de una experiencia interactiva pensada para ti.
                    Explora, diviértete y encuentra más de mí en cada detalle.
                    <span className="text-white font-medium"> ¡Dale clic y comienza el viaje! </span>
                </p>
            </div>

            <img
                src={Laptop}
                alt="Laptop"
                onClick={() => navigate("/dev")}
                className='h-auto object-contain w-[90%] hover:scale-105 transition-all duration-300 laptop-glow cursor-pointer'
            />        
        </div>
    )
}

export default Action
