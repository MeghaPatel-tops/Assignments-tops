import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Container, FormGroup, Input, Label } from 'reactstrap'
import { useNavigate, useParams } from "react-router";
import {db} from './firebase';
import {collection, addDoc} from 'firebase/firestore';
    
function UserRegistration() {
    const navigate  = useNavigate();
    const [userData , setUserData] = useState({});
    const userCollection= collection(db,"users")

    const handleChange = (e) =>{
        const {name,value}=e.target;
        setUserData((prevValues)=>({
            ...prevValues,
            [name]:value
        }))
        
    }
    const handleClick=async()=>{
       try {
            
            const result = await axios.post(`http://localhost:8000/Users/`,userData)
            console.log(result)
            navigate('/viewuser')
       } catch (error) {
            console.log(error)
       }
    }
  return (
    <div>
        <Container>
            
            <Card>
                <CardHeader>
                    <h1>User Registration From</h1>
                </CardHeader>
                <CardBody>
                    <FormGroup>
                        <Label>UserName</Label>
                        <Input type='text' name='username' onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type='email' name='email' onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type='password' name='password' onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Phone Number</Label>
                        <Input type='text' name='phnono' onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={handleClick}>Submit</Button>
                    </FormGroup>
                </CardBody>
            </Card>
            
            
        </Container>
    </div>
  )
}

export default UserRegistration