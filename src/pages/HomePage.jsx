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



const HomePage = () => {
  const menuOpen=useSelector((state)=>state.ui.menuOpen);
   const search = useSelector((state) => state.ui.searchOpen);
  

  // const [menuOpen,setMenuOpen]=useState(false)
  // const[hero,setHero]=useState(false)
  // const [search, setSearch] = useState(false);


  

  return (
    <div className='max-w-full   ' >

     <Headline />  
     <Navbar  />
      
     <div className={`hero ${search?"hide":"show"}  ${menuOpen?"hide":"show"}`}>
    
     <SliderHero   /> 
        {/* make here the best seller and for men and women categories and on clicking the view all navigate to the same page of shopping  */}
      <BestSeller />
     
      
     {/* <MiddleHeadline /> */}
     {/* <ProductCollections    /> */}
    
    
     </div>
     



    
    
           

    </div>
  )
}

export default HomePage