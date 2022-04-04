import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../ui/Card';
import './ExpenseList.css';

function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = (
    <p className="expenses__fallback">No Expenses Found </p>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onDateFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {expensesContent}
    </Card>
  );
}

export default ExpenseList;
