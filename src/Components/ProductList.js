import React from "react";

import ProductListItem from "./ProductListItem.js";

class ProductList extends React.Component{

    render(){
        return(
            <div className="container-fluid">
                <div className="row px-2">
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