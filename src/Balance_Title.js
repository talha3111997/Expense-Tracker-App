import React, { useContext, useEffect } from 'react';


import BalanceContext from './BalanceContext';



function BalanceTitle() {
  
let balance = useContext(BalanceContext);
useEffect(() => {
    // Update the document title using the browser API
    document.title = `Balance: $${balance[0]} `;
  });
  return (
      
    <div  className="Balance">
        <h3 >Your Balance : {balance[0]} </h3> <br></br>
        
    </div>
  );
}

export default BalanceTitle;
