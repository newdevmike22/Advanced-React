import { useState } from "react";

const UseStateBasics = () => {
    const [person, setPerson] = useState({
        name: "Larry",
        age: 42,
        job: "Web Developer",
        message: "Life is good!",
    });
    const changeMessage = () => {
        setPerson({...person, message: "I love to code!"})
    }

    return (
     <div>
        <h2>{person.name}</h2>
        <h2>{person.age}</h2>
        <h2>{person.job}</h2>
        <h2>{person.message}</h2>
        <button className="btn" onClick={changeMessage}>
            Change Message
        </button>
     </div>
    )
}

export default UseStateBasics;