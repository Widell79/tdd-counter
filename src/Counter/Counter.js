import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounterValue((prev) => prev + inputValue);
  };

  const subFromCounter = () => {
    setCounterValue((prev) => prev - inputValue);
  };

  return (
    <div>
      <h1>My Counter</h1>
      <h2
        data-testid="counter"
        className={`${counterValue >= 100 ? "green" : ""}${
          counterValue <= -100 ? "red" : ""
        }`}
      >
        {counterValue}
      </h2>
      <button data-testid="substract-btn" onClick={subFromCounter}>
        -
      </button>
      <input
        data-testid="input"
        type="number"
        value={inputValue}
        className="text-center"
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      />
      <button data-testid="add-btn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
};

export default Counter;
