import { Outlet, Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";




const Navbar = () => {
    return ( 
        <>
        <div className="bg-black flex justify-between items-center">
            <p className="display-none"></p>
            <p className="text-xs text-white">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<span className="font-bold ml-2 tex-sm">ShopNow</span></p>
            <select className="p-2 bg-black text-white text-sm">
            <option>English</option>
            <option>Yoruba</option>
            <option>Igbo</option>
            <option>Hausa</option>
            </select>
        </div>

        <nav className="relative container bg-white mx-auto py-2 px-0">
            
            {/* Flex container */}
            <div className="flex items-center justify-between">
                {/* Logo */}
                    <div className="pt-2 text-secondaryColor text-xl font-bold cursor-pointer">Exclusive</div>
                {/* Menu-Items */}
                <div className="hidden md:flex space-x-10">
                    <Link to="/" className="text-sm text-secondaryColor font-medium">Home</Link>
                    <Link to="/contact" className="text-sm text-secondaryColor font-medium">Contact</Link>
                    <Link to="/" className="text-sm text-secondaryColor font-medium">About</Link>
                    <Link to="/" className="text-sm text-secondaryColor font-medium">Sign Up</Link>
                </div>

                {/* Search and Cart Section*/}
            <div className="flex gap-4 items-center">
                <div className='flex items-center p-2 border rounded-lg bg-gray-200'>
                    <input type="text" placeholder="What are you looking for?" className=" border border-none focus:outline-none bg-gray-200 text-sm" />
                    <IoSearchOutline className="text-gray-500 ml-2" />
                </div>
                {/* Wish List Icon */}
                <Link to='/'>
                    <IoIosHeartEmpty className="w-6 h-6" />
                </Link>
                {/* Cart Icon */}
                <Link to='/'>
                    <IoCartOutline className="w-6 h-6"/>
                </Link>
            </div>
             
            </div>

        </nav>
        <div className="w-full h-0.5 bg-gray-400 mb-4"></div>

        </>
     );
}
 
export default Navbar;