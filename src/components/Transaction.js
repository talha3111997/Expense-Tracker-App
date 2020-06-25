import React from 'react'

export const Transaction = ({transaction}) => {
    const class_sign =( transaction.cost > 0) ? "plus":"minus"
    
    const sign =( transaction.cost > 0) ? "+":"-"
    return (
        
            <li className={class_sign}>
            {sign}${Math.abs(transaction.cost)} <span>{transaction.name}</span><button className="delete-btn">X</button>
              </li>
        
    )
}
