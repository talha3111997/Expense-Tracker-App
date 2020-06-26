import React, { useContext } from 'react';

import {GlobalContext} from '../context/GlobalState'
import '../Result.css';


function Result() {
  
let {transactions} = useContext(GlobalContext)
const amounts = transactions.map(transaction =>   transaction.cost)

const income = amounts.filter(item=>item>0).reduce((acc,item) => (acc += item),0).toFixed(2);


const expense = amounts.filter(item=>item<0).reduce((acc,item) => (acc += item),0).toFixed(2);

  return (
      
   
        
        <div className="Result">
        <div>
        <h4>Income </h4>
       <p className="Income"> {income}</p>
       </div>
       <hr></hr>
       <div>
        <h4> Expense  </h4>
        <p className="Expense"> {expense} </p>
        </div>
        </div>
    
  );
}

export default Result;
