import React from "react";
import { useStateValue } from "../State/StateProvider";

function ProductListItem (props) {

    // {cart}: target collection.
    const [{cart}, dispatch] = useStateValue();

    const product = props.product;

    return (

<div className="col-xl-3 col-lg-4 col-md-6 cart-item">
<div className="row m-sm-3 m-1 bg-light rounded mb-3">
  <div className="col p-0">
    <h6 className="p-3 m-0 text-dark">{product.title}</h6>
    <hr className="my-0 mx-3"/>
    <div className="p-md-3 p-3 text-center w-100">
      <img className="mw-100 product-item-image" src={product.img} />
    </div>

    <div className="bg-dark text-light rounded py-1">
    <p className="pl-3 mb-1 mt-2 m-0">{product.description}</p>
    <p className="pl-3 m-0">
      <small>$</small>
      <strong>{product.price.toFixed(2)}</strong>
    </p>
    <div className="mt-3 mx-2 mb-2">
      <button
        onClick={addToCart}
        className="btn btn-primary rounded p-3 w-100"
      >
        add to cart
      </button>
    </div>
    </div>

  </div>
</div>
</div>
    );

    function addToCart(){
      // Dispatch carted item into the data layer.
      dispatch({
        type: "ADD_TO_CART",
        item: {
          id: product.id,
          title: product.title,
          img: product.img,
          price: product.price,
          description: product.description,
        }
      });
    }

  }

export default ProductListItem;
