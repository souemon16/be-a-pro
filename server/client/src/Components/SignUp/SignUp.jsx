import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignUp.css";
import signUpImage from "../../Resources/Images/signup-image.jpg";

const SignUp = () => {
  let history = useHistory();
  
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", confirmpassword: ""
  });

  let name;
  let value;

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value})
  }
  console.log(user);

  const postData = async(e) => {
    e.preventDefault();

    const { name, email, phone, work, password, confirmpassword } = user;

    const res = await fetch('/sign-up', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, phone, work, password, confirmpassword
        })
    });
    const data = await res.json();
    if(data.status === 422 || !data ){
      window.alert("Registration Unsuccessfull");
    } else {
      window.alert("Registration Successfull");
      history.push("/sign-in");
    }
  }
  return (
    <React.Fragment>
      <div className="signup">
      <div className="signup-container">
        <div className="signup-form">
        <span className="circle one"></span>
            <span className="circle two"></span>
            <span className="circle three"></span>
            <span className="circle four"></span>
          <div className="heading">
            <h1>Registration Form</h1>
          </div>
         <div className="wrap2">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={user.name} onChange={handleInput} />
            <span className="focus-input"></span>
          </div>
          <div className="wrap2">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" value={user.email} onChange={handleInput} />
            <span className="focus-input"></span>
          </div>
          <div className="wrap">
            <div className="wrap2 f1">
              <label htmlFor="phone">Phone</label>
              <input type="number" name="phone" id="phone" value={user.phone} onChange={handleInput} />
              <span className="focus-input"></span>
            </div>
            <div className="wrap2 f2">
              <label htmlFor="work">Work</label>
              <input type="text" name="work" id="work" value={user.work} onChange={handleInput} />
              <span className="focus-input"></span>
            </div>
          </div>
          <div className="wrap2">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={user.password} onChange={handleInput} />
            <span className="focus-input"></span>
          </div>
          <div className="wrap2">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" name="confirmpassword" id="confirmpassword" value={user.confirmpassword} onChange={handleInput} />
            <span className="focus-input"></span>
          </div>
          <button className="sign-btn" type="submit" onClick={postData}>
            Sign Up
          </button>
          <p className="login-para">Already Have a Account. Please Log In</p>
        </div>
        <div className="image">
          <img src={signUpImage} alt="SignUp Image" className="img" />
        </div>
      </div>
      <span className="big-circle-signup"></span>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
