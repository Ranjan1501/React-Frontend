import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Table from "./components/Table";
import TableInput from "./components/TableInput";
import TableList from "./components/TableList";
function App() {
  return (
    <div className="App">
      <h2>User Details Forms</h2>
      <Table />
    </div>
  );
}

export default App;
