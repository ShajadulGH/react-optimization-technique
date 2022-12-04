import { useEffect } from "react";
import React, { useState } from "react";
const List = (props) => {
  const { forList } = props;
  const [state, setState] = useState([]);
  useEffect(() => {
    console.log("List Running");
    setState(forList());
  }, [forList]);
  return state.map((item) => <div key={item}>{item}</div>);
};
export default List;
