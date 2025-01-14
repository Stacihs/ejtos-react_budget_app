import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import ExpenseList from './components/ExpenseList';


import { AppProvider } from './context/AppContext';
import Currency from './components/Currency';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            // Budget component
                                <div className='col-sm'>
                                    <Budget />
                                </div>
                        }        

                        {
                            //Remaining component
                                <div className='col-sm'>
                                    <Remaining />
                                </div>
                        }        

                        {
                           //ExpenseTotal component
                                <div className='col-sm'>
                                    <ExpenseTotal />
                                </div>
                        }
                        {
                            // Currency component
                                <div className='col-sm'>
                                    <Currency />
                                </div>
                        }        
                     </div>
                     <h2 className='mt-3'>Allocation</h2>
                     <div className='row mt-3'> 
                        {
                            //ExpenseList component
                                <div className='col-sm'>
                                    <ExpenseList />
                                </div>
                        }         
                    </div>
                    <div>
                        <h2 className='mt-3'> Change Allocation</h2>
                     </div>                    
                    <div className='row mt-3'>
                        {
                            // AllocationForm component
                                <div className='col-sm'>
                                    <AllocationForm />
                                </div>
                        }
                    </div>     
            </div>
        </AppProvider>
    );
};
export default App;
