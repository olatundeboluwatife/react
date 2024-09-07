import React, { useState } from 'react';
import '../Asset/Style.css';

const Counter = () => {
    const [Count, setCount] = useState(10);

    const handleAdd = () => {
        setCount(Count + 1);
    }

    const handleSub = () => {
        if (Count > 0) {
            setCount(Count - 1);
        }
    }

    const handleMult = () => {
        setCount(Count * 2);
    }

    const handleDiv = () => {
        setCount(Count / 2);
    
    }

    return (
        <div className="counter-container">
            <div className="counter-display">
                {Count}
            </div>
            <div className="button-container">
                <button className="counter-button add" onClick={handleAdd}>Add</button>
                <button className="counter-button sub" onClick={handleSub}>Sub</button>
                <button className="counter-button mult" onClick={handleMult}>Mult</button>
                <button className="counter-button div" onClick={handleDiv}>Div</button>
            </div>
        </div>
    );
}

export default Counter;
