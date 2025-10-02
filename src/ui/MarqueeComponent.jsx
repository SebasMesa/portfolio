import React from 'react'
import Marquee from 'react-fast-marquee';
import Punto from '../assets/punto.png';

const MarqueeComponent = () => {
  return (
    <Marquee>
        <div className='flex gap-10 text-[1.5rem] md:text-[2rem] font-bold text-[#222222] dark:text-[#f1f1f1] py-[3.5rem] border-t border-b border-[#333] dark:border-[#444] items-center'>
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#ReactJS</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#JavaScript</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#TailwindCSS</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#NextJS</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#NextJS</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#NodeJS</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#ExpressJS</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#MongoDB</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#ExpressJS</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#MongoDB</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#ThreeJS</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#UI/UX</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#WebDevelopment</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#WebDesign</span>
            <img src={Punto} alt="Punto" className='w-[75px] h-[75px] my-auto' />
            <span className='hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer'>#FullStack</span>
        </div>
    </Marquee>
  )
}

export default MarqueeComponent