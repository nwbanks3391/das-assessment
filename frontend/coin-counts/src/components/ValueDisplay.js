import React from 'react';
import { Table } from 'semantic-ui-react'
import styled from 'styled-components'


const StyledAmount = styled.h3`
    font-weight: bold;
    margin-top: 15px;
`

const ValueDisplay = (props) => {
    return (
        <React.Fragment>
            <StyledAmount>Amount: ${props.amount}</StyledAmount>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Coin Value</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Silver Dollars</Table.Cell>
                        <Table.Cell>{props.data.silverDollar}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Half Dollars</Table.Cell>
                        <Table.Cell>{props.data.halfDollar}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Quarters</Table.Cell>
                        <Table.Cell>{props.data.quarter}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Dimes</Table.Cell>
                        <Table.Cell>{props.data.dime}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Nickels</Table.Cell>
                        <Table.Cell>{props.data.nickel}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Pennies</Table.Cell>
                        <Table.Cell>{props.data.penny}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </React.Fragment>
    );
};

export default ValueDisplay;