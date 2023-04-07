import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>My Ecommerce Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main content */}
      <main>{children}</main>
    </div>
  );
}
