import React from 'react'
import {Card,CardHeader,ListGroup,ListGroupItem} from 'reactstrap'
function Person(props) {
  return (
    <div>
        <Card
                    style={{
                        width: '18rem'
                    }}
                    >
                    <CardHeader>
                    Name:{props.person.name}
                    </CardHeader>
                    <ListGroup flush>
                        <ListGroupItem>
                        Age:{props.person.age}
                        </ListGroupItem>
                        <ListGroupItem>
                        phonenumber:{props.person.phnno}
                        </ListGroupItem>
                        
                    </ListGroup>
                    </Card>
    </div>
  )
}

export default Person