import React from 'react'

const OrderConfirmation = ({orderconfirm,setOrderconfirm}) => {
  return (
    <div className={`${orderconfirm?"opacity-100":"opacity-0"}  flex justify-center  `}>

        <div className={` border-2 border-transparent
         bg-green-700 py-2 fixed lg:top-0   
         lg:max-w-[40%] 
         w-[99%] my-0
         mx-auto lg:my-20 text-white 
          z-1000
          
        `}>          
             <h1 className='lg:text-[2vw]

             pl-3
             ' 
              > Order Confirmation  </h1>
              <h2 className='lg:text-[1.5vw] my-2 pl-4 '> Thank You for placing Order ! We will contact you as soon as possible... </h2>

        </div>
    </div>
  )
}

export default OrderConfirmation