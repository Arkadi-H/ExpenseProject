import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from "./ExpensesFilter"
import Card from "../UI/Card"
import ExpenseList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
import './Expenses.css'

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = expenses.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList expenses={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses