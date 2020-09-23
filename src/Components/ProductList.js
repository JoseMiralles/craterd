import React from "react";

import ProductListItem from "./ProductListItem.js";

class ProductList extends React.Component{

    render(){
        return(
            <div className="container-fluid mt-4">
                <div className="row">
                    <ProductListItem />
                    <ProductListItem />
                    <ProductListItem />
                    <ProductListItem />
                </div>
            </div>
        );
    }

}

export default ProductList;