import React from 'react'
import Navbar from "../components/Navbar"
import Headline from "../components/Headline"
import {useSelector } from 'react-redux'
// import { toggleSearch,toggleMenu } from '../redux/ui_states/uiSlice'

const ShoppingPage = () => {

const product_info = [
  {
    id: "1",
    image: "IMGS/Products/1.png",
    title: "Rosmerta White Musk",
    price: "8,499",
    oldprice: "6,900",
    desc: "Inspired by White Musk"
  },
  {
    id: "2",
    image: "IMGS/Products/18.png",
    title: "Amber Dusk",
    price: "3,400",
    oldprice: "4,900",
    desc: "Inspired by Amber Oud"
  },
  {
    id: "3",
    image: "IMGS/Products/3.png",
    title: "Velvet Rose",
    price: "2,500",
    oldprice: "7,900",
    desc: "Inspired by Velvet Rose"
  },
  {
    id: "4",
    image: "IMGS/Products/4.png",
    title: "Citrus Aura",
    price: "1,100",
    oldprice: "1,900",
    desc: "Inspired by Fresh Citrus"
  },
  {
    id: "5",
    image: "IMGS/Products/5.png",
    title: "Noir Vanilla",
    price: "3,200",
    oldprice: "5,900",
    desc: "Inspired by Black Vanilla"
  },
  {
    id: "6",
    image: "IMGS/Products/6.png",
    title: "Sandal Essence",
    price: "3,500",
    oldprice: "6,900",
    desc: "Inspired by Sandalwood Essence"
  },
  {
    id: "7",
    image: "IMGS/Products/7.png",
    title: "Ocean Mist",
    price: "1,200",
    oldprice: "1,999",
    desc: "Inspired by Ocean Breeze"
  },
  {
    id: "8",
    image: "IMGS/Products/8.png",
    title: "Jasmine Whisper",
    price: "1,500",
    oldprice: "2,999",
    desc: "Inspired by Jasmine Bloom"
  },
  {
    id: "9",
    image: "IMGS/Products/9.png",
    title: "Leather Woods",
    price: "2,500",
    oldprice: "3,999",
    desc: "Inspired by Woody Leather"
  },
  {
    id: "10",
    image: "IMGS/Products/10.png",
    title: "Royal Oud",
    price: "5,500",
    oldprice: "9,999",
    desc: "Inspired by Royal Oud"
  },
  {
    id: "11",
    image: "IMGS/Products/11.png",
    title: "Golden Amber",
    price: "4,200",
    oldprice: "7,500",
    desc: "Inspired by Amber Gold"
  },
  {
    id: "12",
    image: "IMGS/Products/12.png",
    title: "Mystic Bloom",
    price: "2,800",
    oldprice: "4,500",
    desc: "Inspired by Floral Essence"
  },
  {
    id: "13",
    image: "IMGS/Products/13.png",
    title: "Cedar Noir",
    price: "3,600",
    oldprice: "6,200",
    desc: "Inspired by Dark Cedarwood"
  },
  {
    id: "14",
    image: "IMGS/Products/14.png",
    title: "Pure Blossom",
    price: "1,900",
    oldprice: "3,200",
    desc: "Inspired by Spring Blossoms"
  },
  {
    id: "15",
    image: "IMGS/Products/15.png",
    title: "Royal Saffron",
    price: "6,300",
    oldprice: "10,500",
    desc: "Inspired by Exotic Saffron"
  },
  {
    id: "16",
    image: "IMGS/Products/16.png",
    title: "Velour Oud",
    price: "4,800",
    oldprice: "8,200",
    desc: "Inspired by Deep Oud"
  },
  {
    id: "17",
    image: "IMGS/Products/17.png",
    title: "Luxe Patchouli",
    price: "3,900",
    oldprice: "6,700",
    desc: "Inspired by Patchouli Woods"
  },
  {
    id: "18",
    image: "IMGS/Products/18.png",
    title: "Black Shore",
    price: "9,900",
    oldprice: "6,700",
    desc: "Inspired by Asrchouli Woods"
  },
  {
    id: "19",
    image: "IMGS/Products/19.png",
    title: "Crimson Rose",
    price: "2,200",
    oldprice: "3,800",
    desc: "Inspired by Fresh Red Roses"
  },
  {
    id: "20",
    image: "IMGS/Products/20.png",
    title: "Silver Mist",
    price: "2,700",
    oldprice: "4,400",
    desc: "Inspired by Morning Dew"
  },
  {
    id: "21",
    image: "IMGS/Products/21.png",
    title: "Midnight Luxe",
    price: "5,200",
    oldprice: "9,000",
    desc: "Inspired by Night Oud"
  },
  {
    id: "22",
    image: "IMGS/Products/22.png",
    title: "Lotus Dream",
    price: "2,900",
    oldprice: "4,600",
    desc: "Inspired by Lotus Blossom"
  }
]


const menuOpen=useSelector((state)=>state.ui.menuOpen);
const search = useSelector((state) => state.ui.searchOpen);




  return (    
    <div >
        <Headline />
     <Navbar  />
     <div className={`shopping-parent-div ${search?"hide":"show"}  ${menuOpen?'hide':'show'}  `}>

        
        <div className={`border-1 border-black shop-banner`}>
        <img className='w-full my-6 h-[35vh]   object-cover  sm:h-[51vh]' src="IMGS/Banners/perfume-hd-banner.webp" alt="" />

        </div>

        <h1 className='text-center loop  text-[5.7vw]  tracking-wide  my-8  text-[#e8d5a9] sm:text-[3.5vw] '> VIEW All COLLECTIONS   </h1>

           
     <div className="shop grid grid-cols-2 md:grid-cols-3   lg:grid-cols-4 max-w-[92%]   md:max-w-[94%] mx-auto gap-[3vw]    sm:gap-[1.8vw] ">
        {product_info.map((product)=>

        <div key={product.id} className="product-info h-fit flex-col     rounded-[8px] border-1   max-w-full   border-gray-200">
        <div className="product-image m-0   sm:m-4 object-contain relative flex justify-center  items-center cursor-pointer">
          <img className='border     border-[#ffffffaf] rounded-[8px] max-w-full object-contain  sm:h-full' src={product.image} alt="" />
          <img className='absolute w-[50px] sm:w-[68px] sm:max-w-full  rounded-[3px] top-[0.05rem] right-[0.05rem] ' width={70} src="/IMGS/icons/sale.svg " alt="" />
        </div>
        <div  className="product-title mb-3.5 sm:mb-2  h-[5vh] sm:h-fit   flex justify-start loop  mx-auto  w-[90%]  ">
          <h2   className='mb-1 mt-5 text-[4.25vw] md:text-[1.9vw]'> {product.title} </h2>  

        </div>
          <div className="para py-1.5 text-[2.9vw]  sm:text-[3vw] md:text-[1.2vw]  sm:py-1  sm:h-full h-[4vh] line-clamp-4 flex justify-start my-2  mx-auto w-[90%] ">
            <h3 className='italic font-extralight' > {product.desc}   </h3>
          </div>
          <div className="price py-0 sm:p-1 my-1 sm:my-2   ">
            <h2 className=' text-center nav-inter flex justify-start mx-auto gap-3 w-[95%]  overflow-hidden   sm:h-[30px] text-[4vw] md:text-[2.3vw]    lg:text-[1.5vw]'> 
              
         <span className='old-price text-[3.2vw] md:text-[1.96vw] lg:text-[1.3vw] line-through text-[#ff0000e0] ' > Rs {product.oldprice}  </span>             Rs  {product.price}   </h2>
          </div>

        <div   className="add-to-cart-btn ">
         <button    key={product.id}   className='w-full add-to-cart-hover rounded-[4px]  sm:rounded-[2px]  cursor-pointer py-1.5 sm:py-2  hover:bg-[rgb(186,149,63)] hover:text-black  border-1 rouned-[6px] sm:text-[2.5vw]  lg:text-[1.65vw]' >Add to Cart</button>
        </div>
          
        </div>
         )}

     </div>

     </div>
    
   
   
   
    </div>
  )
}

export default ShoppingPage