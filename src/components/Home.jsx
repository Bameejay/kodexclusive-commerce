import { useState, useEffect } from "react";
import heroImage from "../assets/images/home_images/heroImage.png";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import ProductList from "./ProductList";
import Category from "./Category";
import BestSellingProduct from "./BestSellingProducts";
import OurProducts from "./Ourproducts";
import perfume from "../assets/images/newarrival_images/perfumes.png";
import playstation from "../assets/images/newarrival_images/playstation.png";
import speakers from "../assets/images/newarrival_images/speakers.png";
import hat from "../assets/images/newarrival_images/woman_in_hat.png";
import fastAndFree from "../assets/images/newarrival_images/free_fast.png";
import customerService from "../assets/images/newarrival_images/customer_service.png";
import guarantee from "../assets/images/newarrival_images/moneybackguarantee.png";
import ScrollToTopButton from './scrollToTopButton'

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const countdownDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 3 days from now
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container md:mx-auto px-4 md:px-0">
      {/* <div className="flex mb-20">

        <div className="w-1/4 flex mt-4 mb-20">
          <ul className="space-y-5 text-sm">
            <li>
              <Link to="" className="flex items-center gap-[52px]">
                Woman's Fashion
                <FaGreaterThan />{" "}
              </Link>
            </li>
            <li>
              <Link to="" className="flex items-center gap-20">
                Men's Fashion <FaGreaterThan />
              </Link>
            </li>
            <li>
              <Link to="">Electronics</Link>
            </li>
            <li>
              <Link to="">Home & Lifestyle</Link>
            </li>
            <li>
              <Link to="">Medicine</Link>
            </li>
            <li>
              <Link to="">Sports & Outdoor</Link>
            </li>
            <li>
              <Link to="">Baby's & Toys</Link>
            </li>
            <li>
              <Link to="">Groceries & Pets</Link>
            </li>
            <li>
              <Link to="">Health & Beauty</Link>
            </li>
          </ul>
          <div className="w-0.5 bg-gray-400 ml-2 -mt-8"></div>
        </div>


        <div className="mt-4 hero-image">
          <img
            src={heroImage}
            alt="hero_image"
            className="object-contain bg-red-600 w-[100%]"
          />
        </div>
      </div> */}

<div className="flex flex-col md:flex-row mb-20">
  {/* Left Section */}
  <div className="w-full hidden md:w-1/4 md:flex flex-col md:flex-row mt-4 mb-20">
    <ul className="space-y-5 text-sm md:mb-0 mb-4">
      <li>
        <Link to="" className="flex items-center gap-4 md:gap-[52px]">
          Woman's Fashion
          <FaGreaterThan />
        </Link>
      </li>
      <li>
        <Link to="" className="flex items-center gap-4 md:gap-20">
          Men's Fashion
          <FaGreaterThan />
        </Link>
      </li>
      <li>
        <Link to="">Electronics</Link>
      </li>
      <li>
        <Link to="">Home & Lifestyle</Link>
      </li>
      <li>
        <Link to="">Medicine</Link>
      </li>
      <li>
        <Link to="">Sports & Outdoor</Link>
      </li>
      <li>
        <Link to="">Baby's & Toys</Link>
      </li>
      <li>
        <Link to="">Groceries & Pets</Link>
      </li>
      <li>
        <Link to="">Health & Beauty</Link>
      </li>
    </ul>
    <div className="hidden md:block w-0.5 bg-gray-400 ml-2 -mt-8"></div>
  </div>

  {/* Right Section */}
  <div className="w-full mt-4 hero-image">
    <img
      src={heroImage}
      alt="hero_image"
      className="object-contain bg-red-600 w-full"
    />
  </div>
