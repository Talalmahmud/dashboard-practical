import AdminLayout from "@/components/AdminLayout";
import { useRouter } from "next/router";
import React from "react";

const OrderDetails = () => {
  const router = useRouter();
  const order = router.query;

  return (
    <AdminLayout>
      <p>{order.date}</p>
    </AdminLayout>
  );
};

export default OrderDetails;
