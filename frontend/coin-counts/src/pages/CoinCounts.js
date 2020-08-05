import React, { useState } from 'react';
import axios from 'axios'
import { Container, Header } from 'semantic-ui-react'
import styled from 'styled-components'

import AmountField from '../components/AmountField';

const Background = styled.div`
    background-color: #DAF4F0;
    height: 100%;
    width: 100%;
    display: inline-block;
    margin-bottom: 0;
`

const StyledContainer = styled(Container)`
    width: 800px;
    padding: 15px;
    background-color: white;
    margin-top: 10px;
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 5px 5px 8px #888888;
`

const CoinCounts = () => {
    const [amount, setAmount] = useState('');
    const [counts, setCounts] = useState({});
    const [loading, setLoading] = useState(false);

    const handleAmountChange = (e) => {
        const val = e.target.value;
        setAmount(val)
    }

    const handleSubmit = () => {
        const amt = parseFloat((Math.floor(parseFloat(amount) * 100) / 100).toFixed(2)) //set this way to prevent rounding
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
        <Background>
            <StyledContainer text>
                <Header as='h1'>
                    Coin Count Optimizer
                </Header>
                <p>To be beautified tomorrow morning</p>
                <br/>
                <input value={amount} onChange={handleAmountChange}></input>
                <button onClick={handleSubmit}>Submit</button>
                {//separate this into its own component for structure
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
            </StyledContainer>
        </Background>
    );
};

export default CoinCounts;