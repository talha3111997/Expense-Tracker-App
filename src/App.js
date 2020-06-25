import React, { useState } from 'react';
import Footer from './components/Footer';
import './App.css';
import BalanceContext from './context/BalanceContext'
import Result from './components/Result'
import BalanceTitle from './components/Balance_Title'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'
function App(props) {
  let balance = useState(0)
  return (
    
    <GlobalProvider className="App">
      <header className="App-header">
        <h2>Expense Tracker</h2>
        <BalanceTitle></BalanceTitle>
        <Result></Result>
        <TransactionList/>
        <AddTransaction/>
       
        
      
      </header>
     <Footer></Footer>

    
    </GlobalProvider>
    
  );
}

export default App;
