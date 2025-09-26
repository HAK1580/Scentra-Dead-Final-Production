import React from 'react'
import { useSelector,useDispatch } from 'react-redux';

const OrderSummary = ({ orderSum, setOrderSum }) => {

    const cart = useSelector((state) => state.cart.items);
    const totalprice = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);

    function toggleOrderSum() {

        setOrderSum(!orderSum);


    }

    return (
        <div>
            <div className="order-summary-parent-div lg:hidden ">

                <div onClick={toggleOrderSum} className="order-summary-title 
                        relative cursor-pointer bg-[#ffffff1f] max-w-[100%]
                        border-1 border-[#ffffff4a] rounded-[5px] items-center justify-between flex">
                    <h1 className='text-[5vw] md:text-[3vw] sm:text-[3.4vw] mt-2  ml-2 tracking-wide mb-2   '>
                        Order Summary
                    </h1>
                    <h3 className='pr-8' > {orderSum?<span>Hide</span>:<span>Show</span>}  </h3>
                    <img className={`absolute top-3.5 right-1 ${orderSum &&"transform rotate-180"}  `} src="IMGS/icons/downarrow.svg" alt="" />
                </div>

                <div className={`order-summary-total  `}>
                    <div className={`order-sum-child overflow-y-auto     ${orderSum ? "order-trans" : " opacity-0 overflow-hidden  max-h-0"} `} >


                    <div className="cart-products   ">
                {cart.map((item)=>{
                    return (
                           <div key={item.id} className="cart-qty-img flex justify-between my-2    border-1 border-[#ffffff74] gap-5 items-center ">
                                <div className="cart-title-qty items-center    flex  gap-1 ">
                                <img className='object-contain  cursor-pointer  ' width={70} src={item.image} alt="" />
                                    <h1 className=' text-[4.2vw] pl-1.5 sm:text-[1.4vw]' >
                                 {item.title} &nbsp;x {item.quantity} 

                                    </h1>
                        </div>
                        <div className="price text-[3.7vw] pr-2">
                      <h1> Rs.  {item.price}  </h1>

                        </div>
                             
                        </div>
                    
                   )})}
                        </div>

                        

                        <div className="total-price    flex justify-between items-center">
                            <h1 className=' popins tracking-widest   pl-0.5 p-3 m-4 text-white  font-[600] text-[3.7vw] sm:text-[2.6vw]  md:text-[1.5vw]'>SUBTOTAL  </h1>
                            <h2 className=' sm:pr-12  md:pr-16 pr-1.5 text-[4vw] sm:text-[2.5vw]   md:text-[1.45vw]' >
                                Rs. {totalprice}
                            </h2>
                        </div>

                        <div className="total-price   flex justify-between items-center">
                            <h1 className=' font-inter  tracking-widest   pl-0.5 ml-5  text-white  font-[600] text-[3vw] sm:text-[2vw]  md:text-[1.2vw]'>
                                Shipping &copy;
                            </h1>
                            <h2 className=' sm:pr-12  md:pr-16 pr-1.5 text-[3vw] sm:text-[2.4vw]   md:text-[1.35vw]' >
                                FREE
                            </h2>
                        </div>
                    </div>

                </div>

            </div>


        </div>

    )
}

export default OrderSummary