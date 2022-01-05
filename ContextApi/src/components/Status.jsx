import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export const Status = () => {
  const { token, auth } = useContext(AuthContext);

  return (
    <div>{auth ? `Token: ${token}` : "Status: User is not logged in"}</div>
  );
};
