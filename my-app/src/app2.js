import React from 'react'


const App2 =(props)=> {
    return(
        <div>
            <h1 className='search'>Welcome {props.name}</h1>
            <input type={props.type}></input>
            <p> To use the component for the application </p>
        </div>
    )
}

export default App2