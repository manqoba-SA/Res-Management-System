import { useEffect } from "react";
import AdminNav from "./AdminNav";
import Dashboard from "./components/Dashboard";
import SideNav from "./SideNav";
import { useUserAuth } from "../../../context/UserAuthContext";
import "./styles.css";
import { Navigate } from "react-router-dom";
import { firestore } from "../../../firebase";
import { useState } from "react";
function AdminDashboard() {
  const [isAdmin, setIsAdmin] = useState(true);
  const { user } = useUserAuth();

  const fetchData = async () => {
    if (user.uid) {
      const usersRef = await firestore.collection("users").doc(user.uid);
      usersRef.get().then((doc) => {
        setIsAdmin(doc.data().isAdmin);
      });
    }
  };
  useEffect(() => {
    fetchData();
  }, [user.uid]);

  const [userDetails, setUserDetails] = useState("");
  useEffect(() => {
    if (user.uid) {
      const usersRef = firestore.collection("users").doc(user.uid);
      usersRef.onSnapshot((doc) => {
        const user = { id: doc.id, ...doc.data() };
        setUserDetails(user);
      });
    }
  }, []);

  if (isAdmin === false) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <AdminNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <Dashboard
            firstName={userDetails?.firstName}
            surName={userDetails?.surName}
            role={userDetails?.role}
            email={userDetails?.email}
            cellNumber={userDetails?.cellNumber}
            gender={userDetails?.gender}
          />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
