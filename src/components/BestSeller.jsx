import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const BestSeller = () => {

  const product_info=useSelector((state)=>state.products.best_seller)

  return (
    <div className='border-1 overflow-hidden max-w-full relative z-10
       top-[35rem] md:top-[37rem] lg:top-[60rem] ' >
      <div className="best-seller-box">
       
  <div className="best-seller-title flex
   justify-between items-center nav-inter mx-auto  max-w-[94%]">
      <h1 className='text-[7.5vw]
      tracking-wide
      text-[#e8d5a9e7] 
      ' >BEST SELLER</h1>
      <h2 className=' tracking-widest
      text-[#ffffffd7]  uppercase
      text-[3.2vw] pr-2' > View All  </h2>  
      </div>
      <div className="best-seller-products 
     max-w-[93%] mx-auto gap-5 
       flex my-5 flex-nowrap  overflow-x-auto
      ">
     

      {product_info.map((product)=>

        <div key={product.id} className="product-info h-fit flex-col  shrink-0    rounded-[8px] border-1   max-w-[70%]   border-gray-200">
        <div className="product-image m-0   sm:m-4 object-contain relative flex justify-center  items-center cursor-pointer">
          <img className='border     border-[#ffffffaf] rounded-[8px] max-w-full object-contain  sm:h-full' src={product.image} alt="" />
          <img className='absolute w-[50px] sm:w-[68px] sm:max-w-full  rounded-[3px] top-[0.05rem] right-[0.05rem] ' width={70} src="/IMGS/icons/sale.svg " alt="" />
        </div>
        <div  className="product-title mb-3.5 sm:mb-2  h-[5vh] sm:h-fit   flex justify-start loop  mx-auto  w-[90%]  ">
          <h2   className='mb-1 mt-5 text-[4.25vw] md:text-[1.9vw]'> {product.title} </h2>  

        </div>
          <div className="para py-1 text-[2.9vw]  sm:text-[3vw] md:text-[1.2vw]  sm:py-1  sm:h-full h-[4vh] line-clamp-4 flex justify-start my-1.5  mx-auto w-[90%] ">
            <h3 className='italic font-extralight' > {product.desc}   </h3>
          </div>
          <div className="price py-0 sm:p-1 my-1 sm:my-2   ">
            <h2 className=' text-center  nav-inter flex justify-start mx-auto gap-3 w-[95%]  overflow-hidden   sm:h-[30px] text-[4vw] md:text-[2.3vw]    lg:text-[1.5vw]'> 
              
         <span className='old-price text-[3.2vw] md:text-[1.96vw] lg:text-[1.3vw] line-through text-[#ff0000e0] ' > Rs {product.oldprice}  </span>             Rs  {product.price}   </h2>
          </div>

        <div key={product.id}  className="add-to-cart-btn ">
         <button onClick={()=>dispatch(addItem(product)) && dispatch(setCart(true)) } key={product.id}   className='w-full add-to-cart rounded-[7px]  sm:rounded-[2px]  cursor-pointer py-1.5 sm:py-[0.4rem]  hover:bg-[rgb(186,149,63)] hover:text-black    border-1 rouned-[6px] sm:text-[2.5vw]  lg:text-[1.65vw]' >Add to Cart</button>
        </div>
        
          
        </div>
        
         )}
            <div className="view-all flex justify-center items-center max-w-[75%] px-28  ">
                <a href='/shopping' className='border border-[#ffffff6f] tracking-wide   text-[4.5vw] py-1 px-8 ' >View&nbsp;all Products </a>
            </div>

      </div>
      

      </div>
      <div className="space h-60"></div>


    </div>
  )
}

export default BestSeller