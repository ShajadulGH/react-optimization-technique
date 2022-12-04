import React, { useState, useMemo, useEffect } from "react";
import Input from "./Components/Input";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [dark, setDark] = useState(false);

  const slowFunction = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };
  const multyplay = useMemo(() => {
    return slowFunction(inputValue);
  }, [inputValue]);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };
  const darkHandle = () => {
    setDark((prevDark) => !prevDark);
  };
  const styles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("Color Changed");
  }, [styles]);
  return (
    <div className="App">
      <h3>React Optimization Technique</h3>
      <Input onChange={inputHandler} />
      <button onClick={darkHandle}>Change Color</button>
      <div style={styles}>{multyplay}</div>
    </div>
  );
}

export default App;
