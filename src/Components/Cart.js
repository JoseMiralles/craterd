import React, { useState } from "react";

import CartItem from "./CartItem.js";
import SubTotal from "./SubTotal.js";

import { useStateValue } from "../State/StateProvider.js";

function Cart() {

    const [{cart}, dispatch] = useStateValue();
  const mappedItems = MapCartItems(cart);

  return (
    <div className="container cart-section">
      <SubTotal />
      <div className="row mt-3">
        <div className="col-12 p-3">
          <h1>Your cart</h1>
          <hr />
        </div>
        {mappedItems}
      </div>
    </div>
  );
}

function MapCartItems(items) {
  return items.map(function (item) {
      console.log(item);
    return <CartItem product={item} />;
  });
}

export default Cart;
