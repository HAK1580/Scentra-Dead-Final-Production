import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addItem,clearCart,removeItem} from '../redux/cart/cartSlice'
import { toggleCart } from '../redux/ui_states/uiSlice'
import { Link } from 'react-router-dom'
const Cart = () => {
    const dispatch=useDispatch();
    const cart=useSelector((state)=>state.cart.items)
    const totalprice=cart.reduce((acc,item)=>acc+(item.quantity*item.price),0)

     useEffect(()=>{
      console.log(cart)

    },[cart])

     function handleCheckoutClick(){
         
     }



  return (
      <>
      <div className=' bg-[rgb(15,11,7)] z-100 overflow-hidden  border-[rgba(255,255,255,0.05)] 
       lg:w-[30%] md:w-[40%] sm:w-[45%] w-[75%]
        fixed h-[100vh] top-0  right-0 border-1'>
        <div className="cart-head  mx-auto max-w-[95%] flex justify-between">
        <h1 className=' text-[6vw]  sm:text-[3.4vw] my-4 p-3 font-light ' >CART</h1>
        <img onClick={()=>dispatch((toggleCart()))}  className=' cursor-pointer  pr-3.5' src="IMGS/icons/cross.svg" alt="" />
        </div>
        {<hr className='max-w-[90%] text-[rgba(232,213,169,0.3)] mx-auto '/>}
        
         <div className="cart-products-detail pb-26 flex flex-col  overflow-y-auto   h-[60vh]  gap-0 max-w-[90%] mx-auto  my-8 ">
           {cart.map((item)=>
           <div key={item.id} className="cart-list  mb-8  ">
            <div className="cart-qty-img flex border-1 border-[#ffffff74] gap-5 items-center ">
              <img className='object-contain'  width={110} src={item.image} alt="" /> 
              <div className="cart-title-qty    flex flex-col gap-1 ">
                <h1 className=' text-[4.2vw] my-1   sm:text-[1.4vw]' >{item.title}</h1>
                
                <div className="cart-price-qty  gap-1.5 flex flex-col  ">
          
                  <div className="inc-dec-btn mb-1 gap-2 p-0 max-w-[70%]   items-center flex">
                    <button onClick={()=>dispatch(addItem(item))} className='  inc-dec cursor-pointer  border-1 border-[#ffffff3b] text-[1.2rem] hover:text-black hover:bg-white m-0 px-2   '  >
                      +</button>
                    <h3 className='text-[1.1rem]'>{item.quantity}</h3>
                    <button onClick={()=>dispatch(removeItem(item.id))} className=' inc-dec  cursor-pointer border-1 border-[#ffffff3b]  text-[1.2rem] hover:text-black hover:bg-white m-0  px-[0.6rem]   '  >
                      -</button>
                  </div>
                  <h2 className='tree' >Rs. {item.price} x {item.quantity}</h2>
                 
                </div>        
              </div>
                </div>
          
           </div>
            )}
            
          
        </div>
        {/* subtotal  */}

        <div className="total  bg-black w-[75%] md:w-[40%] sm:w-[45%] lg:w-[30%] bottom-[3vh] z-100 fixed p-5 sm:bottom-0 ">
        {<hr className='max-w-[99%] font-extralight  text-[rgba(232,213,169,0.25)]  mx-auto '/>}
           <div className="total-price   flex justify-between items-center">
          <h1 className=' popins tracking-widest   pl-0.5 p-3 m-4 text-white  font-[600] text-[3.7vw] sm:text-[2.6vw]  md:text-[1.5vw]'>SUBTOTAL  </h1>
           <h2 className=' sm:pr-12  md:pr-16 pr-1.5 text-[4vw] sm:text-[2.5vw]   md:text-[1.45vw]' > 
              Rs. {totalprice}
             </h2>   
           </div>
            <div className="subtototal-btns  flex flex-col gap-2 ">
              <Link to='/checkout'  className='border-1 text-[3.5vw] text-center    w-[90%] cart-btn  mx-auto sm:text-[1.5vw] cursor-pointer  py-2  hover:bg-[rgb(186,149,63)] hover:text-black         
              '>Check Out</Link>
              <button onClick={()=>dispatch(clearCart())}   className='border-1  w-[90%] mx-auto  text-[3.5vw]   sm:text-[1.5vw] cart-btn  cursor-pointer  py-2  hover:bg-[rgb(186,149,63)] hover:text-black         
              '> Clear Cart</button>
            </div>
            
        </div>
        {cart.length===0?<h1 className='absolute z-100 text-[4vw]  sm:text-[2.5vw] w-full flex justify-center items-center top-[15rem]   right-0  sm:top-[18rem]'> Your Cart is empty</h1>:""}
     
    </div>


 </>
  )
}

export default Cart