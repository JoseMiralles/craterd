import React from "react";

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="col-lg-3 col-sm-4">
        <div className="row m-sm-3 m-1 border mb-3">
          <div className="col p-0">
            <h6 className="p-3 m-0">Raw Gold Ore</h6>
            <img className="w-100 p-5 bg-dark" src="https://vignette.wikia.nocookie.net/elderscrolls/images/9/9b/Ore_gold.png/revision/latest?cb=20120513051834"/>
            <p className="p-3 m-0">
                Buy my product!!!!
                <br/>
                <small>$</small>
                <strong>300.50</strong>
            </p>
            <button className="btn btn-primary p-3 w-100">
                add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
