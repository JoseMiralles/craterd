import React from "react";

import CartItem from "./CartItem.js"

class Checkout extends React.Component{

    render (){

        const items = this.generateArray(4);
        const mappedItems = this.MapCartItems(items);

        return(
            <div className="container checkout-section">
                <div className="row mt-md-3">
                    <div className="checkout-banner col text-light p-5">
                        <h1>Checkout</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col p-5">
                        {mappedItems}
                    </div>
                </div>
            </div>
        );
    }

    generateArray (total){

        let result = [];

        for (let i = 1; i <= total; i++){
            result.push(
                {
                    title: "Gold Raw Ore",
                    id: i,
                    img: "https://vignette.wikia.nocookie.net/elderscrolls/images/9/9b/Ore_gold.png/revision/latest?cb=20120513051834",
                    description: "Buy my product!!!!",
                    price: 3000.50,
                }
            );
        }

        return result;
    }

    MapCartItems (items) {
        return items.map(function (item){
            return(
                <CartItem product={item} />
            );
        });
    }

}

export default Checkout;