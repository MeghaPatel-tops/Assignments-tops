import React, { useState } from 'react'

function Basic() {
    const name = "megha"
    const [status ,setStatus]=useState('not clicked!');
    
    const handleClick = ()=>{
        setStatus("Cilcked");
    }
  return (
    <div>
        <h1>Welcome to jsx :{name}</h1>
        <p>{status}</p>
        <button onClick={handleClick}>Click</button>
    </div>

  )
}

export default Basic