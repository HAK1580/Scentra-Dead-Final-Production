import React from 'react'
import { useState } from 'react'

const ProductCollections = ({hero}) => {
    const[menhover,setMenhover]=useState(false)
    const[womenhover,setWomenhover]=useState(false)
    const[duohover,setDuohover]=useState(false)
   



  return (
    <div className={`hero my-[-100vh]   ${hero?'hidden':""} ` }  >

    <div className="product-collection ">

        <h1 className='flex justify-center text-[#e8d5a9] loop items-center text-[clamp(1.6rem,4vw,6vw)]'>OUR PRODUCT COLLECTIONS</h1>
       
        <div className="  flex-col  justify-center items-center gap-[7vw]  flex  product-collection-box
        md:flex-row 
        ">
            <div className="product-collection-item md:left-0   flex-col ">
                <div  className="product-btn-div flex    z-50 relative 
                top-[clamp(12rem,14.5rem,15rem)] 
                left-[clamp(4.5rem,6%,7rem)]
                md:top-[clamp(10rem,11rem,12rem)]
                md:left-[clamp(1.5rem,18%,12rem)]
                lg:top-[clamp(12rem,13rem,13rem)]
                lg:left-[clamp(1.5rem,18%,8rem)]
                
                
                ">
                    <button className="product-btn 
                     font new-arrival  cursor-pointer loop  tracking-wide bg-[rgba(0,0,0,0.815)]  border-1 border-[rgba(212,175,55,0.655)] hover:bg-[#d4af37df] hover:text-black ">PERFUMES FOR MEN </button>
                </div>
                <img onMouseLeave={()=>setMenhover(false)}  onMouseEnter={()=>setMenhover(!menhover)}  className="front-img" src={`${menhover?'IMGS/Products/21.png':'IMGS/Products/10.png'}`} alt=""/>



            </div>

            <div className="product-collection-item">
                <div   className="product-btn-div flex  z-50 relative 
         top-[clamp(12rem,14.5rem,15rem)]
         left-[clamp(4.5rem,6%,7rem)]
         md:top-[clamp(10rem,11rem,12rem)]
         md:left-[clamp(1.5rem,16%,8rem)]
         lg:top-[clamp(12rem,13rem,13rem)]
         lg:left-[clamp(1.5rem,18%,8rem)]
         2xl:left-[clamp(1.5rem,14%,8rem)]
         
         
         
                ">
                    <button className="product-btn   font  cursor-pointer loop  tracking-wide bg-[rgba(0,0,0,0.815)]  border-1 border-[rgba(212,175,55,0.655)] hover:bg-[#d4af37df] hover:text-black   ">PERFUMES FOR WOMEN </button>
                </div>
                <img onMouseLeave={()=>setWomenhover(false)}   onMouseEnter={()=>setWomenhover(!womenhover)} className="front-img" src={`${womenhover?'IMGS/Products/11.png':'IMGS/Products/4.png'}`} alt=""/>

            </div>

            <div className="product-collection-item">
                <div className="product-btn-div flex  z-50 relative
            
            top-[clamp(12rem,14.5rem,15rem)] 
            left-[clamp(4.5rem,6%,7rem)]
            md:top-[clamp(10rem,11rem,12rem)]
            md:left-[clamp(1.5rem,18%,12rem)]
            lg:top-[clamp(12rem,13rem,13rem)]
            lg:left-[clamp(1.5rem,18%,8rem)]
            
            
                 ">
                    <button className="product-btn  font  cursor-pointer loop  tracking-wide bg-[rgba(0,0,0,0.815)]  border-1 border-[rgba(212,175,55,0.655)] hover:bg-[#d4af37df] hover:text-black     ">PERFUMES FOR DUO </button>
                </div>            
             <img onMouseLeave={()=>setDuohover(false)}   onMouseEnter={()=>setDuohover(!duohover)} className="front-img" src={`${duohover?'IMGS/Products/5.png':'IMGS/Products/1.png'}`} alt=""/>


            </div>
        </div>
    </div>
    
    
    </div>
  )
}

export default ProductCollections