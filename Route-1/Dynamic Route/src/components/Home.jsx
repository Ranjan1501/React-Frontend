import { Link } from "react-router-dom";
import "./Home.css";
export const Home = () => {
  return (
    <div className="Home">
      <Link className="Link" to="/">
        Home
      </Link>
      <Link className="Link" to="/products">
        Products
      </Link>
      <Link className="Link" to="/Login">
        Login
      </Link>
      <Link className="Link" to="/Register">
        Register
      </Link>
      <Link className="Link" to="/contact">
        ContactUs
      </Link>
    </div>
  );
};
