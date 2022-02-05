import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenseBox from './components/IncomeExpenseBox';
import Transactions from './components/Transactions';
import AddBox from './components/AddBox';
import { createContext, useState } from "react";


export let GlobalContext = createContext();

function App(){

  let [transaction, setTransaction] = useState([]);


  function deleteTransaction (data) {

    setTransaction([...data])

  }

  
  function getData(items) {

    setTransaction([...transaction, items])
    
  }

  return (
    <GlobalContext.Provider value={{getTransaction: transaction, dataAccess: getData, dataDelete: deleteTransaction}}>

      <Header />
      <div  className='container'>
        <Balance />
        <IncomeExpenseBox />
        <Transactions />
        <AddBox />
      </div>

    </GlobalContext.Provider>
  );
}
export default App;
