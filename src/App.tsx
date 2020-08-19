import React from 'react';
import {Header} from "./Components/Header";
import {Balance} from "./Components/Balance";
import './App.css';
import { IncomeExpense } from './Components/IncomeExpense';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import {GlobalProvider } from './Components/GlobalContext';
import firebase from './FireBaseWork/firebase';
function App() {
  const messaging=firebase.messaging();
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
  
    })
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
