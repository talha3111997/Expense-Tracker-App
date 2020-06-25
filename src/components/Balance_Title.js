import React, { useContext, useEffect } from 'react';
import {GlobalContext} from '../context/GlobalState'



function BalanceTitle() {
  
//let balance = useContext(BalanceContext);
let {transactions} = useContext(GlobalContext)
const amounts = transactions.map(transaction =>   transaction.cost)
console.log(amounts)
const balance = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);

useEffect(() => {
    // Update the document title using the browser API
    document.title = `Balance: $${balance} `;
  });
  return (
      
    <div  className="Balance">
        <h3 >Your Balance : <br/> <strong>${balance}</strong>  </h3> <br></br>
        
    </div>
  );
}

export default BalanceTitle;
