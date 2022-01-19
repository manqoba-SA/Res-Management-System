import AdminNav from "../../AdminNav";
import SideNav from "../../SideNav";
import { Button, Col, Toast, Container, Row, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { firestore } from "../../../../../firebase";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const notificationsRef = firestore
      .collection("notifications")
      .orderBy("createdAt", "desc");
    notificationsRef.onSnapshot(({ docs }) => {
      const notifications = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotifications(notifications);
    });
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = () => {
    try {
      const newNotification = {
        createdAt: new Date().toISOString(),
        subject,
        message,
      };
      firestore.collection("notifications").add(newNotification);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AdminNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
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
              <h1 className="h2">Manage Notifications</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <button
                  onClick={handleShow}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Send Notification
                </button>
              </div>
            </div>
            {/* mmodal */}
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
                <Container>
                  <h3>Send Notification</h3>
                  <p>
                    Note that only notifications that signed a lease that
                    receive notifications
                  </p>

                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      id="floatingInput"
                    />
                    <label for="floatingInput">Subject</label>
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
                    <label for="floatingInput">Message</label>
                  </div>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="secondary" onClick={handleSubmit}>
                  Send
                </Button>
              </Modal.Footer>
            </Modal>
            {/* modal */}

            {/* main...... */}
            <div class="list-group">
              <h4>Recent Notifications</h4>
              {notifications.map((notification) => (
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex gap-3 py-3"
                  aria-current="true"
                >
                  <img
                    src="https://github.com/twbs.png"
                    alt="twbs"
                    width="32"
                    height="32"
                    class="rounded-circle flex-shrink-0"
                  />
                  <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 class="mb-0">{notification.subject}</h6>
                      <p class="mb-0 opacity-75">{notification.message}</p>
                    </div>
                    <small class="opacity-50 text-nowrap">
                      {notification.createdAt}
                    </small>
                  </div>
                </a>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Notifications;
