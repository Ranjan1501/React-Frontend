import { useState } from "react";
const GroceryInput = ({getData}) => {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleClick = () => {
        // console.log("list:", text)
        getData(text); 
    }
    return (
        <div>
            <input type="text" placeholder="Enter Grocery" onChange={handleChange} />
            <button onClick={handleClick}> Add to list</button>
        </div>
    );
};
export default GroceryInput; 