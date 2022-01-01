import { nanoid } from "nanoid";
import { useState } from "react";
import TableInput from "./TableInput";
import TableList from "./TableList";
const Table = () => {
  const [table, setTable] = useState([]);

  console.log(table);
  const handleChange = (data) => {
    console.log("Received on Parent", data);
    const payload = {
      data,
      id: nanoid(8),
    };
    setTable([...table, payload]);
  };
  return (
    <div className="Container">
      <TableInput className="tableInput" getData={handleChange} />
      {table.map((e) => (
        <TableList className="tableList" key={e.id} title={e.data} />
      ))}
    </div>
  );
};

export default Table;
