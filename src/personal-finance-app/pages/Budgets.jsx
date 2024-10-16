import React from "react";

const Budgets = ({ budgetsContent }) => {
  const category = budgetsContent.map((catagoryType) => catagoryType != "");
  console.log(category);
  return <div className="budgets-container">Budgets</div>;
};

export default Budgets;
