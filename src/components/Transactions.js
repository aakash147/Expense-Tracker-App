import { useContext } from 'react';
import { GlobalContext } from '../App';


export default () => {
   let { getTransaction } = useContext(GlobalContext);
   let { dataDelete } = useContext(GlobalContext);

   return (
      <div>
         <h3>Transaction History</h3>
         <ul className="list">
            {
                getTransaction.map((transaction, index) => {

                    let sign = transaction.amount > 0 ? '+' : '-';

                    return (
                        <li className={transaction.amount > 0 ? "positive" : 'negative'}>

                            {transaction.description} <span> {sign}${Math.abs(transaction.amount)} </span>

                        <button className="del-btn" onClick={function delTransac(){

                            getTransaction.splice(index, 1);
                            dataDelete([...getTransaction]);

                        }}>X</button>
                        </li>
                    );
                })
            }
         </ul>
      </div>
   );
};


/* 
    Math.abs() in JS use for returns the absolute value of a number.
    Example: x = -231 will be 231 after using " Math.abs(x) "; 
 */

