import React from 'react'
import Navbar from "../components/Navbar"
import Headline from "../components/Headline"

const ShoppingPage = () => {

  const product_info=[
    {
    id:"1",
    image:"IMGS/Products/1.png",
    title:"Rosmerta",
    price:3500
  },
    {
    id:"2",
    image:"IMGS/Products/18.png",
    title:"Rosmerta",
    price:3500
  },
    {
    id:"3",
    image:"IMGS/Products/3.png",
    title:"Rosmerta",
    price:3500
  },
    {
    id:"4",
    image:"IMGS/Products/4.png",
    title:"Rosmerta",
    price:3500
  },
    {
    id:"5",
    image:"IMGS/Products/5.png",
    title:"Rosmerta",
    price:3500
  },
    {
    id:"6",
    image:"IMGS/Products/6.png",
    title:"Rosmerta",
    price:3500
  },
    {
    id:"7",
    image:"IMGS/Products/7.png",
    title:"Rosmerta",
    price:3500
  },
    {
    id:"8",
    image:"IMGS/Products/8.png",
    title:"Rosmerta",
    price:3500
  },
    {
    id:"9",
    image:"IMGS/Products/9.png",
    title:"Rosmerta",
    price:3500
  },
    {
    id:"10",
    image:"IMGS/Products/10.png",
    title:"Rosmerta",
    price:3500
  },
]


  return (    
    <div>
        <Headline />
     <Navbar  />
        
        <div className="border-1 border-black shop-banner">
        <img className='w-full my-6 h-[35vh]   object-cover  sm:h-[51vh]' src="IMGS/Banners/perfume-hd-banner.webp" alt="" />

        </div>

        <h1 className='text-center loop  text-[5.7vw]  tracking-wide  my-8  text-[#e8d5a9] sm:text-[3.5vw] '> VIEW All COLLECTIONS   </h1>

           
     <div className="shop grid grid-cols-2  md:grid-cols-4  max-w-[92%] md:max-w-[94%] mx-auto   gap-[3vw] border-1">
        {product_info.map((product)=>

        <div key={product.id} className="product-info h-fit flex-col   rounded-[3px] border-1   max-w-[100%] border-gray-200">
        <div className="product-image flex justify-center items-center cursor-pointer">

          <img className='w-[70%] object-contain h-[40vh]' src={product.image} alt="" />
        </div>
        <div  className="product-price justify-around    flex sm:gap-[1vw] max-w-full  ">
          <h2  className=' mx-1  md:mx-3 text-[3.3vw]    md:text-[1.8vw]'>id: {product.id}   </h2>  
          <h2   className=' text-[3.3vw] md:text-[1.8vw]'>Price: Rs {product.price} </h2>  

        </div>
          <div className="title py-1 my-2   ">
            <h2 className=' text-center overflow-hidden  h-[30px]    text-[1vw]'>{product.title}   </h2>
          </div>
          <div className="para line-clamp-3    flex justify-center items-center">
            <h2>    </h2>
          </div>

        <div   className="add-to-cart-btn ">
         <button    key={product.id}   className='w-full  cursor-pointer py-1 hover:bg-[rgb(186,149,63)] hover:text-black  border-1 rouned-[6  px] text-[4vw]  md:text-[1.65vw]' >Add to Cart</button>
        </div>
          
        </div>
         )}

     </div>
    
   
   
   
    </div>
  )
}

export default ShoppingPage