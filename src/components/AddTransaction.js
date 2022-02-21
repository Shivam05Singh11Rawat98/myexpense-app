import React, { useState,useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext);

    const [expenseDetails, setexpenseDetails] = useState({
        label:"",
        amount:0
    });

    const getexpenseData = (e)=>{
        const {name, value} = e.target;
        setexpenseDetails( prev => ({
                ...prev,
                [name]:value

        }))
    }

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            label:expenseDetails.label,
            amount: + expenseDetails.amount
            
        }
        console.log(newTransaction);
        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add a New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Label</label>
                    <input  autoComplete='false' type="text" name='label' placeholder='Enter a label..' value={expenseDetails.label} onChange={getexpenseData}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">(<b>-</b>/<b>+</b>) Amount &nbsp; &nbsp; [-expense,+expense]</label>
                    <input type="number" name='amount' placeholder='Enter the amount' value={expenseDetails.amount} onChange={getexpenseData}/>
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;