import StudentNavbar from "../StudentNavbar";
import { useUserAuth } from "../../../../../context/UserAuthContext";
import { firestore } from "../../../../../firebase";
import { useEffect, useState } from "react";
function StudentInvoicePage() {
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
                <h1>Invoice</h1>
                <p>Download your invoice document here</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row gutters-sm mt-3">
          <div class="col-sm-6 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h4>Payment Details</h4>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Student Type</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {student?.studentType}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Bursary</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {student?.bursaryName}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Person responsible</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {student?.paymentOption}
                  </div>
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
                    <h6 class="mb-0">Invoice</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <a
                      href={student?.invoiceDoc}
                      className="btn btn-primary"
                      download
                    >
                      Dowload Invoice
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

export default StudentInvoicePage;
