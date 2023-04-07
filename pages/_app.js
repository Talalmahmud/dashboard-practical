import Header from "@/components/Header";
import CartProvider from "@/context/CartProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}
