import {useState} from "react"; 
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";
import {nanoid} from "nanoid";
const Grocery =()=>{
    const [list, setList]=  useState([]); 
    const handleClick = (data) => {
        console.log("Received Data in Parent:", data);
        const payload={   // instead of send data as Stirng send data as object 
            title:data,
            status:false,
            id:nanoid(8),
        }
        setList([...list, payload]);  // Add the previous list to the current
    };
    const handleDelete=(id)=>{
      
       setList(list.filter((e)=> e.id!==id)); 
    }
    return (
<>
<GroceryInput getData={handleClick} />
{list.map((e)=> (
    <div className="container">
    <GroceryList key={e.id} {...e}  handleDelete={handleDelete} />  
    </div>
))}
</>
    );
};
export default Grocery; 