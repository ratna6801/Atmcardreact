import React, { memo } from 'react'

 export const  Hello = (props)=> {
    console.log("rerender")
  return (
    <div>
        {props.name}{props.lname}

    </div>
  )
}
export default memo(Hello);
