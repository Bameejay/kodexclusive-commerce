import React, { useState } from "react";
import { FaTruck, FaHeadset, FaMoneyBillWave } from "react-icons/fa";
import heroImage from "../assets/images/aboutpage_images/heroimage.png";
import annualGross from "../assets/images/contact_images/annual_gross.png";
import customerActive from "../assets/images/contact_images/customer_active.png";
import productSale from "../assets/images/contact_images/product_sale.png";
import sellersActive from "../assets/images/contact_images/sellers_active.png";
import founder from "../assets/images/contact_images/founder_chairman.png";
import manager from "../assets/images/contact_images/manager_director.png";
import designer from "../assets/images/contact_images/product_designer.png";
import delivery from "../assets/images/contact_images/delivery.png";
import customerService from "../assets/images/contact_images/customer_service.png";
import moneyBack from "../assets/images/contact_images/money_back.png";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialTwitter } from "react-icons/sl";
import { RiLinkedinLine } from "react-icons/ri";

const AboutPage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="py-6 md:py-4 container mx-auto px-4 md:px-0">
      <div className="text-sm ">
        <ul className="flex space-x-2 text-xs">
          <li className="text-gray-500">
            <a href="/">Home</a>
          </li>
          <li>/</li>
          {/* <li className="text-black">Contact</li>
          <li>/</li> */}
          {/* <li className="text-black">Nothing</li>
          <li>/</li>
          <li className="text-black">Nothing</li>
          <li>/</li> */}
          <li className="text-black">About</li>
        </ul>
      </div>

      <div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center py-8 lg:py-0">
            <div className="max-w-md text-justify space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-widest">
                Our Story
              </h1>
              <p className="text-black text-xs">
                Founded in 2018, Exclusive is South Asia's premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sellers and 500 brands and
                serves 3 million customers across the region.
              </p>
              <p className="text-black text-sm mt-4">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast pace. Exclusive offers a diverse assortment in
                categories ranging from consumer.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-centers bg-[#ea7ea8] rounded-l-md justify-center mb-10 py-8 lg:py-10 md:mt-4 md:mb-24">
            <img src={heroImage} alt="Story Image" className="" />
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-8 md:mb-12 container mx-auto">
          <div
            className="p-4 md:p-8 bg-white shadow-md rounded-sm hover:bg-gray-100 flex flex-col items-center space-y-2 border border-gray-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img src={productSale} alt="product_sale" className="w-16 h-auto" />
            <h2 className="text-xl md:text-2xl font-bold">10.5k</h2>
            <p className="text-black text-xs">Sellers active on our site</p>
          </div>
          <div
            className={`p-4 md:p-8 shadow-md rounded-sm flex flex-col items-center space-y-2 ${
              hovered
                ? "bg-white text-black border border-gray-300"
                : "bg-red-500 text-white"
            }`}
          >
            <img
              src={sellersActive}
              alt="sellers_active"
              className="w-16 h-auto"
            />
            <h2 className="text-xl md:text-2xl font-bold">33k</h2>
            <p className="text-xs">Monthly Product Sale</p>
          </div>
          <div
            className="p-4 md:p-8 bg-white shadow-md rounded-sm hover:bg-gray-100 flex flex-col items-center space-y-2 border border-gray-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src={customerActive}
              alt="customer_active"
              className="w-16 h-auto"
            />
            <h2 className="text-xl md:text-2xl font-bold">45.5k</h2>
            <p className="text-black text-xs">Customer active on our site</p>
          </div>
          <div
            className="p-4 md:p-8 bg-white shadow-md rounded-sm hover:bg-gray-100 flex flex-col items-center space-y-2 border border-gray-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img src={annualGross} alt="annual_gross" className="w-16 h-auto" />
            <h2 className="text-xl md:text-2xl font-bold">25k</h2>
            <p className="text-black text-xs">Annual gross sale on our site</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-12 container mx-auto">
          <div className="flex flex-col space-y-2">
            <div className="bg-gray-100 p-4 md:p-6 shadow-md rounded-sm w-auto h-4/5">
              <img src={founder} alt="founder" className="md:mt-10" />
            </div>
            <div></div>
            <h3 className="text-lg md:text-xl font-bold text-black">
              Tom Cruise
            </h3>
            <p className="text-black text-xs">Founder & Chairman</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500">
                <SlSocialTwitter />
              </a>
              <a href="#" className="text-gray-500">
                <IoLogoInstagram />
              </a>
              <a href="#" className="text-gray-500">
                <RiLinkedinLine />
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="bg-gray-100 p-4 md:p-6 shadow-md rounded-sm w-auto h-4/5">
              <img src={manager} alt="manager" className="md:mt-10" />
            </div>
            <div></div>
            <h3 className="text-lg md:text-xl font-bold text-black">
              Emma Watson
            </h3>
            <p className="text-black text-xs">Managing Director</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500">
                <SlSocialTwitter />
              </a>
              <a href="#" className="text-gray-500">
                <IoLogoInstagram />
              </a>
              <a href="#" className="text-gray-500">
                <RiLinkedinLine />
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="bg-gray-100 p-4 md:pt-6 md:pe-0 shadow-md rounded-sm w-auto h-4/5">
              <img src={designer} alt="designer" className="md:mt-10" />
            </div>
            <div></div>
            <h3 className="text-lg md:text-xl font-bold text-black">
              Will Smith
            </h3>
            <p className="text-black text-xs">Product Designer</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500">
                <SlSocialTwitter />
              </a>
              <a href="#" className="text-gray-500">
                <IoLogoInstagram />
              </a>
              <a href="#" className="text-gray-500">
                <RiLinkedinLine />
              </a>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center my-20 mx-8">
          <div className="flex flex-col space-y-3 items-center">
            <img src={delivery} alt="delivery" className="w-16 h-auto" />
            <h4 className="text-md md:text-lg font-bold">
              FREE AND FAST DELIVERY
            </h4>
            <p className="text-black text-xs">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <img src={delivery} alt="delivery" className="w-16 h-auto" />
            <h4 className="text-md md:text-lg font-bold">
              24/7 CUSTOMER SERVICE
            </h4>
            <p className="text-black text-xs">
              Friendly 24/7 customer support
            </p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <img src={delivery} alt="delivery" className="w-16 h-auto" />
            <h4 className="text-md md:text-lg font-bold">
              MONEY BACK GUARANTEE
            </h4>
            <p className="text-black text-xs">
              We return money within 30 days
            </p>
          </div>

        </section>
      </div>
    </div>
  );
};

export default AboutPage;
