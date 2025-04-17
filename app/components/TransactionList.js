// app/components/TransactionList.js
'use client';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4">Transaction List</h2>
      <ul className="space-y-2">
        {transactions.map((transaction) => (
          <li key={transaction._id} className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-800">
              {transaction.date}: {transaction.description} - ${transaction.amount} ({transaction.category})
            </span>
            <button
              onClick={() => onDelete(transaction._id)}
              className="text-red-500 hover:text-red-700 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;