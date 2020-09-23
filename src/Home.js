import React from "react";

import WelcomeSignup from "./Components/WelcomeSignup.js"
import ProductList from "./Components/ProductList.js";

class Home extends React.Component {

  render() {

    const authenticated = false;

    return (
      <div className="container-fluid p-0">
        
        { authenticated ? "" : <WelcomeSignup /> }

        <ProductList />

      </div>
    );
  }

  componentDidMount() {}
}

export default Home;
