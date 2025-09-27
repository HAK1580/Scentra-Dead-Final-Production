import React from 'react'

const CartEmpty = () => {
  return (
    <div className={`flex justify-center  `}>

        <div className={` border-2 border-transparent
         bg-red-500 py-2 fixed lg:top-0   
         lg:max-w-[40%] 
         w-[99%] my-0
         mx-auto lg:my-20 text-white 
          z-100
        `}>          
        
    <div>
         <div className="bg-red-500 text-white text-center px-4 py-3 rounded-md  max-w-[90%] sm:max-w-md mx-auto text-[4vw] sm:text-base">
     <h1 className='
     lg:text-[2vw]

             pl-3
     ' > 🛒 Your cart is empty! </h1>
    </div>
  
    </div>

        </div>
    </div>
  )
}

export default CartEmpty