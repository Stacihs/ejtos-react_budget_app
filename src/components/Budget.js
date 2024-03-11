import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

        dispatch({
            type: 'UPDATE_BUDGET',
            payload: newBudget,
        });
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;