import AdminNav from "../../AdminNav";
import SideNav from "../../SideNav";
import image from "../../../../../images/check.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { firestore } from "../../../../../firebase";

function Students() {
  const [students, setStudents] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  useEffect(() => {
    const studentsRef = firestore.collection("users");
    // .orderBy("timeCreated", "desc");
    studentsRef.onSnapshot(({ docs }) => {
      const students = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(students);
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
              <h1 className="h2">Manage Students</h1>
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
                        <th>Phone number</th>
                        <th>Building</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students
                        .filter((student) => {
                          if (searchItem == "") {
                            return student;
                          } else if (
                            student.firstName
                              ?.toLowerCase()
                              .includes(searchItem.toLocaleLowerCase()) ||
                            student.surName
                              ?.toLowerCase()
                              .includes(searchItem.toLocaleLowerCase()) ||
                            student.email
                              ?.toLowerCase()
                              .includes(searchItem.toLocaleLowerCase()) ||
                            student.building
                              ?.toLowerCase()
                              .includes(searchItem.toLocaleLowerCase())
                          ) {
                            return student;
                          }
                        })
                        .map((student) => (
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
                                      {student.firstName
                                        ? student.firstName
                                        : "NOT YET APPLIED"}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td>{student.email}</td>
                            <td>{student.cellNumber}</td>
                            <td>{student.building}</td>
                            <td>{student.status}</td>
                            <td>
                              <Link
                                to={`/admin-dashboard/students/${student.id}`}
                                className="btn btn-primary"
                              >
                                View student
                              </Link>
                            </td>
                          </tr>
                        ))}
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

export default Students;
