import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const expense = amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0).toFixed(2);

    return (
        <div className='inc-exp-container'>
            <div className="income-section">
                <div className="">
                    <h1>Income</h1>
                    <p className='money plus'>&#x20B9; {income}</p>
                </div>
            </div>
            <div className="expense-section">
                <div className="">
                    <h1>Expense</h1>
                    <p className='money minus'>&#x20B9; {expense}</p>
                </div>
            </div>
        </div>
    )
}
