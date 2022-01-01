import { nanoid } from "nanoid";
import { useState } from "react";
import TableInput from "./TableInput";
import TableList from "./TableList";
const Table = () => {
  const [table, setTable] = useState([]);
  // const [image, setImage] = useState(null);
  console.log(table);
  const handleChange = (data) => {
    console.log("Received on Parent", data);
    const payload = {
      // title: table,
      // status: false,
      data,
      id: nanoid(8),
    };
    setTable([...table, payload]);
  };
  return (
    <div className="Container">
      <TableInput className="tableInput" getData={handleChange} />
      {/* <div>{table} </div> */}
      {table.map((e) => (
        // <div className="tableInput">
        //   <TableList key={e.id} title={e.data} />
        // </div>
        <TableList className="tableList" key={e.id} title={e.data} />
      ))}
    </div>
  );
};

export default Table;
