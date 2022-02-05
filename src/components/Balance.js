import { useContext } from 'react';
import { GlobalContext } from '../App';


export default ()=>{

    let { getTransaction } = useContext(GlobalContext);
    let balance = 0.00;
    getTransaction.forEach((transaction)=>{
        balance += (+transaction.amount)
    })

    return (
        <div className="balance">
            <h4>Current Balance</h4>
            <h1>
                {'$' + balance.toFixed(2) }
            </h1>
        </div>
    )
}