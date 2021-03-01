import React, { useState } from 'react'
import { IncomeExpenses } from './IncomeExpenses'

export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={ text } onChange={(event) => setText(event.target.value)} placeholder="Enter text ..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        {`negative - IncomeExpenses, positive - income`}
                    </label>
                    <input type="number" value={ amount } onChange={(event) => setAmount(event.target.value)} placeholder="Enter amount ..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}