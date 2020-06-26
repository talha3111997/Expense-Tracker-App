import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'




export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)



    const class_sign =( transaction.cost > 0) ? "plus":"minus"
    
    const sign =( transaction.cost > 0) ? "+":"-"
    return (
        
            <li className={class_sign}>
            {sign}${Math.abs(transaction.cost)} <span className='trans_name'>  {transaction.name} </span><button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)} >X</button>
              </li>
        
    )
}
