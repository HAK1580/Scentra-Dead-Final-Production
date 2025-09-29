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
  const menuOpen=useSelector((state)=>state.ui.menuOpen);
   const search = useSelector((state) => state.ui.searchOpen);
  


  

  return (
    <div className='max-w-full  overflow-hidden lg:overflow-visible   ' >

     <Headline />  
     <Navbar  />
      
     <div className={`hero border border-transparent  ${search?"hide":"show"}  ${menuOpen?"hide":"show"}
     flex gap-[1rem]  lg:overflow-visible
     flex-col   
     `}>
     <SliderHero   /> 
     
    
 
      <BestSeller />
      <NewArrival />
       <WeeklyDeals />
      <MiddleHeadline />
     <ProductCollections    /> 
      <div className="main-video mb-12">
        <video className=' h-full object-contain  w-full'  
        src="VIDEOS/scentraHdvideo.mp4" autoPlay muted loop playsInline  ></video>
      </div>

       <Footer />

     
      
    
    
     </div>
     



    
    
           

    </div>
  )
}

export default HomePage