import React from "react";
import Navbar from "../components/Navbar";
import Headline from "../components/Headline";

const AboutUs = () => {
  return (
    <div className="overflow-hidden flex flex-col" >
    <Headline />
    <Navbar />
      <div className="bg-black text-white min-h-screen  flex flex-col items-center py-12 px-4">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-6 text-center">
        About <span className="text-white">Scentra</span>
      </h1>

      {/* Intro Text */}
      <p className="text-gray-300 max-w-3xl text-center mb-10 px-2 leading-relaxed">
        At <span className="text-[#FFD700] font-semibold">Scentra</span>, we believe that a fragrance is more 
        than just a scent — it’s an identity, a memory, and a feeling.  
        Crafted with passion, our perfumes are inspired by timeless elegance 
        and designed to leave a lasting impression.  
      </p>

      {/* Mission & Vision Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        <div className="bg-zinc-900 border border-[#FFD700] rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To bring luxury fragrances within reach, combining premium quality with 
            affordability — so everyone can express their unique essence through scent.
          </p>
        </div>
        <div className="bg-zinc-900 border border-[#FFD700] rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            To be the most trusted fragrance brand globally, redefining modern luxury 
            with innovative blends that inspire confidence and elegance.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-4xl mt-12 text-center">
        <h2 className="text-3xl font-bold text-[#FFD700] mb-6">Why Choose Scentra?</h2>
        <p className="text-gray-300 leading-relaxed">
          ✔ Premium ingredients sourced globally <br />
          ✔ Long-lasting and elegant scents <br />
          ✔ Designed with passion, crafted for you <br />
          ✔ Affordable luxury for every personality
        </p>
      </div>
    </div>
    </div>   
  );
};

export default AboutUs;
