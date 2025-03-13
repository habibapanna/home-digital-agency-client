import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";


const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // If user is not an admin, redirect to home
  if (!user || user.role !== "admin") {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
