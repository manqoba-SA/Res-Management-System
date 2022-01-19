import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
function AdminNav() {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/admin/login");
    } catch (err) {
      console.log("cannot login");
    }
  };
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-2 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Gaugelo
        </a>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" onClick={handleLogOut}>
              Sign out
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default AdminNav;
