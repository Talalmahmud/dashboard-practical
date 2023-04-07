import { useState } from "react";
import { useRouter } from "next/router";
import { FaEye } from "react-icons/fa";
import AdminLayout from "@/components/AdminLayout";

const orders = [
  {
    id: 1,
    customerName: "John Doe",
    total: 100,
    date: "2022-05-01",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    total: 200,
    date: "2022-05-02",
  },
  {
    id: 3,
    customerName: "Bob Johnson",
    total: 150,
    date: "2022-05-03",
  },
];

const OrderList = () => {
  const router = useRouter();
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleDetailView = (orderId) => {
    setSelectedOrderId(orderId);
    router.push(`/admin/orders/${orderId}`);
  };

  return (
    <AdminLayout>
      <div className="container mx-auto py-6">
        <h2 className="text-2xl font-bold mb-6">Orders</h2>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-slate-500">
              <th className="text-center">Order ID</th>
              <th className="text-center">Customer Name</th>
              <th className="text-center">Total</th>
              <th className="text-center">Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="text-center">
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.customerName}</td>
                <td className="border px-4 py-2">{order.total}</td>
                <td className="border px-4 py-2">{order.date}</td>
                <td className="border px-4 py-2 flex justify-center">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => handleDetailView(order.id)}
                  >
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default OrderList;
