import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Transaction } from './Transaction'
export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    console.log(transactions);
    return (
        <div className='list'>
            <h3>History</h3>
            <ul style={ { listStyleType:'none' } } className='list'>
            {transactions.map((transaction) => (
                <Transaction key ={transaction.id} transaction={transaction} />
            ))}
            </ul>
        </div>
    )
}
