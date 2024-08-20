import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute() {
  let { currentUser } = useAuth();
  let { path } = useParams();

  console.log(path);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
