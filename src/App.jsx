import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./personal-finance-app/components/DashboardLayout";
import HomePage from "./personal-finance-app/pages/HomePage";
import Transactions from "./personal-finance-app/components/overviewPageComonents/Transactions";
import Overview from "./personal-finance-app/pages/Overview";
import Budgets from "./personal-finance-app/pages/Budgets";
import data from "./personal-finance-app/data.json";
import Pots from "./personal-finance-app/components/overviewPageComonents/Pots";

const App = () => {
  const [receivedData, setReceivedData] = useState(data);

  console.log(receivedData);

  return (
    <div className="app-container bg-slate-200 h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route
              path="/"
              element={
                <Overview
                  balance={receivedData.balance}
                  potsContent={receivedData.pots}
                  transactionsContent={receivedData.transactions}
                />
              }
            />
            <Route
              path="/Transactions"
              element={
                <Transactions transactionValues={receivedData.transactions} />
              }
            />
            <Route
              path="/Budgets"
              element={<Budgets budgetsContent={receivedData.budgets} />}
            />
            <Route path="/Pots" element={<Pots pots={receivedData.pots} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
