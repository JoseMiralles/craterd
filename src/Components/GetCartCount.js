import React from "react";
import {useStateValue} from "../State/StateProvider";

export default function GetCartCount(){
    const [{cart}, dispatch] = useStateValue();
    return(
        cart.length
    );
}