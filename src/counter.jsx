import React, {useState} from "react";
import './counter.css';

function counter() {
    const [count,setCount] = useState(0);

    const increament = () => {
        setCount(count + 1);
    }

    const decreament = () => {
        setCount(count - 1);

    }

    const reset =  () => {
        setCount(0);
    }

    return (
        <>  
        <div className="counter_container">
        <h1>Counter App</h1>

        <p className="count_display">{count}</p>
        <div className="btn_container">
            <button className="i_btn" onClick={() => decreament()}>Decreament</button>
            <button className="r_btn" onClick={() => reset()}>Reset</button>
            <button className="d_btn" onClick={() => increament()}>Increament</button>

            f
        </div>

        </div>
   





        </>



    );



}

export default counter;