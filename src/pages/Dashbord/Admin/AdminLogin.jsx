import { useState } from "react";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { firestore } from "../../../firebase";

function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, SetHasError] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { logIn, logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      if ((password == "") | (email == "")) {
        setLoading(false);
        SetHasError(true);
        setMessage("Please fill in all the fields");
      } else {
        await logIn(email, password).then((credential) => {
          return (
            firestore
              .collection("users")
              .doc(credential.user.uid)
              // .where("isAdmin", "==", true)
              .get()
              .then((doc) => {
                console.log(doc.data().isAdmin);
                let isAdmin = doc.data().isAdmin;
                if (isAdmin) {
                  setLoading(false);
                  navigate("/admin-dashboard");
                } else {
                  logOut();
                  setLoading(false);
                  SetHasError(true);
                  setMessage("Login credetials are not for admin");
                }
              })
          );
        });
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
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        ""
      )}
      <div class="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <div class="avatar">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
          </div>
          <h4 class="modal-title">Admin LogIn</h4>
          {hasError == true ? (
            <div class="alert alert-danger" role="alert">
              {message}
            </div>
          ) : (
            ""
          )}
          <div class="form-group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              class="form-control"
              placeholder="Username"
              required="required"
            />
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
          <input
            onClick={handleSubmit}
            type="submit"
            class="btn btn-primary btn-block btn-lg"
            value="Login"
          />
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
