import React from 'react'

const MiddleHeadline = ({hero}) => {
  return (
    <>
  <div className={`headline-2 z-100 my-[75vh] md:my-[100vh] lg:my-[150vh] ${hero ? 'hidden' : ""} w-full overflow-hidden`}>
  <div className="headlinetxt2 flex flex-nowrap gap-[10vw] text-[clamp(1.1rem,4vw,2rem)]">
    {/* Repeat text */}
    {Array(25).fill("Scentra").map((txt, i) => (
      <h3 key={i} className="shrink-0">{txt}</h3>
    ))}
  </div>
</div>

  


    
    </>
  )
}

export default MiddleHeadline