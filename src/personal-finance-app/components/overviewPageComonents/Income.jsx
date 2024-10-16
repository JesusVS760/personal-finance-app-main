import React, { useState } from "react";
import "./Income.css";
const Income = ({ incomeValue }) => {
  const [income, setIncome] = useState(incomeValue);

  return (
    <div className="income-container bg-white">
      <h4 className="text-2xl">Income</h4>
      <h1 className=" text-black font-bold text-3xl">${income.toFixed(2)}</h1>
    </div>
  );
};

export default Income;
