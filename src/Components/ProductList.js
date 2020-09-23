import React from "react";

import ProductListItem from "./ProductListItem.js";

class ProductList extends React.Component{

    render(){

        const items = this.generateArray(15);
        const mappedProducts = this.mapProducts(items);

        return(
            <div className="container-fluid product-list">
                <div className="row px-2">
                    {mappedProducts}
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

    mapProducts (items){
        return items.map(function (item) {
            return(
                <ProductListItem product={item} />
            );
        });
    }

}

export default ProductList;