import React from "react";
import { Link } from "react-router-dom";

class WelcomeSignup extends React.Component {
  render() {
    return (
      <div className="container-fluid welcome-signup-box m-0 text-light">
        <div className="container mt-lg-4 mb-3 p-5">
          <div className="row">
            <div className="col-md-7 p-md-5 mb-2">
              <h1>Welcome</h1>
              <p>
                We are the number one providers of wholesale raw asteroid ore
                and asteroid refined metals in all five sectors!
              </p>
              <Link to="/login">
                <button className="btn btn-outline-light px-4 py-2" type="submit">
                  Sign Up
                </button>
                <button className="btn text-light ml-2 py-2" type="submit">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeSignup;
