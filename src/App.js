import React, { useState, useMemo, useEffect, useCallback } from "react";
import Input from "./Components/Input";
import "./App.css";
import List from "./Components/List";
import Msg from "./Components/Msg";
function App() {
  const [inputValue, setInputValue] = useState(0);
  const [dark, setDark] = useState(false);

  const slowFunction = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };
  const forList = useCallback(() => {
    return [inputValue, inputValue + 1, inputValue + 2];
  }, [inputValue]);
  const multyplay = useMemo(() => {
    return slowFunction(inputValue);
  }, [inputValue]);

  const inputHandler = (event) => {
    setInputValue(parseInt(event.target.value));
  };
  const darkHandle = () => {
    setDark((prevDark) => !prevDark);
  };
  const stylesValue = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("Color Changed");
  }, [stylesValue]);
  return (
    <div className="App">
      <div style={stylesValue}>
        <h3>React Optimization Technique</h3>
        <Input onChange={inputHandler} />
        <button onClick={darkHandle}>Change Color</button>
        <div style={stylesValue}>{multyplay}</div>
        <hr></hr>
        <List inputValue={inputValue} forList={forList}></List>
        <Msg />
      </div>
    </div>
  );
}

export default App;
