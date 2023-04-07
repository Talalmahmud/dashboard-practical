import { useState } from "react";

const AddProductForm = ({ handleCloseForm }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescriptrtion] = useState("");

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-lg font-bold mb-6">Add Product</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-gray-300 rounded-md shadow-sm outline-none border-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block font-medium mb-2">
              price
            </label>
            <input
              type="text"
              id="price"
              className="w-full border-gray-300 rounded-md shadow-sm outline-none border-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium mb-2">
              description
            </label>
            <textarea
              id="description"
              rows="3"
              className="w-full border-gray-300 rounded-md shadow-sm outline-none border-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              value={description}
              onChange={(e) => setDescriptrtion(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-200 hover:bg-gray-300 outline-none border-none text-gray-700 font-medium px-4 py-2 mr-2 rounded-md"
              onClick={handleCloseForm}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
