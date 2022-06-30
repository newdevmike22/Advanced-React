import { useState } from "react";

const UseStateBasics = () => {
    const [text, setText] = useState("Hello World!");
    const handleClick = () => {
        if (text === "Hello World!") {
            setText("Life is beautiful!")
        } else {
            setText("Hello World!")
        }
    }

    return (
     <div>
        <h2>{text}</h2>
        <button className="btn" onClick={handleClick}>
            Change Message
        </button>
     </div>
    )
}

export default UseStateBasics;