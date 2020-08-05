import React, { useState, } from 'react';
import axios from 'axios'
import { Container, Header  } from 'semantic-ui-react'
import styled from 'styled-components'
import Spinner from 'react-spinkit'


import AmountField from '../components/AmountField';
import ValueDisplay from '../components/ValueDisplay';

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

const ErrorText = styled.h3`
    color: red;
    font-weight: bold;
`

const CoinCounts = () => {
    const [amount, setAmount] = useState('');
    const [counts, setCounts] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleAmountChange = (e) => {
        if(counts.SilverDollar !== null) {
            setCounts({})
        }
        const val = e.target.value;
        setAmount(val)
    }

    const handleRequest = () => {
        setError('')
        const amt = parseFloat((Math.floor(parseFloat(amount) * 100) / 100).toFixed(2)) //set this way to prevent rounding
        if(typeof(amt) !== 'number'){
            setError('Please enter a valid number')
            return
        }
        setAmount(amt)
        const data = {
            Value: amt
        }
        setLoading(true)
        // axios.post('https://localhost:5001/coincount', data).then((response) => {
        axios({
            method: 'post',
            url: 'http://nwb-das-api.azurewebsites.net/coincount', 
            data: data,
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }}).then((response) => {
            setCounts(response.data);
            setLoading(false);
        }).catch((error)=> {
            console.log(error)
            setLoading(false)
            setError('An error has occurred. Please refresh the page and try again.')
        })
    }

    return (
        <Background>
            <StyledContainer text>
                <Header as='h1'>
                    Coin Count Optimizer
                </Header>
                <p>Enter an amount of Dollars and Cents:</p>
                <AmountField onChange={handleAmountChange} onSubmit={handleRequest}/>
                {//separate this into its own component for structure
                    counts.silverDollar ? 
                        <ValueDisplay data={counts} amount={amount}/>
                    : ''
                }
                {
                    error === '' ? '' : <ErrorText>{error}</ErrorText>
                }
                {
                    loading === true ? <Spinner name='three-bounce'/> : ''
                }
            </StyledContainer>
        </Background>
    );
};

export default CoinCounts;