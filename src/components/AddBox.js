import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import {GlobalContext } from '../App'

export default () => {

   let { dataAccess } = useContext(GlobalContext)
   let { register, handleSubmit } = useForm();

   function formSubmited(data) {

      dataAccess(data)
   }

   return (
      <>
         <h3>Add new transaction</h3>

         {/* hm useForm ki mdad se nechy wala form submit krwain gy */}

         <form onSubmit={ handleSubmit(formSubmited) } > 

            <div className="form-control">
               <label htmlFor="text">Description</label>
               <input
                  {...register('description')}
                  type="text"
                  placeholder="Description of Transaction"
               />
            </div>
            <div className="form-control">
               <label htmlFor="amount">
                  Transaction Amount
                  <br />
                  <span className="lineForDetail">
                     (Negative for EXPENSE, Positive for INCOME)
                  </span>
               </label>
               <input
                  {...register('amount')}
                  type="number"
                  placeholder="Dollar value of Transaction"
               />
            </div>
            <button className="btn">Add transaction</button>

         </form>

      </>
   );
};
