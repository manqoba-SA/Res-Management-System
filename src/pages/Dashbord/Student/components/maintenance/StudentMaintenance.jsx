import StudentNavbar from "../StudentNavbar";
import { useUserAuth } from "../../../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Col, Toast, Container, Row, Modal } from "react-bootstrap";
import { firestore } from "../../../../../firebase";
function StudentMaintenance() {
  const { user, logOut, userId } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const [displayMessage, setDisplayMessage] = useState("");
  const [hasError, SetHasError] = useState(false);
  const [showRequests, setShowRequests] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {}
  };

  const [userRoom, setUserRoom] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  useEffect(() => {
    fetchData();
  }, [user.uid]);

  const fetchData = () => {
    const usersRef = firestore.collection("users").doc(user.uid);
    usersRef.get().then((doc) => {
      const roomNumber = doc.data().roomNumber;
      const studentName = doc.data().firstName;
      const studentSurName = doc.data().surName;
      const studentEmail = doc.data().email;
      setUserRoom(roomNumber);
      setStudentName(studentName + " " + studentSurName);
      setStudentEmail(studentEmail);
    });
  };

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShowRequest = () => {
    setShowModal(true);
    setShowRequests(true);
  };
  const handleShowCancel = () => {
    setShowModal(true);
    setShowRequests(false);
  };

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if ((subject === "") | (message === "")) {
      setLoading(false);
      SetHasError(true);
      setDisplayMessage(
        "Please state your subject and message before you submit"
      );
    } else {
      try {
        const newNotification = {
          createdAt: new Date().toISOString(),
          subject,
          message,
          resolved: false,
          userRoom,
          studentName,
          studentEmail,
        };
        firestore
          .collection("requests")
          .add(newNotification)
          .then(() => {
            setMessage("");
            setSubject("");
            setDisplayMessage("✔️Your request was sent to the buildng manager");
            SetHasError(false);

            setLoading(false);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="container-sm animate__animated animate__fadeIn animate__faster">
        <StudentNavbar handleLogOut={handleLogOut} />
        <div className="jumbotron bg-light rounded p-5 border">
          <div className="container">
            <div className="row vertical-align-middle mt-5 mb-5">
              <div className="col-md-6">
                <h1>Maintenance</h1>
                <p>Request maintance and louvh complains here</p>
              </div>
            </div>
          </div>
        </div>

        {/* modal======== */}
        <Modal
          show={showModal}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            {showRequests ? (
              <Container>
                <h3>Maintenance Request</h3>
                <p>
                  Please complete the form below to log a maintenance request
                </p>
                {hasError == true ? (
                  <div class="alert alert-danger sticky-top" role="alert">
                    {displayMessage}
                  </div>
                ) : (
                  <div class="alert alert-success sticky-top" role="alert">
                    {displayMessage}
                  </div>
                )}
                <div className="form-floating mb-3">
                  <select
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Please select the subject</option>
                    <option value="">Select</option>{" "}
                    <option value="Main Door &amp; handle">
                      Main Door &amp; handle
                    </option>
                    <option value="Common Area Lights">
                      Common Area Lights
                    </option>
                    <option value="Paint/ Walls">Paint/ Walls</option>
                    <option value="DB and keypad complete">
                      DB and keypad complete
                    </option>
                    <option value="Room Tiles">Room Tiles</option>
                    <option value="Smoke Detection">Smoke Detection</option>
                    <option value="Room Clean">Room Clean</option>
                    <option value="Clean Duct &amp; Duct door working">
                      Clean Duct &amp; Duct door working
                    </option>
                    <option value="Microwave">Microwave</option>
                    <option value="Fridge">Fridge</option>
                    <option value="Stove">Stove</option>
                    <option value="Kitchen Sink">Kitchen Sink</option>
                    <option value="Kitchen Taps">Kitchen Taps</option>
                    <option value="Kitchen Cupboards">Kitchen Cupboards</option>
                    <option value="Kitchen Countertops">
                      Kitchen Countertops
                    </option>
                    <option value="Fire Blanket">Fire Blanket</option>
                    <option value="Kitchen Plugs">Kitchen Plugs</option>
                    <option value="Kitchen Tiles">Kitchen Tiles</option>
                    <option value="Bins">Bins</option>
                    <option value="Study Desk">Study Desk</option>
                    <option value="Study Shelf">Study Shelf</option>
                    <option value="Study Lamp">Study Lamp</option>
                    <option value="Study Chair">Study Chair</option>
                    <option value="Heater">Heater</option>
                    <option value="Study Desk Plug">Study Desk Plug</option>
                    <option value="Bed">Bed</option>
                    <option value="Mattress">Mattress</option>
                    <option value="Bed Shelve">Bed Shelve</option>
                    <option value="Wardrobe (door handle, rail, shelves)">
                      Wardrobe (door handle, rail, shelves)
                    </option>
                    <option value="Bed Plug">Bed Plug</option>
                    <option value="Curtains">Curtains</option>
                    <option value="Bedroom Windows">Bedroom Windows</option>
                    <option value="Toilet">Toilet</option>
                    <option value="Toilet Seat">Toilet Seat</option>
                    <option value="Toilet Roll Holder">
                      Toilet Roll Holder
                    </option>
                    <option value="Toilet Brush Cleaner">
                      Toilet Brush Cleaner
                    </option>
                    <option value="Bathroom Sink &amp; Plug">
                      Bathroom Sink &amp; Plug
                    </option>
                    <option value="Bathroom Tap">Bathroom Tap</option>
                    <option value="Mirror">Mirror</option>
                    <option value="Towel Rail">Towel Rail</option>
                    <option value="Shelves in Bathroom  ">
                      Shelves in Bathroom{" "}
                    </option>
                    <option value="Shower working">Shower working</option>
                    <option value="Shower Door">Shower Door</option>
                    <option value="Shower Tap">Shower Tap</option>
                    <option value="Shower Caddy ">Shower Caddy </option>
                    <option value="Bathroom Door">Bathroom Door</option>
                    <option value="Bathroom Tiles">Bathroom Tiles</option>
                    <option value="Bathroom Window">Bathroom Window</option>
                    <option value="Bathroom Light ">Bathroom Light </option>
                    <option value="Key Given / Received">
                      Key Given / Received
                    </option>
                    <option value="Finger Print Added / Removed from system">
                      Finger Print Added / Removed from system
                    </option>
                    <option value="Other">Other</option>
                  </select>
                  <label for="floatingPassword">Subject</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    type="textarea"
                    className="form-control"
                    id="floatingInput"
                  ></textarea>
                  <label for="floatingInput">Message/Description</label>
                </div>
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
            ) : (
              <Container>
                <h3>Cancel Accomodation</h3>
                <p>
                  Please contact the building manager for accomodation cancel
                </p>
              </Container>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        {/* modal================================= */}

        <div class="container full-page mt-5" id="resources">
          <div class="text-center mb-5">
            <h2>Room Maintenance</h2>
          </div>
          <div class="row d-flex">
            <div class="col-md-3 mb-3">
              <div class="card text-center">
                <img
                  class="card-img-top"
                  src="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/images/carousel/03.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Maintenance Request</h4>
                  <a
                    onClick={handleShowRequest}
                    class="btn btn-primary custom-button"
                  >
                    Request
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card text-center">
                <img
                  class="card-img-top"
                  src="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/images/carousel/06.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Cancel Accomodation</h4>
                  <a
                    onClick={handleShowCancel}
                    class="btn btn-primary custom-button"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentMaintenance;
