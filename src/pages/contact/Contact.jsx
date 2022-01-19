import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import "./Contact.css";
import photo from "../../images/security.jpg";
import Footer from "../../components/footer/Footer";

export default function Conatct() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-contact100 animate__animated animate__fadeIn animate__faster">
        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <span className="contact100-form-title"> Send Us A Message </span>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">First Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Subject</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              ></textarea>
              <label for="floatingPassword">Message</label>
            </div>

            <div className="d-grid">
              <button
                className="
                btn btn-lg btn-primary btn-login
                text-uppercase
                fw-bold
                mb-2
              "
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="social-connect">
              <h4 className="text-center">Connect with us</h4>
              <div className="text-center socials d-flex">
                <div>
                  <a href="#">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </form>

          <div
            className="contact100-more flex-col-c-m"
            style={{
              background: `url('${photo}')`,
            }}
          ></div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
