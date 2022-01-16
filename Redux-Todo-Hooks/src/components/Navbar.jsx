import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="Link" to="/">
        {" "}
        Home
      </Link>
    </div>
  );
};
