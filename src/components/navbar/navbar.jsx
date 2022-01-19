import React from "react";
import "./header.css";
import logo from "../../images/logo.png";
import hamburger from "../../images/hamburger.png";
import cancel from "../../images/cancel.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light main-menu sticky-top">
        <div className="container">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-link d-block d-md-none"
            onClick={() => setToggleMenu(true)}
          >
            <img src={hamburger} height="25" width="25" />
          </button>

          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt=""
              width="120"
              height="30"
              className="d-inline-block align-text-top"
            />
          </a>

          <ul className="navbar-nav d-flex d-md-none">
            <li className="nav-item">
              <a
                className="btn btn-primary"
                href="{% url 'resgetitapp:login' %}"
              >
                <i className="bx bxs-user-circle mr-1"></i> Log In
              </a>
            </li>
          </ul>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link d-flex">
                  <i className="fa fa-home" aria-hidden="true"></i>
                  <span>Home</span>
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                {/* <> */}
                <Link to="/about" className="nav-link  d-flex">
                  <i className="fa fa-info-circle" aria-hidden="true"></i>
                  About
                  {/* </a> */}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/lifestyle" className="nav-link d-flex">
                  <i className="fa fa-heart" aria-hidden="true"></i>LifeStyle
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/buildings" className="nav-link d-flex">
                  <i className="fa fa-building" aria-hidden="true"></i>
                  <span>Buildings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link d-flex">
                  <i className="fa fa-comments" aria-hidden="true"></i>Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/register"
                  className="nav-link d-flex apply-now-button"
                >
                  <i className="fa fa-bed" aria-hidden="true"></i> Apply
                </Link>
              </li>
            </ul>
            <ul className="login-btn navbar-nav">
              <li className="nav-item ml-md-3">
                <Link to="/login" className="btn btn-primary">
                  <i className="bx bxs-user-circle mr-1"></i> Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Mobile Nav */}
      <nav id="sidebar" className={toggleMenu ? "active" : ""}>
        <div className="sidebar-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-2 text-left">
                <button
                  type="button"
                  id="sidebarCollapseX"
                  className="btn btn-link"
                  onClick={() => setToggleMenu(false)}
                >
                  <img src={cancel} height="25" width="25" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled components links">
          <li className="nav-item active">
            <a className="nav-link d-flex" href="{%url 'resgetitapp:home'%}">
              <i className="fa fa-home" aria-hidden="true"></i>
              <span>Home</span>
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link  d-flex"
              href="{% url 'resgetitapp:products' %}"
            >
              <i className="fa fa-info-circle" aria-hidden="true"></i>About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link d-flex"
              href="{% url 'resgetitapp:support' %}"
            >
              <i className="fa fa-heart" aria-hidden="true"></i>LifeStyle
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link d-flex"
              href="{% url 'resgetitapp:support' %}"
            >
              <i className="fa fa-building" aria-hidden="true"></i>
              <span>Buildings</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link d-flex"
              href="{% url 'resgetitapp:tickets_system' %}"
            >
              <i className="fa fa-comments" aria-hidden="true"></i>Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link d-flex apply-now-button"
              href="{% url 'resgetitapp:register' %}"
            >
              <i className="fa fa-bed" aria-hidden="true"></i> Apply
            </a>
          </li>
        </ul>
        <h6 className="text-uppercase mb-1">Follow Us</h6>
        <ul className="navbar-nav mx-auto d-flex ">
          <li>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
