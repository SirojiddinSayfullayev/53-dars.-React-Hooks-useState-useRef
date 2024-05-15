import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(10);
  
  return (
    <div>
      <button onClick={() => setNumber(number - 1)}>Minus</button>
      <span>{number}</span>{" "}
      <button onClick={() => setNumber(number + 1)}>Pilus</button>
    </div>
  );
}

export default Counter;
