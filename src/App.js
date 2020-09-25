import React, { useEffect } from 'react';
import './App.css';

import {authCraterd, firebaseConfig} from './config/config.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./Header.js";
import Home from "./Home.js";
import Cart from "./Components/Cart.js";
import Login from './Components/Login';
import { useStateValue } from './State/StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    authCraterd.onAuthStateChanged((authUser) => {
      if (authUser){
        // User is logged in, update hook.
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      else {
        // User is logged out, update hook
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <Header />

      <Switch>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        {/* Default route needs to always be at the bottom. */}
        <Route path="/">
          <div className="app">
            <Home />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
