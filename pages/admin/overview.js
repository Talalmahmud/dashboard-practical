import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FiUsers, FiShoppingBag, FiTruck, FiDollarSign } from "react-icons/fi";
// import { useAuth } from "../context/authContext";
import AdminLayout from "@/components/AdminLayout";
import MonthlyRevenueChart from "@/components/MonthlyRevenueChart";

const Overview = () => {
  //   const { user } = useAuth();

  // Example chart data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    revenue: [1000, 1500, 2000, 2500, 3000, 3500],
  };

  return (
    <AdminLayout>
      <Head>
        <title>Admin Dashboard - Overview</title>
      </Head>
      <div className="grid gap-4 mt-6 sm:grid-cols-2 md:grid-cols-4">
        <div className="p-4 bg-white rounded-lg drop-shadow">
          <div className="flex items-center justify-between mb-2">
            <div className="text-lg font-medium text-gray-800">Users</div>
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
              <FiUsers className="text-green-700" />
            </div>
          </div>
          <div className="text-3xl font-semibold text-gray-700">1,234</div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <div className="text-lg font-medium text-gray-800">Products</div>
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
              <FiShoppingBag className="text-orange-500" />
            </div>
          </div>
          <div className="text-3xl font-semibold text-gray-700">567</div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <div className="text-lg font-medium text-gray-800">Orders</div>
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
              <FiTruck className="text-blue-500" />
            </div>
          </div>
          <div className="text-3xl font-semibold text-gray-700">890</div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <div className="text-lg font-medium text-gray-800">Revenue</div>
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
              <FiDollarSign className="text-purple-500" />
            </div>
          </div>
          <div className="text-3xl font-semibold text-gray-700">$12,345</div>
        </div>
      </div>
      {/* <div className="mt-8">
        <MonthlyRevenueChart data={chartData} />
      </div> */}
    </AdminLayout>
  );
};

export default Overview;
