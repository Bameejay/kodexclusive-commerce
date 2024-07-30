import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ showNavbar = true, showFooter = true }) => {
    return (
        <>
            {showNavbar && <Navbar />}
            <Outlet />
            {showFooter && <Footer />}
        </>
    );
}

export default Layout;
