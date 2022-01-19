import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../../../../firebase";
import AdminNav from "../../AdminNav";
import SideNav from "../../SideNav";

function Applications() {
  const [applications, setapplications] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  useEffect(() => {
    const applicationsRef = firestore
      .collection("applications")
      .orderBy("createdAt", "desc");
    applicationsRef.onSnapshot(({ docs }) => {
      const applications = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Data:", applications);
      setapplications(applications);
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
              <h1 className="h2">Manage Applications</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => setSearchItem("Johannesburg")}
                  >
                    Johannesburg
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => setSearchItem("Durban")}
                  >
                    Durban
                  </button>
                </div>
                <button
                  onClick={() => setSearchItem("")}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Show All
                </button>
              </div>
            </div>
            <form class="d-flex">
              <input
                onChange={(e) => setSearchItem(e.target.value)}
                class="form-control me-2"
                type="search"
                placeholder="Search by name, surname or email"
                aria-label="Search"
              />
            </form>
            <div class="container">
              <div class="row py-5">
                <div class="col-12">
                  <table
                    id="example"
                    class="table table-hover responsive nowrap"
                    // style="width:100%"
                  >
                    <thead>
                      <tr>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Campus</th>
                        <th>Building</th>
                        <th>Application Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applications
                        .filter((application) => {
                          if (searchItem == "") {
                            return application;
                          } else if (
                            application.firstName
                              ?.toLowerCase()
                              .includes(searchItem.toLocaleLowerCase()) ||
                            application.surName
                              ?.toLowerCase()
                              .includes(searchItem.toLocaleLowerCase()) ||
                            application.email
                              ?.toLowerCase()
                              .includes(searchItem.toLocaleLowerCase()) ||
                            application.building
                              ?.toLowerCase()
                              .includes(searchItem.toLocaleLowerCase())
                          ) {
                            return application;
                          }
                        })
                        .map((application) => (
                          <tr>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="">
                                  {/* <div class="avatar mr-3">
                                <img
                                  src={image}
                                  height={40}
                                  width={40}
                                  alt="profile"
                                />
                              </div> */}
                                  <a href="">
                                    <p class="font-weight-bold mb-0">
                                      {application.firstName}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td>{application.email}</td>
                            <td>{application.campus}</td>
                            <td>{application.building}</td>
                            <td>
                              {new Date(
                                application.createdAt
                              ).toLocaleDateString("en-US")}
                            </td>
                            <td>
                              <Link
                                to={`/admin-dashboard/applications/${application.id}`}
                                className="btn btn-primary"
                              >
                                View Application
                              </Link>
                            </td>
                          </tr>
                        ))}

                      {/* <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="">
                              <p class="font-weight-bold mb-0">Mike</p>
                            </div>
                          </div>
                        </td>
                        <td> (073) 874 6878</td>
                        <td>UkZN</td>
                        <td>20 December 2021</td>
                        <td>
                          <div class="badge badge-success badge-success-alt">
                            Waiting for feedback
                          </div>
                        </td>
                        <td>
                          <div class="dropdown">
                            <button
                              class="btn btn-sm btn-icon"
                              type="button"
                              id="dropdownMenuButton2"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i
                                class="fa fa-ellipsis-h"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Actions"
                              ></i>
                            </button>
                            <div
                              class="dropdown-menu"
                              aria-labelledby="dropdownMenuButton2"
                            >
                              <a class="dropdown-item" href="#">
                                <i class="bx bxs-pencil mr-2"></i> Edit Profile
                              </a>
                              <a class="dropdown-item text-danger" href="#">
                                <i class="bx bxs-trash mr-2"></i> Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Applications;
