import { useState } from "react";
import { useUserAuth } from "../../../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { firestore } from "../../../firebase";

function AdminRegister() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, SetHasError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      if (
        (password == "") |
        (email == "") |
        (firstName === "") |
        (surName === "") |
        (phone === "") |
        (role === "") |
        (gender === "")
      ) {
        setLoading(false);
        SetHasError(true);
        setMessage("Please fill in all the fields");
      } else {
        await signUp(email, password).then((credential) => {
          return firestore.collection("users").doc(credential.user.uid).set({
            firstName,
            surName,
            cellNumber: phone,
            role,
            isAdmin: true,
            email,
            gender,
          });
        });
        setLoading(false);
        SetHasError(false);
        setSuccess(true);
        setMessage(
          "The admin account was created you now log in with on the admin dashboard"
        );

        // navigate("/student-dashboard");
      }
    } catch (err) {
      setLoading(false);
      SetHasError(true);
      setMessage(err.message);
    }
  };
  return (
    <>
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
      <div class="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <div class="avatar">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
          </div>
          <h4 class="modal-title">Make Admin User</h4>
          {hasError == true ? (
            <div class="alert alert-danger" role="alert">
              {message}
            </div>
          ) : (
            ""
          )}
          <div class="form-group">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              class="form-control"
              placeholder="First name"
              required="required"
            />
          </div>
          <div class="form-group">
            <input
              onChange={(e) => setSurName(e.target.value)}
              type="text"
              class="form-control"
              placeholder="Surname"
              required="required"
            />
          </div>
          <div class="form-group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              class="form-control"
              placeholder="Email"
              required="required"
            />
          </div>
          <div class="form-group">
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              class="form-control"
              placeholder="Phone"
              required="required"
            />
          </div>
          <div class="form-group">
            <input
              onChange={(e) => setRole(e.target.value)}
              type="text"
              class="form-control"
              placeholder="Role"
              required="required"
            />
          </div>
          <div class="form-group">
            <select
              onChange={(e) => setGender(e.target.value)}
              //   type="text"
              class="form-control"
              placeholder="Gender"
              required="required"
            >
              <option selected>Please select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div class="form-group">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              class="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          {success == true ? (
            <>
              <div class="alert alert-success" role="alert">
                {message}
              </div>
              <Link
                to="/admin-dashboard"
                className="
              btn btn-lg btn-primary btn-login
              text-uppercase
              fw-bold
              mb-2
            "
                // onClick={props.onClick}
              >
                Finish
              </Link>
            </>
          ) : (
            <input
              onClick={handleSubmit}
              type="submit"
              class="btn btn-primary btn-block btn-lg"
              value="Submit"
            />
          )}
        </form>
      </div>
    </>
  );
}

export default AdminRegister;
