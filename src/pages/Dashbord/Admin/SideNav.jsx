import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../../firebase";

function SideNav() {
  const [applications, setapplications] = useState([]);
  useEffect(() => {
    const applicationsRef = firestore.collection("applications").limit(4);
    // .orderBy("timeCreated", "desc");
    applicationsRef.onSnapshot(({ docs }) => {
      const applications = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Data:", applications);
      setapplications(applications);
    });
  }, []);
  return (
    <>
      {/* <div className="container-fluid">
        <div className="row"> */}
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column admin-dashboard-links">
            <li className="nav-item">
              <Link
                to="/admin-dashboard"
                className="nav-link active"
                aria-current="page"
              >
                <img
                  src="https://img.icons8.com/ios/50/000000/guest-male.png"
                  width="25"
                  height="25"
                />
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/admin-dashboard/students"
                className="nav-link"
                href="#"
              >
                <img
                  src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-users-cv-resume-flatart-icons-outline-flatarticons.png"
                  width="25"
                  height="25"
                />
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/admin-dashboard/applications"
                className="nav-link"
                href="#"
              >
                <img
                  src="https://img.icons8.com/external-line-icons-vinzence-studio/64/000000/external-agent-user-avatar-line-icons-vinzence-studio-2.png"
                  width="25"
                  height="25"
                />
                Applications
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/admin-dashboard/notification"
                className="nav-link"
                href="#"
              >
                <img
                  src="https://img.icons8.com/ios/50/000000/appointment-reminders--v1.png"
                  width="25"
                  height="25"
                />
                Notification
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/admin-dashboard/maintenance"
                className="nav-link"
                href="#"
              >
                <img
                  src="https://img.icons8.com/ios/50/000000/key.png"
                  width="25"
                  height="25"
                />
                Maintanance Request
              </Link>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Recent Applications</span>
            <a
              className="link-secondary"
              href="#"
              aria-label="Add a new report"
            ></a>
          </h6>

          <ul className="nav flex-column mb-2 admin-dashboard-links">
            {applications.map((application) => (
              <li className="nav-item">
                <Link
                  to={`/admin-dashboard/applications/${application.id}`}
                  className="nav-link"
                  href="#"
                >
                  <img src="https://img.icons8.com/doodle/48/000000/document.png" />
                  {application.firstName} {application.surName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* </div>
          </div> */}
    </>
  );
}

export default SideNav;
