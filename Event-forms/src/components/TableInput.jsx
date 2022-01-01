import { useState, useRef } from "react";
const TableInput = ({ getData }) => {
  const [data, setForm] = useState([]);
  // const [image, setImage] = useState(null);

  const ref = useRef(null);
  const handleChange = (e) => {
    // console.log(ref.current.files);
    let { value, name, type, checked } = e.target;

    value = type === "checkbox" ? checked : value;

    if (e.target.files && e.target.files[0]) {
      setForm(URL.createObjectURL(e.target.files[0]));
    }

    // value = type === "file" ? url : e.target.files[0];
    // if (e.target.files && e.target.files[0]) {
    //   setForm({image: URL.createObjectURL(e.target.files[0])})
    // }

    // image profilepic: URL.createObjectURL(e.target.files[0])

    setForm({ ...data, [name]: value });
  };
  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setForm(URL.createObjectURL(e.target.files[0]));
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details:", data);
    getData(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Enter your Age"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Enter your Address"
          onChange={handleChange}
        />
        <br />
        <select
          type="text"
          name="department"
          placeholder="Select Department"
          onChange={handleChange}
        >
          <option> Development</option>
          <option> Human Resources</option>
          <option> Marketing</option>
          <option> Accounts</option>
          <option> Admin </option>
        </select>
        <br />
        <input
          type="number"
          name="salary"
          placeholder="Enter your Salary"
          onChange={handleChange}
        />
        <br />
        <label>
          Marital Status:
          <input
            type="checkbox"
            name="marital status"
            onChange={handleChange}
          />
        </label>
        <br />
        <div className="image">
          <input ref={ref} type="file" name="photo" onChange={handleChange} />
          <img id="photo" src={data} alt="profile_pic" />
        </div>

        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TableInput;
