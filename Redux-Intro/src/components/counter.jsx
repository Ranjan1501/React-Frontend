import "antd/dist/antd.css";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { incCount, decCount } from "../store/action";

export const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <Button
        onClick={() => {
          dispatch(incCount(1));
        }}
      >
        {" "}
        ADD
      </Button>
      <Button
        onClick={() => {
          dispatch(decCount(1));
        }}
      >
        DEC
      </Button>
    </div>
  );
};
