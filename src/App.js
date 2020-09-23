import React from 'react';
import './App.css';
import {firebaseConfig} from './config/config.js';

import Header from "./Header.js";
import Home from "./Home.js";

function App() {
  return (

    <div className="app">
      <Header />
      <Home />
    </div>

  );
}

export default App;
