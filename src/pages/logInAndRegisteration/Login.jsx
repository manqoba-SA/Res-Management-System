import { Link, Navigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import { useUserAuth } from "../../context/UserAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styling.css";
function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, SetHasError] = useState(false);
  const { logIn } = useUserAuth();
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
        await logIn(email, password);
        setLoading(false);
        navigate("/student-dashboard");
      }
    } catch (err) {
      setLoading(false);
      SetHasError(true);
      setMessage(err.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid ps-md-0 animate__animated animate__fadeIn animate__faster">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    {hasError == true ? (
                      <div class="alert alert-danger" role="alert">
                        {message}
                      </div>
                    ) : (
                      ""
                    )}
                    <h3 className="login-heading mb-4">Login</h3>
                    <form>
                      <div className="form-floating mb-3">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label for="floatingPassword">Password</label>
                      </div>
                      <div className="d-grid">
                        {/* <Link to="/student-dashboard"> */}
                        <button
                          onClick={handleSubmit}
                          className="
                          btn btn-lg btn-primary btn-login
                          text-uppercase
                          fw-bold
                          mb-2
                        "
                          disabled={loading ? true : false}
                          type="submit"
                        >
                          {loading ? (
                            <span
                              class="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          ) : (
                            ""
                          )}
                          {loading ? "" : "Sign In"}
                        </button>
                        {/* </Link> */}
                        <div class="text-center">
                          <a class="small" href="#">
                            Forgot password?
                          </a>
                        </div>
                        {/* </div> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
