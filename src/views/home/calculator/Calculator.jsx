import React, { useState, useRef } from "react";

export default function Calculator() {
  const [command, setCommand] = useState("amal");
  const [result, setResult] = useState(0);

    const num1Ref = useRef()
    const num2Ref = useRef()

  const handleClick = (amal) => {
    setCommand(amal);

    const num1 = (num1Ref.current.value);
    const num2 = (num2Ref.current.value);

    switch (amal) {
      case "+":
        setResult(Number(num1) + Number(num2));
        return;
      case "-":
        setResult(Number(num1) - Number(num2));
        return;
      case "*":
        setResult(Number(num1) * Number(num2));
        return;
      case "/":
        setResult(Number(num1) / Number(num2));
        return;
      default:
        setResult(Number(num1) + Number(num2));
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input ref={num1Ref} type="number" />
      <span>{command}</span>
      <input ref={num2Ref} type="number" />
      <span>=</span>
      <span>{result}</span>
      <br />
      <hr />
      <button onClick={() => handleClick("+")}>+</button>
      <button onClick={() => handleClick("-")}>-</button>
      <button onClick={() => handleClick("*")}>*</button>
      <button onClick={() => handleClick("/")}>/</button>
    </div>
  );
}
