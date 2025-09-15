import React from 'react'
import { useState } from 'react'

const Search = ({search,setSearch,hero,setHero}) => {
  
  function handleKeyDown(e){
if(e.key==="Enter"){
  alert("add products first!");

}
  }


  function handleClick(){
    alert("add products first!");
  }

  function handleCross(){
    
    setHero(!hero);
    setSearch(!search)

  }
  return (
    <>
 <div className="search-box-div block relative max-w-full min-h-[110vh] bg-[rgba(255,255,255,0.238)] m-0   top-[clamp(-2rem,-2rem,-1rem)]">
  <div className="search-box absolute w-[94%] left-2
   flex justify-between md:justify-center  gap-[2vw]  top-[clamp(2rem,5.5%,6rem)]">

    
 <input onKeyDown={handleKeyDown} name='search' className="search-heree  bg-white text-black
   text-[clamp(1rem,1.6vw,3rem)] border border-black font-[200] md:w-[60%] outline-none tracking-wider py-[clamp(0.3rem,0.4vw,0.8rem)] px-3  font-inter  w-[100%] " type="text" placeholder='Search'/>
 
 



 
 <div className="search-icons flex cursor-pointer  md:gap-2 gap-[0.1rem]">

 <img onClick={handleClick} className=' w-[26px] sm:w-[28px]  lg:w-[35px]   ' src="/IMGS/icons/search.svg" alt="" />
 <img className='cross-img sm:w-[32px]  w-[30px]  lg:w-[40px]       '   onClick={handleCross}  src="/IMGS/icons/cross.svg" alt="" />
 </div>


  </div>
     

 </div>
    </>
  )
}

export default Search