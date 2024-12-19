import React,{useEffect, useState} from 'react'
import { Button, Card, CardBody, CardHeader, Container, FormGroup, Input, Label } from 'reactstrap'
import { useNavigate, useParams } from "react-router";
import axios from 'axios';

function Edituser() {
    const [userData , setUserData] = useState({});
    const [editdata,setEditData] = useState({})
    const {id} = useParams();
    const navigate  = useNavigate();

    useEffect( ()=>{
        return async()=>{
            try {
                const editData= await axios.get(`http://localhost:8000/Users/${id}`)
                const result = editData.data;
                setEditData(result)
                
            } catch (error) {
                console.log(error)
            }
        }
    })
    const handleChange = (e) =>{
        const {name,value}=e.target;
        setUserData((prevValues)=>({
            ...prevValues,
            [name]:value
        }))
    }
    const handleClick=async()=>{
       try {
            const result = await axios.put(`http://localhost:8000/Users/${id}`,userData)
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
                        <Input type='text' name='username' onChange={handleChange} value={editdata.username}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type='email' name='email' onChange={handleChange} value={editdata.email}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type='password' name='password' onChange={handleChange} value={editdata.password}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Phone Number</Label>
                        <Input type='text' name='phnono' onChange={handleChange} value={editdata.phnono}></Input>
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

export default Edituser