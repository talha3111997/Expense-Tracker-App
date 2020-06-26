import React, { useContext, useState } from 'react'
import {GlobalContext} from '../context/GlobalState'

import '../App.css'
export const AddTransaction = () => {
    let [text, setText] = useState('')
    let [amount, setAmount] = useState(0)
    let {addTransaction} = useContext(GlobalContext);

    const handleSubmit = (event) =>{
        addTransaction( Math.floor(Math.random() * 100000000) ,text ,  parseFloat(amount))
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h3>Add new Transaction</h3>
       
         <p>Transaction name: </p>
       <input type="text" value={text} required onChange={(i)=>{setText(i.target.value)}}  placeholder="Enter transaction name here..."></input>
       <p>Amount: <br></br> </p>
       <input  type="number" required  value={amount} onChange={(i)=>{setAmount(i.target.value)}} placeholder="(negative sign (-) for expense, positive sign (+) for income)"></input>
       <button type="submit" className="btn" >Add Transaction</button>
       </form>
        </div>
    )
}
