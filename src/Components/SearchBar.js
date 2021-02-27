import { extend } from "jquery";
import React from "react";

class SearchBar extends React.Component {

  render() {
    return (
      <form className="form-inline my-2 mx-lg-3 m-0">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
          <i className="material-icons">search</i>
        </button>
      </form>
    );
  }

  componentDidMount(){
  }

}

export default SearchBar;
