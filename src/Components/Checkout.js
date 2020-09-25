import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useStateValue } from "../State/StateProvider";
import GetCartPriceTotal from "./GetCartPriceTotal";

export default function Checkout(){

    const [{cart, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(null);

    const mappedCartItems = cart.map((item) => {
        return (
            <li className="list-group-item d-flex p-3 justify-content-between">
                <span>
                    <strong>{item.title}</strong>
                </span>
                <span>
                    {item.price}
                </span>
            </li>
        );
    });

    const handleCardChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    const handleSubmit = e => {

    }

    return (
      <div className="container bg-white p-md-5 p-4 mt-md-5 checkout-section">
        <div className="row">

          <div className="col-12">
            <span>
              <h1>Checkout</h1>
              <hr />
            </span>
          </div>

          <div className="col-md-6 h-100 p-4">
            <h4 className="p-0 m-0">Review your order:</h4>
            <ul className="list-group mt-1 list-group-flush">
              {mappedCartItems}
              <li className="list-group-item d-flex p-3 justify-content-between list-group-item-dark">
                <span>
                  <strong>Total: </strong>
                </span>
                <span>
                  <GetCartPriceTotal />
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-6 h-100 p-4 mt-5">
              <h6>Delivery Address</h6>
              <hr/>
                  <p className="p-0 m-0">{user?.email}</p>
                  <p className="p-0 m-0">1234 Demo dr.</p>
                  <p className="p-0 m-0">DemoTown, VA</p>
          </div>
            
          <div className="col-12 mt-5">
            <span>
              <h1>Payment</h1>
              <hr />
            </span>
          </div>

          <div className="col-md-6 bg-light offset-md-3 p-5 mt-5 border rounded">
              <form onSubmit={handleSubmit}>
                  <h6 className="mb-4">Payment Details</h6>
                  <CardElement onChange={handleCardChange} />
                  <button className="btn btn-primary w-100 mt-4">place order</button>
              </form>
          </div>

        </div>
      </div>
    );
}