import logo from "../assets/logo.png";
import { useState } from "react";

export default function WelcomeBox() {
  const [status, setStatus] = useState(false);

  function openCalc() {
    setStatus(true);
  }

  return (
    <>
    {status ? (
      <Calculator />
    ) : (
      <div className="hide"></div>
    )}
      <div className="welcome-box">
        <h1 className="landing-subtitle">We Specialize In</h1>
        <h1 className="welcome-title">Custom Website Development Services</h1>
        <br></br>
        <div className="flex-center-column button-box">
          <button onClick={openCalc}>Calculate Estimate</button>
          <button>Schedule a Free Consultation</button>
        </div>
        <h2 className="landing-subtitle">
          Use our <span className="bolder">Cost Estimater Tool</span> to get a
          quote instantly, or{" "}
          <span className="bolder">Schedule a Free Consultation</span> with one
          of our developers.{" "}
        </h2>
      </div>
    </>
  );
}
