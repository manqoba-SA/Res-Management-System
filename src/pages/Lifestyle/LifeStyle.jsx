import { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/navbar";
import image1 from "../../images/kzn.jpg";
import "./LifeStyle.css";

export default function Lifestyle() {
  return (
    <Fragment>
      <Navbar />
      <div class="container animate__animated animate__fadeIn animate__faster">
        <h1 class="text-center">Our LifeStyle</h1>

        <div class="row">
          <div class="col-md-6">
            <img src={image1} alt="" class="w-100" />
          </div>
          <div class="col-md-6">
            <div class="row align-items-center h-100">
              <div class="col">
                <h1 class="display-3">Vertically Centered Text</h1>
                <p class="lead">
                  Flexbox grids help you build some really nice layouts.
                  <br />
                  <br />
                  <a href="" class="">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 order-md-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Imac_alu.png"
              alt=""
              class="w-100"
            />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="row align-items-center h-100">
              <div class="col">
                <h1 class="display-3">Vertically Centered Text</h1>
                <p class="lead">
                  Push and pull classes were added to change the order on
                  desktop but still have the image before the text on mobile.
                  <br />
                  <br />
                  <a href="" class="">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
