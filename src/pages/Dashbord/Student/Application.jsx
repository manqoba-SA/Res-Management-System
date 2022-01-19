import { useEffect, useState } from "react";
import Accomodation from "./components/application/Accomodation";
import ContactDetails from "./components/application/ContactDetails";
import Documents from "./components/application/Documents";
import Payments from "./components/application/Payments";
import PersonalDetails from "./components/application/PersonalDetails";
import SchoolDetails from "./components/application/SchoolDetails";
import { firestore } from "../../../firebase";
import { storage } from "../../../firebase";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import "./studentDashboard.css";
function Application() {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // fields
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [nationality, setNationality] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, SetHasError] = useState(false);

  // contact fields
  const [cellNumber, setCellNumber] = useState("");
  const [kinNumber, setKinNumber] = useState("");

  // School fielsd
  const [studentNumber, setStudentNumber] = useState("");
  const [campus, setCampus] = useState("");
  const [studyYear, setStudyYear] = useState("");

  // accomodation fielsd
  const [building, setBuilding] = useState("");
  const [roomType, setRoomType] = useState("");
  const [studentType, setStudentType] = useState("");

  // Payments fieldz
  const [bursaryName, setBursaryName] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [showGuardian, setShowGuardian] = useState(false);

  const [otherFirstname, setOtherFirstName] = useState("");
  const [otherSurname, setOtherSurName] = useState("");
  const [otherId, setOtherId] = useState("");
  const [otherEmail, setOtherEmail] = useState("");
  const [otherNumber, setOtherNumber] = useState("");

  // Document fielsz
  const [schoolProof, setSchoolProof] = useState("");
  const [idCopy, setIdCopy] = useState("");
  const [paymentProof, setPaymentProof] = useState("");

  const [showPersonal, setShowPersonal] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [showSchool, setShowSchool] = useState(false);
  const [showAccom, setShowAccom] = useState(false);
  const [showPayments, setPayments] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [isBursaryStudent, setIsBursaryStudent] = useState(false);
  const [isCashStudent, setIsCashStudent] = useState(false);

  const continueToContact = (e) => {
    e.preventDefault();
    if (
      (firstName === "") |
      (surName === "") |
      (nationality === "") |
      (idNumber === "") |
      (gender === "")
    ) {
      SetHasError(true);
      setMessage("Please fill in all this forms before you continue");
    } else if (/\d/.test(firstName)) {
      SetHasError(true);
      setMessage("First name should not contain a number");
    } else if (/\d/.test(surName)) {
      SetHasError(true);
      setMessage("Surname should not contain a number");
    } else if ((idNumber.length != 13) | !/^\d+$/.test(idNumber)) {
      SetHasError(true);
      setMessage("Make sure your ID number is a correct one");
    } else {
      SetHasError(false);
      setShowPersonal(false);
      setShowContact(true);
    }
  };

  const continueToSchool = (e) => {
    e.preventDefault();
    if ((cellNumber === "") | (kinNumber === "")) {
      SetHasError(true);
      setMessage("Please fill in all this forms before you continue");
    } else if (!/^\d+$/.test(cellNumber | !/^\d+$/.test(kinNumber))) {
      SetHasError(true);
      setMessage("A cellNumber should be a number");
    } else if (
      cellNumber.length != 10 &&
      (cellNumber.length != 8) | (kinNumber.length != 10) &&
      kinNumber.length != 8
    ) {
      SetHasError(true);
      setMessage("Enter a valid cell number");
    } else {
      SetHasError(false);
      setShowPersonal(false);
      setShowContact(false);
      setShowSchool(true);
    }
  };

  const continueToAccom = (e) => {
    e.preventDefault();
    if ((studentNumber === "") | (campus === "") | (studyYear === "")) {
      SetHasError(true);
      setMessage("Please fill in all this forms before you continue");
    } else if (!/^\d+$/.test(studentNumber)) {
      SetHasError(true);
      setMessage("Student number should be a number");
    } else {
      SetHasError(false);
      setShowPersonal(false);
      setShowContact(false);
      setShowSchool(false);
      setShowAccom(true);
    }
  };

  const continueToPayments = (e) => {
    e.preventDefault();
    if ((building === "") | (roomType === "") | (studentType === "")) {
      SetHasError(true);
      setMessage("Please fill in all this forms before you continue");
    } else {
      if (studentType === "cash-paying") {
        setIsCashStudent(true);
        setIsBursaryStudent(false);
        SetHasError(false);
        setShowPersonal(false);
        setShowContact(false);
        setShowSchool(false);
        setShowAccom(false);
        setPayments(true);
      } else {
        setIsCashStudent(false);
        setIsBursaryStudent(true);
        SetHasError(false);
        setShowPersonal(false);
        setShowContact(false);
        setShowSchool(false);
        setShowAccom(false);
        setPayments(true);
      }
    }
  };

  const continueToDocuments = (e) => {
    e.preventDefault();
    if (isBursaryStudent) {
      if (bursaryName === "") {
        SetHasError(true);
        setMessage("Please enter your bursary/sponsor name");
      } else {
        SetHasError(false);
        setPayments(false);
        setShowDocuments(true);
      }
    } else {
      if (!showGuardian) {
        SetHasError(false);
        setPayments(false);
        setShowDocuments(true);
      } else {
        if (
          (otherFirstname === "") |
          (otherEmail === "") |
          (otherSurname === "") |
          (otherNumber === "") |
          (otherEmail === "")
        ) {
          SetHasError(true);
          setMessage("Please provide all your sponsor details");
        } else {
          SetHasError(false);
          setPayments(false);
          setShowDocuments(true);
        }
      }
    }
  };

  const savePicture = async (file) => {
    const storageRef = storage.ref(`/documents/${user.uid}/${Date.now()}`);
    const fileRef = storageRef.child(file.name);
    const snapshot = await fileRef.put(file);
    const url = await snapshot.ref.getDownloadURL();
    console.log("Saved pic", url);
    return url;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if ((idCopy === "") | (schoolProof === "") | (paymentProof === "")) {
      setLoading(false);
      SetHasError(true);
      setMessage("Please upload all the documents");
    } else {
      const applicationsRef = firestore.collection("applications");
      const usersRef = firestore.collection("users");
      // const usersRef = firestore.collection("users");
      const postData = {
        createdAt: new Date().toISOString(),
        firstName,
        surName,
        nationality,
        gender,
        idNumber,
        cellNumber,
        kinNumber,
        email: user.email,
        studentNumber,
        campus,
        studyYear,
        building,
        roomType,
        studentType,
        paymentOption,
        bursaryName,
        otherFirstname,
        otherSurname,
        otherId,
        otherEmail,
        otherNumber,
        idCopy,
        schoolProof,
        paymentProof,
        studentUid: user.uid,
      };
      postData.idCopy = await savePicture(idCopy);
      postData.schoolProof = await savePicture(schoolProof);
      postData.paymentProof = await savePicture(paymentProof);
      await applicationsRef.add(postData);
      await usersRef.doc(user.uid).update(postData);
      usersRef.doc(user.uid).update({ status: "appliedWaiting" });
      setLoading(false);
      setShowComplete(true);
    }
  };

  // console.log(nationality);
  return (
    <>
      {showComplete ? (
        <div className="px-4 py-5 my-5 text-center animate__animated animate__fadeIn animate__faster">
          <div class="jumbotron text-center">
            <h1 class="display-3 animate__animated animate__rubberBand">
              Thank You! Application Received
            </h1>
            <p class="lead">
              <strong>We thank you for your application</strong> You will get a
              response in 2 working days.
            </p>
            <hr />
            <p>
              Having Other questions? <a href="">Contact us</a>
            </p>
            <p class="lead">
              <a
                class="btn btn-primary btn-sm"
                onClick={() => {
                  navigate("/student-dashboard");
                }}
                role="button"
              >
                Continue
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div className="application animate__animated animate__fadeIn animate__faster">
          {/* <div className="container-fluid ps-md-0">
        <div className="login d-flex align-items-center py-5"> */}
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8">
                <form id="msform">
                  <ul id="progressbar">
                    <li className={showPersonal ? "active" : ""}>
                      Personal and Identity
                    </li>
                    <li className={showContact ? "active" : ""}>
                      Contact Details
                    </li>
                    <li className={showSchool ? "active" : ""}>
                      School Details
                    </li>
                    <li className={showAccom | showPayments ? "active" : ""}>
                      Accomodation
                    </li>
                    <li className={showDocuments ? "active" : ""}>Documents</li>
                  </ul>
                  {hasError == true ? (
                    <div class="alert alert-danger sticky-top" role="alert">
                      {message}
                    </div>
                  ) : (
                    ""
                  )}
                  {showPersonal === true ? (
                    <PersonalDetails
                      onClick={continueToContact}
                      firstName={(e) => setFirstName(e.target.value)}
                      surName={(e) => setSurName(e.target.value)}
                      nationality={(e) => setNationality(e.target.value)}
                      idNumber={(e) => setIdNumber(e.target.value)}
                      gender={(e) => setGender(e.target.value)}
                    />
                  ) : (
                    ""
                  )}
                  {showContact && (
                    <ContactDetails
                      onClick={continueToSchool}
                      email={user.email}
                      cellNumber={(e) => setCellNumber(e.target.value)}
                      kinNumber={(e) => setKinNumber(e.target.value)}
                    />
                  )}
                  {showSchool && (
                    <SchoolDetails
                      onClick={continueToAccom}
                      studentNumber={(e) => setStudentNumber(e.target.value)}
                      campus={(e) => {
                        setCampus(e.target.value);
                      }}
                      studyYear={(e) => {
                        setStudyYear(e.target.value);
                      }}
                    />
                  )}
                  {showAccom && (
                    <Accomodation
                      onClick={continueToPayments}
                      building={(e) => {
                        if (e.target.checked) {
                          setBuilding(e.target.value);
                        }
                      }}
                      roomType={(e) => {
                        if (e.target.checked) {
                          setRoomType(e.target.value);
                        }
                      }}
                      studentType={(e) => {
                        if (e.target.checked) {
                          setStudentType(e.target.value);
                        }
                      }}
                    />
                  )}
                  {showPayments && (
                    <Payments
                      onClick={continueToDocuments}
                      isCash={isCashStudent}
                      isBursary={isBursaryStudent}
                      isGuardian={showGuardian}
                      myself={(e) => {
                        if (e.target.checked) {
                          setShowGuardian(false);
                          setPaymentOption("Applicant Responsible");
                        }
                      }}
                      bursaryName={(e) => setBursaryName(e.target.value)}
                      guardian={(e) => {
                        if (e.target.checked) {
                          setShowGuardian(true);
                          setPaymentOption("Others person responsible");
                        }
                      }}
                      firstName={(e) => setOtherFirstName(e.target.value)}
                      surname={(e) => setOtherSurName(e.target.value)}
                      otherId={(e) => setOtherId(e.target.value)}
                      otherEmail={(e) => setOtherEmail(e.target.value)}
                      cell={(e) => setOtherNumber(e.target.value)}
                      onClickPrev={() => {
                        SetHasError(false);
                        setPayments(false);
                        setShowAccom(true);
                      }}
                    />
                  )}
                  {showDocuments && (
                    <Documents
                      onClickPrev={() => {
                        SetHasError(false);
                        setShowDocuments(false);
                        setPayments(true);
                      }}
                      idCopy={(e) => setIdCopy(e.target.files[0])}
                      schoolProof={(e) => setSchoolProof(e.target.files[0])}
                      paymentProof={(e) => setPaymentProof(e.target.files[0])}
                      loading={loading}
                      onClick={handleSubmit}
                    />
                  )}
                </form>
              </div>
            </div>
          </div>
          {/* </div>
      </div> */}
        </div>
      )}
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
    </>
  );
}

export default Application;
