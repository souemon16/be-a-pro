import React, { useContext, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './SignIn.css';
import signInImage from '../../Resources/Images/signin-image.jpg';

import {UserContext} from '../../App';

const SignIn = () => {

  const {state, dispatch} = useContext(UserContext);

  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async(e) => {
    e.preventDefault();

    const res = await fetch('/sign-in', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Credentials")
    }else {
      dispatch({type:"USER", payload: true})
      window.alert("Login Successfull")
      history.push('/');
    }
  }
  
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
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <span className="focus-input"></span>
              </div>
              <div className="wrap2">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                <span className="focus-input"></span>
              </div>
              <button className="sign-btn" type="submit" onClick={loginUser} >Sign In</button>
              <p className="signup-para">Don't Have a Account. Please <Link to='/sign-up'> Sign Up </Link> </p>
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
