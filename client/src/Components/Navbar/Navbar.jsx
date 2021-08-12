import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import { UserContext } from "../../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <React.Fragment>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">
              LogOut
            </Link>
          </li>
        </React.Fragment>
      );
    } else {
      return(
        <React.Fragment>
           <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign-in">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign-up">
                  Sign Up
                </Link>
              </li>
        </React.Fragment>
      )
    }
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Find a Pro
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
