import React from 'react'
import './SignIn.css';
import signInImage from '../../Resources/Images/signin-image.jpg';

const SignIn = () => {
    return (
        <React.Fragment>
            <div className="signin-container">
            <span className="big-circle-signup"></span>
            <div className="signin-form">
            <span className="circle two"></span>
            <span className="circle three"></span>
            <span className="circle four"></span>
              <div className="heading">
                <h1>Login Form</h1>
              </div>
              <div className="wrap2">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
                <span className="focus-input"></span>
              </div>
              <div className="wrap2">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <span className="focus-input"></span>
              </div>
              <button className="sign-btn" type="submit">Sign In</button>
              <p className="signup-para">Don't Have a Account. Please Sign Up</p>
            </div>
            <div className="image">
                <img src={signInImage} alt="SignIn Image" className="img" />
                {/* <p className="login-para2">Don't Have a Account. Please Sign Up</p> */}
              </div>
          </div>
        </React.Fragment>
    )
}

export default SignIn
