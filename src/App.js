import React, { useState } from 'react';
import Footer from './Footer';
import './App.css';
import BalanceContext from './BalanceContext'
import Result from './Result'
import BalanceTitle from './Balance_Title'
function App(props) {
  let balance = useState(0)
  return (
    <BalanceContext.Provider value={balance} >
    <div className="App">
      <header className="App-header">
        <h2>Expense Tracker</h2>
        <BalanceTitle></BalanceTitle>
        <Result></Result>
       <h3>History</h3>
       
       <h3>Add new Transaction</h3>
       
       <p>Transaction name: </p>
       <input type="text" placeholder="Enter text here..."></input>
       <p>Amount: <br></br> (negative sign (-) for expense, positive sign (+) for income)</p>
       <input id="amount" type="number" placeholder="Enter amount here..."></input>
       <button className="btn" onClick={()=>{balance[1](balance[0]+parseFloat(document.getElementById("amount").value))}}>Add Transaction</button>

      </header>
     <Footer></Footer>

    
    </div>
    </BalanceContext.Provider>
  );
}

export default App;
