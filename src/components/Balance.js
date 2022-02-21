import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';

function Balance() {

    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);
    const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);

    return (
        <div>
            <h4>My Balance</h4>
            <h1>&#x20B9; {total}</h1>
        </div>
    )
}

export default Balance
