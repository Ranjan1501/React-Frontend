import { Routes, Route } from "react-router-dom";
// import { PrivateRoute } from "./PrivateContext";
// import { Login } from "./Login";
import { Todo } from "../components/Todo";
import { Navbar } from "../components/Navbar";
import { TodoDetails } from "../components/TodoDetails";

export const RoutePage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="/todos/:id" element={<TodoDetails />}></Route>
        <Route
          path="*"
          element={
            <img
              src="https://drudesk.com/sites/default/files/styles/blog_page_header_1088x520/public/2018-02/404-error-page-not-found.jpg?itok=YW-iShwf"
              alt="Page not found"
              width="1000px"
              height="550px"
              margin="50px"
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};
