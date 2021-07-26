import React, { useEffect } from "react";
import "./About.css";
import profile from '../../Resources/Images/profile.jpg';
import shape from "../../Resources/Images/shape.png";
import { useHistory } from "react-router-dom";

const About = () => {
    let history = useHistory();

    const callAboutPage = async () => {
      try {
        const res = await fetch('/about', {
          method: 'GET',
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"
        });

        const data = await res.json();

        if(!res.status === 200){
          const error = new Error();
          throw error;
        }

      } catch (error) {
        console.log(error);
        history.push('/sign-in');
      }
      
    }

  useEffect(() => {
    callAboutPage();
  }, [])

  return (
    <React.Fragment>
      <div className="about-container">
      <span className="big-circle"></span>
      <img src={shape} className="square" alt="" />
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={profile} className="img-fluid rounded-start card-image" alt="..." />
            </div>
            <div className="col-md-8">
            <span className="circle one"></span>
            <span className="circle two"></span>
            <span className="circle three"></span>
            <span className="circle four"></span>
              <div className="card-body d-flex flex-column justify-content-center align-items-start">
                <h5 className="card-title">Your Profile</h5>
                <div className="des">
                <h6>User Id:</h6> <p className="card-text"> 5566524122</p>
                </div>
                <div className="des">
                <h6>Name:</h6> <p className="card-text"> Sourav Sarker Emon</p>
                </div>
                <div className="des">
                <h6>Email:</h6> <p className="card-text"> souemon16@gmail.com</p>
                </div>
                <div className="des">
                <h6>Phone:</h6> <p className="card-text"> 01303081801</p>
                </div>
                <div className="des">
                <h6>Profession:</h6> <p className="card-text"> Full Stack Web Developer</p>
                </div>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button className="btn btn-danger">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
