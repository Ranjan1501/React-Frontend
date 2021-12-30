import { useState } from "react";
import { useEffect } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCounter((prev) => {
        if (prev === 60) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
    // clean up function
    return () => {
      console.log("clean up set interval");
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      {" "}
      <h3> Timer in Second:{counter}</h3>{" "}
    </div>
  );
};

export default Timer;
