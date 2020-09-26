import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../State/StateProvider";
import GetCartPriceTotal, { GetCartPriceTotalFromGivenCart } from "./GetCartPriceTotal";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { useHistory } from "react-router-dom";
import { db } from "../config/config";

export default function Checkout(){

    const [{cart, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [succeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);

    // Re-generate client secret when the cart is changed.
    useEffect(() => {
      const getClientSecret = async () => {
        const amount = GetCartPriceTotalFromGivenCart(cart) * 100;
        const response = await axios({
          method: "post",
          // multiply by 100 since Stripe expects the total in cents, not dollars.
          url: `/payments/create?total=${amount}`
        });
        setClientSecret(response.data.clientSecret);
      };
      getClientSecret();
    }, [cart]);

    const mappedCartItems = cart.map((item) => {
        return (
          <li className="list-group-item d-flex p-3 justify-content-between">
            <span>
              <strong>{item.title}</strong>
            </span>
            <span>
              <CurrencyFormat
                renderText={(value) => value}
                decimalScale={2}
                value={item.price.toFixed(2)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </span>
          </li>
        );
    });

    const handleCardChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      setProcessing(true); //Disable the button to avoid multiple submissions.

      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      }).then(({paymentIntent}) => {

        // - Update orders on remote DB.
        db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          cart: cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        });

        // paymentIntent is basically the confirmation.
        setSucceded(true);
        setError(null);
        setProcessing(false);

        //  Empty the basket
        dispatch({
          type: "EMPTY_CART"
        });

        history.replace("/orders");
      });

      //const payload = await stripe();
    }

    const formatedTotal = (
      <CurrencyFormat 
        renderText = {(value) => (
          value
        )}
        decimalScale={2}
        value={GetCartPriceTotal()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    );

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
                <span>{formatedTotal}</span>
              </li>
            </ul>
          </div>

          <div className="col-md-6 h-100 p-4 mt-5">
            <h6>Delivery Address</h6>
            <hr />
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
              <CardElement onChange={handleCardChange}></CardElement>
              <p className="pb-0 mb-0 mt-4">Order total: {formatedTotal}</p>
              <button
                disabled={processing || disabled || succeded}
                className="btn btn-primary w-100 mt-3">
                {processing ? "processing" : "place order"}
              </button>
              {error && <div className="mt-3 text-danger">{error}</div>}
            </form>
          </div> 

        </div>
      </div>
    );
}