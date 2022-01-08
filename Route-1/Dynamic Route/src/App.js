import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { ProductsPage } from "./components/ProductsPage";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ContactUs } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductsPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route
          path="*"
          element={
            <img
              src="https://drudesk.com/sites/default/files/styles/blog_page_header_1088x520/public/2018-02/404-error-page-not-found.jpg?itok=YW-iShwf"
              alt="Page not found"
              width="1000px" height="550px" margin="50px" 
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
