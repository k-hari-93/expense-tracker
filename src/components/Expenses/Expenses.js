import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart"
import "./Expenses.css";

const Expenses = (props) => {
    const [filterData, setFilterData] = useState("2022");
    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filterData
    );
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterData} onFilterChange={setFilterData} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;
