import { useState, useEffect } from "react";

const UseEffect = () => {
    const [value, setValue] = useState(0);
    
    useEffect(() => {
        console.log("Call useEffect!");
        if(value >= 1) {
            document.title = `New Messages(${value})`;
        }
    },[value]);

    useEffect(() => {
        console.log("Hola amigos!");
    },[]);

    console.log("Render Component");
    return (
        <div>
            <h1>{value}</h1>
            <button className="btn" onClick={() => setValue(value + 1)}>Click Me</button>
        </div>
    )
}

export default UseEffect;