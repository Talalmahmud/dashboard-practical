import AdminLayout from "@/components/AdminLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const OrderDetails = () => {
  const router = useRouter();
  const customer = router.query;

  return (
    <>
      <Head>LCustomer details</Head>
      <AdminLayout>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-2xl">Name: {customer.name}</h2>
          <p>Email: {customer.email}</p>
        </div>
      </AdminLayout>
    </>
  );
};

export default OrderDetails;
