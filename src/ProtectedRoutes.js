import { Outlet, Route, Routes } from "react-router-dom";
import StudentDashboard from "./pages/Dashbord/Student/StudentDashboard";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

function ProtectedRoutes() {
  let { user } = useUserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRoutes;
