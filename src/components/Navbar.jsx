import Logo from "../assets/Logo-white-stroke.png";
import { useState } from "react";
import closeIcon from "../assets/close-icon.png";

export default function Navbar() {
  const [status, setStatus] = useState(false);

  function toggleStatus() {
    setStatus((prevState) => !prevState);
  }

  return (
    <>
      <div className="move-to-front flex-center-row navbar-container">
        <div className="logo-box flex-left-row">
          <img src={Logo} className="logo" />
          <h1 className="logo-text">Code Tailors</h1>
        </div>

        {status ? (
          <div className="menu-expanded flex-center-column">
            <h1 className="title">Navigate</h1>
            <button className="menu-button">Home</button>
            <button className="menu-button">About</button>
            <button className="menu-button">Services</button>
            <button className="menu-button">Contact Us</button>
            <button className="menu-button">Cost Estimator</button>
            <button className="menu-button">Free Consultation</button>
            <img
              src={closeIcon}
              className="close-icon"
              onClick={toggleStatus}
            />
          </div>
        ) : (
          <button className="menu-toggler" onClick={toggleStatus}></button>
        )}
      </div>
    </>
  );
}
