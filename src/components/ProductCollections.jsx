import React from 'react'
import { useState } from 'react'

const ProductCollections = ({hero}) => {
    const[menhover,setMenhover]=useState(false)
    const[womenhover,setWomenhover]=useState(false)
   



  return (
    <div className={`hero ${hero?'hidden':""} ` }  >

    <div className="product-collection">
        <h1>OUR PRODUCT COLLECTIONS</h1>
        <div className="product-collection-box">
            <div className="product-collection-item frontbox">
                <div style={{left:"18%"}} className="product-btn-div">
                    <button className="product-btn font new-arrival">PERFUMES FOR MEN </button>
                </div>
                <img onMouseLeave={()=>setMenhover(false)}  onMouseEnter={()=>setMenhover(!menhover)}  className="front-img" src={`${menhover?'IMGS/Products/21.png':'IMGS/Products/10.png'}`} alt=""/>



            </div>

            <div className="product-collection-item">
                <div style={{left:"2.5rem"}}  className="product-btn-div">
                    <button className="product-btn font">PERFUMES FOR WOMEN </button>
                </div>
                <img onMouseLeave={()=>setWomenhover(false)}   onMouseEnter={()=>setWomenhover(!womenhover)} className="front-img" src={`${womenhover?'IMGS/Products/11.png':'IMGS/Products/4.png'}`} alt=""/>

            </div>

            <div className="product-collection-item">
                <div className="product-btn-div">
                    <button className="product-btn font">PERFUMES FOR DUO </button>
                </div>
                <img className="front-img" src="IMGS/Products/1.png" alt=""/>


            </div>
        </div>
    </div>
    
    
    </div>
  )
}

export default ProductCollections