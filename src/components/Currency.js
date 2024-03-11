import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const[ selectedCurrency, setCurrency] = useState(currency);
    const changeCurrency = (event) => {
        setCurrency(event.target.value);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    }

    return (
        <div className="alert bg-info" style={{ marginRight: '2rem' }}>
            <select className="bg-info text-black border border-0" id="money" onChange={changeCurrency}>
                <option class='bg-info' defaultValue>Currency (£ Pound)</option>
                <option class='bg-info' value="$" name="dollar">$ Dollar</option>
                <option class='bg-info' value="£" name="pound">£ Pound</option>
                <option class='bg-info' value="€" name="euro">€ Euro</option>
                <option class='bg-info' value="₹" name="rupee">₹ Rupee</option>
            </select>
        </div>
    );
}

export default Currency;