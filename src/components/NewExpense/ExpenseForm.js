import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [expenseTitle, setExpenseTitle] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");

    const titleChangeHandler = (event) => {
        setExpenseTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setExpenseAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setExpenseDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: expenseTitle,
            amount: +expenseAmount,
            date: new Date(expenseDate),
        };

        props.onExpenseSubmit(expenseData);

        setExpenseTitle("");
        setExpenseAmount("");
        setExpenseDate("");
    };

    return (
        <form onSubmit={submitHandler} onReset={props.onCancel}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={expenseTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={expenseAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={expenseDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="reset">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