</div>


      {/* Flash Sale */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="bg-primaryColor w-4 h-10 mr-4 rounded-md"></div>
          <span className="text-red-500 font-semibold text-xl">Today's</span>
        </div>
        <div className="flex flex-col items-center md:space-x-20 mt-4 md:items-end md:flex-row">
          <div className="text-4xl font-bold">Flash Sales</div>
          <div className="flex space-x-4">
            <div className="text-center">
              <div className="text-lg text-gray-500 font-bold">Days</div>
              <div className="countdown-number text-4xl font-bold">
                {timeLeft.days}
              </div>
            </div>
            <div className="text-red-500 text-4xl mt-6">:</div>
            <div className="text-center">
              <div className="text-lg text-gray-500 font-bold">Hours</div>
              <div className="countdown-number text-4xl font-bold">
                {timeLeft.hours}
              </div>
            </div>
            <div className="text-red-500 text-4xl mt-6">:</div>
            <div className="text-center">
              <div className="text-lg text-gray-500 font-bold">Minutes</div>
              <div className="countdown-number text-4xl font-bold">
                {timeLeft.minutes}
              </div>
            </div>
            <div className="text-red-500 text-4xl mt-6">:</div>
            <div className="text-center">
              <div className="text-lg text-gray-500 font-bold">Seconds</div>
              <div className="countdown-number text-4xl font-bold">
                {timeLeft.seconds}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductList />
      <div className="w-full h-0.5 bg-gray-300 my-10"></div>
      <Category />
      <div className="w-full h-0.5 bg-gray-300 my-10"></div>

      {/* Best Selling Products Section */}

      <div className="flex flex-col mb-4">
        <div className="flex items-center">
          <div className="bg-primaryColor w-4 h-10 mr-4 rounded-md"></div>
          <span className="text-red-500 font-semibold text-sm">This Month</span>
        </div>

        <div className="flex items-center justify-between mt-2 mb-6">
          <div className="text-2xl font-semibold">Best Selling Products</div>
          <div>
            <button className="bg-primaryColor text-white px-8 py-3 rounded-sm text-sm hover:opacity-85">
              View All
            </button>
          </div>
        </div>
      </div>
      <BestSellingProduct />
      <OurProducts />

      {/* New Arrival */}

      <div className="">
        <div className="flex items-center my-8">
          <div className="bg-primaryColor w-4 h-10 mr-4 rounded-md"></div>
          <span className="text-red-500 font-semibold text-xl">
            Our Products
          </span>
        </div>
        <p className="text-2xl font-bold">New Arrival</p>

        <div className="flex flex-col gap-4 mt-10 mb-20 md:flex-row">
          {/* Left Side */}
          <div className="relative w-full md:w-1/2">
            <div className="w-full h-auto">
              <img
                src={playstation}
                alt="playstation"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="absolute bottom-8 left-8 text-white space-y-2">
              <h2 className="font-bold text-xl md:text-2xl">PlayStation 5</h2>
              <p className="pb-2 text-xs">
                Black and White version of the PS5 coming out on sale
              </p>
              <a
                href="#"
                className="underline underline-offset-0 text-sm md:text-base"
              >
                Shop Now
              </a>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex flex-col gap-7 w-full md:w-1/2">
            <div className="relative">
              <img
                src={hat}
                alt="Women's Collections"
                className="object-contain w-full h-full"
              />
              <div className="absolute bottom-8 left-8 text-white space-y-2">
                <h2 className="font-bold text-xl md:text-2xl">
                  Women's Collections
                </h2>
                <p className="pb-2 text-xs w-44">
                  Featured woman collections that give you another vibe
                </p>
                <a
                  href="#"
                  className="underline underline-offset-0 text-sm md:text-base"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
              <div className="w-full md:w-1/2 relative">
                <img
                  src={speakers}
                  alt="speakers"
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-8 left-8 text-white space-y-2">
                  <h2 className="font-bold text-xl md:text-2xl">Speakers</h2>
                  <p className="pb-2 text-xs">Amazon wireless speakers</p>
                  <a
                    href="#"
                    className="underline underline-offset-0 text-sm md:text-base"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <img
                  src={perfume}
                  alt="Perfumes"
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-8 left-8 text-white space-y-2">
                  <h2 className="font-bold text-xl md:text-2xl">Perfume</h2>
                  <p className="pb-2 text-xs">Gucci Intense OUD EDP</p>
                  <a
                    href="#"
                    className="underline underline-offset-0 text-sm md:text-base"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Section */}
      <div className="flex flex-col md:flex-row justify-between mx-20 mb-24 space-y-6">
        <div className="flex flex-col space-y-2 items-center">
          <img src={fastAndFree} alt="free and fast delivery" className="w-20 h-auto"/>
          <h2 className="font-bold">FREE AND FAST DELIVERY</h2>
          <p className="text-xs">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <img src={customerService} alt="free and fast delivery" className="w-20 h-auto"/>
          <h2 className="font-bold">24/7 CUSTOMER SERVICE</h2>
          <p className="text-xs">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <img src={guarantee} alt="free and fast delivery" className="w-20 h-auto"/>
          <h2 className="font-bold">MONEY BACK GUARANTEE</h2>
          <p className="text-xs">We return money within 30 days</p>
        </div>
      </div>
      <ScrollToTopButton/>
    </div>
  );
};

export default Home;
