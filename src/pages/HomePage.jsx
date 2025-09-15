import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import Headline from '../Components/Headline'
import Hamburger from '../Components/Hamburger'
import SliderHero from '../Components/SliderHero'
import Search from '../Components/Search'
import ProductCollections from '../Components/ProductCollections'



const HomePage = () => {

  const [menuOpen,setMenuOpen]=useState(false)
   const[hero,setHero]=useState(false)

  

  return (
    <div className='max-w-full' >

     <Headline />  
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} hero={hero} setHero={setHero} />
     <SliderHero hero={hero} setHero={setHero} />
     {/* <ProductCollections hero={hero}    /> */}
    
    
           

    </div>
  )
}

export default HomePage