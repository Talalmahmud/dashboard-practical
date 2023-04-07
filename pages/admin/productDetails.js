import AdminLayout from "@/components/AdminLayout";
import { useRouter } from "next/router";
import React from "react";

const OrderDetails = () => {
  const router = useRouter();
  const product = router.query;

  return (
    <AdminLayout>
      <p>{product.title}</p>
    </AdminLayout>
  );
};

export default OrderDetails;
