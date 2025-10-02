import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Headline from '../components/Headline';
import { useDispatch } from 'react-redux';
import { setCart } from '../redux/ui_states/uiSlice';
import { useNavigate } from 'react-router-dom';
import { addItem,removeItem} from '../redux/cart/cartSlice';
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import Footer from '../components/footer/Footer';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const dispatch = useDispatch();
  function addtoCart(e){
      e.preventDefault();
      setTimeout(() => {
        dispatch(addItem(product));  
        dispatch(setCart(true));   
      }, 300);
  }
  function gotocheckout(e){
    e.preventDefault();
    setTimeout(() => {
      navigate("/checkout");
    }, 100);

  }

  const product = useSelector((state) => state.products.product_info.find((p) => p.id === id));
  return (
    <div className='overflow-hidden '  >
      <Headline />
      <Navbar />
      <div className="product-info-div  md:hidden flex flex-col
      gap-1 overflow-x-hidden
      ">
        <img className='object-contain w-[99%] mx-auto h-auto sm:w-[90%] ' src={`/${product.image}`} alt="" />
        <div className="product-description mt-6 ">
          <h1 className='flex justify-center italic sm:text-[3vw]  arimo text-[3.5vw]'> {product.desc} </h1>
          <h1 className='flex justify-center my-1 rubik tracking-wider  sm:text-[6vw] text-[7.2vw]'> {product.title} </h1>
        </div>
        <div className="product-price justify-start items-center   w-[60%] mx-auto gap-6  flex ">
          <h1 className='flex justify-center sm:text-[4.5vw] popins tracking-wide  line-through decoration-red-500 decoration-2 arimo text-[5.5vw]'> Rs. {product.oldprice} </h1>
          <h1 className='flex justify-center sm:text-[4.5vw] popins tracking-wide   arimo text-[6vw]'>Rs.{product.price} </h1>
        </div>

       <div className="add-to-cartt  flex flex-col gap-3 mt-1">
       <button onClick={addtoCart}  className='border-1 pt-cart  text-[5.2vw] font-inter   text-center text-black bg-[#d4af37]  lg:bg-black   w-[90.5%]   mx-auto sm:text-[4vw] cursor-pointer font-extrabold   py-2.5  lg:hover:bg-[#d4af37ad] hover:text-[rgb(33,33,33)]" sm:hover:text-black         
        '> Add to Cart</button>
        <button onClick={gotocheckout}  className='border-1 pt-cart text-[5.2vw] font-inter   flex justify-center items-center     w-[90.5%]   mx-auto sm:text-[4vw] cursor-pointer font-extrabold   py-2.5  lg:hover:bg-[#d4af37ad]        
         '> Check Out</button>
    
       </div>
        

      </div>
       <div className="product-info-div-for-pc w-[90%] mx-auto lg:py-8 py-12 max-[768px]:hidden mt-8 ">
        <div className="product-info lg:gap-30    flex gap-13">
          <img className='lg:w-260 object-contain' src={`/${product.image}`} alt="" />
          <div className="product-detail lg:py-4 lg:gap-5 gap-3 w-full flex flex-col mt-4 ">
             <h1 className='text-[1.3rem] lg:text-[1.6rem] popins ' > {product.desc}  </h1>
             <h1 className='text-[2.5rem] lg:text-[3rem] loop ' > {product.title}  </h1>
          <div className="product-price justify-start items-center   w-[100%] mx-auto gap-6  flex ">
          <h1 className='flex justify-center  popins tracking-wide text-[1.2rem] line-through decoration-red-500 decoration-2 arimo'> Rs. {product.oldprice} </h1>
          <h1 className='flex justify-center  popins tracking-wide   arimo text-[1.6rem]'>Rs.{product.price} </h1>
        </div>
        
        
       <div className="add-to-cartt lg:mt-20   flex flex-col gap-3 mt-5">
       <button onClick={addtoCart}  className='border-1 pt-cart mr-26  text-[1.5rem] font-inter  flex justify-center items-center   text-black bg-[#d4af37]     w-[88%]   mx-auto  cursor-pointer font-extrabold   py-2.5            
        '> Add to Cart</button>
        <button onClick={gotocheckout}  className='border-1 mr-26 pt-cart text-[1.5rem] font-inter   flex justify-center items-center     w-[88%]   mx-auto  cursor-pointer font-extrabold   py-2.5  lg:hover:bg-[#d4af37ad]        
         '> Check Out</button>
    
       </div>

          </div>
        
        </div>
       </div>
    <div className="you-may-like">
      <YouMayAlsoLike />
    </div>
       
     <Footer />  

    </div>
  )
}

export default ProductDetailPage