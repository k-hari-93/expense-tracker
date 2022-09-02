import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [displayForm, setDisplayForm] = useState(false);
    
    const updateFlag = (flag) => {
        setDisplayForm(flag);
    };

    const cancelHandler = (flag) => {updateFlag(false)};


    const expenseSubmitHandler = (expenseData) => {
        const enrichedData = {
            ...expenseData,
            id: Math.random().toString(),
        };
        props.onExpenseSubmit(enrichedData);
        updateFlag(false);
    };
    
    const updateFlagHandler = () => updateFlag(!displayForm);
    
    const formContent = displayForm ? (
        <ExpenseForm onCancel={cancelHandler} onExpenseSubmit={expenseSubmitHandler} />
    ) : (
        <button onClick={updateFlagHandler}>Add New Expense</button>
    );

    return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
