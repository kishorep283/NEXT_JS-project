// app/components/MonthlyExpensesChart.js
import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const MonthlyExpensesChart = ({ data }) => {
  // Ensure data is stable and does not change between renders
  const stableData = useMemo(() => {
    return data.map(item => ({ ...item })); // Create a stable copy of the data
  }, [data]);

  return (
    <div className="bg-white shadow-md rounded p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4">Monthly Expenses</h2>
      <BarChart width={600} height={300} data={stableData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default MonthlyExpensesChart;