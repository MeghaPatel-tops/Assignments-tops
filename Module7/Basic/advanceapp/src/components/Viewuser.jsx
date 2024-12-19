import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Table,Button } from 'reactstrap'
import { useNavigate, useParams } from "react-router";

import Edituser from './Edituser';

function Viewuser() {
    const navigate  = useNavigate();
    const [users,setUsers]= useState([]);

    const getUserData = async() =>{
      try {
        const userData = await axios.get("http://localhost:8000/Users");
        const Users = userData.data
        setUsers(Users)
      } catch (error) {
         console.log(error)
      }
    }
   
    useEffect(()=>{
        getUserData();
    })
  return (
    <div>
        <Container>
            <h1>User Informations</h1>
            <a href="/users" className='btn btnDanger'>Add User</a>
            <Table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>
                            <tr>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phnono}</td>
                                <td><Button color="danger" onClick={()=>{deleteUser(user.id)}}>DELETE</Button></td>
                                <td>
                                    <a  color="primary" href={`/edituser/${user.id}`}>Edit</a>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
        </div>
  )
}

const deleteUser =async(id)=>{
    const uid=id;
    try {
        const deletedata= await axios.delete(`http://localhost:8000/Users/${uid}`)
        const result = deletedata.data;
    } catch (error) {
        console.log(error)
    }
    
}
// const editUser =async(id)=>{
//     const navigate  = useNavigate();
//     const uid=id;
//     try {
//         navigate (`/edituser/${uid}`)
//         // const editData= await axios.get(`http://localhost:8000/Users/${uid}`)
//         // const result = editData.data;
//         // <Edituser user={result}/>
//     } catch (error) {
//         console.log(error)
//     }
    
// }

export default Viewuser