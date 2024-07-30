// ProductList.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faEye, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Wishlist from "./Wishlist";
import gamepad from "../assets/images/product_images/gamepad.png";
import Keyboard from "../assets/images/product_images/wire keyboard.png";
import monitor from "../assets/images/product_images/lcd gaming monitor.png";
import chair from "../assets/images/product_images/5-series comfort chair.png";
import { useCart } from './CartContext';

const products = [
  {
    id: 1,
    discount: "40%",
    name: "HAVIT HV-G92 Gamepad",
    currentPrice: 120,
    originalPrice: 160,
    rating: 4.5,
    reviews: 38,
    imageUrl: gamepad,
  },
  {
    id: 2,
    discount: "35%",
    name: "AK-900 Wired Keyboard",
    currentPrice: 60,
    originalPrice: 160,
    rating: 4.8,
    reviews: 75,
    imageUrl: Keyboard,
  },
  {
    id: 3,
    discount: "30%",
    name: "IPS LCD Gaming Monitor",
    currentPrice: 370,
    originalPrice: 400,
    rating: 4.9,
    reviews: 99,
    imageUrl: monitor,
  },
  {
    id: 4,
    discount: "25%",
    name: "S-Series Comfort Chair",
    currentPrice: 375,
    originalPrice: 400,
    rating: 4.7,
    reviews: 69,
    imageUrl: chair,
  },
  {
    id: 5,
    discount: "20%",
    name: "S-Series Comfort Sofa",
    currentPrice: 450,
    originalPrice: 550,
    rating: 4.8,
    reviews: 50,
    imageUrl: chair,
  },
  // Add more products as needed
];

const ProductList = ({ onAddToCart }) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [viewedProducts, setViewedProducts] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 4;
  const { addToCart } = useCart();

  const toggleFavorite = (productId) => {
    setFavoriteProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleView = (productId) => {
    setViewedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + productsPerPage < products.length
        ? prevIndex + productsPerPage
        : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - productsPerPage >= 0
        ? prevIndex - productsPerPage
        : products.length - productsPerPage
    );
  };

  const displayedProducts = products.slice(
    currentIndex,
    currentIndex + productsPerPage
  );

  return (
    <div className="container mx-auto py-10 mb-8">
      {showWishlist ? (
        <Wishlist favoriteProducts={favoriteProducts} products={products} />
      ) : (
        <div>
          <div className="flex">
            <div></div>
            {/* Navigation Arrows */}
            <div className="flex gap-4 mb-4 ml-auto">
              <button
                className="bg-[#F5F5F5] rounded-full flex items-center p-2 shadow-md"
                onClick={handlePrev}
              >
                <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
              </button>
              <button
                className="bg-[#F5F5F5] rounded-full p-2 shadow-md flex items-center"
                onClick={handleNext}
              >
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="hover:shadow-lg transition-shadow duration-300 relative group"
              >
                <div className="relative">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-60 object-contain rounded-sm border p-12 bg-[#F5F5F5]"
                  />
                  <div className="absolute top-2 left-2 bg-primaryColor text-white text-xs font-semibold px-4 py-1 rounded">
                    -{product.discount}
                  </div>
                  <div className="absolute top-2 right-2">
                    <button
                      className="bg-white rounded-full px-1 shadow-md"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <FontAwesomeIcon
                        icon={
                          favoriteProducts.includes(product.id)
                            ? solidHeart
                            : regularHeart
                        }
                        className={`h-4 w-4 ${
                          favoriteProducts.includes(product.id)
                            ? "text-red-500"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="absolute top-10 right-2">
                    <button
                      className={`bg-white rounded-full px-1 shadow-md ${
                        viewedProducts.includes(product.id)
                          ? "text-primaryColor"
                          : "text-gray-400"
                      }`}
                      onClick={() => toggleView(product.id)}
                    >
                      <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xl font-bold text-red-500">
                      ${product.currentPrice}
                    </span>
                    <span className="text-sm line-through text-gray-500">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <svg
                          key={index}
                          className={`h-4 w-4 fill-current ${
                            index < Math.round(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-6.16 3.25 1.18-6.88L0 7.25l6.9-1 3.1-6.26L13.1 6.25l6.9 1-5 4.88 1.18 6.88L10 15z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-24 left-0 right-0 py-4 px-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => addToCart(product)}
                    className="block text-center bg-black text-white py-2 rounded-sm w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="bg-primaryColor text-white px-8 py-3 rounded-sm text-sm hover:opacity-85"
              onClick={() => setShowWishlist(true)}
            >
              View All Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
