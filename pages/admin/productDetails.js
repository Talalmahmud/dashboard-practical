import AdminLayout from "@/components/AdminLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const OrderDetails = () => {
  const router = useRouter();
  const product = router.query;

  return (
    <>
      <Head>
        <title>Product Details</title>
      </Head>
      <AdminLayout>
        <div className="flex justify-center items-center flex-col">
          <img src={product.image} alt="" className="w-20 h-20 rounded" />
          <h2 className="text-2xl">Title: {product.title}</h2>
          <p>Description: {product.description}</p>
        </div>
      </AdminLayout>
    </>
  );
};

export default OrderDetails;
