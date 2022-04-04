import React, { useState } from 'react';

import ExpenseList from './components/expenses/ExpenseList';
import NewExpense from './components/newExpense/NewExpense';

const INITAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITAL_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

//          The above is the same as:         //

// import React from 'react';
//  ...
//   return React.createElement(
//     'div',  <= *This explains why we need a div wrapper when returning JSX code*
//     { attributes },
//     React.createElement('h2', {}, "Let's get started!"),
//     React.createElement(ExpenseList, {expenses: expenses})
//   );
// }

export default App;
