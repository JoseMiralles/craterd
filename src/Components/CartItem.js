import React, { useEffect } from "react";
import { useStateValue } from "../State/StateProvider";

import $ from "jquery";
import CurrencyFormat from "react-currency-format";

function CartItem(props) {

  const [{cart}, dispatch] = useStateValue();
  const product = props.product;

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 cart-item">
      <div className="row m-sm-3 m-1 bg-light rounded mb-3">
        <div className="col p-0">
          <h6 className="p-3 m-0 text-dark">{product.title}</h6>
          <hr className="my-0 mx-3"/>
          <div className="p-md-3 p-3 text-center w-100 bg-secondary">
            <img className="mw-100 product-item-image" src={product.img} />
          </div>

          <div className="bg-dark text-light py-1 description-wrapper">
          <p className="pl-3 mb-1 mt-2 m-0">{product.description}</p>
          <p className="pl-3 m-0">
            <strong>
            <CurrencyFormat
                renderText={(value) => value}
                decimalScale={2}
                value={product.price.toFixed(2)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              </strong>
          </p>
          <div className="mt-3 mx-2 mb-2 button-wrapper">
            <button
              onClick={e => removeFromCart(e)}
              className="btn rounded btn-primary p-3 w-100"
            >
              remove from cart
            </button>
          </div>
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
