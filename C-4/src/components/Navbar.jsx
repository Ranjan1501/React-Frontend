import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="Link">
        {" "}
        Dashboard
      </Link>
      <Link to="/adminLogin" className="Link">
        {" "}
        AdminLogin
      </Link>
      <Link to="/userLogin" className="Link">
        {" "}
        UserLogin
      </Link>
      <Link to="/jobs" className="Link">
        {" "}
        Jobs
      </Link>
    </div>
  );
};
