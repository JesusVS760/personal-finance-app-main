import React from "react";
import "./HomePage.css";
import FinanceTab from "../components/FinanceTab";
import Overview from "./Overview";

const HomePage = () => {
  return (
    <div className="max-h-screen overflow-auto">
      <Overview />
    </div>
  );
};

export default HomePage;
