import React, { useState } from "react";

function CounterComponent() {
  const [count, setcount] = useState(0);

  const increment = () => setcount(count + 1);
  const decrement = () => {
    if (count > 0) setcount(count - 1);
  };

  const reset = () => {
    if (count > 0) setcount(0);
  };

  return (
    <>
      <h2>React Project</h2>

      <div className="Count-Container">
        <div className="Display-count">
          <p className="Display-value">{count}</p>
        </div>

        <button className="Increment" onClick={increment}>
          Increment
        </button>
        <button
          className="Decrement"
          onClick={decrement}
          disabled={count === 0}
        >
          Decrement
        </button>
        <button className="Reset" onClick={reset} disabled={count === 0}>
          Reset
        </button>
      </div>
    </>
  );
}

export default CounterComponent;
