import React, { Fragment, useRef, useState } from "react";
import Navbar from "../../../components/navbar/navbar";
import image1 from "../../../images/g7.jpg";
import image2 from "../../../images/g8.jpg";
import image3 from "../../../images/indoor.jpeg";
import wifi from "../../../images/icons/wifi-sign.png";
import lounge from "../../../images/icons/lounge.png";
import studying from "../../../images/icons/studying.png";
import washing from "../../../images/icons/washing-machine.png";
import sharing from "../../../images/icons/interior-design.png";
import security from "../../../images/icons/guard.png";

import Footer from "../../../components/footer/Footer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styling.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

function ViewDurban() {
  return (
    <Fragment>
      <Navbar />
      <div className="container page animate__animated animate__fadeIn animate__faster">
        <div className="row">
          <div className="col-5">
            <h1>25Frara drive Pinetown, 3610</h1>
            <hr />
            <h4>Whats in the building</h4>
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-4">
                  <div class="box">
                    <img src={wifi} height={80} width={80} />
                    <p>
                      <b>Unlimited WiFI</b>
                    </p>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-4">
                  <div class="box">
                    <img src={studying} height={80} width={80} />
                    <p>
                      <b>Study Area</b>
                    </p>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-4">
                  <div class="box">
                    <img src={lounge} height={80} width={80} />
                    <p>
                      <b>Tv Lounge Area</b>
                    </p>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-4">
                  <div class="box">
                    <img src={washing} height={80} width={80} />
                    <p>
                      <b>Laundry room</b>
                    </p>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                  <div class="box">
                    <img src={sharing} height={80} width={80} />
                    <p>
                      <b>2 sharing</b>
                    </p>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                  <div class="box">
                    <img src={security} height={80} width={80} />
                    <p>
                      <b>24hrs security</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-primary">Apply now</button>
          </div>
          <div className="col-7">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={image1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image3} />
              </SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default ViewDurban;
