import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from '../redux/products/productSlice.js';
import { toggleSearch, toggleHero } from "../redux/ui_states/uiSlice.js";
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products.product_info);
  const searchTerm = useSelector((state) => state.products.searchTerm);

  const [suggestions, setSuggestions] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    dispatch(setSearchTerm(value));

    if (value.length > 0) {
      const filtered = products.filter(p =>
        p.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleCross = () => {
    dispatch(toggleHero());
    dispatch(toggleSearch());
  };

  // ✅ Navigate to ShoppingPage with searchTerm
  const handleSearchSubmit = (value = searchTerm) => {
    if (value.trim().length > 0) {
      navigate(`/shopping?search=${encodeURIComponent(value)}`); // pass query param
      dispatch(toggleSearch());
      dispatch(toggleHero());
      setSuggestions([]);
      dispatch(setSearchTerm("")); // clear search after
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  // ✅ Suggestion now goes to Shopping page with its title
  const handleSuggestionClick = (title) => {
    handleSearchSubmit(title);
  };

  return (
    <div className="search-box-div overflow-hidden block relative max-w-full min-h-[110vh] z-100 bg-[rgba(255,255,255,0.238)] m-0 top-[clamp(-2rem,-2rem,-1rem)]">
      <div className="search-box absolute w-[94%] left-2 flex justify-between md:justify-center gap-[2vw] top-[clamp(2rem,5.5%,6rem)]">
        <input
          value={searchTerm}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          name='search'
          className="search-heree bg-white text-black text-[clamp(1rem,1.6vw,3rem)] border border-black font-[200] md:w-[60%] outline-none tracking-wider py-[clamp(0.3rem,0.3vw,0.8rem)] px-3 font-inter w-[100%]"
          type="text"
          placeholder='Search'
        />

        <div className="search-icons flex cursor-pointer md:gap-2 gap-[0.1rem]">
          <img
            className='w-[26px] sm:w-[28px] lg:w-[35px]'
            src="/IMGS/icons/search.svg"
            alt="search"
            onClick={() => handleSearchSubmit()} // ✅ click search icon
          />
          <img
            className='cross-img sm:w-[32px] w-[30px] lg:w-[40px]'
            onClick={handleCross}
            src="/IMGS/icons/cross.svg"
            alt="cross"
          />
        </div>
      </div>

      {/* Suggestions Box */}
      {suggestions.length > 0 && (
        <div className="suggestions absolute top-[6rem] left-[3%] md:left-[3%] w-[94%] bg-white border border-gray-300 rounded-md z-[999] shadow-lg max-h-[50vh] overflow-y-auto">
          {suggestions.map((p) => (
            <div
              key={p.id}
              onClick={() => handleSuggestionClick(p.title)} // ✅ search with clicked title
              className="flex items-center cursor-pointer hover:bg-gray-200 p-2 gap-2"
            >
              <img src={p.image} alt={p.title} className="w-12 h-12 object-cover rounded" />
              <div className="flex flex-col">
                <span className="font-semibold text-black">{p.title}</span>
                <span className="text-sm text-gray-500">Rs {p.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
