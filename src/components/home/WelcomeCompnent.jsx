import React from "react";
import "./WelcomeComponent.css";
import Fade from "react-reveal/Fade";

function WelcomeComponent() {
  return (
    <section id="sec-about" className="sec-about pb-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-10 col-lg-8">
            <h1 className="h4">Welcome to Gaugelo Properties</h1>
            <h5>More Than Just a Residence</h5>
            <p className="mt-4 mb-4">
              As parents, we know the success of students is greatly influenced
              by their environment conducive for learning. We strive to maintain
              a destruction free environment to ensure success of all students.
              That is why we maintain compliance and accreditation with the
              University of Johannesburg.
            </p>
          </div>
        </div>
        <Fade left>
          <div className="row welcome-icons">
            <div className="col-sm-4">
              <h4>
                <i className="fa fa-map-marker" aria-hidden="true"></i> Location
              </h4>

              <hr />

              <p>
                50 Fuller Road, Bertrams, Johannesburg close to Uj Dorfontein
                Campus
              </p>
            </div>

            <div className="col-sm-4">
              <h4>
                <i className="fa fa-lightbulb-o" aria-hidden="true"></i> Uj
                Accredited
              </h4>

              <hr />

              <p>
                We are a
                <strong className="uj">
                  University of Johannesburg (UJ) accredited
                </strong>
                student accommodation
              </p>
            </div>

            <div className="col-sm-4">
              <h4>
                <i className="fa fa-subway" aria-hidden="true"></i> Transport
              </h4>

              <hr />

              <p>
                We provide safey and comfort transport facilities to go to
                respective campuses
              </p>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="row welcome-icons">
            <div className="col-sm-4">
              <h4>
                <i className="fa fa-map-marker" aria-hidden="true"></i> Location
              </h4>

              <hr />

              <p>
                50 Fuller Road, Bertrams, Johannesburg close to Uj Dorfontein
                Campus
              </p>
            </div>

            <div className="col-sm-4">
              <h4>
                <i className="fa fa-lightbulb-o" aria-hidden="true"></i> Ukzn
                Accredited
              </h4>

              <hr />

              <p>
                We are a
                <strong>University of KwaZulu Natal (Ukzn) accredited</strong>
                student accommodation
              </p>
            </div>

            <div className="col-sm-4">
              <h4>
                <i className="fa fa-subway" aria-hidden="true"></i> Transport
              </h4>

              <hr />

              <p>
                We provide safey and comfort transport facilities to go to
                respective campuses
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default WelcomeComponent;
