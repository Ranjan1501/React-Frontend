import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="Link" to="/">
        {" "}
        Home
      </Link>
      <Link className="Link" to="/login">
        {" "}
        Login
      </Link>
    </div>
  );
};
