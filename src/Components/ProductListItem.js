import React from "react";

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const product = this.props.product;
    return (
      <div className="col-lg-3 col-sm-4">
        <div className="row m-sm-3 m-1 bg-light mb-3">
          <div className="col p-0">
            <h5 className="p-4 m-0">{product.title}</h5>
            <div className="bg-dark p-md-4 p-2 text-center w-100">
              <img
                className="mw-100 product-item-image"
                src={product.img}
              />
            </div>
            <p className="p-3 m-0">
              {product.description}
              <br />
              <small>$</small>
                <strong>{product.price.toFixed(2)}</strong>
            </p>
            <div className="mt-2 mx-4 mb-4">
              <button className="btn btn-primary p-3 pt-0 w-100">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
