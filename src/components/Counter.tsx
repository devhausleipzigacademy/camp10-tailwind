import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  function onIncreaseHandler() {
    console.log("In starting", number);
    setNumber((prev) => prev + 1);
    console.log("In middle", number);
    setNumber((prev) => prev + 1);
    console.log("In end", number);
  }
  console.log("outside of onIncreaseHandler", number);

  function onDecreaseHandler() {
    if (number <= 0) {
      return;
    }
    setNumber(number - 1);
  }

  return (
    <div>
      <h1 className="text-5xl">{number}</h1>
      <button
        className="bg-primary py-2 px-6 rounded-md text-white"
        onClick={onIncreaseHandler}
      >
        increase
      </button>
      <button
        className="bg-primary py-2 px-6 rounded-md text-white"
        onClick={onDecreaseHandler}
      >
        decrease
      </button>
    </div>
  );
}

export default Counter;
