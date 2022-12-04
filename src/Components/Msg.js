import React from "react";
const Msg = () => {
  console.log("Msg is running!!!");

  return <p>Using useMemo & useCallBack!</p>;
};
export default React.memo(Msg);
