import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

//import './Transaction.css';
export const Transaction = ({transaction}) => {
    console.log(transaction.amount);
    const {deleteTransaction} = useContext(GlobalContext);   
    return (
         <li className={transaction.amount<0?"minus":"plus"}>
           <button className='delete-btn' onClick={()=>{deleteTransaction(transaction.id)}}>X</button>
            {transaction.label} <span>{transaction.amount}</span> 
        </li>  
    )
}
