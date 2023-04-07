import CartContext from "@/context/CartContext";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

function ProductDetail() {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();
  const product = router.query;
  console.log(product);

  // This is just example data, replace with your own data fetching logic

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-8 justify-center items-center">
        <div>
          <img src={product.image} alt={product.name} className="w-full" />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg font-bold mb-2">${product.price}</p>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Add to Cart
          </button>
          <button
            onClick={() => router.push("/checkout")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors ml-2"
          >
            Buy Now
          </button>
          <button
            onClick={() => router.back()}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors ml-2"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
