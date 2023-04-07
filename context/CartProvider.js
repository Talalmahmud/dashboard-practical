import { useState } from "react";
import CartContext from "./CartContext";
import products from "../../dummy/data/product";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Product 1",
      description: "This is the description for product 1.",
      price: 9.99,
      image: "/images/product-1.png",
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is the description for product 2.",
      price: 19.99,
      image: "/images/product-2.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      description: "This is the description for product 3.",
      price: 29.99,
      image: "/images/product-3.png",
    },
    // {
    //   id: 4,
    //   title: "Product 4",
    //   description: "This is the description for product 4.",
    //   price: 39.99,
    //   image: "/images/product-4.png",
    // },
    {
      id: 5,
      title: "Product 5",
      description: "This is the description for product 1.",
      price: 9.99,
      image: "/images/product-5.png",
    },
    {
      id: 6,
      title: "Product 6",
      description: "This is the description for product 2.",
      price: 19.99,
      image: "/images/product-6.png",
    },
    {
      id: 7,
      title: "Product 7",
      description: "This is the description for product 3.",
      price: 29.99,
      image: "/images/product-7.png",
    },
    {
      id: 8,
      title: "Product 8",
      description: "This is the description for product 8.",
      price: 39.99,
      image: "/images/product-8.png",
    },
    {
      id: 9,
      title: "Product 9",
      description: "This is the description for product 9.",
      price: 9.99,
      image: "/images/product-9.jpg",
    },

    {
      id: 10,
      title: "Product 10",
      description: "This is the description for product 3.",
      price: 29.99,
      image: "/images/product-10.png",
    },
    {
      id: 11,
      title: "Product 11",
      description: "This is the description for product 4.",
      price: 39.99,
      image: "/images/product-11.png",
    },
    {
      id: 12,
      title: "Product 2",
      description: "This is the description for product 2.",
      price: 19.99,
      image: "/images/product-12.png",
    },
    {
      id: 13,
      title: "Product 13",
      description: "This is the description for product 3.",
      price: 29.99,
      image: "/images/product-13.png",
    },
    {
      id: 14,
      title: "Product 14",
      description: "This is the description for product 4.",
      price: 39.99,
      image: "/images/product-14.png",
    },
    {
      id: 15,
      title: "Product 15",
      description: "This is the description for product 1.",
      price: 9.99,
      image: "/images/product-15.png",
    },
    {
      id: 16,
      title: "Product 16",
      description: "This is the description for product 2.",
      price: 19.99,
      image: "/images/product-16.jpg",
    },
    {
      id: 17,
      title: "Product 17",
      description: "This is the description for product 3.",
      price: 29.99,
      image: "/images/product-17.png",
    },
    {
      id: 18,
      title: "Product 18",
      description: "This is the description for product 4.",
      price: 39.99,
      image: "/images/product-18.png",
    },
  ]);

  const addToCart = (product) => {
    let newCart = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      quantity: 1,
    };
    const findProduct = cart.find((item) => item.id === product.id);
    if (findProduct) {
      return (findProduct.quantity += 1);
    }
    setCart((prevCart) => [...prevCart, newCart]);
  };

  const removeFromCart = (productId) => {
    const remainingItem = cart.filter((item) => item.id !== productId);
    setCart(remainingItem);
  };

  const clearCart = () => {
    setCart([]);
  };

  const findProduct = (id) => {
    console.log(id);
    const product = products.find((item) => item.id === id);
    console.log(product);
    return product;
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        setProducts,
        addToCart,
        removeFromCart,
        clearCart,
        findProduct,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
