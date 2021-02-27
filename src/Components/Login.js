import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { authCraterd } from "../config/config";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLoginButton = e => {
      e.preventDefault();

      // Login with firebase.
      authCraterd.signInWithEmailAndPassword(email, password)
      .then(auth => {
          if (auth){
              history.push("/");
          }
      })
      .catch(error => alert(error.message));
  }

  const handleRegisterButton = e => {
      e.preventDefault();
      
      // Create account with firebase.
      authCraterd.createUserWithEmailAndPassword(email, password)
      .then(auth => {
          if (auth){
              history.push("/");
          }
      })
      .catch(error => alert(error.message));
  }

  const handleDemoButton = e => {
    e.preventDefault();

    // Login with firebase using demo creds.
    authCraterd.signInWithEmailAndPassword("demo@demo.com", "123456")
    .then(auth => {
        if (auth){
            history.push("/");
        }
    })
    .catch(error => alert(error.message));
  };

  return (
    <div className="container mt-3">
      <div className="row p-3">
        <div className="border col-md-6 offset-md-3 p-5 bg-white rounded">
          <h2 className="mb-4">Login</h2>

          <form>
            <label>
              <strong>e-mail</strong>
            </label>
            <input
              className="form-control mb-3"
              type="text"
              placeholder="user@company.com"
              label="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>
              <strong>password</strong>
            </label>
            <input
              className="form-control mb-5"
              type="password"
              placeholder=""
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <hr />

            <button className="btn mb-3 btn-primary w-100" type="submit" onClick={handleLoginButton}>login</button>

            <button className="btn mb-3 btn-primary w-100" onClick={handleDemoButton}>demo</button>

            <button className="btn btn-outline-dark w-100" onClick={handleRegisterButton}>
              create account
            </button>
          </form>
        </div>

        <div className="col-md-6 offset-md-3 p-5 text-center">
          <strong>Craterd</strong> is a subsidiary of{" "}
          <strong>Pew Pew Space Indsutries</strong>.
        </div>
      </div>
    </div>
  );
}
