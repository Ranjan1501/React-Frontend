import { useState, useRef } from "react";

const RecipeInput = ({ getData }) => {
  const [food, setFood] = useState([]);
  const ref = useRef(null);
  const foodChange = (e) => {
    let { name, value, type, files } = e.target;

    setFood({ ...food, [name]: value });
  };
  const foodSubmit = (e) => {
    e.preventDefault();
    console.log("food:", food);
    getData(food);
  };

  return (
    <div>
      <form onSubmit={foodSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Food Title"
          onChange={foodChange}
        />
        <br />
        <input
          type="text"
          name="ingredient"
          placeholder="Enter Food Ingredient"
          onChange={foodChange}
        />
        <br />
        <input
          type="number"
          name="time"
          placeholder="Enter  Food Timing"
          onChange={foodChange}
        />
        <br />
        <input type="file" ref={ref} name="image" onChange={foodChange} />

        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
};

export default RecipeInput;
