import { Outlet, Link } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home';



const Layout = () => {
    return (  
        <>
        <Navbar/>
            {/* <Home/> */}
            <Outlet/>
        <Footer/>
             
        </>
    );
}
 
export default Layout;