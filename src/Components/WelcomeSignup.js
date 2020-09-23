import React from "react";

class WelcomeSignup extends React.Component {
  render() {
    return (
        <div className="container welcome-signup-box mt-3 p-5 text-light">
          <div className="row">
            <div className="col-md-5 offset-md-1 p-md-5 mb-2">
              <h1>Welcome</h1>
              <p>We are the #1 providers of wholesale asteroid ore and asteroid refined metals in all 9 sectors!</p>
            </div>
            <div className="col-md-5 p-md-5">
                <h4>Join today!</h4>
              <p>
                Sign up to get the best deals in wholesale asteroid ores and refined metals.
              </p>
              <button className="btn btn-outline-light" type="submit">
                Sign Up
              </button>
              <button className="btn text-light" type="submit">
                Login
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default WelcomeSignup;
