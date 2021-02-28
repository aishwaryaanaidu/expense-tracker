import React from 'react'
import { IncomeExpenses } from './IncomeExpenses'

export const AddTransaction = () => {
    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text ..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        { `negative - IncomeExpenses, positive - income` }
                    </label>
                    <input type="number" placeholder="Enter amount ..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}