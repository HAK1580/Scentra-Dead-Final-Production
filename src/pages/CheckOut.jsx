import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/cart/cartSlice'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const CheckOut = () => {

    const cart = useSelector((state) => state.cart.items);
    const totalprice = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0)

    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    }

    return (

        <div >
            <div className="center-logo relative   w-[100%]  mx-auto  py-5  
        flex justify-center items-center 
         ">
                <img className='w-38 md:w-42 lg:w-55
            sm:left-30  lg:left-10
            lg:top-3
            absolute top-1 left-4 md:left-40  max-[500px]:w-29
            
            ' src="IMGS/logo/logo-fotor-bg-remover-2025080510633.webp" alt="" />
                <Link to="/" className='text-[15vw] sm:text-[8vw] lg:text-[5rem]
            loop font-[100] cursor-pointer
            xl:text-[6rem] tracking-wide
            text-[#e8d5a9]' >Scentra</Link>
            </div>

            <div className="checkout-form-div my-1 ">
                <h1 className=' text-[9vw] tree   mb-4 sm:text-[3.4vw] tracking-wider text-[rgb(232,213,169)] p-3  '> Checkout </h1>

                <form className='font-inter tracking-normal flex flex-col gap-12 justify-center  max-w-[94%] mx-auto' onSubmit={handleSubmit(onSubmit)} >

                    <div className="contact">
                        <h1 className='text-[6vw]  sm:text-[2.7vw] ml-1 tracking-wide mb-2 text-[rgb(232,213,169)] ' >Contact</h1>
                        <input {...register("phone", { required: "Enter phone number", pattern: { value: /^(?:\+92|0)?3[0-9]{9}$/, message: "Enter valid phone number" } })} className={`${errors.phone ? "outline-red-500 outline-3" : "outline-0 outline-black"} ml-1 mt-3  w-[94%] px-3 py-2 rounded-[4px]  bg-white text-black`} type="text" placeholder='Mobile phone number' />
                        {errors.phone && <p className='text-[#ff0000cd]  mt-3  ml-1'>{errors.phone.message}</p>}
                    </div>

                    <div className="delivery">
                        <h1 className='text-[6vw] sm:text-[2.7vw] ml-1  tracking-wide mb-2 text-[rgb(232,213,169)] '>Delivery</h1>

                        <input {...register("first_name", { required: "Enter a first name", pattern: { value: /^[A-Za-z][A-Za-z\s'-]{1,29}$/, message: "Enter valid first name", } })} className={`${errors.first_name ? "outline-red-500 outline-3" : "outline-0 outline-black"} ml-1   w-[94%] py-2 px-3 rounded-[4px]  bg-white text-black`} type="text" placeholder='First name' />
                        {errors.first_name && <p className='text-[#ff0000cd] mt-3  ml-1'>{errors.first_name.message}</p>}

                        <input {...register("last_name", { required: "Enter a last name", pattern: { value: /^[A-Za-z][A-Za-z\s'-]{1,29}$/, message: "Enter a valid last name", }, })} className={`${errors.last_name ? "outline-red-500 outline-3" : "outline-0 outline-black"} ml-1 mt-5  w-[94%] py-2 px-3 rounded-[4px]  bg-white text-black`} type="text" placeholder='Last name' />
                        {errors.last_name && <p className='text-[#ff0000cd] mt-4  ml-1'>{errors.last_name.message}</p>}

                        <input {...register("address", { required: "Enter an address", pattern: { value: /^[A-Za-z0-9\s,'-]{5,100}$/, message: "Enter a valid address", }, })} className={`${errors.address ? "outline-red-500 outline-3" : "outline-0 outline-black"} ml-1 mt-5  w-[94%] py-2 px-3 rounded-[4px]  bg-white text-black`} type="text" placeholder='Address' />
                        {errors.address && <p className='text-[#ff0000cd] mt-4  ml-1'>{errors.address.message}</p>}

                        <input {...register("apartment")} className={`"outline-0 outline-black" ml-1 mt-5  w-[94%] p-3 rounded-[4px]  bg-white text-black`} type="text" placeholder='Apartment, suit ,etc (optional) ' />

                        <input {...register("city", { required: "Enter a city", pattern: { value: /^[A-Za-z\s'-]{2,50}$/, message: "Enter a valid city", }, })} className={`${errors.city ? "outline-red-500 outline-3" : "outline-0 outline-black"} ml-1 mt-5  w-[94%] py-2 px-3 rounded-[4px]  bg-white text-black`} type="text" placeholder='City' />
                        {errors.city && <p className='text-[#ff0000cd] mt-4  ml-1'>{errors.city.message}</p>}

                        <input {...register("email", { required: "Enter an email address", pattern: { value: /^(?:[a-zA-Z0-9_'^&amp;+{}-]+(?:\.[a-zA-Z0-9_'^&amp;+{}-]+)*)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/, message: "Enter a valid email address", } })} className={`${errors.email ? "outline-red-500 outline-3" : "outline-0 outline-black"} ml-1 mt-5  w-[94%] p-3 rounded-[4px]  bg-white text-black`} type="text" placeholder='Email address' />
                        {errors.email && <p className='text-[#ff0000cd] mt-4  ml-1'>{errors.email.message}</p>}


                    </div>
                    <div className="payment">
                        <h1 className='text-[6vw] sm:text-[2.7vw]  ml-2 tracking-wide mb-2 text-[rgb(232,213,169)]  '>
                            Payment </h1>
                        <label className="flex mt-4 ml-2  text-black bg-gray-200 py-3.5 px-2  items-center gap-2">
                            <input
                                type="radio"
                                value="cash_on_delivery"
                            
                                {...register("paymentMethod", { required: true })}
                            />
                            Cash on Delivery
                        </label>
                    </div>

                    <div className="billing-address">
                        <h1 className='text-[6vw] sm:text-[2.7vw] ml-2 
                         tracking-wide mb-2 text-[rgb(232,213,169)]  '> Billing address  </h1>
                      <label className='flex border rounded-[6px] px-2 text-[4vw] text-black bg-gray-200 py-3.5  ml-2 mt-4 gap-2'  >
                       <input {...register("address")}   type="radio" name='billing_address'  value={"same as shipping add"}   />
                          Same as Shipping Address 
                      </label>
                      
                      <label className='flex border rounded-[6px] px-2 text-[4vw] text-black bg-gray-200 py-3.5  ml-2 mt-4 gap-2'  >
                       <input  type="radio" name='billing_address' value={" different add "}    />
                          Use  Different Billing  Address 
                      </label>


                    </div>





                    <button className='border py-2 text-[1.2rem]' >SUBMIT </button>


                </form>



            </div>

            <div className=' bg-[rgb(15,11,7)] z-100 overflow-hidden  border-[rgba(255,255,255,0.05)] 
       lg:w-[30%] hidden lg:block
        fixed h-[100vh] top-15  right-0 border-1'>
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
                {/* subtotal  */}

                <div className="total  bg-black w-[75%] md:w-[40%] sm:w-[45%] lg:w-[30%] bottom-[3vh] z-100 fixed p-5 sm:bottom-12 ">
                    {<hr className='max-w-[99%] font-extralight  text-[rgba(232,213,169,0.25)]  mx-auto ' />}
                    <div className="total-price   flex justify-between items-center">
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
                {cart.length === 0 ? <h1 className='absolute z-100 text-[4vw]  sm:text-[2vw] w-full flex justify-center items-center top-[15rem]   right-0  sm:top-[18rem]'> There is  No Order  </h1> : ""}


            </div>



        </div>


    )
}

export default CheckOut