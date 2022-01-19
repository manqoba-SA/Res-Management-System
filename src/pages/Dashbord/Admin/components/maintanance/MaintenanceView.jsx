import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../../../../firebase";
import AdminNav from "../../AdminNav";
import SideNav from "../../SideNav";

function MaintenanceView() {
  const { id } = useParams();
  const [request, setRequest] = useState("");
  useEffect(() => {
    const recentRef = firestore.collection("requests").doc(id);
    recentRef.onSnapshot((doc) => {
      const request = { id: doc.id, ...doc.data() };
      setRequest(request);
    });
  }, []);

  const handleSubmit = () => {
    try {
      const requestRef = firestore.collection("requests");
      requestRef.doc(id).update({ resolved: true });
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
              <h1 className="h2">
                {request?.studentName}'s request from room {request?.userRoom}
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
                    <a href="javascript:void(0)">Requests</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {request?.studentName}
                  </li>
                </ol>
              </nav>
              {/* <!-- /Breadcrumb --> */}
              {/* Personal Details */}
              <div class="row gutters-sm">
                <div class="col-md-8 mb-3">
                  <div class="card mb-3">
                    <div class="card-body">
                      <h4>Personal Info</h4>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Student Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {request?.studentName}
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Room Number</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {request?.userRoom}
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Request Subject</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {request?.subject}
                        </div>
                      </div>

                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Message</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {request?.message}
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Request Status</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {request?.resolved
                            ? "Student Request attended"
                            : "Not yet resolved"}
                        </div>
                      </div>
                      <hr />

                      <div class="row">
                        <div class="col-sm-4">
                          {request?.resolved ? (
                            <h2>Request resolved a student got an email</h2>
                          ) : (
                            <button
                              onClick={handleSubmit}
                              className="btn btn-primary"
                            >
                              Resolve
                            </button>
                          )}
                        </div>
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

export default MaintenanceView;
