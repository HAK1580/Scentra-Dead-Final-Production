import React, { useState, useEffect, useRef } from "react";
import Search from "./Search.jsx";
import Hamburger from "./Hamburger.jsx";
import '../App.jsx'


const Navbar = ({hero,setHero,menuOpen,setMenuOpen,search,setSearch}) => {
  

  function handleClick() { 
    setHero(!hero)
    setMenuOpen(!menuOpen)
  }
  function handleSearchClick() {
    setHero(!hero);
    setSearch(!search);
    
  }
  useEffect(()=>{
    
    function handleoutClick(e){
      if(!e.target.closest(".hamburger") && !e.target.closest(".hamburger-menu")  && !e.target.closest(".cross-forward") ){
        setMenuOpen(false);
        setHero(hero)
      }
    }

    document.addEventListener("click",handleoutClick);
    return()=>{

      document.removeEventListener("click",handleoutClick);

    }

  },[])

  


  return (
    <>
    
      <nav
   className={` relative ${search? "hide" : ""}`}   >

        <img
          className="logo absolute top-[-56%] max-w-[125px] left-[-4%] 
          sm:top-[-30%] sm:left-[4%] sm:max-w-[190px]
          md:left-[clamp(-2.5rem,-12%,1rem)] md:max-w-[160px] md:top-[clamp(-1rem,-4%,1rem)]
          lg:max-w-[300px] lg:top-[clamp(-2rem,-28%,2rem)] lg:left-[clamp(-4rem,-10%,-1rem)]
          max-[600px]:left-[1%] max-[300px]:w-[100px] z-50
          "
          width={300}
          src="/IMGS/logo/logo-fotor-bg-remover-2025080510633.webp"
          alt=""
        />


          <img onClick={handleClick}
            className={`${menuOpen?'cross-forward':'hamburger'} w-[34px] z-50 absolute bottom-[clamp(1.1rem,1%,2rem)] left-2
      md:hidden max-[300px]:w-[26px]
      `}
            src={`${menuOpen?"/IMGS/icons/cross.svg":"/IMGS/icons/hamburger.svg"}`}  />
        


        <ul className="flex gap-[3.9vw] md:gap-[3vw]  relative justify-center  items-center text-white max-[768px]:text-[5vw] text-[clamp(0.80rem,1.4vw,5rem)] tracking-[0.1em] no-underline font-nav  "  >

          <li className="nav-left max-[768px]:hidden  ">
            <a className=" relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full "
              href="index.html">HOME</a>
          </li>
          <li className="nav-left max-[768px]:hidden  ">
            <a className=" relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full "
              href="#ourcollection">ALL COLLECTIONS</a>
          </li>
          <li className="scentra-middle text-[clamp(2.95rem,5.1vw,7rem)] text-[#e8d5a9] font-[100] tracking-wide font-loop ">SCENTRA</li>
          <li className="nav-right max-[768px]:hidden    ">
            <a className=" relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full "
              href="#home">ABOUT US</a>
          </li>
          <li className="nav-right max-[768px]:hidden   ">
            <a className=" relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full "
              href="#home">CONTACT US</a>
          </li>
        </ul>



        <img
          onClick={handleSearchClick} 
          className={`search-icon  ${menuOpen?"hide":""} 
          absolute lg:right-[clamp(0.3rem,4%,8rem)] lg:bottom-[clamp(1rem,36%,3rem)]
          md:w-[28px] lg:w-[33px] max-[768px]:bottom-[25%] max-[768px]:right-[4%]  max-[768px]:w-[29px] md:right-[2%] md:bottom-[26%]
          cursor-pointer max-[300px]:w-[23px]
          `}
          width={32}
          src="/IMGS/icons/search.svg"
          alt=""
        />

         </nav>
      
     <div className={`hamburger-menu ${menuOpen?'show':'hide '}`}>
      <Hamburger />
     </div>
      
      

      {/* search wrapper — show/hide via class (keeps component mounted) */}
      <div className={`search-wrapper ${search ? "show" : "hide"} `}>
        <Search hero={hero} setHero={setHero}   search={search} setSearch={setSearch} /> 

      </div>



    </>
  );
};

export default Navbar;
