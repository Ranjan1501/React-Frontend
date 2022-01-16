import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const getTodoById = () => {
    setIsLoading(true);
    fetch(`http://localhost:4500/todos/${id}`)
      .then((d) => d.json())
      .then((res) => {
        setTodo(res);
        console.log("res", res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    getTodoById();
  }, []);
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h2>
        {" "}
        {todo.title}- {todo.status ? "Done" : "Not Done "}
      </h2>
    </div>
  );
};
