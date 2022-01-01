const TableList = ({ title }) => {
  console.log("title", title);
  return (
    <table className="table">
      <tr>
        <td>{title.name}</td>
      </tr>
      <tr>
        <td>{title.age}</td>
      </tr>
      <tr>
        <td>{title.address}</td>
      </tr>
      <tr>
        <td>{title.department}</td>
      </tr>
      <tr>
        <td>{title.photo}</td>
      </tr>
      <tr>
        <td>{title.salary}</td>
      </tr>
    </table>
  );
};

export default TableList;
