import React from 'react'

const MiddleHeadline = ({hero}) => {
  return (
    <>
  <div className={`headline-2 z-100 mt-2 mb-[13vh] md:mt-35 md:mb-[100vh] lg:mt-140 lg:mb-[135vh] ${hero ? 'hidden' : ""} w-full relative overflow-hidden`}>
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