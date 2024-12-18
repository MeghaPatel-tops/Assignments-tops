import React, { useState } from 'react'
import { Button,Card, CardBody, CardFooter, CardHeader } from 'reactstrap'


function Condtional(isLoginIn) {
    const [loginStatus,setLoginStatus] = useState(isLoginIn)
    const [age,setAge]= useState(0)
    const [msg,setMsg]= useState("")

    const handleClickLogin = ()=>{
        setLoginStatus(false)
    }
    const handleClickLogout = ()=>{
        setLoginStatus(true)
    }
    const handleChangeText=(e)=>{
        setAge(e.target.value)
    }
    const handleClick=()=>{
        (age>=18) ?
            setMsg("You are eligible to vote"):
            setMsg("You are not eligible to vote")
        
    }
  return (
    <div>
                <Card style={{width:'20%'}}>
                    <CardBody>
                    {loginStatus ?
                            <Button color='primary' onClick={handleClickLogin}>Login</Button>:
                            <Button color='danger' onClick={handleClickLogout}>Logout</Button>
                    }
                    </CardBody>
                           
                </Card>
                <Card style={{width:'50%',marginTop:'20px'}}>
                    <CardHeader>
                        <h1>Voting Eligibility Checker</h1>
                    </CardHeader>
                    <CardBody>
                    <input type="tel" name="" id="" onChange={handleChangeText} />
                    </CardBody>
                    <CardFooter>
                    <Button color='primary' onClick={handleClick}>Login</Button>
                    <p color='success'>{msg}</p>
                    </CardFooter>
                           
                </Card>
    </div>            
                
  )
}

export default Condtional