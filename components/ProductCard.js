import CartContext from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          className="h-full w-full"
          fill
          alt=""
          loader={product.name}
          priority
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="mt-2 text-gray-900">${product.price}</p>
        <div className="mt-4">
          <Link
            href={{
              pathname: "/posts/product",
              query: product,
            }}
            state={product}
            className="bg-gray-800 text-white py-2 px-4 rounded-lg mr-2"
          >
            {/* ///product/${product.id} */}
            View Details
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
