import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { Login } from "./Login";
import { Welcome } from "./Welcome";
import { Dashboard } from "./Dashboard";
import { Setting } from "../Pages/Setting";
import { Navbar } from "./Navbar";

export const RoutePage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Welcome />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/setting"
          element={
            <PrivateRoute>
              <Setting />
            </PrivateRoute>
          }
        ></Route>
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
