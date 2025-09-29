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


const HomePage = () => {
  const menuOpen=useSelector((state)=>state.ui.menuOpen);
   const search = useSelector((state) => state.ui.searchOpen);
  


  

  return (
    <div className='max-w-full  overflow-hidden  ' >

     <Headline />  
     <Navbar  />
      
     <div className={`hero border border-transparent  ${search?"hide":"show"}  ${menuOpen?"hide":"show"}
     flex gap-[1rem] overflow-x-hidden
     flex-col   
     `}>
     <SliderHero   /> 
     
    
 
      <BestSeller />
      <NewArrival />
       <WeeklyDeals />
     
     {/* <MiddleHeadline />
     <ProductCollections    /> */}

     
      
    
    
     </div>
     



    
    
           

    </div>
  )
}

export default HomePage