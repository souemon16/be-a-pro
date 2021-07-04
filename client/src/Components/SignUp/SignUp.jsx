import React from "react";
import "./SignUp.css";
import signUpImage from "../../Resources/Images/signup-image.jpg";

const SignUp = () => {
  return (
    <React.Fragment>
      <div className="signup-container">
        <div className="signup-form">
          <div className="heading">
            <h1>Registration Form</h1>
          </div>
          <div className="wrap2">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <span className="focus-input"></span>
          </div>
          <div className="wrap2">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />
            <span className="focus-input"></span>
          </div>
          <div className="wrap">
            <div className="wrap2 f1">
              <label htmlFor="phone">Phone</label>
              <input type="number" name="phone" id="phone" />
              <span className="focus-input"></span>
            </div>
            <div className="wrap2 f2">
              <label htmlFor="work">Work</label>
              <input type="text" name="work" id="work" />
              <span className="focus-input"></span>
            </div>
          </div>
          <div className="wrap2">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <span className="focus-input"></span>
          </div>
          <div className="wrap2">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              name="Confirm Password"
              id="confirmpassword"
            />
            <span className="focus-input"></span>
          </div>
          <button className="sign-btn" type="submit">
            Sign Up
          </button>
          <p className="login-para">Already Have a Account. Please Log In</p>
        </div>
        <div className="image">
          <img src={signUpImage} alt="SignUp Image" className="img" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
