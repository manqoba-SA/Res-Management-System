import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../../context/UserAuthContext";
import { firestore } from "../../../../firebase";

function StudentNavbar(props) {
  const { user, logOut } = useUserAuth();
  const [userStatus, setUserStatus] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [user.uid]);

  const fetchData = () => {
    const usersRef = firestore.collection("users").doc(user.uid);
    usersRef.get().then((doc) => {
      const status = doc.data().status;
      console.log(status);
      setUserStatus(status);
    });
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {}
  };
  return (
    <>
      <header>
        <div className="px-3 py-2 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                <svg
                  className="bi me-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  {/* <use xlink:href="#bootstrap"></use> */}
                </svg>
              </a>

              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small dashboard-nav">
                <li>
                  <Link
                    to="/student-dashboard"
                    className="nav-link text-secondary"
                  >
                    <i
                      className="fa fa-user-circle-o text-center bi d-block mb-1"
                      aria-hidden="true"
                    ></i>
                    Account
                  </Link>
                </li>
                {userStatus === "student" ? (
                  <>
                    <li>
                      <Link
                        to="/student-dashboard/notifications"
                        className="nav-link text-white"
                      >
                        <i
                          className="fa fa-bell-o bi d-block text-center mb-1"
                          aria-hidden="true"
                        ></i>
                        Notifications
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/student-dashboard/lease"
                        className="nav-link text-white"
                      >
                        <i
                          className="fa fa-file-text-o bi d-block text-center mb-1"
                          aria-hidden="true"
                        ></i>
                        Lease
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/student-dashboard/invoice"
                        className="nav-link text-white"
                      >
                        <i
                          className="fa fa-money bi d-block text-center mb-1"
                          aria-hidden="true"
                        ></i>
                        Invoice
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/student-dashboard/maintenance"
                        className="nav-link text-white"
                      >
                        <i
                          className="fa fa-key bi d-block text-center mb-1"
                          aria-hidden="true"
                        ></i>
                        Maintanance
                      </Link>
                    </li>
                  </>
                ) : (
                  ""
                )}

                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline-secondary"
                  >
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default StudentNavbar;
