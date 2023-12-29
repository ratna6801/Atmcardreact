import React, { createContext, useState } from "react";
import Component2 from "./Component2";


export const Usercontext = createContext();


export const Component1 = () =>{
    const [user,setuser] = useState({name:'Rathna Annadurai',age:'22 '})
    return(
        <Usercontext.Provider value={user}>
        <div>
            <h2>Components 1</h2>
            <Component2/>
        </div>
        </Usercontext.Provider>
    )
}
 