import React from "react";
import Navbar from "../components/Navbar";
import Headline from "../components/Headline";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
const ContactUs = () => {
  const menuOpen = useSelector((state) => state.ui.menuOpen);
  const search = useSelector((state) => state.ui.searchOpen);
  return (
    <div className={`overflow-hidden flex flex-col `} >
    <Headline />
    <Navbar />
    <div className={`father ${search ? "hide" : "show"}  ${menuOpen ? "hide" : "show"}`}>

    <div className="bg-black text-white min-h-screen flex flex-col overflow-x-clip items-center py-12 px-4">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-6 text-center">
        Contact <span className="text-white">Scentra</span>
      </h1>
      <p className="text-gray-300 max-w-2xl text-center mb-10 px-2">
        Have questions about our fragrances or your order? Reach out to
        <span className="text-[#FFD700]"> Scentra</span> — our team will respond as soon as possible.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-lg bg-zinc-900 p-8 rounded-2xl shadow-lg space-y-6 border border-[#FFD700]">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Your Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-600 text-white focus:outline-none focus:border-[#FFD700]"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-600 text-white focus:outline-none focus:border-[#FFD700]"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Message</label>
          <textarea
            rows="4"
            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-600 text-white focus:outline-none focus:border-[#FFD700]"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FFD700] text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-12 text-center space-y-2">
        <p className="text-gray-400">📍 Karachi, Pakistan</p>
        <p className="text-gray-400">📧 support@scentra.com</p>
        <p className="text-gray-400">📞 +92 123 4567890</p>
      </div>
    
    <div className={`footer `}>
      <Footer />

    </div>
    </div>
    </div>
    </div>
  );
};

export default ContactUs;
