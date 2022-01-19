import "./aboutUs.css";
import Navbar from "../../components/navbar/navbar";
import { Fragment } from "react";
import image1 from "../../images/student.jpg";
import image2 from "../../images/uj student.jpg";
import image3 from "../../images/indoor.jpeg";
import Footer from "../../components/footer/Footer";
export default function AboutUs() {
  return (
    <Fragment>
      <Navbar />
      <div className="container about-us-container animate__animated animate__fadeIn animate__faster">
        <div className="row align-items-center">
          <div
            className="
            col-lg-6 col-md-6
            order-2 order-md-1
            mt-4
            pt-2
            mt-sm-0
            opt-sm-0
          "
          >
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12 mt-4 pt-2">
                    <div
                      className="
                      card
                      work-desk
                      rounded
                      border-0
                      shadow-lg
                      overflow-hidden
                    "
                    >
                      <img src={image1} className="img-fluid" alt="Image" />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div
                      className="
                      card
                      work-desk
                      rounded
                      border-0
                      shadow-lg
                      overflow-hidden
                    "
                    >
                      <img src={image2} className="img-fluid" alt="Image" />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 mt-4 pt-2">
                    <div
                      className="
                      card
                      work-desk
                      rounded
                      border-0
                      shadow-lg
                      overflow-hidden
                    "
                    >
                      <img src={image3} className="img-fluid" alt="Image" />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div className="section-title ml-lg-5">
              <h1 className="text-custom font-weight-normal mb-3">About Us</h1>
              <h4 className="title mb-4">
                Our mission is to provide
                <br /> best accomodation for students.
              </h4>
              <p className=" mb-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit quod
                debitis praesentium pariatur temporibus ipsa, cum quidem
                obcaecati sunt? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit quod debitis praesentium pariatur temporibus
                ipsa, cum quidem obcaecati sunt?
              </p>
              <br />
              <p className=" mb-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit quod
                debitis praesentium pariatur temporibus ipsa, cum quidem
                obcaecati sunt?
              </p>
              <div className="col-12">
                <div className="mt-4 pt-2 text-right">
                  <a href="javascript:void(0)" className="btn btn-primary">
                    Apply Now <i className="mdi mdi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
