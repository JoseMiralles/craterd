import React from 'react';
import './App.css';

import {firebaseConfig} from './config/config.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./Header.js";
import Home from "./Home.js";
import Cart from "./Components/Cart.js";

function App() {
  return (
    <Router>

      <Header />

      <Switch>

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
