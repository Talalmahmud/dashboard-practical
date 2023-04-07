import AdminLayout from "@/components/AdminLayout";
import CustomerForm from "@/components/CustomerForm";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const customers = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
];
const Customers = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setShowCustomerForm(true);
  };

  const handleDelete = (customerId) => {
    // TODO: Delete customer with the given ID
  };

  const handleAddCustomer = () => {
    setShowCustomerForm(true);
  };

  const handleCloseForm = () => {
    setShowCustomerForm(false);
  };
  return (
    <AdminLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">Customer View</h1>

        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={() => setShowCustomerForm(true)}
        >
          Add Customer
        </button>

        <table className="table-auto w-full">
          <thead>
            <tr className="bg-slate-400">
              <th className="text-center">ID</th>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr className="text-center" key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td className="flex justify-center items-center gap-2">
                  <button className="mr-2" onClick={() => handleEdit(customer)}>
                    <FaEdit className="text-green-400" />
                  </button>
                  <button onClick={() => handleDelete(customer.id)}>
                    <FaTrash className="text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showCustomerForm && <CustomerForm handleCloseForm={handleCloseForm} />}
      </div>
    </AdminLayout>
  );
};

export default Customers;
