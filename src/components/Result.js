import React, { useContext } from 'react';


import BalanceContext from '../context/BalanceContext';
import '../Result.css';


function Result() {
  
let balance = useContext(BalanceContext);
//console.log(balance);
  return (
      
   
        
        <div className="Result">
        <div>
        <h4>Income </h4>
       <p className="Income"> +$0.00</p>
       </div>
       <hr></hr>
       <div>
        <h4> Expense  </h4>
        <p className="Expense"> +$0.00 </p>
        </div>
        </div>
    
  );
}

export default Result;
