import React,{useContext} from 'react'
import Transaction from './Transaction';
import {GlobalContext} from './GlobalContext'
export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div>
          
          <h3>History</h3>
           <ul id="list" className="list">
           {transactions.map(transaction => (<Transaction key={transaction.id}
            id={transaction.id}
            title={transaction.title}
            amount={transaction.amount} />))}    
               </ul>    
        </div>
    )
}
