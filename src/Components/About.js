import React from "react";

function About(props) {
  // const [myStyle,setMyStyle]=useState(
  //     {
  //         color: 'black',
  //         backgroundColor: 'white'
  //     }
  // )
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#575757",
    backgroundColor: props.mode === "dark" ? "#575757" : "white",
  };
  return (
    <div className="container">
      <h2
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        About Us
      </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              With <strong>TextTweakr</strong>, you can quickly analyze your
              text to get insights such as word count, character count, and
              estimated reading time. Our real-time text summary updates as you
              type, giving you immediate feedback on your writing.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              We believe that powerful text manipulation tools should be
              accessible to everyone. That's why TextTweakr is completely free
              to use. No hidden fees, no subscriptions, just pure text tweaking
              goodness.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Features
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                <strong>Convert to Uppercase:</strong> Easily convert all your
                text to uppercase with just one click.
              </p>
              <p>
                <strong>Convert to Lowercase:</strong> Change all your text to
                lowercase effortlessly.
              </p>
              <p>
                <strong>Remove Extra Spaces:</strong> Clean up your text by
                removing unnecessary spaces.
              </p>
              <p>
                <strong>Clear Text:</strong> Start fresh by clearing all the
                text in the input box.
              </p>
              <p>
                <strong>Copy Text:</strong> Quickly copy the modified text to
                your clipboard.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Browser Compatibile
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our tool is designed to work seamlessly across all modern web
              browsers. Whether you are using Chrome, Firefox, Safari, or Edge,
              you can enjoy the full functionality of
              <strong>TextTweakr</strong> without any compatibility issues.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
