import React from "react";

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="row border m-3 p-4">
          <div className="col">
            <h5>777</h5>
            <p>Buy my product!!!!</p>
            <p className="mb-0">
                <span>$</span>
                <span>300.50</span>
            </p>
            <button className="btn btn-primary mt-2">add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
