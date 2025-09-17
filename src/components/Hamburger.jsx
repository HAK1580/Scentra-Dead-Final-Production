import React from 'react'

const Hamburger = () => {
  


  return (
    <div  className='menu overflow-hidden md:hidden  animate-ham  max-w-[87%] border-1 rounded-[2px]  border-[rgb(255,255,255,0.15)] min-h-[85vh] relative top-[clamp(-1rem,0.05rem,0.5rem)]  '>
       <div className="nav"> 
            <ul className='flex font-loop tracking-widest  flex-col gap-[2.2rem] text-[clamp(1.17rem,3vw,2.5rem)]  py-[1.5rem] px-[0.9rem] '>
                <li> <a href="/">Home</a></li>
                <li> <a href="/">All Collections</a> </li>
                <li> <a href="/">ABOUT US</a> </li>
                <li> <a href="/">CONTACTS US</a> </li>
            </ul>
        </div>
        
        <div className="line"></div>
    </div>
  )
}

export default Hamburger