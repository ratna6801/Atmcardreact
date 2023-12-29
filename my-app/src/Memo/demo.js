import React, { useState } from 'react'
import Hello from './hello'

export  const  Demo = ()=> {
    const[fName,setFName] = useState('')
    const[lName,setLName] = useState('')
  return (
    <div>
        <input placeholder='First name' value={fName} onChange={(e)=>setFName(e.target.value)}></input>
        <br></br><br/>
        <input placeholder='Last name' value={lName} onChange={(e)=>setLName(e.target.value)}></input>
        <Hello name = {lName}/>
    </div>
  )
}
export default Demo;
