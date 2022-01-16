import { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
import { nanoid } from "nanoid";
import "./Navbar.css";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
  deleteTodo,
} from "../Todo/action";
import { useParams } from "react-router-dom";

export const Todo = () => {
  const { id } = useParams();
  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);
  const { todo, loading, error } = useSelector(
    (state) => ({
      loading: state.loading,
      error: state.error,
      todo: state.todo,
    }),
    function (prev, current) {
      if (prev.loading === current.loading && prev.error === current.error) {
        return true;
      }
      return false;
    }
  );
  const dispatch = useDispatch();

  const removeTodo = () => {};
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      dispatch(getTodoLoading()); // promise async await
      const data = await fetch("http://localhost:4500/todos").then((res) =>
        res.json()
      );
      dispatch(getTodoSuccess(data));
    } catch (err) {
      dispatch(getTodoError(err));
    }
  }
  const postData = () => {
    dispatch(addTodoLoading());
    fetch("http://localhost:4500/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: true,
        title: text,
        id: nanoid(8),
      }),
    })
      .then((res) => res.json())
      .then((d) => {
        // success
        dispatch(addTodoSuccess(d));
        dispatch(getData());
      })
      .catch((err) => {
        // error
        dispatch(addTodoError);
      });
  };

  const updateData = () => {
    // dispatch(addTodoLoading());
    fetch(`http://localhost:4500/todos/${id}`, {
      method: "UPDATE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: true,
        title: text,

        // id: nanoid(8),
      }),
    })
      .then((res) => res.json())
      .then((d) => {
        // success
        dispatch(addTodoSuccess(d));
        dispatch(getData());
      })
      .catch((err) => {
        // error
        dispatch(addTodoError);
      });
  };

  // Delete
  const deleteData = () => {
    // dispatch(addTodoLoading());
    fetch(`http://localhost:4500/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => {
        // success
        dispatch(addTodoSuccess(d));
      })
      .catch((err) => {
        // error
        dispatch(addTodoError);
      });
  };

  return loading ? (
    <div>loading..</div>
  ) : error ? (
    <div>Something went wrong...</div>
  ) : (
    <div className="todo">
      <Input
        type="text"
        placeholder="Add todos "
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></Input>
      <br />
      <Button
        onClick={() => {
          postData();
        }}
      >
        Add Todo
      </Button>

      {todo.map((e) => (
        <div key={e.id}>
          {" "}
          {e.title}- {status ? "Done" : " Not Done"}
          <Button onClick={() => setStatus(!status)}>Toggle</Button>
          <Button onClick={() => dispatch(deleteTodo(e.id))}> Delete</Button>
        </div>
      ))}
    </div>
  );
};
