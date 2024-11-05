"use client";

import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState("");  
  const [quantity, setQuantity] = useState(1);  
  const [category, setCategory] = useState("Produce");  

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);  
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`); 
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      {/* NameField */}
      <div className="flex flex-col space-y-2">
        <label className="text-lg font-semibold">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Category Field */}
      <div className="flex flex-col space-y-2">
        <label className="text-lg font-semibold ">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-full font-black bg-black"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {/*quantit field */}
      <h2 className="text-xl">Quantity: {quantity}</h2>
      <div className="flex space-x-2">
        <button
          type="button"
          className="px-4 py-2 bg-violet-300 rounded"
          onClick={() => setQuantity(Math.max(quantity - 1, 1))}
          disabled={quantity === 1}
        >
          -
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-violet-400 text-white rounded"
          onClick={() => setQuantity(Math.min(quantity + 1, 20))}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>


      <button type="submit" className="mt-4 px-6 py-2 bg-violet-500 hover:bg-violet-400 text-white rounded">
        Submit
      </button>
    </form>
  );
}
