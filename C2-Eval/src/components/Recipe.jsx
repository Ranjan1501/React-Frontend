import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import RecipeInput from "./RecipeInput";
import RecipeList from "./RecipeList";
const Recipe = () => {
  const [food, setFood] = useState([]);
  const [text, setText] = useState("");
  console.log(food);


  const addFood = () => {
    const payload = {
      text,
      id: nanoid(8),
    };
    fetch("http://localhost:4500/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then(() => {
      getFood();
    });
  };
  const getFood = () => {
    fetch("http://localhost:4500/foods")
      .then((res) => res.json())
      .then((res) => {
        setFood(res);
      });
  };

  const foodChange = (data) => {
    console.log("Received on Parent:", data);
    const payload = {
      data,
      id: nanoid(8),
    };
    setFood([...food, payload]);
  };
  return (
    <div className="container">
      <RecipeInput className="RecipeInput" getData={foodChange} />
      {food.map((e) => (
        <RecipeList className="RecipeList" key={e.id} title={e.data} />
      ))}
    </div>
  );
};

export default Recipe;
