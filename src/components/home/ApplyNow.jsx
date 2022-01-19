import React from "react";
import "./ApplyNow.css";
import Fade from "react-reveal/Fade";
import image1 from "../../images/catering1.jpg";

function ApplyNow() {
  return (
    <section id="four">
      <div className="apply-now d-sm-flex align-items-center justify-content-between w-100">
        <Fade left>
          <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline">
            <span className="text-secondary text-uppercase">Applications</span>
            <h1 className="display-4 my-4 font-weight-bold text-header">
              Want to stay with Us?
            </h1>
            <a
              href="#"
              className="apply-btn btn px-5 py-3 text-white mt-3 mt-sm-0"
            >
              Get Started
            </a>
          </div>
        </Fade>
        <Fade right>
          <div className="col-md-8 h-100 clipped background-photo"></div>
        </Fade>
      </div>
    </section>
  );
}

export default ApplyNow;
