import React from "react";
import {useStateValue} from "../State/StateProvider.js";

export function GetCartPriceTotalFromGivenCart(cart){
    let total = 0;

    for (let product of cart){
        total += product.price;
    }

    return total.toFixed(2);
}

export default function GetCartPriceTotal(){
    
    const [{cart}, dispatch] = useStateValue();
    let total = 0;

    for (let product of cart){
        total += product.price;
    }

    return total.toFixed(2);
}