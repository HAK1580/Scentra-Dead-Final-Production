import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { closeAll } from '../redux/ui_states/uiSlice'
const Hamburger = () => {
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.ui.cartOpen);




  return (
    <div className='menu overflow-hidden md:hidden  animate-ham  max-w-[87%] border-1 rounded-[2px]  border-[rgb(255,255,255,0.15)] min-h-[85vh] relative top-[clamp(-1rem,0.3rem,0.5rem)]  '>
      <div className="nav">
        <ul className='flex  ham-nav font-loop tracking-widest  flex-col gap-[2.3rem] text-[clamp(1.10rem,3vw,2.5rem)]  py-[1.5rem] px-[0.9rem] '>
          <li> <Link onClick={() => dispatch(closeAll())} to="/">Home</Link></li>
          <li> <Link onClick={() => dispatch(closeAll())} to="/shopping">All Collections</Link> </li>
          <li> <Link onClick={() => dispatch(closeAll())} to="/aboutus">ABOUT US</Link> </li>
          <li> <Link onClick={() => dispatch(closeAll())} to="/contactus">CONTACTS US</Link > </li>
        </ul>


      </div>
      <div className="follow-us my-12">
        <h1 className='p-3 mb-4 ml-2 text-[#e8d5a9e7] text-[4.86vw]'>LOG IN </h1>
        <div className="social-media-icons py-6 gap-7 flex justify-center ">
          <img className='w-6' src="/IMGS/icons/ticktok.svg" alt="" />
          <img className='w-6' src="/IMGS/icons/fb.svg" alt="" />
          <img className='w-6' src="/IMGS/icons/youtube.svg" alt="" />
          <img className='w-6' src="/IMGS/icons/insta.svg" alt="" />
        </div>
      </div>

      <div className="line"></div>
    </div>
  )
}

export default Hamburger