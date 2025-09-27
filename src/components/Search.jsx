import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from '../redux/products/productSlice.js';
import { toggleMenu, toggleSearch, toggleHero } from "../redux/ui_states/uiSlice.js"; // create this slice


const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.ui.searchOpen);
  const hero = useSelector((state) => state.ui.heroOpen);
  
  function handleKeyDown(e){
if(e.key==="Enter"){
  alert("add products first!");

}
  }


  function handleClick(e){
    dispatch(setSearchTerm(e.target.value))  
    
  }

  function handleCross(){
    
     dispatch(toggleHero())
     dispatch(toggleSearch());
    

  }
  return (
    <>
 <div className="search-box-div overflow-hidden block relative max-w-full min-h-[110vh] z-100    bg-[rgba(255,255,255,0.238)] m-0   top-[clamp(-2rem,-2rem,-1rem)]">
  <div className="search-box  absolute w-[94%] left-2
   flex justify-between md:justify-center  gap-[2vw]  top-[clamp(2rem,5.5%,6rem)]">

    
 <input onChange={handleClick}  name='search' className="search-heree  bg-white text-black
   text-[clamp(1rem,1.6vw,3rem)]    border border-black font-[200] md:w-[60%] outline-none tracking-wider py-[clamp(0.3rem,0.3vw,0.8rem)] px-3  font-inter  w-[100%] " type="text" placeholder='Search'/>
 
 



 
 <div className="search-icons flex cursor-pointer  md:gap-2 gap-[0.1rem]">

 <img onClick={handleClick} className=' w-[26px] sm:w-[28px]  lg:w-[35px]   ' src="/IMGS/icons/search.svg" alt="not found" />
 <img className='cross-img sm:w-[32px]  w-[30px]  lg:w-[40px]       '   onClick={handleCross}  src="/IMGS/icons/cross.svg" alt="not found" />
 </div>


  </div>
     

 </div>
    </>
  )
}

export default Search