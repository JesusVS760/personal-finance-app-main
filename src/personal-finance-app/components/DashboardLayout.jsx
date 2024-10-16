import React from "react";
import { Outlet } from "react-router-dom";
import FinanceTab from "./FinanceTab";

const DashboardLayout = () => {
  return (
    <div className="homepage-container ">
      <div className="sidebar-finance">
        <FinanceTab />
      </div>
      <div className="homepage-overview">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
