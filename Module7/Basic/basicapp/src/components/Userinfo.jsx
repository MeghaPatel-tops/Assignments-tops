import React, { useState } from 'react'

function Userinfo() {
    const [name , setName]=useState('');

    const handleChange=(e)=>{
        setName(e.target.value)
    }
  return (
    <div>
        <label>Enter Name Here</label>
        <input type="text" name="" id="" onChange={handleChange}/>
        <p>{name}</p>
    </div>
  )
}

export default Userinfo