import React, { useState } from 'react'
import { Button} from 'reactstrap'

function Counter() {
    const [count,setCount] = useState(0);

    const handleClick=()=>{
        setCount(count+1);
    }
    const handleClick1=()=>{
        setCount(count-1);
    }

  return (
    <div>
        <hr />
       <h1>{count}</h1> 
        <Button color='primary' onClick={handleClick}>Increment</Button>
        <Button style={{marginLeft:'30px'}} color='primary' onClick={handleClick1}>Decrement</Button>
    </div>
  )
}

export default Counter