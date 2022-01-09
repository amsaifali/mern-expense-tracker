import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { AddTransaction } from './components/AddTransaction';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './contexts/GlobalState';


function App() {
  return (
    <GlobalProvider>
    <Header/>
    <Balance/>
    <IncomeExpense/>
    <TransactionList/>
    <AddTransaction/>
    </GlobalProvider>
  );
}



export default App;
