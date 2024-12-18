import React, { useState } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

function UserRegistraion() {
    const [userData,setUserData] = useState({})
    const [resultData,setResultData]= useState()
    const [err,setErr]= useState()

    const handleChange = (e) =>{
        const {name,value}=e.target;
        setUserData((prevValues)=>({
            ...prevValues,
            [name]:value

        }))
        if(!userData.username){
            setErr(<p style={{color:"red"}}>Username filed required</p>);
                
        }
        if(!isEmailValid(userData.email)){
            setErr(<p style={{color:"red"}}>Enter Valid Email   </p>);

        }
    }
    const handleClick = ()=>{
        const result =(
            <div>
            <p>UserName:{userData.username}</p>
            <p>Email:{userData.email}</p>
            <p>Password:{userData.password}</p>
            </div>
        )
        setResultData(result)
        
    }
    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
      };
  return (
    <div>
        <Container>
            <h1>User Registraion</h1>
            <Form>
                <FormGroup>
                    <Label>
                        Username:
                    </Label>
                    <Input type='text' name='username' onChange={handleChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Email:
                    </Label>
                    <Input type='email' name='email'  onChange={handleChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Password:
                    </Label>
                    <Input type='password' name='password'  onChange={handleChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Button onClick={handleClick}>Submit</Button>
                </FormGroup>
            </Form>
            {resultData}
            {err}
        </Container>
    </div>
  )
}

export default UserRegistraion