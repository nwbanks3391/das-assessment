import React, { useState } from 'react';
import AmountField from '../components/AmountField';
import axios from 'axios'

const CoinCounts = () => {
    const [amount, setAmount] = useState('');
    const [counts, setCounts] = useState({});
    const [loading, setLoading] = useState(false);

    const handleAmountChange = (e) => {
        const val = e.target.value;
        setAmount(val)
    }

    const handleSubmit = () => {
        const amt = parseFloat((Math.floor(parseFloat(amount) * 100) / 100).toFixed(2))
        const data = {
            Value: amt
        }
        console.log(data)
        axios.post('https://localhost:5001/coincount', data).then((response) => {
            setCounts(response.data);
        }).catch(()=> {
            console.log('error')
        })
    }

    return (
        <div>
            <p>Coin Counts Page</p>
            <p>To be beautified tomorrow morning</p>
            <br/>
            <input value={amount} onChange={handleAmountChange}></input>
            <button onClick={handleSubmit}>Submit</button>
            {
                counts.silverDollar ? 
                <React.Fragment>
                    <p>COINS:</p>
                    <p>Silver Dollars: {counts.silverDollar}</p>
                    <p>Half Dollars: {counts.halfDollar}</p>
                    <p>Quarters: {counts.quarter}</p>
                    <p>Dimes: {counts.dime}</p>
                    <p>Nickels: {counts.nickel}</p>
                    <p>Pennies: {counts.penny}</p>
                </React.Fragment>
                : ''
            }
        </div>
    );
};

export default CoinCounts;