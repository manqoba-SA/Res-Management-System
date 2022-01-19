import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import WelcomeComponent from "./components/home/WelcomeCompnent";
import ImagesIntro from "./components/home/ImagesIntro";
import ApplyNow from "./components/home/ApplyNow";
import Slider from "react-animated-slider";
import Footer from "./components/footer/Footer";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";
import Zoom from "react-reveal/Zoom";
import photo1 from "./images/Jobe.jpg";
import photo2 from "./images/indoor.jpeg";
import photo3 from "./images/kzn.jpg";
const content = [
  {
    title: "2022 Applications Open",
    description: "Apply and secure a room 2022 academic year",
    button: "Read More",
    image: photo1,
  },
  {
    title: "Safe Accredited Accomodation for Uj students",
    description:
      "We provide best student accomodation from our building in Johanersbug close to campus",
    button: "Apply Now",
    image: photo2,
  },
  {
    title: "Safe Accredited Accomodation for Ukzn students",
    description: "We have building nice accomodation close to Ukzn",
    button: "Apply now",
    image: photo3,
  },
];
function App() {
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <Navbar />
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          // <Zoom duration={3000}>
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button className="btn btn-primary slider-btn">
                {item.button}
              </button>
            </div>
          </div>
          // </Zoom>
        ))}
      </Slider>
      <WelcomeComponent />
      <ImagesIntro />
      <ApplyNow />
      <Footer />
    </div>
  );
}

export default App;
