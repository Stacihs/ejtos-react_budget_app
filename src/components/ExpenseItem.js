import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';


const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const lessExpense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'DECREASE_EXPENSE',
            payload: lessExpense
        });

    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button class="btn btn-success py-1 fs-5 rounded-circle fw-bolder" onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button class="btn btn-danger py-1 fs-5 rounded-circle fw-bolder" onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
