import React, { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  return (
    <div>
      <h1 data-testid="header">My Counter</h1>
      <h2 data-testid="counter">{counterValue}</h2>
    </div>
  );
};

export default Counter;
