import React, { useContext} from 'react'
import '../App.css'
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transaction'

export const TransactionList = () => {
    let {transactions} = useContext(GlobalContext)
    transactions = Array.from(transactions)
    console.log(typeof(transactions))
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction=>( <Transaction key={transaction.id} transaction={transaction}></Transaction>))}
                
            </ul>
        </div>
    )
}
