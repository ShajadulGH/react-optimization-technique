import { useEffect } from "react";
import React, { useState } from "react";
export default function List({ forList }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    console.log("List Running");
    setState(forList());
  }, [forList]);
  return state.map((item) => <div key={item}>{item}</div>);
}
