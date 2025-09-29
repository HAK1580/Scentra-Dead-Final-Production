import React from 'react'

const Footer = () => {
  return (
    <div className='footer-div 
    md:mt-151  lg:mt-192 
     '  >
      <hr className='text-[#f0d9a249]' />
        <div className="footer-links p-8 text-[5.5vw]   my-4 text-[#] items-center gap-5 flex flex-col justify-center">
       <a className='cursor-pointer z-50  md:text-[1.9rem]  '  href='/' > About Us </a> 
       <a className='cursor-pointer z-50  md:text-[1.9rem] '  href='/' > Contact Us </a> 
       <a className='cursor-pointer z-50  md:text-[1.9rem]    '  href='/' > Our Products </a> 
       <a className='cursor-pointer z-50  md:text-[1.9rem] '  href='/' > Shop Now </a> 
        </div>
        <div className="social-media">
            <hr className='my-4 opacity-0  text-[#f0d9a22c] ' />
          <h1 className='text-[6vw]  md:text-[2.15rem] text-center' >Follow Us </h1>
           <div className="social-media-icons py-6 gap-4 flex justify-center ">
            <img src="IMGS/icons/ticktok.svg" alt="" />
            <img src="IMGS/icons/youtube.svg" alt="" />
            <img src="IMGS/icons/insta.svg" alt="" />
           </div>
        </div>
    </div>
  )
}

export default Footer