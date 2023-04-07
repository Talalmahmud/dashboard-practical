import AdminLayout from "@/components/AdminLayout";
import { useRouter } from "next/router";
import React from "react";

const OrderDetails = () => {
  const router = useRouter();
  const customer = router.query;

  return (
    <AdminLayout>
      <p>{customer.name}</p>
    </AdminLayout>
  );
};

export default OrderDetails;
