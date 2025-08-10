import { useState } from "react";
import "./App.css";
import CounterApp from "./components/CounterApp";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetHandler = () => {
    setCount((prevCount) => 0);
  };
  console.log(count);
  return (
    <>
      <CounterApp
        count={count}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        resetHandler={resetHandler}
      ></CounterApp>
    </>
  );
};

export default App;
