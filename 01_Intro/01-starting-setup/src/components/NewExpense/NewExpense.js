import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  // Display or Hide Form
  const displayFormHandler = () => {
    setIsEditing((prevState) => {
      return !prevState;
    });
  };
  // Conditional Content
  let content = <button onClick={displayFormHandler}>Add New Expense</button>;
  if (isEditing) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        showContentHandler={displayFormHandler}
      />
    );
  }
  // End of Conditional Content

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
