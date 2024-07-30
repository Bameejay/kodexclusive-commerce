import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import ProductList from "./components/ProductList";
import Cart from "./components/carts";
import Wishlist from './components/Wishlist';
import SignupPage from "./components/Signup";
import LoginPage from "./components/LoginPage";
import AboutPage from "./components/AboutPage";
import LoggedInAccount from "./components/LoggedInAccount";
import PrivateRoute from '../src/PrivateRoute';
import CheckoutPage from "./components/CheckoutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main routes using default Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="loggedInAccount" element={<PrivateRoute><LoggedInAccount /></PrivateRoute>} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="productList" element={<ProductList />} />
          <Route path="wishList" element={<Wishlist />} />
          <Route path="checkoutPage" element={<CheckoutPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        {/* Specific route configurations */}
        <Route path="about" element={<Layout showFooter={true}/>}>
          <Route index element={<AboutPage />} />
        </Route>
        <Route path="contact" element={<Layout showFooter={true} />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="loggedInAccount" element={<Layout showNavbar={false} />}>
          <Route index element={<LoggedInAccount />} />
        </Route>
        <Route path="cart" element={<Layout showNavbar={false} />}>
          <Route index element={<Cart />} />
        </Route>
        {/* <Route path="cart" element={<Cart showNavbar={false} showFooter={true} />}>
          <Route index element={<Cart />} />
        </Route> */}
        {/* <Route path="login" element={<Layout showNavbar={false} showFooter={false} />}>
          <Route index element={<LoginPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
