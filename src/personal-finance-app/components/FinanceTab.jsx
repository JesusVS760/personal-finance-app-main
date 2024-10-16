import React, { useState } from "react";
import "./FinanceTab.css";
import close from "../starter-code/assets/images/icon-minimize-menu.svg";
import overviewImage from "../starter-code/assets/images/icon-nav-overview.svg";
import transactionsImage from "../starter-code/assets/images/icon-nav-transactions.svg";
import budgetsImage from "../starter-code/assets/images/icon-nav-budgets.svg";
import potsImage from "../starter-code/assets/images/icon-nav-pots.svg";
import recurringImage from "../starter-code/assets/images/icon-nav-recurring-bills.svg";
import logo from "../starter-code/assets/images/logo-large.svg";

import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const FinanceTab = () => {
  const navigate = useNavigate();
  const [minimize, setMinimize] = useState(true);

  const handleNextPage = (page) => {
    console.log(page);
    navigate(page);
  };

  return (
    <>
      {minimize && (
        <div className="finance-tab-container bg-black h-screen">
          <div className="finance-tab-heading">
            <img src={logo} alt="logo" />
          </div>
          <div className="finance-content">
            <div className="finance-buttons">
              <button
                className="hover:bg-white ease-in duration-200 hover:text-black hover:font-bold hover:border-l-2 border-green-600"
                onClick={() => handleNextPage("/")}
              >
                <img src={overviewImage} alt="overview image" />
                Overview
              </button>
              <button
                className="hover:bg-white ease-in duration-200 hover:text-black hover:font-bold  hover:border-l-2 border-green-600"
                onClick={() => handleNextPage("/Transactions")}
              >
                <img src={transactionsImage} alt="trans image" />
                Transactions
              </button>
              <button
                className="hover:bg-white ease-in duration-200 hover:text-black hover:font-bold  hover:border-l-2 border-green-600"
                onClick={() => handleNextPage("/Budgets")}
              >
                <img src={budgetsImage} alt="" />
                Budgets
              </button>
              <button
                className="hover:bg-white ease-in duration-200 hover:text-black hover:font-bold  hover:border-l-2 border-green-600"
                onClick={() => handleNextPage("/Pots")}
              >
                <img src={potsImage} alt="pots image" />
                Pots
              </button>
              <button
                className="hover:bg-white ease-in duration-200 hover:text-black hover:font-bold  hover:border-l-2 border-green-600"
                onClick={() => handleNextPage("/RecurringBills")}
              >
                <img src={recurringImage} alt="reccurring image" />
                Recurring Bills
              </button>
            </div>
          </div>
          <div className="finance-minimize-menu">
            <button
              className="hover:bg-white ease-in duration-200 hover:text-black hover:font-bold p-2 rounded-md"
              onClick={() => setMinimize(!minimize)}
            >
              {" "}
              <img src={close} alt="" />
              Minimize Menu
            </button>
          </div>
        </div>
      )}
      {!minimize && (
        <div
          className="show-menu flex flex-row p-2 "
          onClick={() => setMinimize(!minimize)}
        >
          <Menu size={25} className="text-blue-800 font-bold" />
          <button className="text-xl text-blue-800 font-bold">Show Menu</button>
        </div>
      )}
    </>
  );
};

export default FinanceTab;
