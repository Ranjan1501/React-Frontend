import {useState} from "react"; 
import './App.css';
import Grocery from "./components/Grocery"; 

function App() {
  return (
  
    <div className="App">
      {<h1> Grocery Management System</h1>}
      <Grocery /> 
    </div>
  );
}

export default App;
