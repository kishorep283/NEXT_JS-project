// app/components/TransactionForm.js
'use client';

import { useState } from 'react';

const TransactionForm = ({ onAdd }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, date, description, category }),
    });
    const data = await response.json();
    onAdd(data);
    setAmount('');
    setDate('');
    setDescription('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-6 bg-white shadow-md rounded">
      <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-2">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required
            className="border p-2 rounded flex-1"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="border p-2 rounded flex-1"
          />
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
            className="border p-2 rounded flex-1"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="border p-2 rounded flex-1"
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;