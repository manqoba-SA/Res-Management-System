import AdminNav from "../../AdminNav";
import SideNav from "../../SideNav";
import image from "../../../../../images/check.png";
import PersonalInfo from "../applications/child/PersonalInfo";
import ContactInfo from "../applications/child/ContactInfo";
import SchoolInfo from "../applications/child/SchoolInfo";
import AccomodationInfo from "../applications/child/AccomodationInfo";
import PaymentInfo from "../applications/child/PaymentInfo";
import { Button, Col, Toast, Container, Row, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../../../../firebase";
import { storage } from "../../../../../firebase";

function StudentView() {
  const { id } = useParams();
  const [student, setStudent] = useState("");
  useEffect(() => {
    const recentRef = firestore.collection("users").doc(id);
    recentRef.onSnapshot((doc) => {
      const student = { id: doc.id, ...doc.data() };
      setStudent(student);
    });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [roomNumber, setRoomNumber] = useState("");
  const [status, setStatus] = useState("");
  const [leaseDoc, setLeaseDoc] = useState("");
  const [invoiceDoc, setInvoiceDoc] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [hasError, SetHasError] = useState(false);

  const saveFile = async (file) => {
    const storageRef = storage.ref(
      `/documents/${student?.firstName + student?.surName}/${Date.now()}`
    );
    const fileRef = storageRef.child(file.name);
    const snapshot = await fileRef.put(file);
    const url = await snapshot.ref.getDownloadURL();
    console.log("Saved pic", url);
    return url;
  };
  console.log(leaseDoc);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const usersRef = firestore.collection("users");
      const postData = {
        roomNumber: roomNumber ? roomNumber : student?.roomNumber,
        status: status ? status : student?.status,
        leaseDoc: leaseDoc ? leaseDoc : student?.leaseDoc,
        invoiceDoc: invoiceDoc ? invoiceDoc : student?.invoiceDoc,
      };
      if (leaseDoc !== "") {
        postData.leaseDoc = await saveFile(leaseDoc);
      }
      if (invoiceDoc !== "") {
        postData.invoiceDoc = await saveFile(invoiceDoc);
      }
      // leaseDoc ? "" : (postData.leaseDoc = await saveFile(leaseDoc));
      // invoiceDoc ? "" : (postData.invoiceDoc = await saveFile(invoiceDoc));
      await usersRef.doc(id).update(postData);
      setMessage("User details updated✔️");
      setLoading(false);
    } catch (err) {
      SetHasError(true);
      setMessage(err);
    }
  };
  return (
    <>
      <AdminNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <Modal
            show={showModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Student Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  {hasError == true ? (
                    <div class="alert alert-danger sticky-top" role="alert">
                      {message}
                    </div>
                  ) : (
                    <div class="alert alert-success sticky-top" role="alert">
                      {message}
                    </div>
                  )}
                  <Col xs={12} md={6}>
                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setRoomNumber(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="floatingInput"
                      />
                      <label for="floatingInput">Assign Room Number</label>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="form-floating mb-3">
                      <select
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Please select student status</option>
                        <option value="mustApply">Student Must Apply</option>
                        <option value="appliedWaiting">Student Applied</option>
                        <option value="rejected-space">
                          Rejected due to space
                        </option>
                        <option value="rejected-documents">
                          Rejectd due to Docs
                        </option>
                        <option value="rejected-reason">
                          Rejected with reason
                        </option>
                        <option value="accepted-lease">
                          Accepted to sign lease
                        </option>
                        <option value="student">Our student</option>
                      </select>
                      <label for="floatingPassword">Status</label>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <div className="mb-3">
                      <input
                        type="file"
                        onChange={(e) => {
                          setLeaseDoc(e.target.files[0]);
                        }}
                        className="form-control"
                        id="floatingInput"
                        placeholder="Proof of registeration from university"
                      />
                      <label for="floatingInput">
                        Signed lease of student a the accomodation
                      </label>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="mb-3">
                      <input
                        type="file"
                        onChange={(e) => {
                          setInvoiceDoc(e.target.files[0]);
                        }}
                        className="form-control"
                        id="floatingInput"
                        placeholder="Proof of registeration from university"
                      />
                      <label for="floatingInput">Invoice of the student</label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Button variant="secondary" onClick={handleClose}>
                      Ackowledge lease and invoice
                    </Button>
                  </Col>
                </Row>
                {loading ? (
                  <div className="loading">
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </div>
                ) : (
                  ""
                )}
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleSubmit}>
                Finish
              </Button>
              <Button variant="outline-secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className=""></div>
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className=""></div>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Manage Students</h1>
            </div>
            <div class="container">
              {/* <!-- Breadcrumb --> */}
              <nav aria-label="breadcrumb" class="main-breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="javascript:void(0)">Students</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {student?.email}
                  </li>
                </ol>
              </nav>
              {/* <!-- /Breadcrumb --> */}
              {/* Personal Details */}
              <div class="row gutters-sm">
                <PersonalInfo
                  firstName={student?.firstName}
                  surname={student?.surName}
                  gender={student?.gender}
                  nationality={student?.nationality}
                  idNumber={student?.idNumber}
                />

                {/* Contact Details */}
                <ContactInfo
                  email={student?.email}
                  cellNumber={student?.cellNumber}
                  kinNumber={student?.kinNumber}
                />
                {/* Contact Details */}
              </div>

              {/* second row */}
              <div class="row gutters-sm">
                {/* school */}
                <SchoolInfo
                  studentNumber={student?.studentNumber}
                  campus={student?.campus}
                  studyYear={student?.studyYear}
                />
                {/* school */}
                {/* acc */}
                <AccomodationInfo
                  building={student?.building}
                  roomType={student?.roomType}
                  paymentOption={student?.paymentOption}
                />
                {/* acc */}
              </div>

              {/* Third row */}
              <div class="row gutters-sm">
                {/* school */}
                <PaymentInfo
                  studentType={student.studentType}
                  bursaryName={student?.bursaryName}
                  otherFirstname={student?.otherFirstname}
                  otherSurname={student?.otherSurname}
                  otherId={student?.otherId}
                  otherEmail={student?.otherEmail}
                  otherNumber={student?.otherNumber}
                />
                {/* school */}

                {/* Admin info */}
                <div class="col-md-6 mb-3">
                  <div class="card mb-3">
                    <div class="card-body">
                      <h4>Tenant Info</h4>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Room Number</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {student?.roomNumber
                            ? student?.roomNumber
                            : "No room number yet"}
                        </div>
                      </div>

                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Status</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {student?.status}
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Lease</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {student?.leaseDoc
                            ? student?.leaseDoc
                            : "No lease document yet"}
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Invoice</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {student?.invoiceDoc
                            ? student?.invoiceDoc
                            : "No invoice document yet"}
                        </div>
                      </div>
                      <hr />
                      <div class="col-md-8 mb-3">
                        <button
                          onClick={handleShow}
                          className="btn btn-outline-primary"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default StudentView;
