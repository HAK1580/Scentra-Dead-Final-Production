import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/cart/cartSlice'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Headline from '../components/Headline'
import OrderSummary from '../components/OrderSummary'
import OrderSummarytop from '../components/OrderSummarytop'
import CheckOut from '../components/CheckOut'
import OrderConfirmation from '../components/small_ui_com/OrderConfirmation'
import { useNavigate } from 'react-router-dom'

const CheckoutPage = () => {
    const [orderSum, setOrderSum] = useState(false);
    const [orderconfirm, setOrderconfirm] = useState(false);
    const [billing, setBilling] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.items);
    const totalprice = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0)

    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm();


    const onSubmit = data => {
        setTimeout(() => {

            console.log("Order Here", data);
            { cart.length === 0 ? navigate("/") : setOrderconfirm(true) };
            setTimeout(() => {
                setOrderconfirm(false);
            }, 10000);
            reset();
            dispatch(clearCart());
            setTimeout(() => {
                navigate("/");

            }, 7000);
        }, 300);
    }



    return (

        <div className='overflow-hidden' >
            <div className={`order-confirm ${orderconfirm ? "opacity-100" : "opacity-0"}    `}>

                <OrderConfirmation orderconfirm={orderconfirm} setOrderconfirm={setOrderconfirm} />

            </div>


            <Headline />
            <div className="center-logo relative  mt-[-2rem]   w-[100%]  mx-auto  py-5  
        flex justify-center items-center z-1
        ">
                <img className='w-38 md:w-42 lg:w-55
            sm:left-30  lg:left-10
            lg:top-3
            absolute top-1 left-2 md:left-40  max-[500px]:w-29
            
            ' src="IMGS/logo/logo-fotor-bg-remover-2025080510633.webp" alt="" />
                <Link to="/" className='text-[15vw] sm:text-[11vw] lg:text-[5rem]
            loop font-[100] cursor-pointer
            xl:text-[6rem] 
            text-[#dfc998]' >Scentra</Link>
            </div>

            <div className="check-out-father-div 
             lg:border-[rgba(255,255,255,0.24)]
             lg:border 
            lg:sticky lg:top-0 lg:self-start

            lg:grid lg:grid-cols-3 gap-1
               ">

                <div className="checkout-form-div relative z-10 lg:pl-25  lg:w-[92%] lg:mt-[-2rem] mx-auto border border-transparent  col-start-1 col-end-3  mt-[-1.5rem]   ">



                    <form className='font-inter  lg:w-[96%] tracking-normal flex flex-col gap-8 lg:gap- justify-center  max-w-[94%] mx-auto' onSubmit={handleSubmit(onSubmit)} >

                        <OrderSummarytop
                            orderSum={orderSum}
                            setOrderSum={setOrderSum}
                        />
                        <div className="contact ">
                            <h1 className='text-[6vw] lg:text-[2vw]    sm:text-[3.7vw] ml-1 tracking-wide mb-2 text-white ' >Contact</h1>
                            <input {...register("phone", { required: "Enter phone number", pattern: { value: /^(?:\+92|0)?3[0-9]{9}$/, message: "Enter valid phone number" } })} className={`${errors.phone ? "outline-red-500 outline-2" : " outline-0  outline-transparent"} ml-1 mt-3 sm:py-3 lg:py-3  lg:w-[70%] w-[94%] px-3 py-2.5 rounded-[4px]  bg-white text-black`} type="text" placeholder='Mobile phone number' />
                            {errors.phone && <p className='text-[#ff0000cd]  mt-3  ml-1'>{errors.phone.message}</p>}
                        </div>

                        <div className="delivery">
                            <h1 className='text-[6vw] lg:text-[2vw]      sm:text-[3.7vw] ml-1  tracking-wide mb-2 ] '>Delivery</h1>

                            <input {...register("first_name", { required: "Enter a first name", pattern: { value: /^[A-Za-z][A-Za-z\s'-]{1,29}$/, message: "Enter valid first name", } })} className={`${errors.first_name ? "outline-red-500 outline-2" : "outline-0 outline-black"} ml-1   lg:py-3.5  lg:w-[70%]     w-[94%] py-2.5 px-3 sm:py-3  rounded-[4px]  bg-white text-black`} type="text" placeholder='First name' />
                            {errors.first_name && <p className='text-[#ff0000cd] mt-3  ml-1'>{errors.first_name.message}</p>}

                            <input {...register("last_name", { required: "Enter a last name", pattern: { value: /^[A-Za-z][A-Za-z\s'-]{1,29}$/, message: "Enter a valid last name", }, })} className={`${errors.last_name ? "outline-red-500 outline-2" : "outline-0 outline-black"} ml-1 mt-3   lg:py-3.5  lg:w-[70%]    w-[94%] py-2.5 px-3 sm:py-3  rounded-[4px]  bg-white text-black`} type="text" placeholder='Last name' />
                            {errors.last_name && <p className='text-[#ff0000cd] mt-4  ml-1'>{errors.last_name.message}</p>}

                            <input {...register("address", { required: "Enter an address", pattern: { value: /^[A-Za-z0-9\s,'-]{5,100}$/, message: "Enter a valid address", }, })} className={`${errors.address ? "outline-red-500 outline-2" : "outline-0 outline-black"} ml-1 mt-3  w-[94%]  lg:py-3.5  lg:w-[70%]    py-2.5 px-3 sm:py-3  rounded-[4px]  bg-white text-black`} type="text" placeholder='Address' />
                            {errors.address && <p className='text-[#ff0000cd] mt-4  ml-1'>{errors.address.message}</p>}

                            <input {...register("apartment")} className={`outline-0 outline-black ml-1 mt-3 lg:py-3.5  lg:w-[70%]  w-[94%] p-2 sm:py-3  rounded-[4px]  bg-white text-black`} type="text" placeholder='Apartment, suit ,etc (optional) ' />

                            <input {...register("city", { required: "Enter a city", pattern: { value: /^[A-Za-z\s'-]{2,50}$/, message: "Enter a valid city", }, })} className={`${errors.city ? "outline-red-500 outline-2" : "outline-0 outline-black"} ml-1 mt-3  w-[94%] py-2.5 px-3 sm:py-3  lg:py-3.5  lg:w-[70%]     rounded-[4px]  bg-white text-black`} type="text" placeholder='City' />
                            {errors.city && <p className='text-[#ff0000cd] mt-4  ml-1'>{errors.city.message}</p>}

                            <input {...register("email", { required: "Enter an email address", pattern: { value: /^(?:[a-zA-Z0-9_'^&amp;+{}-]+(?:\.[a-zA-Z0-9_'^&amp;+{}-]+)*)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/, message: "Enter a valid email address", } })} className={`${errors.email ? "outline-red-500 outline-2" : "outline-0 outline-black"} ml-1   lg:py-4  lg:w-[70%]    sm:py-3 mt-3 py-2.5 w-[94%] px-3 rounded-[4px]  bg-white text-black`} type="text" placeholder='Email address' />
                            {errors.email && <p className='text-[#ff0000cd] mt-4  ml-1'>{errors.email.message}</p>}


                        </div>
                        <div className="payment">
                            <h1 className='text-[6vw]  lg:text-[2vw]      sm:text-[3.7vw]  ml-2 tracking-wide mb-2   '>
                                Payment </h1>
                            <label className="flex mt-4 lg:py-3.5  lg:w-[70%]  ml-2 w-[94%] rounded-[4px]   text-black bg-[#ffffffc7] py-2.5 px-2  items-center gap-2">
                                <input
                                    type="radio"
                                    value="cash_on_delivery"
                                    defaultChecked

                                    {...register("paymentMethod", { required: true })}
                                />
                                Cash on Delivery (COD)
                            </label>
                        </div>

                        <div className="billing-address">
                            <h1 className='text-[6vw]  sm:text-[3.7vw] ml-2 
                         tracking-wide mb-2 lg:text-[2vw]       '> Billing address  </h1>
                            <label onClick={() => setBilling(false)} className='flex w-[94%] lg:py-3.5  lg:w-[70%]  border rounded-[6px] px-2  text-black bg-[#ffffffc7] py-2.5  ml-2 mt-4 gap-2'  >
                                <input {...register("shipping_address")}
                                    type="radio"
                                    defaultChecked
                                    name='billing_address' value="same as shipping address" />

                                Same as Shipping Address
                            </label>

                            <label onClick={() => setBilling(true)} className='flex w-[94%] lg:py-3.5  lg:w-[70%]   border rounded-[6px] px-2  text-black bg-[#ffffffc7] py-2.5  ml-2 mt-4 gap-2'  >
                                <input {...register("billing_address")}
                                    type="radio" name='billing_address' value="different add" />
                                Use  Different Billing  Address
                            </label>

                            <div className={`different-billing-address ${billing ? "block" : "hidden"}  `}>

                                <input {...register("billing_address2",)} className={`${errors.billing_address2 ? "outline-red-500 outline-2" : "outline-0 outline-black"} ml-1 mt-3  w-[94%]  lg:py-3.5  lg:w-[70%]    py-2.5 px-3 sm:py-3  rounded-[4px]  bg-white text-black`} type="text" placeholder='Address' />

                                <input {...register("billing_apartment2")} className={`outline-0 outline-black ml-1 mt-3 lg:py-3.5  lg:w-[70%]  w-[94%] p-2 sm:py-3  rounded-[4px]  bg-white text-black`} type="text" placeholder='Apartment, suit ,etc (optional) ' />





                            </div>




                        </div>
                        <OrderSummary
                            orderSum={orderSum}
                            setOrderSum={setOrderSum} />





                        <button
                            type='submit'

                            className='border rounded-[8px] mb-8  cursor-pointer 
                    py-2.5 font-semibold
                    lg:w-[70%]
                    lg:ml-2 submit
                    lg:py-2
                    lg:hover:bg-[#d4af37b1]
                    text-[5.5vw] sm:text-[4vw] md:text-[1.9rem] lg:text-[1.7rem]
                    bg-[#d4af37ea] text-[black] w-[90%] mx-auto
                    
                    ' >Complete Order </button>



                    </form>



                </div>
                <div className="checkout-component 
                lg:max-w-[95%] pr-12   col-start-3 col-end-10">
                    <CheckOut />
                </div>

            </div>



        </div>


    )
}

export default CheckoutPage
