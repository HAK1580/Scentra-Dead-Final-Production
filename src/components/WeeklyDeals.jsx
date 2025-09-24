import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../redux/cart/cartSlice'
import { setCart } from '../redux/ui_states/uiSlice'

const WeeklyDeals = () => {
  const dispatch = useDispatch()
  const product_info = useSelector((state) => state.products.weekly_deals)

  return (
    <div className="w-full max-w-full relative z-10 
      top-[12rem] md:top-[18rem] lg:top-[40rem] overflow-hidden">
      
      <div className="best-seller-box w-full max-w-full">
        
        {/* Title + View all */}
        <div className="best-seller-title flex justify-between items-center 
          nav-inter mx-auto w-full
          lg:max-w-[94%] max-w-[89%]">
          <h1 className="text-[7.5vw] 
          sm:text-[6vw] md:text-[4vw] lg:text-[3.3vw]
          tracking-[0.5px] text-[#e8d5a9e7]">
            WEEKLY DEALS
          </h1>
          <a 
            href="/shopping" 
            className="tracking-widest text-[#ffffffd7] uppercase 
              sm:text-[2vw] md:text-[1.5vw] lg:text-[1.1vw] hover:text-[#e8d5a9e7]
              text-[2.8vw] pr-2">
            View All
          </a>
        </div>

        {/* Scrollable products */}
        <div className="best-seller-products w-full max-w-[90%] mx-auto 
          flex gap-5 my-5 flex-nowrap overflow-x-auto overflow-y-hidden 
          lg:overflow-x-clip
           lg:max-w-[95%]
          
          scrollbar-thin scrollbar-thumb-[#e8d5a9e7] scrollbar-track-transparent">
          
          {product_info.map((product) => (
            <div 
              key={product.id} 
              className="product-info flex-col shrink-0 h-fit 
                rounded-[8px] border border-gray-200 
                 max-w-[65%]  sm:max-w-[45%] md:max-w-[30%] 
                lg:max-w-[24%] 
                bg-[#00000020]">
              
              {/* Product image */}
              <div className="product-image relative flex justify-center items-center 
                cursor-pointer m-0 sm:m-4">
                <img 
                  className="border border-[#ffffffaf] rounded-[8px] 
                    max-w-full object-contain sm:h-full" 
                  src={product.image} 
                  alt={product.title} 
                />
                <img 
                  className="absolute top-[0.05rem] right-[0.05rem] 
                    w-[50px] sm:w-[68px] rounded-[3px]" 
                  src="/IMGS/icons/sale.svg" 
                  alt="sale" 
                />
              </div>

              {/* Title */}
              <div className="product-title flex justify-start mx-auto w-[90%] 
                h-[5vh] sm:h-fit mb-3.5 sm:mb-2">
                <h2 className="mt-5 mb-1 text-[4.25vw] md:text-[1.9vw]">
                  {product.title}
                </h2>
              </div>

              {/* Description */}
              <div className="para flex justify-start mx-auto w-[90%] 
                h-[4vh] sm:h-full py-1 sm:py-1 my-1.5 
                text-[2.9vw] sm:text-[3vw] md:text-[1.2vw] line-clamp-4">
                <h3 className="italic font-extralight">
                  {product.desc}
                </h3>
              </div>

              {/* Price */}
              <div className="price my-1 sm:my-2 py-0 sm:p-1">
                <h2 className="flex justify-start gap-3 mx-auto w-[95%] 
                  nav-inter text-center sm:h-[30px] 
                  text-[4vw] md:text-[2.3vw] lg:text-[1.5vw]">
                  <span className="old-price text-[3.2vw] md:text-[1.96vw] lg:text-[1.3vw] 
                    line-through text-[#ff0000e0]">
                    Rs {product.oldprice}
                  </span>
                  Rs {product.price}
                </h2>
              </div>

              {/* ✅ Restored Add to Cart exactly like yours */}
              <div className="add-to-cart-btn">
                <button 
                  onClick={() => {
                    dispatch(addItem(product))
                    dispatch(setCart(true))
                  }}
                  className="w-full add-to-cart rounded-[7px] sm:rounded-[2px] 
                    cursor-pointer py-1.5 sm:py-[0.4rem]  
                    hover:bg-[rgb(186,149,63)] hover:text-black    
                    border rouned-[6px] sm:text-[2.5vw] lg:text-[1.65vw]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

          {/* View All Products card */}
          <div className="view-all
           lg:hidden
          flex justify-center items-center 
            shrink-0 max-w-[35%] sm:max-w-[20%]  lg:max-w-[22%] px-4 
            sm:px-5
            ">
            <a 
              href="/shopping" 
              className="border border-[#ffffff6f] 
                tracking-wide text-[1rem] 
                sm:text-[1.15rem]
                sm:px-4
                py-0.5 px-5 text-center">
              View&nbsp;all Products
            </a>
          </div>
        </div>
      </div>

      {/* Extra spacing */}
      <div className="space h-60"></div>
    </div>
  )
}

export default WeeklyDeals
