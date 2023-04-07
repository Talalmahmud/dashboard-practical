import AdminLayout from "@/components/AdminLayout";
import { useRouter } from "next/router";
import React from "react";

const OrderDetails = () => {
  const router = useRouter();
  const order = router.query;

  return (
    <AdminLayout>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-2xl">Name: {order.customerName}</h2>
        <p>Price: ${order.total}</p>
        <p>Date: {order.date}</p>
      </div>
    </AdminLayout>
  );
};

export default OrderDetails;
