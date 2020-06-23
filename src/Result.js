import React, { useContext } from 'react';


import BalanceContext from './BalanceContext';
import './Result.css';


function Result() {
  
let balance = useContext(BalanceContext);
console.log(balance);
  return (
      
   
        
        <div className="Result">
        
       <p className="Income"> Income <br></br> +$0.00</p>
       <hr></hr>
        <p className="Expense" > Expense <br></br> +$0.00 </p>
        </div>
    
  );
}

export default Result;
