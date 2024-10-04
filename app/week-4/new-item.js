"use client";

import { useState } from 'react';

export default function NewItem() {

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Quantity: ${quantity}`);
    setQuantity(1); 
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <h2 className="text-xl">Quantity: {quantity}</h2>
      <div className="flex space-x-2">
        <button
          type="button"  // 
          className="px-4 py-2 bg-violet-300 rounded"
          onClick={decrement}
          disabled={quantity === 1}
        >
          -
        </button>
        <button
          type="button" 
          className="px-4 py-2 bg-violet-400 text-white rounded"
          onClick={increment}
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



