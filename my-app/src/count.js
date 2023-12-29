import React, { useState } from "react";

const Incdec = () => {
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1)
    }
    const decrement = () =>{
        if (count > 0){
            setCount(count - 1)}
    }


    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Incdec;