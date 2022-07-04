import { useState, useEffect } from "react";

const UseEffect = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log("useEffect");
        window.addEventListener("resize", checkSize);
        //return () => {
        //   console.log("Cleanup");
        //   window.removeEventListener("resize", checkSize);
        //};
    }, []);
    console.log("render");
    return (
        <div>
            <h1>Window</h1>
            <h2>{size} PX</h2>
        </div>
    )
}

export default UseEffect;