import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const changeCounter = (value) => {
    setCount(count + value);
  };
  // if (count > 10) {
  //   return (
  //     <div>
  //       {" "}
  //       <h1>
  //         <i>Counter Reached Maximum</i>
  //       </h1>{" "}
  //     </div>
  //   );
  // }
  const multCounter = () => {
    setCount(count * 2);
  };

  // const subOne = () => {
  //   if(count>0) {
  //   setCount(count - 1);
  //   }
  // };
  return (
    <div className="App">
      <h1>Count Magic </h1>
      <h2>{count}</h2>
      <button onClick={() => changeCounter(1)}>Add </button>
      <button onClick={() => changeCounter(-1)}> Sub </button>
      <button onClick={() => multCounter(2)}> Double </button>
    </div>
  );
}
