import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Headline from '../components/Headline'
import Hamburger from '../components/Hamburger'
import SliderHero from '../components/SliderHero'
import Search from '../components/Search'
import ProductCollections from '../components/ProductCollections'



const HomePage = () => {

  const [menuOpen,setMenuOpen]=useState(false)
  const[hero,setHero]=useState(false)
  const [search, setSearch] = useState(false);


  

  return (
    <div className='max-w-full' >

     <Headline />  
     <Navbar menuOpen={menuOpen} search={search} setSearch={setSearch} setMenuOpen={setMenuOpen} hero={hero} setHero={setHero} />
   
     <div className={`hero ${search?"hide":"show"}`}>
     <SliderHero hero={hero} setHero={setHero}  />

     </div>
     {/* <ProductCollections hero={hero}    /> */}
    
    
           

    </div>
  )
}

export default HomePage