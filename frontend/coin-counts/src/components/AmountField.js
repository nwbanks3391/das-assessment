import React from 'react';
import { Form } from 'semantic-ui-react'

const AmountField = (props) => {
    return (
        <div>
            <Form onSubmit={props.onSubmit}>
                <Form.Input placeholder="0.00" onChange={props.onChange}/>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    );
};

export default AmountField;