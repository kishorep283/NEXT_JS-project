// app/components/Dashboard.js
import MonthlyExpensesChart from './MonthlyExpensesChart';

const Dashboard = ({ transactions }) => {
  const monthlyData = {}; // Process transactions to get monthly data

  transactions.forEach(transaction => {
    const month = new Date(transaction.date).toLocaleString('default', { month: 'long' });
    if (!monthlyData[month]) {
      monthlyData[month] = { month, total: 0 };
    }
    monthlyData[month].total += transaction.amount;
  });

  const chartData = Object.values(monthlyData);

  return (
    <div className="bg-white shadow-md rounded p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
      <MonthlyExpensesChart data={chartData} />
    </div>
  );
};

export default Dashboard;