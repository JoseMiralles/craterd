import { extend } from "jquery";
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row m-md-0 m-3">
          <div className="col-md-2 m-md-5 m-1">
            <h1>Welcome!</h1>
          </div>
          <div className="col-md m-md-5 m-1">
              <p>Sign up to get the best deals in wholesale asteroid drillings!</p>
            <button className="btn btn-outline-dark" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {}
}

export default Home;
