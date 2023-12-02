import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'

const ExpenseList = ({ expenses }) => {

    if (expenses.length === 0) {
        return <h2 className="expenses-list_fallback">Found no expenses.</h2>
    }

    return (<ul className="expenses-list">
        {expenses.map((item) => (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amounts}
                date={item.date}
            />
        ))}
    </ul>)
}

export default ExpenseList