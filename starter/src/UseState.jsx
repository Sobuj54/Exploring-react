import { useState } from "react";

const UseState = () => {
  const [val, setVal] = useState(10);

  const addValue = () => {
    if (val < 10) setVal(val + 1);
  };

  const subValue = () => {
    if (val > 0) setVal(val - 1);
  };

  return (
    <>
      <h1>value {val}</h1>
      <button onClick={addValue}>add value</button>
      <button onClick={subValue}>sub value</button>
    </>
  );
};

export default UseState;
