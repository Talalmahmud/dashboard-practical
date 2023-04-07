import CartContext from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Cart = () => {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);
  console.log(cart);
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4 bg-slate-50 p-2"
              >
                <div className="flex items-center gap-4 ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-10 h-10 rounded-full object-
                    fill mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p>${item.price}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        item.quantity--;
                      }}
                      disabled={item.quantity === 1}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-l"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => {
                        item.quantity++;
                      }}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 font-bold"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Total:</p>
              <p className="text-lg font-semibold">${total}</p>
            </div>
            <div className="flex justify-center items-center">
              <Link
                href="/posts/checkout"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
