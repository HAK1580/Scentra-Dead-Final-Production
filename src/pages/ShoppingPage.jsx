import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Headline from "../components/Headline";
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/cart/cartSlice';
import { setCart } from '../redux/ui_states/uiSlice';
import { useNavigate, useLocation,Link } from 'react-router-dom';
import { setSearchTerm } from '../redux/products/productSlice';
import Footer from '../components/footer/Footer';

const ShoppingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const product_info = useSelector(state => state.products.product_info);
  const searchTerm = useSelector(state => state.products.searchTerm);
  const menuOpen = useSelector(state => state.ui.menuOpen);
  const search = useSelector(state => state.ui.searchOpen);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Read query param and update Redux searchTerm
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search") || "";
    if (query) {
      dispatch(setSearchTerm(query));
    }
  }, [location.search, dispatch]);

  useEffect(() => {
    setLoading(true);
    const filtered = product_info.filter(p =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setTimeout(() => setLoading(false), 200);
  }, [searchTerm, product_info]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    dispatch(setCart(true));
  };


  return (
    <div className="overflow-x-hidden">
      <Headline />
      <Navbar />

      <div className={`shopping-parent-div mb-55  ${search ? "hide" : "show"} ${menuOpen ? 'hide' : 'show'}`}>

        {/* Banner */}
        <div className="border-1 border-black shop-banner">
          <img
            className="w-full my-6 h-[35vh] object-cover sm:h-[51vh]"
            src="IMGS/Banners/perfume-hd-banner.webp"
            alt="Perfume Banner"
          />
        </div>

        {/* ✅ Show search results message if a search term is present */}
        {searchTerm ? (
          <h1 className="text-center loop text-[5vw] tracking-wide my-8 text-[#e8d5a9] sm:text-[3vw]">
            Shopping results for: <span className="italic">"{searchTerm}"</span>
          </h1>
        ) : (
          <h1 className="text-center loop text-[5.7vw] tracking-wide my-8 text-[#e8d5a9] sm:text-[3.5vw]">
            VIEW ALL COLLECTIONS
          </h1>
        )}

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[92%] md:max-w-[94%] mx-auto">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="animate-pulse bg-gray-200 h-[300px] rounded-md" />
            ))}
          </div>
        ) : (
          <div className={`shop grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[92%] md:max-w-[94%] mx-auto gap-[2.5vw] sm:gap-[1.8vw]`}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} className="product-info h-fit flex-col rounded-[8px] border border-gray-200 max-w-full">
                  {/* Image */}
                  <a href={`/product-detail/${product.id}`}
                    className="product-image m-0 sm:m-4 object-contain relative flex justify-center items-center cursor-pointer"
                  
                  >
                    <img
                      className="border border-[#ffffffaf] rounded-[8px] max-w-full object-contain sm:h-full"
                      src={product.image}
                      alt={product.title}
                    />
                    <img
                      className="absolute w-[50px] sm:w-[68px] rounded-[3px] top-[0.05rem] right-[0.05rem]"
                      src="/IMGS/icons/sale.svg"
                      alt="sale"
                    />
                  </a>

                  {/* Title */}
                  <div className="product-title mb-3.5 sm:mb-2 h-[5vh] sm:h-fit flex justify-start loop mx-auto w-[90%]">
                    <h2 className="mb-1 mt-5 text-[4.25vw] md:text-[1.9vw]">{product.title}</h2>
                  </div>

                  {/* Description */}
                  <div className="para py-1 text-[2.9vw] sm:text-[3vw] md:text-[1.2vw] sm:py-1 sm:h-full h-[4vh] line-clamp-4 flex justify-start my-1.5 mx-auto w-[90%]">
                    <h3 className="italic font-extralight">{product.desc}</h3>
                  </div>

                  {/* Price */}
                  <div className="price py-0 sm:p-1 my-1 sm:my-2">
                    <h2 className="text-center nav-inter flex justify-start mx-auto gap-3 w-[95%] overflow-hidden sm:h-[30px] text-[4vw] md:text-[2.3vw] lg:text-[1.5vw]">
                      <span className="old-price text-[3.2vw] md:text-[1.96vw] lg:text-[1.3vw] line-through text-[#ff0000e0]">
                        Rs {product.oldprice}
                      </span>
                      Rs {product.price}
                    </h2>
                  </div>

                  {/* Add to Cart */}
                  <div className="add-to-cart-btn">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full add-to-cart rounded-[7px] sm:rounded-[2px] cursor-pointer py-1.5 sm:py-[0.4rem] hover:bg-[rgb(186,149,63)] hover:text-black border-1 sm:text-[2.5vw] lg:text-[1.65vw]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products-found mx-auto text-center col-span-full">
                <p className="text-red-500 mb-4 text-lg">No products found try searching with differnt keyword </p>
               
              </div>
            )}
          </div>
        )}
      <Footer />
      </div>
    
    </div>
  );
};

export default ShoppingPage;
