import React, { useRef } from 'react'
import { Button, Container } from 'reactstrap';

function Counterapp() {
    const ref = useRef(0)

    const handleClick= ()=>{
        ref.current= ref.current+1;
         alert('You clicked ' + ref.current + ' times!');
    }
  return (

    <div>
      <Container>
         <h1>Counter app using useRef() Hook</h1>
         <Button color='primary' onClick={handleClick}>Click</Button>
      </Container>
    </div>
  )
}

export default Counterapp