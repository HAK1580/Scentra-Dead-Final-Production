import React, { useState } from "react";

const ProductCollections = ({ hero }) => {
  const [menhover, setMenhover] = useState(false);
  const [womenhover, setWomenhover] = useState(false);
  const [duohover, setDuohover] = useState(false);

  return (
    <div
      className={`hero overflow-hidden my-[-56vh] lg:my-[-115vh] md:my-[-90vh] w-full max-w-[100vw] ${
        hero ? "hidden" : ""
      }`}
    >
      <div className="product-collection mb-[16rem] overflow-hidden w-full max-w-[100vw]">
        <h1
          className="flex justify-center text-[#e8d5a9] loop items-center
            md:text-[clamp(3vw,3.75vw,6vw)]
            text-[clamp(1.34rem,6.5vw,7vw)]
            my-4"
        >
          OUR PRODUCT COLLECTIONS
        </h1>

        {/* container: column on mobile, row on md+ */}
        <div
          className="mx-auto h-fit max-w-[75%] md:max-w-full flex flex-col md:flex-row 
                     justify-center items-center gap-[7vw] product-collection-box overflow-hidden w-[90%] md:w-[95%]"
        >
          {/* ---------- MEN ---------- */}
          <div className="product-collection-item relative flex items-center justify-center w-full md:w-auto overflow-hidden">
            {/* Image */}
            <img
              onMouseEnter={() => setMenhover(true)}
              onMouseLeave={() => setMenhover(false)}
              src={menhover ? "IMGS/Products/21.png" : "IMGS/Products/10.png"}
              alt="Perfumes for men"
              className="w-full max-w-full h-auto object-contain block"
            />

            {/* Centered overlay button (always centered on the image) */}
            <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
              <button
                onMouseEnter={() => setMenhover(true)}
                onMouseLeave={() => setMenhover(false)}
                className="product-btn z-100 font new-arrival cursor-pointer loop tracking-wide
                           pointer-events-auto
                           px-[clamp(0.6rem,2.2vw,1.3rem)]
                           py-[clamp(0.3rem,1vw,0.7rem)]
                           text-[clamp(0.8rem,2.2vw,1.2rem)]
                           bg-[rgba(0,0,0,0.815)] border border-[rgba(212,175,55,0.655)]
                           hover:bg-[#d4af37df] hover:text-black"
              >
                PERFUMES FOR MEN
              </button>
            </div>
          </div>

          {/* ---------- WOMEN ---------- */}
          <div className="product-collection-item relative flex items-center justify-center w-full md:w-auto overflow-hidden">
            <img
              onMouseEnter={() => setWomenhover(true)}
              onMouseLeave={() => setWomenhover(false)}
              src={womenhover ? "IMGS/Products/11.png" : "IMGS/Products/4.png"}
              alt="Perfumes for women"
              className="w-full max-w-full h-auto object-contain block"
            />

            <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
              <button
                onMouseEnter={() => setWomenhover(true)}
                onMouseLeave={() => setWomenhover(false)}
                className="product-btn pointer-events-auto font cursor-pointer loop tracking-wide
                           px-[clamp(0.6rem,2.2vw,1.3rem)]
                           py-[clamp(0.3rem,1vw,0.7rem)]
                           text-[clamp(0.8rem,2.2vw,1.2rem)]
                           bg-[rgba(0,0,0,0.815)] border border-[rgba(212,175,55,0.655)]
                           hover:bg-[#d4af37df] hover:text-black"
              >
                PERFUMES FOR WOMEN
              </button>
            </div>
          </div>

          {/* ---------- DUO ---------- */}
          <div className="product-collection-item relative flex items-center justify-center w-full md:w-auto overflow-hidden">
            <img
              onMouseEnter={() => setDuohover(true)}
              onMouseLeave={() => setDuohover(false)}
              src={duohover ? "IMGS/Products/5.png" : "IMGS/Products/1.png"}
              alt="Perfumes for duo"
              className="w-full max-w-full h-auto object-contain block"
            />

            <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
              <button
                onMouseEnter={() => setDuohover(true)}
                onMouseLeave={() => setDuohover(false)}
                className="product-btn pointer-events-auto font cursor-pointer loop tracking-wide
                           px-[clamp(0.6rem,2.2vw,1.3rem)]
                           py-[clamp(0.3rem,1vw,0.7rem)]
                           text-[clamp(0.8rem,2.2vw,1.2rem)]
                           bg-[rgba(0,0,0,0.815)] border border-[rgba(212,175,55,0.655)]
                           hover:bg-[#d4af37df] hover:text-black"
              >
                PERFUMES FOR DUO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCollections;
