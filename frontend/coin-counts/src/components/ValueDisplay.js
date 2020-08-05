import React from 'react';

const ValueDisplay = (props) => {
    return (
        <React.Fragment>
            <p>COINS:</p>
            <p>Silver Dollars: {props.data.silverDollar}</p>
            <p>Half Dollars: {props.data.halfDollar}</p>
            <p>Quarters: {props.data.quarter}</p>
            <p>Dimes: {props.data.dime}</p>
            <p>Nickels: {props.data.nickel}</p>
            <p>Pennies: {props.data.penny}</p>
        </React.Fragment>
    );
};

export default ValueDisplay;