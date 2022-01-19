import StudentNavbar from "../StudentNavbar";
import { useState, useEffect } from "react";
import { firestore } from "../../../../../firebase";
function StudentNotification() {
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
  return (
    <>
      <div className="container-sm animate__animated animate__fadeIn animate__faster">
        <StudentNavbar />
        <div className="jumbotron bg-light rounded p-5 border">
          <div className="container">
            <div className="row vertical-align-middle mt-5 mb-5">
              <div className="col-md-6">
                <h1>Notifications</h1>
                <p>Get the latest notifications</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row gutters-sm mt-3">
          <div class="col-sm-6 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <div class="list-group">
                  <h4>Recent Notifications</h4>
                  <hr />
                  {notifications.map((notification) => (
                    <a
                      href="#"
                      class="list-group-item list-group-item-action d-flex gap-3 py-3"
                      aria-current="true"
                    >
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
              </div>
            </div>
          </div>
          <div class="col-sm-6 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h4>Check latest emails</h4>
                <hr />
                <div className="mt-10">
                  <a href="https://mail.google.com" className="btn btn-primary">
                    Go to my emails
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

export default StudentNotification;
