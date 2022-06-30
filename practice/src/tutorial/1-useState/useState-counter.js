import { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);
    const reset = () => {
        setValue(0)
    }
    return (
        <>
            <section className="counter">
                <h2>Counter</h2>
                <h1>{value}</h1>
                <button className="btn" onClick={() => setValue(value - 1)}>DECREASE</button>
                <button className="btn" onClick={reset}>RESET</button>
                <button className="btn" onClick={() => setValue(value + 1)}>INCREASE</button>
            </section>
        </>
    )
}

export default Counter;