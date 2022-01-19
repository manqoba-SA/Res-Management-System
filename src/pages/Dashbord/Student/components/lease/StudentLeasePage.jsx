import StudentNavbar from "../StudentNavbar";
import { useUserAuth } from "../../../../../context/UserAuthContext";
import { firestore } from "../../../../../firebase";
import { useEffect, useState } from "react";
function StudentLeasePage() {
  const { user } = useUserAuth();
  const [student, setStudent] = useState("");
  useEffect(() => {
    const recentRef = firestore.collection("users").doc(user.uid);
    recentRef.onSnapshot((doc) => {
      const student = { id: doc.id, ...doc.data() };
      setStudent(student);
    });
  }, [user.uid]);
  return (
    <>
      <div className="container-sm animate__animated animate__fadeIn animate__faster">
        <StudentNavbar />
        <div className="jumbotron bg-light rounded p-5 border">
          <div className="container">
            <div className="row vertical-align-middle mt-5 mb-5">
              <div className="col-md-6">
                <h1>Lease</h1>
                <p>Download your lease document here</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row gutters-sm mt-3">
          <div class="col-sm-6 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h4>Personal Info</h4>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">First Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {student?.firstName}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Surname</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{student?.surName}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Gender</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{student?.gender}</div>
                </div>

                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Nationality</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {student?.nationality}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Identifications Number</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{student?.idNumber}</div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div class="col-sm-6 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h4>Lease Aggrement</h4>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Lease</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <a
                      href={student?.leaseDoc}
                      className="btn btn-primary"
                      download
                    >
                      Dowload lease
                    </a>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Rules</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <a
                      href={student?.leaseDoc}
                      className="btn btn-primary"
                      download
                    >
                      Accomodation Rules
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentLeasePage;
