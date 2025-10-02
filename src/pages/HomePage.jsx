import React, { useEffect } from 'react'
import Navbar from "../components/Navbar";
import { useState } from 'react'
import Headline from '../components/Headline'
import Hamburger from '../components/Hamburger'
import SliderHero from '../components/SliderHero'
import Search from '../components/Search'
import MiddleHeadline from '../components/MiddleHeadline';
import ProductCollections from '../components/ProductCollections'
import { useSelector } from 'react-redux';
import BestSeller from '../components/BestSeller';
import NewArrival from '../components/NewArrival';
import WeeklyDeals from '../components/WeeklyDeals';
import Footer from '../components/footer/Footer';


const HomePage = () => {
  const menuOpen = useSelector((state) => state.ui.menuOpen);
  const search = useSelector((state) => state.ui.searchOpen);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    // Watch all animated elements
    document
      .querySelectorAll(".fade-in-right, .fade-in-left, .fade-in-up, .zoom-in")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);





  return (
    <div className='max-w-full  overflow-hidden lg:overflow-visible   ' >

      <Headline />
      <Navbar />

      <div className={`hero border border-transparent  ${search ? "hide" : "show"}  ${menuOpen ? "hide" : "show"}
     flex gap-[1rem]  lg:overflow-visible
     flex-col   
     `}>
        <SliderHero />


        <div className="best-seller-comp fade-in-right">
          <BestSeller />

        </div>

        <div className="main-video relative w-full md:h-[260vh] h-[100vh] md:mt-200 mt-100">
          <video
            className="h-full w-full object-contain"
            src="/VIDEOS/scentraHdvideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"    // ✅ video preloads faster
            poster="/IMGS/video-img.PNG" // ✅ fallback image
          />
        </div>

        <div className="new-arrival-comp fade-in-right">
          <NewArrival />

        </div>
        <div className="weekly-deals-comp fade-in-right">
          <WeeklyDeals />

        </div>
        <div className="weekly-deals-comp zoom-in">
          <MiddleHeadline />
          <ProductCollections />

        </div>

        <div className="footer zoom-in">
          <Footer />

        </div>





      </div>








    </div>
  )
}

export default HomePage