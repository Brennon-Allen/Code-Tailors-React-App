import { useState } from "react";
import closeIcon from "../assets/close-icon.png"

export default function Calculator({toggle}) {
    const [status, setStatus] = useState({toggle})

    function close(){
        setStatus(false)
    }

  return (
    <div className="flex-left-align calc-container">
        <img src={closeIcon} className="close-icon-calc" onClick={close}/>
        <h1 className="welcome-title">Calculate Cost</h1>
        <div className="cost-form flex-left-align">
          <h2 className="welcome-text">Select the Required <span className="bold-blue">Features</span> & <span className="bold-blue">Components</span></h2>
          <div className="input-container">
            <input type="checkbox" name="navigation" value="Navigation" />
            <label htmlFor="navigation" className="cost-form-input">
              Navigation Menu
            </label>
          </div>
          <div className="input-container">
            <input type="checkbox" name="navigation" value="Landing Page" />
            <label htmlFor="landingPage" className="cost-form-input">
              Landing Page
            </label>
          </div>
          <div className="input-container">
            <input type="checkbox" name="navigation" value="Text Content" />
            <label htmlFor="textContent" className="cost-form-input">
              Text Content
            </label>
          </div>
          <div className="input-container">
            <input type="checkbox" name="navigation" value="Media Content" />
            <label htmlFor="mediaContent" className="cost-form-input">
              Media Content
            </label>
          </div>
          <div className="input-container">
            <input type="checkbox" name="navigation" value="Contact Form" />
            <label htmlFor="contactForm" className="cost-form-input">
              Contact Form
            </label>
          </div>
          <div className="input-container">
            <input type="checkbox" name="navigation" value="Scheduling" />
            <label htmlFor="scheduling" className="cost-form-input">
              Scheduling
            </label>
          </div>
          <div className="input-container">
            <input type="checkbox" name="navigation" value="Calculations" />
            <label htmlFor="calculations" className="cost-form-input">
              Calculations
            </label>
          </div>
          <div className="input-container">
            <input type="checkbox" name="navigation" value="User Tools" />
            <label htmlFor="userTools" className="cost-form-input">
              User Tools (Front-End)
            </label>
          </div>
          <div className="input-container">
            <input type="checkbox" name="navigation" value="Business Tools" />
            <label htmlFor="businessTools" className="cost-form-input">
              Business Tools (Back-End)
            </label>
          </div>
        </div>
        </div>
  );
}
