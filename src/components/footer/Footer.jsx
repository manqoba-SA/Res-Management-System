import React from "react";
import "./Footer.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import image1 from "../../images/catering1.jpg";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>50 Fuller Road, Bertrams, Johannesburg</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+27(0)72 207 8059</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>luvhani@gaugelo.co.za</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#">
                    <i
                      className="fa fa-facebook-official"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-google-plus-g google-bg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Promotions</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Apply Now</a>
                  </li>
                  <li>
                    <a href="#">Our Gallery</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Covid</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>HEAD OFFICE</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>50 Fuller Road, Bertrams, Johannesburg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2021, All Right Reserved
                  <a href="https://codepen.io/anupkumar92/">
                    Designed by Nqobi💻
                  </a>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
