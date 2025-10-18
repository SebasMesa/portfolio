import React from 'react'

const ContactMe = () => {
  return (
    <div className='my-[5rem]'>
        <h3 className='md:text-[3.5rem] text-[2.2rem] font-bold'>Contactame </h3>
        <div className='md:text-[6.5rem] text-[3.1rem] font-bold md:ml-[6rem] mt-[2rem] leading-[1] hover:scale-105 transition-all cursor-pointer text-glass-macos'><a href="mailto:sebasmesadev@gmail.com"><span className='md:text-[6.8rem]'>sebasmesadev<span className='text-gradient'>@</span></span><br />gmail.<span className='text-gradient'>com</span> </a></div>
    </div>
  )
}

export default ContactMe