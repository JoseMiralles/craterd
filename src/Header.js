import React from "react";
import "./Styles/custom.scss";

// import SearchBar from "./Components/SearchBar.js";
import { Link, useHistory } from "react-router-dom";
import GetCartCount from "./Components/GetCartCount.js";
import { useStateValue } from "./State/StateProvider";
import { authCraterd } from "./config/config";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  function getListItems(){
    let items = [];

    if (user == null){
      items.push(
        <li className="nav-item">
        <Link to="/login">
          <span className="nav-link" href="#">
            Login <span className="sr-only">(current)</span>
          </span>
        </Link>
      </li>
      );
    }
    else
    {
      items.push(
        <li className="nav-item">
        <Link to="/cart">
          <span className="nav-link" href="#">
            <i className="material-icons">shopping_cart</i>
            <GetCartCount />
          </span>
        </Link>
      </li>
      );
      items.push(

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
          {user?.email}
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdown"
        >
          <Link to="/orders">
            <span className="dropdown-item" href="#">
              Orders
            </span>
          </Link>
          <div className="dropdown-divider"></div>
          <a 
          onClick={()=>{
            authCraterd.signOut();
            history.push("/");
          }}
          className="dropdown-item" href="#">
            Logout
          </a>
        </div>
      </li>
      )
    }
    return items;
  }

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
        {/* <SearchBar /> */}

        {/* Links */}
        <ul className="navbar-nav ml-auto mr-lg-3">
          {getListItems()}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
