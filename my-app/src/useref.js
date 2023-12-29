import React, { useRef, useState } from 'react'

const Randomcolorgenrator = ()=>{

    const intervalIdRef = useRef(null);
    const[color,setColor] = useState(generateRandomColor());

    function generateRandomColor(){
        const letters = '0123456789ABCDEF'
        let randomColor = '#';
        for (let i = 0; i < 6; i ++){
            randomColor += letters[Math.floor(Math.random() * 16)];

        }
        return randomColor;
    }

    const startColorChange = ()=>{
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = setInterval(()=>{
            setColor(generateRandomColor());
        },1000);
        };
        
    const stopColorChange =()=>{
        clearInterval(intervalIdRef.current);
    }
    
    return(
        <div>
            <div 
            style={{
                width:'200px',
                height:'200px',
                backgroundColor:color,
                margin:'20px'
            }}></div>
            <button onClick={startColorChange}>Start Color Change</button>
            <button onClick={stopColorChange}>Stop Color Change</button>

        </div>
    )
}
export default Randomcolorgenrator
