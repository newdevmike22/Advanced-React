import { useState } from "react";

const UseStateBasics = () => {
    const [name, setName] = useState("Megatron");
    const handleClick = () => {
        if (name === "Megatron") {
            setName("Optimus Prime")
        } else {
            setName("Megatron")
        }
    }

    return (
        <div>
            <h1>useState basic Example</h1><br/>
            <h2>{name}</h2>
            <button className="btn" onClick={handleClick}>Change Name</button>
        </div>
    )
}

export default UseStateBasics;