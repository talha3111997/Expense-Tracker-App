import React, { useContext, useState } from 'react'
import BalanceContext from '../context/BalanceContext'
import '../App.css'
export const AddTransaction = () => {
    let balance = useContext(BalanceContext)
    let [text, setText] = useState('')
    let [amount, setAmount] = useState(0)
    return (
        <div>
            <h3>Add new Transaction</h3>
       
         <p>Transaction name: </p>
       <input type="text" value={text} onChange={(i)=>{setText(i.target.value)}} placeholder="Enter transaction name here..."></input>
       <p>Amount: <br></br> </p>
       <input  id="amount" type="number" placeholder="(negative sign (-) for expense, positive sign (+) for income)"></input>
       <button className="btn" onClick={()=>{if (!isNaN(document.getElementById("amount").value) ){balance[1](balance[0]+parseFloat(document.getElementById("amount").value))}}}>Add Transaction</button>
    
        </div>
    )
}
