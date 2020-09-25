import React from "react";
import { useStateValue } from "../State/StateProvider";
import GetCartPriceTotal from "./GetCartPriceTotal";

export default function Checkout(){

    const [{cart, user}, dispatch] = useStateValue();

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

    return (
      <div className="container bg-white p-md-5 p-4 mt-md-5 checkout-section">
        <div className="row">
          <div className="col-12">
            <span>
              <h1>Checkout</h1>
              <hr />
            </span>
          </div>

          <div className="col-12 border p-4">
            <h6 className="p-0 m-0">Review your order:</h6>
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

          <div className="col-12 p-4 mt-5 border">
              <h5>Delivery Address</h5>
              <hr/>
                  <p className="p-0 m-0">{user?.email}</p>
                  <p className="p-0 m-0">1234 Demo dr.</p>
                  <p className="p-0 m-0">DemoTown, VA</p>
          </div>

        </div>
      </div>
    );
}