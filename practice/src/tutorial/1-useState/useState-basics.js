import { useState } from "react";

const UseStateBasics = () => {
    const [person, setPerson] = useState({
        name: "Larry",
        age: 42,
        job: "Web Developer",
        message: "Life is good!",
    });

    const [name, setName] = useState("Larry");
    const [age, setAge] = useState(42);
    const [job, setJob] = useState("Web Developer");
    const [message, setMessage] = useState("Life is good!");

    const changeMessage = () => {
        //setPerson({...person, message: "I love to code!"})
        setMessage("I love to code!");
    }

    return (
     <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{job}</h2>
        <h2>{message}</h2>
        <button className="btn" onClick={changeMessage}>
            Change Message
        </button>
     </div>
    )
}

export default UseStateBasics;