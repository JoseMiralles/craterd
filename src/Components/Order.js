import React from "react";
import moment from "moment";
import CartItem from "./CartItem";
import CurrencyFormat from "react-currency-format";

function Order({order}) {
    return(
        <div className="col-12 my-5">
            <p>Order placed on: <strong>{moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}</strong></p>

            <p>Total:&nbsp;
                <CurrencyFormat
                    renderText={(value) => value}
                    decimalScale={2}
                    value={order.data.amount.toFixed(2)/100}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
              />
            </p>
            <p>
                <small>id: {order.id}</small>
            </p>
            <div className="order-row">
                {order.data.cart?.map(item => {
                    return (<CartItem product={item} />);
                })}
            </div>
            <hr/>
        </div>
    );
}

export default Order;