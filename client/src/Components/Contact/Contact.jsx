import React, { useEffect, useState } from "react";
import "./Contact.css";
import shape from "../../Resources/Images/shape.png";
import email from "../../Resources/Images/email.png";
import phone from "../../Resources/Images/phone.png";
import location from "../../Resources/Images/location.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

  const [userData, setUserData] = useState({ name:"", email:"", phone:"", message:"" });

  const callContactPage = async () => {
    try {
      const res = await fetch('/getData', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      setUserData({...userData, name:data.name, email:data.email, phone:data.phone });

      if(!res.status === 200){
        const error = new Error();
        throw error;
      }

    } catch (error) {
      console.log(error);
    }
    
  }

useEffect(() => {
  callContactPage();
}, [])

const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]:value })
}

// Send Message to Backhend 
const contactForm = async (e) => {
  e.preventDefault();

  const { name, email, phone, message } = userData;

  const res = await fetch('/contact', {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      name, email, phone, message
    })
  });
  const data = await res.json();

  if(!data){
    console.log("Message not Send")
  } else {
    alert("Message Sent");
    setUserData({...userData, message: ""})
  }
}

  return (
    <React.Fragment>
      <div className="contact-container">
        <span className="big-circle"></span>
        <img src={shape} className="square" alt="" />
        <div className="contactform">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              If you have any question or doubt about us. Please let us know about it. We will try to fix it soon. Before 
              submit any things please try our website. Thank you.
            </p>

            <div className="info">
              <div className="information">
                <img src={location} className="icon" alt="" />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <img src={email} className="icon" alt="" />
                <p>thefindapro@gmail.com</p>
              </div>
              <div className="information">
                <img src={phone} className="icon" alt="" />
                <p>+91-351-448-7852</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form method="POST">
              <h3 className="title">Contact us</h3>

              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="input" onChange={handleInput} value={userData.name} />
                <span className="focus-input2"></span>
              </div>

              <div className="input-container">
                  <label htmlFor="email">Email</label>
                <input type="email" name="email" className="input" onChange={handleInput} value={userData.email} />
                <span className="focus-input2"></span>
              </div>

              <div className="input-container">
                  <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" className="input" onChange={handleInput} value={userData.phone} />
                <span className="focus-input2"></span>
              </div>

              <div className="input-container textarea">
                  <label htmlFor="message">Message</label>
                <textarea name="message" className="input" onChange={handleInput}></textarea>
                <span className="focus-input2"></span>
              </div>

              <input onClick={contactForm} type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
