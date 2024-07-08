import { Outlet, Link } from "react-router-dom";
// import { GrCart } from "react-icons/gr";



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
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-sm text-secondaryColor font-medium">Home</Link>
                    <Link to="/contact" className="text-sm text-secondaryColor font-medium">Contact</Link>
                    <Link to="/" className="text-sm text-secondaryColor font-medium">About</Link>
                    <Link to="/" className="text-sm text-secondaryColor font-medium">Sign Up</Link>
                </div>
            </div>
        </nav>
        <div className="w-full h-0.5 bg-gray-400 mb-4"></div>

        </>
     );
}
 
export default Navbar;