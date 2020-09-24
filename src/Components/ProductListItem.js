import React from "react";
import { useStateValue } from "../State/StateProvider";

function ProductListItem (props) {

    // {cart}: target collection.
    const [{cart}, dispatch] = useStateValue();

    const product = props.product;

    return (
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="row m-sm-3 m-1 bg-light mb-3">
          <div className="col p-0">
            <h5 className="p-4 m-0 bg-dark text-light">{product.title}</h5>
            <div className="bg-secondary p-md-4 p-2 text-center w-100">
              <img
                className="mw-100 product-item-image"
                src={product.img}
              />
            </div>
                  <p className="pl-3 mb-2 mt-3 m-0">
                    {product.description}
                  </p>
                  <p className="pl-3 m-0">
                    <small>$</small>
                      <strong>{product.price.toFixed(2)}</strong>
                  </p>
            <div className="mt-3 mx-2 mb-2">
              <button onClick={addToCart} className="btn btn-primary p-3 pt-0 w-100">
                add to cart
              </button>
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
