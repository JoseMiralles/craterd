import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

import GetCartCount from "./GetCartCount.js";
import GetCartPriceTotal from "./GetCartPriceTotal.js";

function SubTotal() {

  const history = useHistory();

  return (
    <div className="row mt-md-3">
      <div className="cart-banner col text-light p-5">
        <div className="subtotal row">
          <div className="col-md p-3 text-center align-self-center">
            <h3>
              You have <GetCartCount /> items in your cart.
            </h3>
          </div>

          <div className="col-md p-3">
            <CurrencyFormat
              renderText={(value) => (
                <p>
                  <p className="m-0">
                    Subtotal:
                    <strong className="ml-2">{value}</strong>
                  </p>
                  <label>
                    <input type="checkbox" className="mr-2 mt-2" />
                    I'm renting hover carts.
                  </label>
                </p>
              )}
              decimalScale={2}
              value={GetCartPriceTotal()}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <button onClick={e => history.push("/checkout")} className="btn btn-primary">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubTotal;
