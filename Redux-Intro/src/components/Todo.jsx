import "antd/dist/antd.css";
import { Input, Button } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../store/action";

export const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  return (
    <div>
      {/* <h1>Todo:{todo}</h1> */}
      <Input
        type="text"
        placeholder="Add todos "
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></Input>
      <br />
      <Button
        onClick={() => {
          dispatch(addTodo(text));
        }}
      >
        Add Todo
      </Button>

      {todo.map((e) => (
        <div> {e} </div>
      ))}
    </div>
  );
};
