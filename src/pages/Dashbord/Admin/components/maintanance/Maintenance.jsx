import AdminNav from "../../AdminNav";
import SideNav from "../../SideNav";
import { Button, Col, Toast, Container, Row, Modal } from "react-bootstrap";
import { firestore } from "../../../../../firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Maintenance() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const requestsRef = firestore
      .collection("requests")
      .orderBy("createdAt", "desc");
    requestsRef.onSnapshot(({ docs }) => {
      const requests = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRequests(requests);
    });
  }, []);
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
              <h1 className="h2">Get Maintance Requests</h1>
            </div>
            {/* main...... */}
            <div class="list-group">
              <h4>Recents</h4>
              {requests.map((request) => (
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex gap-3 py-3"
                  aria-current="true"
                >
                  <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 class="mb-0">{request.subject}</h6>
                      <p class="mb-0 opacity-75">{request.message}</p>
                    </div>
                    <small class="opacity-50 text-nowrap">
                      {request.createdAt}
                    </small>
                    <Link
                      to={`/admin-dashboard/maintenance/${request.id}`}
                      className="btn btn-primary"
                    >
                      View
                    </Link>
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

export default Maintenance;
