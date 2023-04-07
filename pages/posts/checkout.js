import CartContext from "@/context/CartContext";
import { useContext } from "react";

const Checkout = () => {
  const { cart, total } = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    // Process payment and finalize order
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl text-center font-bold mb-4">Checkout</h2>
      <div className="flex justify-between mb-4">
        <p className="font-bold">Product</p>
        <p className="font-bold">Price</p>
      </div>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-4">
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
      <div className="flex justify-end mb-4">
        <p className="font-bold">Total: ${total}</p>
      </div>
      <div className="flex justify-center items-center mb-6">
        <form onSubmit={submitHandler}>
          <div className="mb-4 flex flex-col ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="text-md outline-none border-b-2"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="text-md outline-none border-b-2"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="text-md outline-none border-b-2"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              className="text-md outline-none border-b-2"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              className="text-md outline-none border-b-2"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              className="text-md outline-none border-b-2"
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            type="submit"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
