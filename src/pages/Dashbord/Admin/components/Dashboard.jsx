import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../../../firebase";

function Dashboard(props) {
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
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="chartjs-size-monitor">
          <div className="chartjs-size-monitor-expand">
            <div className=""></div>
          </div>
          <div className="chartjs-size-monitor-shrink">
            <div className=""></div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Dashboard</h1>
        </div>
        {/* ftft */}
        <div class="container">
          <div class="main-body">
            <div class="row gutters-sm">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Admin"
                        class="rounded-circle"
                        width="150"
                      />
                      <div class="mt-3">
                        <h4>
                          {props.firstName} {props.surName}
                        </h4>
                        <p class="text-secondary mb-1">{props.role}</p>
                        <p class="text-muted font-size-sm">{props.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Full Name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {props.firstName}
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{props.email}</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Phone</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {props.cellNumber}
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Gender</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{props.gender}</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Role/position</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{props.role}</div>
                    </div>
                    <hr />
                  </div>
                </div>

                <div class="row gutters-sm">
                  <div class="col-sm-6 mb-3">
                    <div class="card h-100">
                      <div class="card-body">
                        <h6>Latest notification sent</h6>
                        <hr />
                        <div class="list-group">
                          <h4>Recent Notifications</h4>
                          {notifications.map((notification) => (
                            <a
                              href="#"
                              class="list-group-item list-group-item-action d-flex gap-3 py-3"
                              aria-current="true"
                            >
                              <div class="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                  <h6 class="mb-0">{notification.subject}</h6>
                                  <p class="mb-0 opacity-75">
                                    {notification.message}
                                  </p>
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
                        <h6>Latest maintenance requests</h6>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-grid">
                  <Link
                    to="/admin/register"
                    className="
                      btn btn-lg btn-primary btn-login
                      text-uppercase
                      fw-bold
                      mb-2
                    "
                    // onClick={props.onClick}
                  >
                    Add Admin User
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
