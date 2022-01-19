import React from "react";
import "./ImagesIntro.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import image1 from "../../images/catering1.jpg";

function ImagesIntro() {
  return (
    <section id="sec-features" className="sec-features pt-5 pb-5">
      <div className="container">
        <div className="row align-items-center">
          <Fade left>
            <div className="col-md-6">
              <h3 className="h4">Self Catering</h3>

              <hr />

              <p>
                The residence provides catering facilities, including stoves,
                microwaves and fridges.
              </p>
            </div>
          </Fade>

          <div className="col-md-6 text-center show-image">
            <Zoom>
              <img src={image1} />
            </Zoom>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 text-center show-image">
            <Zoom>
              <img src={image1} />
            </Zoom>
          </div>
          <Fade right>
            <div className="col-md-6">
              <h3 className="h4">Students Interaction</h3>

              <hr />

              <p>
                We encourage leadership, learning, and tolerance of all
                cross-cultural perspectives.
              </p>
            </div>
          </Fade>
        </div>

        <div className="row align-items-center">
          <Fade left>
            <div className="col-md-6">
              <h3 className="h4">Safety</h3>

              <hr />

              <p>
                We’ll provide The safety and living conditions of our students
                are of great importance.
              </p>
            </div>
          </Fade>
          <div className="col-md-6 show-image text-center">
            <Zoom>
              <img src={image1} />
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImagesIntro;
