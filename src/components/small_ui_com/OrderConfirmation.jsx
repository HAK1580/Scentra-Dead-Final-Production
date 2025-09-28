import React from 'react'

const OrderConfirmation = ({orderconfirm,setOrderconfirm}) => {


  return (
    <div className={` flex justify-center  `}>

        <div className={` border-2 border-transparent
         bg-green-700 py-5 fixed lg:top-0   
         lg:max-w-[40%] 
         w-[99%] my-0
         mx-auto lg:my-20 text-white 
          z-1000
          
        `}>      
          <div className="order-confirm-img  items-center flex ">
            <img className='w-8'  src="IMGS/icons/circletick.svg" alt="" />
             <h1 className='lg:text-[2vw] max-[400px]:text-[6vw] pl-2' > Order Confirmation  </h1>
          </div>    
            <h2 className='lg:text-[1.5vw] my-2 pl-4 '> Thank You for placing Order ! We will contact you as soon as possible... </h2>
        </div>
    </div>
  )
}

export default OrderConfirmation