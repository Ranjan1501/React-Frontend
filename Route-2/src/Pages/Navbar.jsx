import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="Link" to="/">
        {" "}
        Welcome
      </Link>
      <Link className="Link" to="/login">
        {" "}
        Login
      </Link>
      <Link className="Link" to="/dashboard">
        {" "}
        Dashboard
      </Link>
      <Link className="Link" to="/setting">
        {" "}
        Setting
      </Link>
    </div>
  );
};
