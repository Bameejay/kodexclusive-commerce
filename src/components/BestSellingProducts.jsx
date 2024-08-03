import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import jblImage from '../assets/images/category_images/jbl.png'
import Wishlist from "./Wishlist";
import coat from '../assets/images/bestseliingproduct/The north coat.png'
import bag from '../assets/images/bestseliingproduct/gucci duffle bag.png'
import cooler from '../assets/images/bestseliingproduct/RGB cooler.png'
import bookshelf from '../assets/images/bestseliingproduct/bookshelf.png'
import brush from '../assets/images/category_images/brush.png'

const products = [
  {
    id: 1,
    discount: "40%",
    name: "The north coat",
    currentPrice: "$260",
    originalPrice: "$360",
    rating: 4.5,
    reviews: 65,
    imageUrl: coat,
  },
  {
    id: 2,
    discount: "35%",
    name: "Gucci dufle bag",
    currentPrice: "$960",
    originalPrice: "$1160",
    rating: 4.8,
    reviews: 65,
    imageUrl: bag,
  },
  {
    id: 3,
    discount: "30%",
    name: "RGB Liquid CPU Cooler",
    currentPrice: "$160",
    originalPrice: "$170",
    rating: 4.9,
    reviews: 65,
    imageUrl: cooler,
  },
  {
    id: 4,
    discount: "25%",
    name: "Small Bookshelf",
    currentPrice: "$360",
    originalPrice: "$400",
    rating: 4.7,
    reviews: 65,
    imageUrl: bookshelf,
  },
  // {
  //   id: 5,
  //   discount: "20%",
  //   name: "S-Series Comfort Sofa",
  //   currentPrice: "$450",
  //   originalPrice: "$550",
  //   rating: 4.8,
  //   reviews: 50,
  //   imageUrl: chair,
  // },
  // Add more products as needed
];

const ProductList = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [viewedProducts, setViewedProducts] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 4;

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

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex + productsPerPage < products.length ? prevIndex + productsPerPage : 0
  //   );
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex - productsPerPage >= 0 ? prevIndex - productsPerPage : products.length - productsPerPage
  //   );
  // };

  const displayedProducts = products.slice(currentIndex, currentIndex + productsPerPage);

  return (
    <div className="container mx-auto py-4 mb-8">
      {showWishlist ? (
        <Wishlist favoriteProducts={favoriteProducts} products={products} />
      ) : (
        <div>

            <div className="flex">
                <div></div>
                
            {/* Navigation Arrows */}
          {/* <div className="flex gap-4 mb-4 ml-auto">
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
          </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className=" hover:shadow-lg transition-shadow duration-300"
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
                <div className="mt-4 p-2">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xl font-bold text-red-500">
                      {product.currentPrice}
                    </span>
                    <span className="text-sm line-through text-gray-500">
                      {product.originalPrice}
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
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            {/* <button
              className="bg-primaryColor text-white px-8 py-3 rounded-sm text-sm hover:opacity-85"
              onClick={() => setShowWishlist(true)}
            >
              View All Products
            </button> */}
          </div>
        </div>
      )}

      {/* Categories Image */}

        <div className="flex flex-col md:flex-row justify-between mt-20 bg-black p-12">
          <div className="flex-1 flex-col space-y-10">
            <p className="text-[#00FF66] text-sm">Categories</p>
            <h3 className="text-4xl text-white font-semibold">Enhance Your Music Experience </h3>
            <div className="flex flex-row space-x-2">
              <div className="text-center rounded-full w-16 h-auto bg-white p-2 text-black">
                <p className="text-sm font-bold">23</p>
                <p className="text-sm">Hours</p>
              </div>
              <div className="text-center rounded-full bg-white w-16 h-auto p-2 text-black">
                <p className="text-sm font-bold">05</p>
                <p className="text-sm">Days</p>
              </div>
              <div className="text-center rounded-full bg-white w-16 h-auto p-2 text-black">
                <p className="text-sm font-bold">59</p>
                <p className="text-sm">Minutes</p>
              </div>
              <div className="text-center rounded-full bg-white w-16 h-auto p-2 text-black">
                <p className="text-sm font-bold">35</p>
                <p className="text-sm">seconds</p>
              </div>
            </div>
            <div><button className="bg-[#00FF66] py-2 px-6 text-sm font-bold text-white rounded-sm hover:bg-green-600 transition duration-300">Buy Now!</button></div>
          </div>
            
            
          <div className="flex-1 mt-12 md:mt-0 relative">
          <div className="absolute -inset-8 flex justify-center items-center">
            <img src={brush} alt="Brush Stroke" className="w-full h-full object-cover" />
          </div>
          <img src={jblImage} alt="JBL Speaker" className="relative w-full h-auto z-10" />
        </div>

        </div>


    </div>
  );
};

export default ProductList;
