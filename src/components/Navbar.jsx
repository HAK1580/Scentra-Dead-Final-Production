import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search.jsx";
import Hamburger from "./Hamburger.jsx";
import { toggleMenu, toggleSearch, toggleHero } from "../redux/ui_states/uiSlice.js"; // create this slice
import '../App.jsx'
// import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.ui.menuOpen);
  const search = useSelector((state) => state.ui.searchOpen);
  const hero = useSelector((state) => state.ui.heroOpen);

  function handleClick() { 
    dispatch(toggleMenu());
    dispatch(toggleHero());
  }

  function handleSearchClick() {
    dispatch(toggleSearch());
    dispatch(toggleHero());
  }

  useEffect(() => {
    function handleoutClick(e){
      if(!e.target.closest(".hamburger") && !e.target.closest(".hamburger-menu") && !e.target.closest(".cross-forward")) {
        if (menuOpen) dispatch(toggleMenu()); // close menu if open
        if (hero) dispatch(toggleHero()); // reset hero if needed
      }
    }

    document.addEventListener("click", handleoutClick);
    return () => document.removeEventListener("click", handleoutClick);
  }, [menuOpen, hero, dispatch]);

  return (
    <>
      <nav className={`relative ${search ? "hide" : ""}`}>
        <img
          className="logo absolute top-[-56%] max-w-[125px] left-[-4%] sm:top-[-30%] sm:left-[4%] sm:max-w-[190px] md:left-[clamp(-2.5rem,-12%,1rem)] md:max-w-[160px] md:top-[clamp(-1rem,-4%,1rem)] lg:max-w-[300px] lg:top-[clamp(-2rem,-28%,2rem)] lg:left-[clamp(-4rem,-10%,-1rem)] max-[600px]:left-[1%] max-[300px]:w-[100px] z-50"
          width={300}
          src="/IMGS/logo/logo-fotor-bg-remover-2025080510633.webp"
          alt="logo"
        />

        <img 
          onClick={handleClick}
          className={`cursor-pointer ${menuOpen ? 'cross-forward' : 'hamburger'} w-[30px] z-50 absolute bottom-[clamp(1.05rem,1%,2rem)] left-2 md:hidden max-[300px]:w-[26px]`}
          src={`${menuOpen ? "/IMGS/icons/cross.svg" : "/IMGS/icons/hamburger.svg"}`} 
          alt="menu toggle" 
        />
        <img className="absolute lg:right-[clamp(0.3rem,4%,8rem)] lg:bottom-[clamp(1rem,36%,3rem)] md:w-[28px] lg:w-[33px]  max-[768px]:bottom-[25%] max-[768px]:right-[9.5%] max-[768px]:w-[25px] md:right-[2%] md:bottom-[26%]  cursor-pointer max-[300px]:w-[23px] sm:hidden " src="/IMGS/icons/cart.svg" alt="" />

        <ul className="flex gap-[3.9vw] md:gap-[3vw] relative justify-center items-center text-white max-[768px]:text-[5vw] text-[clamp(0.80rem,1.4vw,5rem)] tracking-[0.1em] no-underline font-nav">
          <li className="nav-left z-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full  max-[768px]:hidden"><a href="/">HOME</a></li>
          <li className="nav-left z-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full  max-[768px]:hidden"><a href="/shopping">ALL COLLECTIONS</a></li>
          <li className="scentra-middle text-[clamp(2.8rem,5.1vw,7rem)] text-[#e8d5a9] font-[100] tracking-wide font-loop">SCENTRA</li>
          <li className="nav-right z-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full  max-[768px]:hidden"><a href="/">ABOUT US</a></li>
          <li className="nav-right z-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full  max-[768px]:hidden"><a href="/">CONTACT US</a></li>
        </ul>

        <img
          onClick={handleSearchClick}
          className={`search-icon ${menuOpen ? "hide" : ""} absolute lg:right-[clamp(0.3rem,4%,8rem)] lg:bottom-[clamp(1rem,36%,3rem)] md:w-[27px] lg:w-[33px] max-[768px]:bottom-[25%] max-[768px]:right-[0.7%] max-[768px]:w-[25px] md:right-[2%] md:bottom-[26%] cursor-pointer max-[300px]:w-[23px]`}
          width={32}
          src="/IMGS/icons/search.svg"
          alt="search"
        />
      </nav>

      <div className={`hamburger-menu ${menuOpen ? 'show' : 'hide'}`}>
        <Hamburger />
      </div>

      <div className={`search-wrapper ${search ? "show" : "hide"}`}>
        <Search hero={hero} />
      </div>
    </>
  );
};

export default Navbar;
