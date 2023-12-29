import React, { useContext } from "react";
import { Usercontext } from "./Component1";

 export const Component4 = () =>{
    const user = useContext(Usercontext)
    return(
        <div>
            <h2>Components 4  {user.name} {user.age}</h2>
        </div>
    )
}
 