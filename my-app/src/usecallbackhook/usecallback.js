import React, { memo, useCallback, useState } from 'react'

export default function Usecallback() {
    const [count,setCount] = useState(0)
    const handleclick = useCallback(()=>{
        setCount(Math.floor(Math.random() * 100))
    },[])
  return (
    <div>
        {count}
        <Child fun={handleclick}/>
    </div>
  )
}



const  Child=memo((props)=>{
    console.log("re-render")
    return(
        <div>
            <button onClick={props.fun}>Add</button>
        </div>
    )
})