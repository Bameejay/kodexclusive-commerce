import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import ProductList from "./components/ProductList";
import Cart from "./components/carts";
import Wishlist from './components/Wishlist'
import SignupPage from "./components/Signup";






export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="productList" element={<ProductList />} />
          <Route path="wishList" element={<Wishlist />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}