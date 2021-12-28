
import {useState} from "react"; 

const GroceryList =({title, status, id, handleDelete})=>{
    return (
<>
<div className="grocery-list">
{title}
<button  id="toggle" onClick={()=> handleDelete(id)}> Mark Done  </button>
</div>
 
</>
    );
};
export default GroceryList; 