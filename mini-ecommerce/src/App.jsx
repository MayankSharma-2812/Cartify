import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDeatails from "./pages/Productdetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/wishlist";
import Navbar from "./components/navbar";

export default function App(){
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product/>} />
        <Route path="/product/:id" element={<ProductDeatails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  )
}