import React, { useEffect } from "react";
import { useStateValue } from "../State/StateProvider";

import $ from "jquery";

function CartItem(props) {

  const [{basket}, dispatch] = useStateValue();
  const product = props.product;

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 cart-item">
      <div className="row m-sm-3 m-1 bg-light mb-3">
        <div className="col p-0">
          <h5 className="p-4 m-0 bg-dark text-light">{product.title}</h5>
          <div className="bg-secondary p-md-4 p-2 text-center w-100">
            <img className="mw-100 product-item-image" src={product.img} />
          </div>
          <p className="pl-3 mb-2 mt-3 m-0">{product.description}</p>
          <p className="pl-3 m-0">
            <small>$</small>
            <strong>{product.price.toFixed(2)}</strong>
          </p>
          <div className="mt-3 mx-2 mb-2">
            <button
              onClick={e => removeFromCart(e)}
              className="btn btn-primary p-3 pt-0 w-100"
            >
              remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  function removeFromCart(e) {

  dispatch({
    type: "REMOVE_FROM_CART",
    id: product.id,
  });

/*
    $(e.target).closest(".cart-item").hide("slow", () => {
      // Dispatch from here once it's implemented properly to animate.
    });
*/

  }
}

export default CartItem;
