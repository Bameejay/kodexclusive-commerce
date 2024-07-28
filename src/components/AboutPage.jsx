import React, { useState } from "react";
import { FaTruck, FaHeadset, FaMoneyBillWave } from "react-icons/fa";
import heroImage from "../assets/images/aboutpage_images/heroimage.png";

const AboutPage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    
    <div className="py-6 md:py-4">
      <div className="text-sm container mx-auto px-4">
        <ul className="flex space-x-2 text-xs">
          <li className="text-gray-500">
            <a href="/">Home</a>
          </li>
          <li>/</li>
          <li className="text-black">Contact</li>
          <li>/</li>
          <li className="text-black">Nothing</li>
          <li>/</li>
          <li className="text-black">Nothing</li>
          <li>/</li>
          <li className="text-black">Nothing</li>
        </ul>
      </div>

      <div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center py-8 lg:py-0">
          <div className="max-w-md text-justify space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-widest">Our Story</h1>
            <p className="text-black text-sm">
              Founded in 2018, Exclusive is South Asia's premier online shopping
              marketplace with an active presence in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sellers and 500 brands and serves 3 million
              customers across the region.
            </p>
            <p className="text-black text-sm mt-4">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer.
            </p>
          </div>
        </div>

          <div className="w-full lg:w-1/2 flex items-centers bg-[#ea7ea8] rounded-l-md justify-center py-8 lg:py-10 md:mt-4 md:mb-24">
            <img src={heroImage} alt="Story Image" className="" />
          </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-8 md:mb-12 container mx-auto">
        <div
          className="p-4 md:p-6 bg-white shadow-md rounded-lg hover:bg-gray-100"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h2 className="text-xl md:text-2xl font-bold">10.5k</h2>
          <p className="text-gray-600">Sellers active on our site</p>
        </div>
        <div
          className={`p-4 md:p-6 shadow-md rounded-lg ${
            hovered ? "bg-white text-black" : "bg-red-500 text-white"
          }`}
        >
          <h2 className="text-xl md:text-2xl font-bold">33k</h2>
          <p>Monthly Product Sale</p>
        </div>
        <div
          className="p-4 md:p-6 bg-white shadow-md rounded-lg hover:bg-gray-100"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h2 className="text-xl md:text-2xl font-bold">45.5k</h2>
          <p className="text-gray-600">Customer active on our site</p>
        </div>
        <div
          className="p-4 md:p-6 bg-white shadow-md rounded-lg hover:bg-gray-100"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h2 className="text-xl md:text-2xl font-bold">25k</h2>
          <p className="text-gray-600">Annual gross sale on our site</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8 md:mb-12 container mx-auto">
        <div className="p-4 md:p-6 bg-white shadow-md rounded-lg">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-300 mx-auto rounded-full mb-4"></div>
          <h3 className="text-lg md:text-xl font-bold">Tom Cruise</h3>
          <p className="text-gray-600">Founder & Chairman</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="p-4 md:p-6 bg-white shadow-md rounded-lg">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-300 mx-auto rounded-full mb-4"></div>
          <h3 className="text-lg md:text-xl font-bold">Emma Watson</h3>
          <p className="text-gray-600">Managing Director</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="p-4 md:p-6 bg-white shadow-md rounded-lg">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-300 mx-auto rounded-full mb-4"></div>
          <h3 className="text-lg md:text-xl font-bold">Will Smith</h3>
          <p className="text-gray-600">Product Designer</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center container mx-auto">
        <div className="p-4 md:p-6 bg-white shadow-md rounded-lg">
          <FaTruck className="text-3xl md:text-4xl mx-auto text-red-500 mb-4" />
          <h4 className="text-md md:text-lg font-bold">
            Free and Fast Delivery
          </h4>
          <p className="text-gray-600">
            Free delivery for all orders over $100
          </p>
        </div>
        <div className="p-4 md:p-6 bg-white shadow-md rounded-lg">
          <FaHeadset className="text-3xl md:text-4xl mx-auto text-red-500 mb-4" />
          <h4 className="text-md md:text-lg font-bold">
            24/7 Customer Service
          </h4>
          <p className="text-gray-600">Friendly 24/7 customer support</p>
        </div>
        <div className="p-4 md:p-6 bg-white shadow-md rounded-lg">
          <FaMoneyBillWave className="text-3xl md:text-4xl mx-auto text-red-500 mb-4" />
          <h4 className="text-md md:text-lg font-bold">Money Back Guarantee</h4>
          <p className="text-gray-600">
            We offer a 30-day money back guarantee
          </p>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutPage;
