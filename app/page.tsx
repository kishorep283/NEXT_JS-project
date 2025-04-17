// app/page.js
'use client';
import "../styles/globals.css";
import { useEffect, useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Dashboard from './components/DashBoard';

// Define the Transaction interface
interface Transaction {
  _id?: string; // Optional, as it may not be present when creating a new transaction
  amount: number;
  date: string; // You can also use Date if you prefer
  description: string;
  category: string;
}

const HomePage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]); // Specify the type for transactions

  const fetchTransactions = async () => {
    const response = await fetch('/api/transactions');
    const data: Transaction[] = await response.json(); // Specify the type for fetched data
    setTransactions(data);
  };

  const handleAddTransaction = (newTransaction: Transaction) => { // Specify the type for newTransaction
    setTransactions((prev) => [...prev, newTransaction]);
  };

  const handleDeleteTransaction = async (id: string) => { // Specify the type for id
    await fetch('/api/transactions', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setTransactions((prev) => prev.filter((transaction) => transaction._id !== id));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Personal Finance Visualizer</h1>
      <TransactionForm onAdd={handleAddTransaction} />
      <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} />
      <Dashboard transactions={transactions} />
    </div>
  );
};

export default HomePage;