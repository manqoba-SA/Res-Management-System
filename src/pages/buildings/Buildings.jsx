import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import "./Buildings.css";
import durbanPhoto from "../../images/kzn.jpg";
import joburgPhoto from "../../images/security.jpg";
import Footer from "../../components/footer/Footer";
import { Link, Outlet } from "react-router-dom";

export default function Buildings() {
  return (
    <Fragment>
      <Navbar />
      <section className="dark animate__animated animate__fadeIn animate__faster">
        <div className="container py-4">
          <h1 className="h1 text-center" id="pageHeaderTitle">
            Explore our buildings
          </h1>

          <article className="postcard dark blue">
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src={joburgPhoto}
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">Dorfontein jHB</a>
              </h1>
              <div className="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>50 Fuller Road,
                  Bertrams, Johannesburg
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat asperiores inventore beatae accusamus odit
                minima enim, commodi quia, doloribus eius! Ducimus nemo
                accusantium maiores velit corrupti tempora reiciendis molestiae
                repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt
                neque nulla unde ipsum dolores nobis enim quidem excepturi,
                illum quos!
              </div>
              <div>
                <Link to="/dorfontein">
                  <button classNameName="btn view-btn btn-primary">
                    View Building
                  </button>
                </Link>
              </div>
            </div>
          </article>
          <article className="postcard dark red">
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src={durbanPhoto}
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red">
                <a href="#">Durban PineTown</a>
              </h1>
              <div className="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>25Frara drive
                  Pinetown, 3610
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat asperiores inventore beatae accusamus odit
                minima enim, commodi quia, doloribus eius! Ducimus nemo
                accusantium maiores velit corrupti tempora reiciendis molestiae
                repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt
                neque nulla unde ipsum dolores nobis enim quidem excepturi,
                illum quos!
              </div>
              <div>
                <Link to="/durban">
                  <button classNameName="btn view-btn">View Building</button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}
