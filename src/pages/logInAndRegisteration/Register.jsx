import { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { firestore } from "../../firebase";
import axios from "axios";
import "./Styling.css";
function Register() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, SetHasError] = useState(false);
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      if ((email === "") | (password === "") | (repeatPassword === "")) {
        setLoading(false);
        SetHasError(true);
        setMessage("Please fill in all the fields");
      } else if (password != repeatPassword) {
        setLoading(false);
        SetHasError(true);
        setMessage("Password do not match make sure your password is correct");
      } else {
        await signUp(email, password).then((credential) => {
          return firestore
            .collection("users")
            .doc(credential.user.uid)
            .set({
              status: "mustApply",
              isAdmin: false,
              email,
            })
            .then(() => {
              const dataTosubmit = {
                recipientEmail: email,
                subject: "User Created",
                message: `<table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="table-layout: fixed; background-color: #f9f9f9"
                id="bodyTable"
              >
                <tbody>
                  <tr>
                    <td
                      style="padding-right: 10px; padding-left: 10px"
                      align="center"
                      valign="top"
                      id="bodyCell"
                    >
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        class="wrapperWebview"
                        style="max-width: 600px"
                      >
                        <tbody>
                          <tr>
                            <td align="center" valign="top">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody></tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        class="wrapperBody"
                        style="max-width: 600px"
                      >
                        <tbody>
                          <tr>
                            <td align="center" valign="top">
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                class="tableCard"
                                style="
                                  background-color: #fff;
                                  border-color: #e5e5e5;
                                  border-style: solid;
                                  border-width: 0 1px 1px 1px;
                                "
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        background-color: #2c4975;
                                        font-size: 1px;
                                        line-height: 3px;
                                      "
                                      class="topBorder"
                                      height="3"
                                    >
                                      &nbsp;
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 5px;
                                        padding-left: 20px;
                                        padding-right: 20px;
                                      "
                                      align="center"
                                      valign="top"
                                      class="mainTitle"
                                    >
                                      <h2
                                        class="text"
                                        style="
                                          color: #000;
                                          font-family: Poppins, Helvetica, Arial, sans-serif;
                                          font-size: 28px;
                                          font-weight: 500;
                                          font-style: normal;
                                          letter-spacing: normal;
                                          line-height: 36px;
                                          text-transform: none;
                                          text-align: center;
                                          padding: 0;
                                          margin: 0;
                                        "
                                      >
                                        Hi ${email}
                                      </h2>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 30px;
                                        padding-left: 20px;
                                        padding-right: 20px;
                                      "
                                      align="center"
                                      valign="top"
                                      class="subTitle"
                                    >
                                      <h4
                                        class="text"
                                        style="
                                          color: #999;
                                          font-family: Poppins, Helvetica, Arial, sans-serif;
                                          font-size: 16px;
                                          font-weight: 500;
                                          font-style: normal;
                                          letter-spacing: normal;
                                          line-height: 24px;
                                          text-transform: none;
                                          text-align: center;
                                          padding: 0;
                                          margin: 0;
                                        "
                                      >
                                        Thank you for registering
                                      </h4>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="padding-left: 20px; padding-right: 20px"
                                      align="center"
                                      valign="top"
                                      class="containtTable ui-sortable"
                                    >
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        class="tableDescription"
                                        style=""
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              style="padding-bottom: 20px"
                                              align="center"
                                              valign="top"
                                              class="description"
                                            >
                                              <p
                                                class="text"
                                                style="
                                                  color: #666;
                                                  font-family: 'Open Sans', Helvetica, Arial,
                                                    sans-serif;
                                                  font-size: 14px;
                                                  font-weight: 400;
                                                  font-style: normal;
                                                  letter-spacing: normal;
                                                  line-height: 22px;
                                                  text-transform: none;
                                                  text-align: center;
                                                  padding: 0;
                                                  margin: 0;
                                                "
                                              >
                                              now you can continue to your dashboard and apply for 
                                              accomodation mind the required documents is your ID proof of 
                                              your financials or bbursary and proof of registaration or any 
                                              proof that you are a registered student.
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        class="tableButton"
                                        style=""
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              style="padding-top: 20px; padding-bottom: 20px"
                                              align="center"
                                              valign="top"
                                            >
                                              <table
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                align="center"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        background-color: #2c4975;
                                                        padding: 12px 35px;
                                                        border-radius: 50px;
                                                      "
                                                      align="center"
                                                      class="ctaButton"
                                                    >
                                                      <a
                                                        href="#"
                                                        style="
                                                          color: #fff;
                                                          font-family: Poppins, Helvetica,
                                                            Arial, sans-serif;
                                                          font-size: 13px;
                                                          font-weight: 600;
                                                          font-style: normal;
                                                          letter-spacing: 1px;
                                                          line-height: 20px;
                                                          text-transform: uppercase;
                                                          text-decoration: none;
                                                          display: block;
                                                        "
                                                        target="_blank"
                                                        class="text"
                                                        >Apply Now</a
                                                      >
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size: 1px; line-height: 1px" height="20">
                                      &nbsp;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                class="space"
                              >
                                <tbody>
                                  <tr>
                                    <td style="font-size: 1px; line-height: 1px" height="30">
                                      &nbsp;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        class="wrapperFooter"
                        style="max-width: 600px"
                      >
                        <tbody>
                          <tr>
                            <td align="center" valign="top">
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                class="footer"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                      "
                                      align="center"
                                      valign="top"
                                      class="socialLinks"
                                    >
                                      <a
                                        href="#facebook-link"
                                        style="display: inline-block"
                                        target="_blank"
                                        class="facebook"
                                      >
                                        <img
                                          alt=""
                                          border="0"
                                          src="http://email.aumfusion.com/vespro/img/social/light/facebook.png"
                                          style="
                                            height: auto;
                                            width: 100%;
                                            max-width: 40px;
                                            margin-left: 2px;
                                            margin-right: 2px;
                                          "
                                          width="40"
                                        />
                                      </a>
                                      <a
                                        href="#twitter-link"
                                        style="display: inline-block"
                                        target="_blank"
                                        class="twitter"
                                      >
                                        <img
                                          alt=""
                                          border="0"
                                          src="http://email.aumfusion.com/vespro/img/social/light/twitter.png"
                                          style="
                                            height: auto;
                                            width: 100%;
                                            max-width: 40px;
                                            margin-left: 2px;
                                            margin-right: 2px;
                                          "
                                          width="40"
                                        />
                                      </a>
                                      <a
                                        href="#instagram-link"
                                        style="display: inline-block"
                                        target="_blank"
                                        class="instagram"
                                      >
                                        <img
                                          alt=""
                                          border="0"
                                          src="http://email.aumfusion.com/vespro/img/social/light/instagram.png"
                                          style="
                                            height: auto;
                                            width: 100%;
                                            max-width: 40px;
                                            margin-left: 2px;
                                            margin-right: 2px;
                                          "
                                          width="40"
                                        />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="padding: 10px 10px 5px"
                                      align="center"
                                      valign="top"
                                      class="brandInfo"
                                    >
                                      <p
                                        class="text"
                                        style="
                                          color: #bbb;
                                          font-family: 'Open Sans', Helvetica, Arial,
                                            sans-serif;
                                          font-size: 12px;
                                          font-weight: 400;
                                          font-style: normal;
                                          letter-spacing: normal;
                                          line-height: 20px;
                                          text-transform: none;
                                          text-align: center;
                                          padding: 0;
                                          margin: 0;
                                        "
                                      >
                                        ©&nbsp;Gaugelo. | 50 Fuller Road, Bertrams, Johannesburg | Gauteng, South Africa.
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="padding: 0px 10px 20px"
                                      align="center"
                                      valign="top"
                                      class="footerLinks"
                                    >
                                      <p
                                        class="text"
                                        style="
                                          color: #bbb;
                                          font-family: 'Open Sans', Helvetica, Arial,
                                            sans-serif;
                                          font-size: 12px;
                                          font-weight: 400;
                                          font-style: normal;
                                          letter-spacing: normal;
                                          line-height: 20px;
                                          text-transform: none;
                                          text-align: center;
                                          padding: 0;
                                          margin: 0;
                                        "
                                      >
                                        <a
                                          href="#"
                                          style="color: #bbb; text-decoration: underline"
                                          target="_blank"
                                          >View Web </a
                                        >&nbsp;|&nbsp;
                                        <a
                                          href="#"
                                          style="color: #bbb; text-decoration: underline"
                                          target="_blank"
                                          >View Buildings </a
                                        >&nbsp;|&nbsp;
                                        <a
                                          href="#"
                                          style="color: #bbb; text-decoration: underline"
                                          target="_blank"
                                          >Privacy Policy</a
                                        >
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="padding: 0px 10px 10px"
                                      align="center"
                                      valign="top"
                                      class="footerEmailInfo"
                                    >
                                      <p
                                        class="text"
                                        style="
                                          color: #bbb;
                                          font-family: 'Open Sans', Helvetica, Arial,
                                            sans-serif;
                                          font-size: 12px;
                                          font-weight: 400;
                                          font-style: normal;
                                          letter-spacing: normal;
                                          line-height: 20px;
                                          text-transform: none;
                                          text-align: center;
                                          padding: 0;
                                          margin: 0;
                                        "
                                      >
                                        If you have any quetions please contact us
                                        <a
                                          href="#"
                                          style="color: #bbb; text-decoration: underline"
                                          target="_blank"
                                          >support@mail.com.</a
                                        >
                                        <br />
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size: 1px; line-height: 1px" height="30">
                                      &nbsp;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td style="font-size: 1px; line-height: 1px" height="30">
                              &nbsp;
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              `,
              };
              // Posting data to my Node email server
              axios.post("http://localhost:5000/api/sendMail", dataTosubmit);
              setLoading(false);
              navigate("/registaration-complete");
            });
        });

        console.log("user created");
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
                    <h3 className="login-heading mb-4">Register</h3>
                    <p>Register an account before you apply for res</p>
                    {hasError === true ? (
                      <div class="alert alert-danger" role="alert">
                        {message}
                      </div>
                    ) : (
                      ""
                    )}
                    <form>
                      <div className="form-floating mb-3">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="form-control"
                          // id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="form-control"
                          // id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={(e) => setRepeatPassword(e.target.value)}
                          type="password"
                          className="form-control"
                          // id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">
                          Repeat Password
                        </label>
                      </div>
                      <div className="d-grid">
                        <button
                          onClick={handleSubmit}
                          className="
                          btn btn-lg btn-primary btn-login
                          text-uppercase
                          fw-bold
                          mb-2
                        "
                          disabled={loading ? true : false}
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
                          {loading ? "" : "Sign Up"}
                        </button>
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

export default Register;
