import React, { useState } from "react";
import "./CurrBalance.css";

const CurrBalance = ({ currBalance }) => {
  const [balance, setBalance] = useState(currBalance);

  return (
    <div className="curr-balance-container">
      <h4 className="text-2xl">Current Balance</h4>
      <h1 className="font-bold  text-3xl">${balance.toFixed(2)}</h1>
    </div>
  );
};
export default CurrBalance;
