import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";
import { firestore } from "../../../firebase";
import MustApply from "./components/dashboard/MustApply";
import StudentNavbar from "./components/StudentNavbar";
import "./studentDashboard.css";
function StudentDashboard() {
  const { user, logOut, userId } = useUserAuth();
  const [userStatus, setUserStatus] = useState("");
  const [studentName, setStudentName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  console.log(userId);
  useEffect(() => {
    fetchData();
  }, [user.uid]);

  const fetchData = () => {
    const usersRef = firestore.collection("users").doc(user.uid);
    usersRef.get().then((doc) => {
      const status = doc.data().status;
      const studentName = doc.data().firstName;
      const studentSurname = doc.data().surName;
      const roomNumber = doc.data().roomNumber ?? "";
      console.log(status);
      setUserStatus(status);
      setStudentName(studentName + " " + studentSurname);
      setRoomNumber(roomNumber);
    });
  };

  return (
    <>
      <div className="container-sm animate__animated animate__fadeIn animate__faster">
        <StudentNavbar />

        <div className="jumbotron bg-light rounded p-5 border">
          <div className="container">
            <div className="row vertical-align-middle mt-5 mb-5">
              <div className="col-md-6">
                {userStatus === "student" ? (
                  <>
                    <h4>Hello {studentName}</h4>
                    <h5>Room: {roomNumber}</h5>{" "}
                  </>
                ) : (
                  <>
                    <h4>Hello {user.email}</h4>
                    <h4>
                      Status:
                      {userStatus === "mustApply"
                        ? " Waiting student application"
                        : userStatus === "appliedWaiting"
                        ? " Student applied, Waiting for response"
                        : userStatus === "rejected-space"
                        ? "Application rejected due to space"
                        : userStatus === "rejected-documents"
                        ? "Application has errors in documents"
                        : userStatus === "rejected-reason"
                        ? "Application rejected for some reasons, check your email"
                        : ""}
                    </h4>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 mb-4">
          {userStatus === "mustApply" ? <MustApply /> : ""}
          {userStatus === "appliedWaiting" ? (
            <div>Applied now waiting</div>
          ) : (
            ""
          )}

          {userStatus === "rejected-space" ? (
            <>
              <div className="container">
                <div className="row vertical-align-middle mt-5 mb-5">
                  <div className="col-md-6">
                    <h4>
                      Your application revoked due to full building caparcity,
                      Sorry applications will be opened when theres a space then
                      you can reaply
                    </h4>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {userStatus === "rejected-documents" ? (
            <>
              <div className="container">
                <div className="row vertical-align-middle mt-5 mb-5">
                  <div className="col-md-6">
                    <h4>
                      Your application revoked due to error in documents. Please
                      upload the required documents
                    </h4>
                    <div className="form-control mb-3">
                      <h4>Upload Document</h4>
                      <div className=" mb-3">
                        <input
                          type="file"
                          // onChange={props.paymentProof}
                          className="form-control"
                          id="floatingInput"
                          placeholder="Proof of bursary or payslip if you are cash paying"
                        />
                        <label for="floatingInput">
                          If more than two documents are required you can marge
                          them in one pdf or picture
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {userStatus === "rejected-reason" ? (
            <>
              <div className="container">
                <div className="row vertical-align-middle mt-5 mb-5">
                  <div className="col-md-6">
                    <h4>
                      Please check on your email!, you will get the guidelines
                      based on your accomodation application
                    </h4>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {userStatus === "accepted-lease" ? (
            <>
              <div className="container">
                <div className="row vertical-align-middle mt-5 mb-5">
                  <div className="col-md-6">
                    <h4>
                      You have been accepted to stay in our accomodation, all
                      left with is to sign a lease agreement
                    </h4>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {userStatus === "student" ? (
            <div className="container full-page mt-5" id="resources">
              <div className="text-center mb-5">
                <h2>Resources</h2>
              </div>
              <div className="row d-flex justify-content-between">
                <div className="col-md-3 mb-3">
                  <div className="card text-center">
                    <img
                      className="card-img-top"
                      src="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/images/carousel/03.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Notifications</h4>
                      <Link
                        to="/student-dashboard/notifications"
                        className="btn btn-primary custom-button"
                      >
                        Explore more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="card text-center">
                    <img
                      className="card-img-top"
                      src="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/images/carousel/06.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Lease</h4>
                      <Link
                        to="/student-dashboard/lease"
                        className="btn btn-primary custom-button"
                      >
                        Explore more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="card text-center">
                    <img
                      className="card-img-top"
                      src="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/images/carousel/10.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Invoice</h4>
                      <Link
                        to="/student-dashboard/invoice"
                        className="btn btn-primary custom-button"
                      >
                        Explore more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="card text-center">
                    <img
                      className="card-img-top"
                      src="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/images/carousel/10.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Maintenance Request</h4>
                      <Link
                        to="/student-dashboard/maintenance"
                        className="btn btn-primary custom-button"
                      >
                        Explore more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="student-footer">
            <p className="text-muted">
              Contact 0643 32 6072 for any assistance with your dashboard
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
