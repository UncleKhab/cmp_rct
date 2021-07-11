import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ items }) => {
  if (!items.length) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((item, indx) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
