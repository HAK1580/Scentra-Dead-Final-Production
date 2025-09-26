import React from 'react'
import { useSelector } from 'react-redux'

const CheckOut = () => {
    const cart=useSelector((state)=>state.cart.items);
        const totalprice = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0)
    
  return (
    <div className='fixed top-11   right-20' >
        <div className='relative bg-[rgb(15,11,7)] z-100 overflow-hidden  border-[rgba(255,255,255,0.05)] 
       lg:w-[120%] hidden lg:block 
         h-[120vh]   border-1'>
                <div className="cart-head  mx-auto max-w-[95%] flex justify-between">
                    <h1 className=' text-[6vw]  sm:text-[3.4vw] '> Check Out </h1>
                </div>
                {<hr className='max-w-[90%] text-[rgba(232,213,169,0.3)] mx-auto ' />}

                <div className="cart-products-detail pb-26 flex flex-col  overflow-y-auto   h-[60vh]  gap-0 max-w-[90%] mx-auto  my-8 ">
                    {cart.map((item) =>
                        <div key={item.id} className="cart-list  mb-8  ">
                            <div className="cart-qty-img flex border-1 border-[#ffffff74] gap-5 items-center ">
                                <img className='object-contain cursor-pointer  ' width={110} src={item.image} alt="" />
                                <div className="cart-title-qty    flex flex-col gap-1 ">
                                    <h1 className=' text-[4.2vw] my-1   sm:text-[1.4vw]' >{item.title}</h1>

                                    <div className="cart-price-qty  gap-1.5 flex flex-col  ">

                                        <div className="inc-dec-btn mb-1 gap-2 p-0 max-w-[70%]   items-center flex">
                                            <h4 className='text-[0.85rem]'>X</h4>
                                            <h3 className='text-[1.15rem]'>{item.quantity}</h3>

                                        </div>
                                        <h2 className='tree' >Rs. {item.price} x {item.quantity}</h2>

                                    </div>
                                </div>
                            </div>

                        </div>
                    )}


                </div>
                {/* subtotal for pc/laptop  */}

                <div className="total relative  bg-black w-[75%] md:w-[40%] sm:w-[45%] lg:w-[100%] bottom-[3vh] z-100
                  p-5 sm:bottom-12 lg:bottom-18 ">
                    {<hr className='max-w-[99%] font-extralight  text-[rgba(232,213,169,0.25)]  mx-auto ' />}
                    <div className="total-price   flex justify-between items-center">
                        <h1 className=' popins tracking-widest   pl-0.5 p-3 m-4 text-white  font-[600] text-[3.7vw] sm:text-[2.6vw]  md:text-[1.5vw]'>SUBTOTAL  </h1>
                        <h2 className=' sm:pr-12  md:pr-16 pr-1.5 text-[4vw] sm:text-[2.5vw]   md:text-[1.45vw]' >
                            Rs. {totalprice}
                        </h2>

                    </div>

                    <div className="total-price    flex justify-between items-center">
                        <h1 className=' font-inter  tracking-widest   pl-0.5 ml-5  text-white  font-[600] text-[3vw] sm:text-[2vw]  md:text-[1.2vw]'>
                            Shipping &copy;
                        </h1>
                        <h2 className=' sm:pr-12  md:pr-16 pr-1.5 text-[3vw] sm:text-[2.4vw]    md:text-[1.35vw]' >
                            FREE
                        </h2>
                    </div>



                </div>
                {cart.length === 0 ? <h1 className='absolute z-100 text-[4vw]  sm:text-[2vw] w-full flex justify-center items-center top-[15rem]   right-0  sm:top-[18rem]'> There is  No Order  </h1> : ""}


            </div>

    </div>
  )
}

export default CheckOut