import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [formShown, changeFormShown] = useState('false');

  function openFormHandler() {
    changeFormShown(true);
  }

  function cancelBtnHandler() {
    changeFormShown(false);
  }

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    changeFormShown(false);
  }

  let displayedContent = (
    <div className="new-expense__closed">
      <button onClick={openFormHandler}>Add Expense</button>
    </div>
  );

  if (formShown === true) {
    displayedContent = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2000-01-01"
              max="2099-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelBtnHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }

  return displayedContent;
}

export default ExpenseForm;
