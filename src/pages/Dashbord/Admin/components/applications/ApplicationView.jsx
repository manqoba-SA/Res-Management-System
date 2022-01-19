import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../../../../firebase";
import AdminNav from "../../AdminNav";
import SideNav from "../../SideNav";
import DocumentsInfo from "./child/DocumentsInfo";
import PersonalInfo from "./child/PersonalInfo";
import ContactInfo from "./child/ContactInfo";
import SchoolInfo from "./child/SchoolInfo";
import AccomodationInfo from "./child/AccomodationInfo";
import PaymentInfo from "./child/PaymentInfo";
import { Button, Col, Toast, Container, Row } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function ApplicationView() {
  // for modal
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [reason, setReason] = useState("");
  console.log(reason);

  // get application Data
  const { id } = useParams();
  const [application, setApplication] = useState("");
  useEffect(() => {
    const recentRef = firestore.collection("applications").doc(id);
    recentRef.onSnapshot((doc) => {
      const application = { id: doc.id, ...doc.data() };
      setApplication(application);
    });
  }, []);

  // Reject application due to space
  const userRef = firestore.collection("users");
  const applicationRef = firestore.collection("applications");
  const handleRejectForSpace = () => {
    userRef.doc(application?.studentUid).update({ status: "rejected-space" });
    applicationRef
      .doc(id)
      .update({ status: " Application rejected due to full building" });
    handleClose();
  };

  // Reject application due to docs
  const handleRejectForDocs = () => {
    userRef
      .doc(application?.studentUid)
      .update({ status: "rejected-documents" });
    applicationRef
      .doc(id)
      .update({ status: " Application rejected due to error in documents" });
    handleClose();
  };

  const handleRejectForRes = () => {
    userRef.doc(application?.studentUid).update({ status: "rejected-reason" });
    applicationRef
      .doc(id)
      .update({ status: "Application rejected due to other reasons" });
    handleClose();
  };

  const handleAccept = () => {
    userRef.doc(application?.studentUid).update({ status: "accepted-lease" });
    applicationRef.doc(id).update({
      status: "Application accepted now you can send the student a lease",
    });
    handleClose();
  };

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const toggleShowC = () => setShowC(!showC);
  return (
    <>
      <AdminNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            {/* modal */}
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
                <Modal.Title>Rejecting application</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                  <Row>
                    <Col xs={12} md={6}>
                      Choose a reason for rejecting the application
                      {/* space */}
                      <div className="mb-2">
                        <Button onClick={toggleShowA} className="mb-2">
                          Reject due to<strong>Space</strong>
                        </Button>
                        <Toast show={showA} onClose={toggleShowA}>
                          <Toast.Header>
                            <img
                              src="holder.js/20x20?text=%20"
                              className="rounded me-2"
                              alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                          </Toast.Header>
                          <Toast.Body>
                            Reject applicant for lack of space?
                            <Button onClick={handleRejectForSpace}>
                              Reject
                            </Button>
                          </Toast.Body>
                        </Toast>
                      </div>
                      {/* space */}
                      {/* due documents */}
                      <br />
                      <Button onClick={toggleShowB} className="mb-2">
                        Reject due to <strong>wrong documents</strong>
                      </Button>
                      <div className="mb-2">
                        <Toast
                          onClose={toggleShowB}
                          show={showB}
                          animation={true}
                        >
                          <Toast.Header>
                            <img
                              src="holder.js/20x20?text=%20"
                              className="rounded me-2"
                              alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                          </Toast.Header>
                          <Toast.Body>
                            Enter wrong or due documents
                            <input
                              onChange={(e) => {
                                setReason(e.target.value);
                              }}
                              type="text"
                              className="form-control form-floating mb-2"
                              id="floatingInput"
                              placeholder="Enter wrong or due documents"
                            />
                            <Button onClick={handleRejectForDocs}>
                              Reject
                            </Button>
                          </Toast.Body>
                        </Toast>
                      </div>
                      {/* due documents */}
                      <br />
                      <Button onClick={toggleShowC} className="mb-2">
                        Reject due to <strong>other</strong> reasons
                      </Button>
                      <div className="mb-2">
                        <Toast
                          onClose={toggleShowC}
                          show={showC}
                          animation={true}
                        >
                          <Toast.Header>
                            <img
                              src="holder.js/20x20?text=%20"
                              className="rounded me-2"
                              alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                          </Toast.Header>
                          <Toast.Body>
                            Enter reason for rejecting the application
                            <input
                              onChange={(e) => {
                                setReason(e.target.value);
                              }}
                              type="text"
                              className="form-control form-floating mb-2"
                              id="floatingInput"
                              placeholder="Type your reason"
                            />
                            <Button onClick={handleRejectForRes}>Reject</Button>
                          </Toast.Body>
                        </Toast>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className=""></div>
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className=""></div>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">
                {application?.firstName} {application?.surName}
              </h1>
            </div>
            <div class="container">
              {/* <!-- Breadcrumb --> */}
              <nav aria-label="breadcrumb" class="main-breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="javascript:void(0)">Applications</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {application?.firstName}
                  </li>
                </ol>
              </nav>
              {/* <!-- /Breadcrumb --> */}

              <div class="row gutters-sm">
                {/* Personal Details */}
                <PersonalInfo
                  firstName={application?.firstName}
                  surname={application?.surName}
                  gender={application?.gender}
                  nationality={application?.nationality}
                  idNumber={application?.idNumber}
                />

                {/* Contact Details */}
                <ContactInfo
                  email={application?.email}
                  cellNumber={application?.cellNumber}
                  kinNumber={application?.kinNumber}
                />
                {/* Contact Details */}
              </div>

              {/* second row */}
              <div class="row gutters-sm">
                {/* school */}
                <SchoolInfo
                  studentNumber={application?.studentNumber}
                  campus={application?.campus}
                  studyYear={application?.studyYear}
                />
                {/* school */}
                {/* acc */}
                <AccomodationInfo
                  building={application?.building}
                  roomType={application?.roomType}
                  paymentOption={application?.paymentOption}
                />
                {/* acc */}
              </div>

              {/* Third row */}
              <div class="row gutters-sm">
                {/* school */}
                <PaymentInfo
                  studentType={application.studentType}
                  bursaryName={application?.bursaryName}
                  otherFirstname={application?.otherFirstname}
                  otherSurname={application?.otherSurname}
                  otherId={application?.otherId}
                  otherEmail={application?.otherEmail}
                  otherNumber={application?.otherNumber}
                />
                {/* school */}
                {/* acc */}
                <DocumentsInfo
                  idCopy={application?.idCopy}
                  schoolProof={application?.schoolProof}
                  paymentProof={application?.paymentProof}
                />
                {/* acc */}
              </div>

              <div className="row">
                {application?.status ? (
                  <div class="col-md-8 mb-3">
                    <h2>{application?.status}</h2>
                  </div>
                ) : (
                  <div class="col-md-8 mb-3">
                    <button
                      onClick={handleAccept}
                      className="btn btn-primary m-2"
                    >
                      Accept Application
                    </button>
                    <button
                      onClick={handleShow}
                      className="btn btn-outline-primary"
                    >
                      Reject Application
                    </button>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default ApplicationView;
