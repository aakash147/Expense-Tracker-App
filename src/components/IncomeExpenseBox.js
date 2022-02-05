import { useContext, useEffect } from 'react';
import { GlobalContext } from '../App';

export default () => {
   let { getTransaction } = useContext(GlobalContext);
   let income = 0.0;
   let expense = 0.0;

         getTransaction.filter((transaction) => {
            if (transaction.amount > 0) {
               income += +transaction.amount;
            } else {
               expense += +transaction.amount;
            }
         });
     

   return (
      <div className="inc-exp-container">
         <div>
            <h4>Income</h4>
            <p className="money plus"> {income.toFixed(2)} </p>
         </div>
         <div>
            <h4>Expense</h4>
            <p className="money minus"> {expense.toFixed(2)} </p>
         </div>
      </div>
   );
};

/*
   toFixed() method converts a number to a string.
   toFixed() method rounds the string to a specified number of decimals.
   Example: 
      number = 0.00 hai toh console krwny per ye 0 e show ho ga. 
      But jb hm "number.toFixed(2)" krin gy toh console mein number ki value 0.00 show ho gi
*/
