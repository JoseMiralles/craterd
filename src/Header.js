import React from "react";
import "./Styles/custom.scss";

import SearchBar from "./Components/SearchBar.js"
import {Link} from "react-router-dom";
import GetCartCount from "./Components/GetCartCount.js";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

        {/* Branding */}
        <Link to="/">
          <span className="navbar-brand ml-lg-5 ml-2 mr-5" href="#">
            CRATERD
          </span>
        </Link>

        {/* Mobile collapsible button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar collapsable section */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* Search */}
          <SearchBar />

          {/* Links */}
          <ul className="navbar-nav ml-auto mr-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/cart">
                <span className="nav-link" href="#">
                 <i className="material-icons">shopping_cart</i>
                 <GetCartCount />
                </span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                UserName
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item" href="#">
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  Orders
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </div>
            </li>
          </ul>
          
        </div>
      </nav>
    );
  }
}

export default Header;
