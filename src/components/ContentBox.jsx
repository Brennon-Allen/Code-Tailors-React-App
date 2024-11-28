
export default function ContentBox({topText, heading, buttonText, buttonFunction, text}) {

  return (
    <>
      <div className="content-box">
        <h1 className="content-topText">{topText}</h1>
        <h1 className="content-heading">{heading}</h1>
        <br></br>
        <div className="flex-center-column button-box">
          <button onClick={buttonFunction}>{buttonText}</button>
        </div>
        <h2 className="content-subtitle">
          {text}
        </h2>
      </div>
    </>
  );
}
