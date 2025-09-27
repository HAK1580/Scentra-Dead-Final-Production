import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search.jsx";
import Hamburger from "./Hamburger.jsx";
import { toggleMenu, toggleSearch, toggleHero, toggleCart } from "../redux/ui_states/uiSlice.js"; 
import '../App.jsx'
import Cart from "./Cart.jsx";

const Navbar = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.ui.menuOpen);
  const search = useSelector((state) => state.ui.searchOpen);
  const hero = useSelector((state) => state.ui.heroOpen);
  const cartOpen = useSelector((state) => state.ui.cartOpen);

  // for the cart state 
  const cart=useSelector((state)=>state.cart.items)

  function handleClick() { 
    dispatch(toggleMenu());
    dispatch(toggleHero());
  }

  function handleSearchClick() {
    dispatch(toggleSearch());
    dispatch(toggleHero());
  }
  function handleCartclick() {
    dispatch(toggleCart());
  }
  
  useEffect(() => {
    if(cartOpen){
      document.body.style.overflow="hidden"
    }
    else{
      document.body.style.overflow=""
    }
    
    function handleOutClick(e) {
      const clickedInsideMenu =
        e.target.closest(".hamburger-btn") || e.target.closest(".hamburger-menu"); 
      const clickedInsideCart =
        e.target.closest(".cart-img") || e.target.closest(".cart-open-div")|| e.target.closest(".add-to-cart")|| e.target.closest(".inc-dec-btn");
      const clickedInsideSearch =
        e.target.closest(".search-icon") || e.target.closest(".search-wrapper");

      // close menu if open and clicked outside
      if (menuOpen && !clickedInsideMenu) {
        dispatch(toggleMenu());
        dispatch(toggleHero());
      }

      // close cart if open and clicked outside
      if (cartOpen && !clickedInsideCart) {
        dispatch(toggleCart());
      }

      // close search if open and clicked outside
      if (search && !clickedInsideSearch) {
        dispatch(toggleSearch());
        dispatch(toggleHero());
      }
    }

    document.addEventListener("click", handleOutClick);
    return () => {
      document.removeEventListener("click", handleOutClick);
      document.body.style.overflow=""
    }
  }, [menuOpen, hero, cartOpen, search, dispatch]);
  
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
          className={`hamburger-btn cursor-pointer w-[30px] z-50 absolute bottom-[clamp(1.05rem,1%,2rem)] left-2 md:hidden max-[300px]:w-[26px] ${menuOpen ? "cross-forward" : "hamburger"}`}
          src={`${menuOpen ? "/IMGS/icons/cross.svg" : "/IMGS/icons/hamburger.svg"}`} 
          alt="menu toggle" 
        />
        <img 
          onClick={handleCartclick} 
          className="cart-img z-50 absolute lg:right-[clamp(0.3rem,8%,8rem)] lg:bottom-[clamp(1rem,36%,3rem)] md:w-[30px] lg:w-[35px] max-[768px]:bottom-[25%] max-[768px]:right-[9.5%] max-[768px]:w-[25px] md:right-[6%] md:bottom-[28%] cursor-pointer max-[300px]:w-[23px]" 
          src={cart.length===0?"/IMGS/icons/cart.svg":"/IMGS/icons/fullcart.svg"} 
          alt="cart" 
        />
      

        <ul className="flex gap-[3.9vw] md:gap-[3vw] relative justify-center items-center text-white max-[768px]:text-[5vw] text-[clamp(0.80rem,1.4vw,5rem)] tracking-[0.1em] no-underline font-nav">
          <li className="nav-left z-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full max-[768px]:hidden"><a href="/">HOME</a></li>
          <li className="nav-left z-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full max-[768px]:hidden"><a href="/shopping">ALL COLLECTIONS</a></li>
          <li className="scentra-middle text-[clamp(2.8rem,5.1vw,7rem)] text-[#e8d5a9] font-[100] tracking-wide font-loop"> <a href="/">SCENTRA</a></li>
          <li className="nav-right z-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full max-[768px]:hidden"><a href="/">ABOUT US</a></li>
          <li className="nav-right z-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full max-[768px]:hidden"><a href="/">CONTACT US</a></li>
        </ul>

        <img
          onClick={handleSearchClick}
          className={`search-icon ${menuOpen ? "hide" : ""} absolute lg:right-[clamp(0.3rem,4%,8rem)] lg:bottom-[clamp(1rem,36%,3rem)] md:w-[28px] lg:w-[33px] max-[768px]:bottom-[25%] max-[768px]:right-[0.7%] max-[768px]:w-[25px] md:right-[2%] md:bottom-[30%] cursor-pointer max-[300px]:w-[23px]`}
          width={32}
          src="/IMGS/icons/search.svg"
          alt="search"
        />
      </nav>

      <div className={`hamburger-menu ${menuOpen ? 'show' : 'hide'}`}>
        <Hamburger />
      </div>

      <div className={`cart-open-div ${cartOpen ? 'show' : 'hide'}`}>
        <Cart />
      </div>

      <div className={`search-wrapper ${search ? "show" : "hide"}`}>
        <Search hero={hero} />
      </div>
    </>
  );
};

export default Navbar;
