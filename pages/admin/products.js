import AdminLayout from "@/components/AdminLayout";
import CustomerForm from "@/components/CustomerForm";
import CartContext from "@/context/CartContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";

function Products() {
  const { products } = useContext(CartContext);
  const [showProductForm, setShowProductForm] = useState(false);

  const handleAddProduct = () => {
    setShowProductForm(true);
  };

  const handleCloseForm = () => {
    setShowProductForm(false);
  };
  return (
    <AdminLayout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-2 bg-slate-500 rounded p-2">
          <h1 className="text-2xl font-bold ">Products List</h1>

          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded "
            onClick={() => setshowProductForm(true)}
          >
            Add Product
          </button>
        </div>

        <table className="table-auto w-full">
          <thead>
            <tr className="bg-slate-400">
              <th className="text-center">Image</th>
              <th className="text-center">Title</th>
              <th className="text-center">Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr className="text-center" key={product.id}>
                <td className="flex justify-center items-center">
                  <img
                    src={product.image}
                    alt=""
                    className="w-6 h-6 rounded-full"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td className="flex justify-center items-center gap-2">
                  <button className="mr-2" onClick={() => handleEdit(product)}>
                    <FaEdit className="text-green-400" />
                  </button>
                  <button onClick={() => handleDelete(product.id)}>
                    <FaTrash className="text-red-600" />
                  </button>
                  <Link
                    href={{ pathname: "/admin/productDetails", query: product }}
                  >
                    <AiOutlineEye className="text-blue-400" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showProductForm && <CustomerForm handleCloseForm={handleCloseForm} />}
      </div>
    </AdminLayout>
  );
}

export default Products;
