import CartContext from "@/context/CartContext";
import Link from "next/link";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <header className="bg-gray-800 text-white sticky ">
        <nav className="container mx-auto py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            My Store
          </Link>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/posts" className="hover:text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/posts/Cart" className="relative">
                <FaShoppingCart className="mr-2" />
                <span className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center absolute -top-1 -right-1">
                  {cart.length}
                </span>
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
