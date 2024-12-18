import React from 'react'
import { Container,ListGroup,ListGroupItem } from 'reactstrap';

function FruitList() {
  const fruits =["mango","apple","banana","Grapes","kiwi"];  
  const Users = ["Megha Patel","Malay Patel","Bhumi Patel","Nilay Patel","Mihir Patel"]
  return (
    <div>
        <Container>
            <h1>Fruits List</h1>
            <ListGroup>
            {
                fruits.map((fruit)=> 
                    <ListGroupItem>
                        {fruit}
                    </ListGroupItem>
                )
            }
            </ListGroup>
        </Container>
        <Container style={{marginTop:'20px'}}>
            <h1>User List With Key</h1>
            <ListGroup>
            {
                Users.map((user,index)=> 
                    <ListGroupItem>
                        {user} || {index}
                    </ListGroupItem>
                )
            }
            </ListGroup>
        </Container>
        
    </div>
  )
}

export default FruitList