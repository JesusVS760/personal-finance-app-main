import React, { useState } from "react";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [expense, setExpense] = useState(expenses);
  return (
    <div className="expenses-container bg-white">
      <h4 className="text-2xl">Expenses</h4>
      <h1 className="font-bold  text-3xl">${expense.toFixed(2)}</h1>
    </div>
  );
};

export default Expenses;
