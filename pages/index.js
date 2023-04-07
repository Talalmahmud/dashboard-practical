import Cart from "@/pages/posts/Cart";
import Link from "next/link";
import React, { useContext, useState } from "react";
import "tailwindcss/tailwind.css";
import CartContext from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

function HomePage() {
  const [cart, setCart] = useState([]);
  const { products, addToCart, removeFromCart } = useContext(CartContext);

  // const addToCart = (product) => {
  //   setCart((prevCart) => [...prevCart, product]);
  // };

  // const removeFromCart = (product) => {
  //   setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  // };

  // const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="bg-white">
      <main className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Store!</h1>
        <p className="text-lg text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
          ante ac risus consectetur ultrices. Fusce vitae nunc et quam cursus
          vestibulum. Praesent in ligula vel magna auctor maximus. Nullam vitae
          libero euismod, efficitur felis vel, congue turpis. Sed id consequat
          quam. Integer posuere accumsan nulla, a bibendum nisi sagittis vel.
          Donec dignissim mi eu velit tincidunt, at euismod ex rutrum.
          Suspendisse consectetur auctor nunc in hendrerit. Duis id orci sem.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nam scelerisque sem at ipsum porttitor, sit
          amet laoreet leo hendrerit.
        </p>
        <Link
          href="/products"
          className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Shop Now
        </Link>

        <div className="bg-slate-50 p-2 mt-5">
          <h2 className="text-center font-bold text-2xl bg-slate-100">
            Features Preoudcts
          </h2>
          <div className="flex flex-wrap  mt-10 gap-5 justify-center items-center ">
            {products &&
              products.map((product, index) => (
                <ProductCard product={product} />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
