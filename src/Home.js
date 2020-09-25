import React from "react";

import WelcomeSignup from "./Components/WelcomeSignup.js"
import ProductList from "./Components/ProductList.js";
import { useStateValue } from "./State/StateProvider.js";
import SubTotal from "./Components/SubTotal.js";

function Home() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="container-fluid p-0">
      {user ? <br/> : <WelcomeSignup />}

      <ProductList />
    </div>
  );
}

export default Home;
