import { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);
    const reset = () => {
        setValue(0)
    }

    const complexIncrease = () => {
        setTimeout(() => {
            //setValue(value + 1);
            setValue((prevState) => {
                return prevState + 1;
            })
        }, 2000)
    }

    return (
        <>
            <section className="counter">
                <h2>Regular Counter</h2>
                <h1>{value}</h1>
                <button className="btn" onClick={() => setValue(value - 1)}>DECREASE</button>
                <button className="btn" onClick={reset}>RESET</button>
                <button className="btn" onClick={() => setValue(value + 1)}>INCREASE</button>
            </section>
            <section>
                <h2>Complex Counter</h2>
                <h1>{value}</h1>
                <button className="btn" onClick={complexIncrease}>INCREASE LATER</button>
            </section>
        </>
    )
}

export default Counter;