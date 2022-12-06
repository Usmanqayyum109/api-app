import axios from 'axios';
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import Layout from './Layout';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        axios.post(`https://638f65524ddca317d7f776da.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        })
    }
    return (
        
        <div className='main'>
            <div>
                <h2 className='main-header'>
                React Crud Operations
                </h2>
            </div>
            
            <Form className='create-form' >
                <Form.Field>
                    <label  >First Name</label>
                    <input  placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>

                </Form.Field>
                <Form.Field>
                    <label >Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <Checkbox  label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <div>
                <Layout />
            </div>
        </div>
    )
}