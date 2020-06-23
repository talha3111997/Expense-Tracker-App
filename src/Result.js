import React, { useContext } from 'react';


import BalanceContext from './BalanceContext';
import './Result.css';


function Result() {
  
let balance = useContext(BalanceContext);
console.log(balance);
  return (
      
    <div  >
        <h3 className="Balance">Your Balance{balance[0]} </h3> <br></br>
        <div className="Result">
        
       <p className="Income"> Income <br></br> +$0.00</p>
       <hr></hr>
        <p className="Expense" > Expense <br></br> +$0.00 </p>
        </div>
    </div>
  );
}

export default Result;
