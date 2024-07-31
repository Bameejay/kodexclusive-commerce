import { Outlet, Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Importing the account icon
import { useCart } from "./CartContext";
import { RiAccountCircleLine } from "react-icons/ri";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";

const LoggedInAccountNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAccountMenuToggle = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  return (
    <>
      <div className="bg-black flex justify-between items-center p-2">
        <p className="hidden sm:block"></p>
        <p className="text-xs text-white text-center sm:text-left">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="font-bold ml-2 text-sm">Shop Now</span>
        </p>
        <select className="p-2 bg-black text-white text-sm">
          <option>English</option>
          <option>Yoruba</option>
          <option>Igbo</option>
          <option>Hausa</option>
        </select>
      </div>

      <nav className="relative container bg-white mx-auto py-2 px-4 md:px-0">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2 text-secondaryColor text-xl font-bold cursor-pointer">
            Exclusive
          </div>
          {/* Menu-Items */}
          <div className="hidden md:flex space-x-10">
            <Link to="/" className="text-sm text-secondaryColor font-medium">
              Home
            </Link>
            <Link
              to="/contact"
              className="text-sm text-secondaryColor font-medium"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-sm text-secondaryColor font-medium"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleMobileMenuToggle}
              className="mobile-menu-button"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Search and Cart Section */}
          <div className="hidden md:flex gap-4 items-center">
            <div className="flex items-center p-2 border rounded-lg bg-gray-200">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="border-none focus:outline-none bg-gray-200 text-sm hidden md:flex"
              />
              <IoSearchOutline className="text-gray-500 ml-2 hidden md:flex" />
            </div>
            {/* Wish List Icon */}
            <Link to="/">
              <IoIosHeartEmpty className="w-6 h-6 hidden md:flex" />
            </Link>
            {/* Cart Icon */}
            <Link to="/cart">
              <div className="relative">
                <IoCartOutline className="w-6 h-6 hidden md:flex" />
                {cartCount > 0 && (
                  <span className="absolute right-0 -top-1 bottom-3 left-4  inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
            {/* Account Icon */}
            <div className="relative">
              <button
                onClick={handleAccountMenuToggle}
                className="flex items-center"
              >
                <FaUserCircle className="w-6 h-6 hidden md:flex hover:text-primaryColor" />
              </button>
              {isAccountMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#413242] rounded-lg shadow-lg">
                  <Link
                    to="/profilePage"
                    className="block px-4 py-2 text-sm text-gray-700 text-white hover:bg-gray-100 flex flex-row items-center gap-1 text-xs hover:text-[#413242]"
                  >
                    <RiAccountCircleLine className="w-6 h-6" />
                    Manage My Account
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 text-white hover:bg-gray-100 flex flex-row items-center gap-1 text-xs hover:text-[#413242]"
                  >
                    <LuShoppingBag className="w-6 h-6" />
                    My Order
                  </Link>
                  <Link
                    to="/cancellations"
                    className="block px-4 py-2 text-sm text-gray-700 text-white hover:bg-gray-100 flex flex-row items-center gap-1 text-xs hover:text-[#413242]"
                  >
                    <MdOutlineCancel className="w-6 h-6" />
                    My Cancellations
                  </Link>
                  <Link
                    to="/reviews"
                    className="block px-4 py-2 text-sm text-gray-700 text-white hover:bg-gray-100 flex flex-row items-center gap-1 text-xs hover:text-[#413242]"
                  >
                    <FaRegStar className="w-6 h-6" />
                    My Reviews
                  </Link>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 text-white hover:bg-gray-100 flex flex-row items-center gap-1 text-xs hover:text-[#413242]"
                  >
                    <BiLogOut className="w-6 h-6" />
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu md:hidden flex flex-col items-start space-y-4 mt-4">
            <Link
              to="/"
              className="block text-sm text-secondaryColor font-medium"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="block text-sm text-secondaryColor font-medium"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="block text-sm text-secondaryColor font-medium"
            >
              About
            </Link>
            {/* <Link
              to="/signup"
              className="block text-sm text-secondaryColor font-medium"
            >
              Sign Up
            </Link> */}
            <div className="flex gap-4 items-center w-full">
              <div className="flex items-center p-2 border rounded-lg bg-gray-200 w-full">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="border-none focus:outline-none bg-gray-200 text-sm w-full"
                />
                <IoSearchOutline className="text-gray-500 ml-2" />
              </div>
              {/* Wish List Icon */}
              <Link to="/">
                <IoIosHeartEmpty className="w-6 h-6" />
              </Link>
              {/* Cart Icon */}
              <Link to="/cart">
                <div className="relative">
                  <IoCartOutline className="w-6 h-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 bottom-3 left-4 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        )}
      </nav>
      <div className="w-full h-0.5 bg-gray-400 mb-4"></div>
    </>
  );
};

export default LoggedInAccountNavbar;
