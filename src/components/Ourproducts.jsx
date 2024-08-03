import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faEye, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Wishlist from "./Wishlist";
import dogFood from '../assets/images/ourproducts_images/dog_food.png'
import camera from '../assets/images/ourproducts_images/canon_camera.png'
import laptop from '../assets/images/ourproducts_images/gaming_laptop.png'
import productset from '../assets/images/ourproducts_images/curologyproduct_set.png'
import electricCar from '../assets/images/ourproducts_images/electric_car.png'
import soccerBoots from '../assets/images/ourproducts_images/soccer_boot.png'
import gamepad from '../assets/images/ourproducts_images/gamepad.png'
import jacket from '../assets/images/ourproducts_images/satin_jacket.png'

const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    currentPrice: "$100",
    rating: 3,
    reviews: 35,
    imageUrl: dogFood,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    currentPrice: "$360",
    rating: 4,
    reviews: 95,
    imageUrl: camera,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    currentPrice: "$370",
    rating: 4.9,
    reviews: 325,
    imageUrl: laptop,
  },
  {
    id: 4,
    name: "Curology Product Set",
    currentPrice: "$500",
    rating: 4.7,
    reviews: 145,
    imageUrl: productset,
  },
  {
    id: 5,
    discount: "NEW",
    name: "Kids Electric Car",
    currentPrice: "$960",
    rating: 5.0,
    reviews: 65,
    imageUrl: electricCar,
  },
  {
    id: 6,
    name: "Jr.Zoom Soccer Cleats",
    currentPrice: "$1160",
    rating: 5.0,
    reviews: 65,
    imageUrl: soccerBoots,
  },
  {
    id: 7,
    discount: "NEW",
    name: "GP11 Shooter USB Gamepad",
    currentPrice: "$660",
    rating: 5.0,
    reviews: 55,
    imageUrl: gamepad,
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    currentPrice: "$660",
    rating: 5.0,
    reviews: 55,
    imageUrl: jacket,
  },
];

const ProductList = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [viewedProducts, setViewedProducts] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 8;

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
      prevIndex + productsPerPage < products.length ? prevIndex + productsPerPage : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - productsPerPage >= 0 ? prevIndex - productsPerPage : products.length - productsPerPage
    );
  };

  const displayedProducts = products.slice(currentIndex, currentIndex + productsPerPage);

  return (
    <div className="container mx-auto py-10 mb-8">
            <div className="flex items-center">
                <div className="bg-primaryColor w-4 h-10 mr-4 rounded-md"></div>
                <span className="text-red-500 font-semibold text-xl">Our Products</span>
            </div>

      {showWishlist ? (
        <Wishlist favoriteProducts={favoriteProducts} products={products} />
      ) : (
        <div>

            <div className="flex mt-4">
                <div className="text-2xl font-bold">Explore Our Products</div>
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
                className=" hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-60 object-contain rounded-sm border p-12 bg-[#F5F5F5]"
                  />
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-4 py-1 rounded">
                      {product.discount}
                    </div>
                  )}
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
