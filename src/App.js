import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amounts: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amounts: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amounts: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amounts: 450, date: new Date(2021, 5, 12) }
]

const App = () => {
const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpensehandler = expense => {
    setExpenses(prev=>{
      
      return [expense, ...prev]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpensehandler}/>
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App;
