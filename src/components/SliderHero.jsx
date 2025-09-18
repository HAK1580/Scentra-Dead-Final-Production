 import React from 'react'
 import { useState, useEffect } from 'react'
 import MiddleHeadline from './MiddleHeadline'

 const SliderHero = ({ hero, setHero }) => {

   const imgs=[
     "/IMGS/Banners/1.jpg",   
    "/IMGS/Banners/2.jpg",
     "/IMGS/Banners/4.jpg"
   ]

   const [current, setCurrent] = useState(0);

   function nextImg() {
     setCurrent((prev)=>prev===imgs.length-1?0:prev+1)
     
   }
   useEffect(()=>{
    const timer=setTimeout(nextImg,3000)

    return ()=>{
     clearTimeout(timer);
    }
     


   },[current])



   return (
     <div >
       <div className={`${hero ? 'hidden' : ""} `}>
         <div className="hero relative   flex   mx-auto my-2 ">

 {imgs.map((image,i)=> <img key={i}  className={`absolute z-10 hero-img ${i===current?"opacity-100":"opacity-0" } 
 object-cover max-w-full min-h-[55vh] object-[9%] md:min-h-[43.5vh]
 `}src={image} alt="img" /> )}

          

      
     
           <div className="btn absolute z-50 
           top-[clamp(17rem,40vh,26rem)]  left-[clamp(0.5rem,3.5%,2rem)]
           md:top-[clamp(21rem,40vw,28rem)] md:left-[clamp(3rem,5%,4rem)]
           lg:top-[clamp(27.5rem,42vw,30.5rem)] 
           xl:top-[clamp(30rem,65vw,35.7rem)]  xl:left-[clamp(3.5rem,6%,7.5rem)]
           2xl:top-[clamp(32rem,40.5vw,48rem)] 
           
           
           
              ">
            
             <button  className="bg-[#000000d0] font-tree  px-[clamp(1.2rem,3.5vw,3.1rem)]  text-[clamp(1.15rem,2.5vw,3rem)] py-[clamp(0.4rem,0.3vw,1.5rem)] border-1 border-[#d4af3767] rounded-[8px] text-white cursor-pointer font-[100] z-100 tracking-widest 
              lg:rounded-[13px]
               btn-transform
             hover:bg-[#d4af37a7] hover:text-black ">
              Buy Now
             </button>
           </div>

         </div>



       </div>


  
      </div>

  )
}
export default SliderHero





























