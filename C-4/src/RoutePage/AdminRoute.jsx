import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Jobs } from "../components/Jobs";
import { Login as AdminLogin } from "../components/AdminLogin";
import { Login as UserLogin } from "../components/ClientLogin";
import { Navbar } from "../components/Navbar";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

export const RoutePage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/adminLogin" element={<AdminLogin />}></Route>
        <Route path="/userLogin" element={<UserLogin />}></Route>
        <Route
          path="jobs"
          element={
            <PrivateRoute>
              <Jobs />
            </PrivateRoute>
          }
        >
          {" "}
        </Route>

        <Route path="*" element={<h1>404 Page Not Found </h1>}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
};
