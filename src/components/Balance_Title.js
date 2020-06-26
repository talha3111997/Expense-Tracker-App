import React, { useContext, useEffect } from 'react';
import {GlobalContext} from '../context/GlobalState'



function BalanceTitle() {
  
//let balance = useContext(BalanceContext);
let {transactions} = useContext(GlobalContext)
transactions = Array.from(transactions)
const amounts = transactions.map(transaction =>   transaction.cost)
console.log(amounts)
console.log("type of transactions" ,typeof(transactions))
const balance = amounts.reduce((acc,item) => (acc += item),0);

useEffect(() => {
    // Update the document title using the browser API
    document.title = `Balance: $${balance} `;
  });
  return (
      
    <div  className="Balance">
        <h3 >Your Balance : <br/> <strong className="money">${balance}</strong>  </h3> <br></br>
        
    </div>
  );
}

export default BalanceTitle;
