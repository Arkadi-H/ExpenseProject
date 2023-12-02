import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = ({onSaveExpenseData, onCancel}) => {
    const [enterdTitle, setEnteredTitle] = useState('')
    const [enterdAmount, setEnteredAmount] = useState('')
    const [enterdDate, setEnteredDate] = useState('')

    const titleChangeHandler = e => {
       setEnteredTitle(e.target.value);
    }

const amountChangeHandler = e => {
    setEnteredAmount(e.target.value);
}

const dateChangeHandler = e => {
    setEnteredDate(e.target.value);
}

const submitHandler = (e) => {
    e.preventDefault()
    const expenseData = {
        title: enterdTitle,
        amounts: enterdAmount,
        date: new Date(enterdDate)
    }

    onSaveExpenseData(expenseData)
    setEnteredAmount('')
    setEnteredTitle('')
    setEnteredDate('')
}

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enterdTitle}/>
                </div>
                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enterdAmount}/>
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={enterdDate}/>
                </div>
            </div>
            <div className='new-expense_actions'>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm