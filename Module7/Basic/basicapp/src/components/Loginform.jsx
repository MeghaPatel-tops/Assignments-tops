import React from 'react'
import Condtional from './Condtional'

function Loginform() {
   const isLoginIn = false; 
  return (
    <div>
            <Condtional isLoginIn={isLoginIn} />
       
    </div>
  )
}

export default Loginform