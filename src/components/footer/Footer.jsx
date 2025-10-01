import React from 'react'

const Footer = () => {
  return (
    <div className='footer-div 
    md:mt-151  lg:mt-192 py-15
     '  >
      <hr className='text-[#f0d9a249]' />
        <div className="footer-links p-8 text-[5.5vw]   my-0 text-[#] items-center gap-5 flex flex-col justify-center">
      <img className='w-40  md:w-50' src="IMGS/logo/logo-fotor-bg-remover-2025080510633.webp" alt="" />
       <a className='cursor-pointer z-50  md:text-[1.9rem]  '  href='/' > About Us </a> 
       <a className='cursor-pointer z-50  md:text-[1.9rem] '  href='/' > Contact Us </a> 
       <a className='cursor-pointer z-50  md:text-[1.9rem]    '  href='/shopping' > Our Products </a> 
       <a className='cursor-pointer z-50  md:text-[1.9rem] '  href='/shopping' > Shop Now </a> 
        </div>
        <div className="social-media">
            <hr className='my-4 opacity-0  text-[#f0d9a22c] ' />
          <h1 className='text-[6vw]  md:text-[2.15rem] text-center' >Follow Us </h1>
           <div className="social-media-icons py-6 gap-4 flex justify-center ">
            <img className='cursor-pointer' src="/IMGS/icons/ticktok.svg" alt="" />
            <img className='cursor-pointer'   src="/IMGS/icons/youtube.svg" alt="" />
            <img className='cursor-pointer'  src="/IMGS/icons/insta.svg" alt="" />

           </div>
        </div>
      
    </div>
  )
}

export default Footer