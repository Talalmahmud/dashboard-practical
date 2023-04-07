import Link from "next/link";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex-col w-64 bg-white border-r">
        <div className="px-8 py-4 border-b">
          <h2 className="text-lg font-semibold">Admin Dashboard</h2>
        </div>
        <nav className="flex-grow p-4">
          <ul className="space-y-4">
            <li>
              <Link
                className="block p-2 rounded hover:bg-gray-300"
                href="/admin/overview"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                className="block p-2 rounded hover:bg-gray-300"
                href="/admin/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="block p-2 rounded hover:bg-gray-300"
                href="/admin/customers"
              >
                Customers
              </Link>
            </li>
            <li>
              <Link
                className="block p-2 rounded hover:bg-gray-300"
                href="/admin/orders"
              >
                Orders
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-grow p-8">{children}</div>
    </div>
  );
};

export default AdminLayout;
