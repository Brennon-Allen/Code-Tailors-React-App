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
        <h1 className="welcome-title">CUSTOM WEBSITE DEVELOPMENT SERVICES</h1>
        <br></br>
        <h2 className="desc-text landing-subtitle">
          Use our <span className="bolder">Cost Estimater Tool</span> to get a
          quote instantly, or{" "}
          <span className="bolder">Schedule a Free Consultation</span> with one
          of our developers.{" "}
        </h2>
        <div className="flex-center-column button-box">
          <button onClick={openCalc} className="calculate-button">Calculate Estimate</button>
          <button className="button-fix">Schedule Consultation</button>
        </div>
      </div>
    </>
  );
}
