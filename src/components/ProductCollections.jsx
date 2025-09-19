import React from 'react'
import { useState } from 'react'

const ProductCollections = ({hero}) => {
    const[menhover,setMenhover]=useState(false)
    const[womenhover,setWomenhover]=useState(false)
    const[duohover,setDuohover]=useState(false)
   



  return (
    <div className={`hero overflow-hidden my-[-45vh]  md:my-[-90vh] max-w-full   ${hero?'hidden':""} ` }  >

    <div className="product-collection overflow-hidden max-w-full ">

        <h1 className='flex justify-center text-[#e8d5a9] loop items-center
         md:text-[clamp(3vw,3.75vw,6vw)]
         text-[clamp(1.34rem,6.5vw,7vw)]
        
        
         
       '>
        OUR PRODUCT COLLECTIONS</h1>
       
        <div className="mx-auto max-w-[77%] md:max-w-full  flex-col  justify-center items-center gap-[7vw]  flex  product-collection-box
        md:flex-row  overflow-hidden
        ">
            <div className="product-collection-item md:left-0 md:max-w-full    flex-col ">
                <div  className="product-btn-div flex    z-50 relative 
                top-[clamp(12rem,12.5rem,15rem)] 
                left-[clamp(4.9rem,6%,7rem)]
                md:top-[clamp(10rem,11rem,12rem)]
                md:left-[clamp(1.5rem,18%,12rem)]
                lg:top-[clamp(12rem,13.5rem,14rem)]
                lg:left-[clamp(1.5rem,18%,8rem)]
                
                
                ">
                    <button className="product-btn z-100
                     font new-arrival  cursor-pointer loop  tracking-wide bg-[rgba(0,0,0,0.815)]  border-1 border-[rgba(212,175,55,0.655)] hover:bg-[#d4af37df] hover:text-black ">PERFUMES FOR MEN </button>
                </div>
                <img    onMouseLeave={()=>setMenhover(false)}  onMouseEnter={()=>setMenhover(!menhover)}   src={`${menhover?'IMGS/Products/21.png':'IMGS/Products/10.png'}`} alt="not found"/>



            </div>

            <div className="product-collection-item">
                <div   className="product-btn-div flex  z-50 relative 
         top-[clamp(12rem,12.5rem,15rem)]
         left-[clamp(4.6rem,6%,7rem)]
         md:top-[clamp(10rem,11rem,12rem)]
         md:left-[clamp(1.5rem,16%,8rem)]
         lg:top-[clamp(12rem,13.5rem,14rem)]
         lg:left-[clamp(1.5rem,18%,8rem)]
         2xl:left-[clamp(1.5rem,14%,8rem)]
         
         
         
                ">
                    <button className="product-btn   font  cursor-pointer loop  tracking-wide bg-[rgba(0,0,0,0.815)]  border-1 border-[rgba(212,175,55,0.655)] hover:bg-[#d4af37df] hover:text-black   ">PERFUMES FOR WOMEN </button>
                </div>
                <img  onMouseLeave={()=>setWomenhover(false)}   onMouseEnter={()=>setWomenhover(!womenhover)} className="front-img" src={`${womenhover?'IMGS/Products/11.png':'IMGS/Products/4.png'}`} alt="not found"/>

            </div>

            <div className="product-collection-item">
                <div className="product-btn-div flex  z-50 relative
            
            top-[clamp(12rem,12.5rem,15rem)] 
            left-[clamp(4.9rem,6%,7rem)]
            md:top-[clamp(10rem,11rem,12rem)]
            md:left-[clamp(1.5rem,18%,12rem)]
            lg:top-[clamp(12rem,13.5rem,14rem)]
            lg:left-[clamp(1.5rem,18%,8rem)]
            
            
                 ">
                    <button className="product-btn  font  cursor-pointer loop  tracking-wide bg-[rgba(0,0,0,0.815)]  border-1 border-[rgba(212,175,55,0.655)] hover:bg-[#d4af37df] hover:text-black     ">PERFUMES FOR DUO </button>
                </div>            
             <img onMouseLeave={()=>setDuohover(false)}   onMouseEnter={()=>setDuohover(!duohover)} className="front-img" src={`${duohover?'IMGS/Products/5.png':'IMGS/Products/1.png'}`} alt="not found"/>


            </div>
        </div>
    </div>
    <div className="space h-[30vh]">

    </div>
    
    
    </div>
  )
}

export default ProductCollections