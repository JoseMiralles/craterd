import React from "react";

class CartItem extends React.Component{

    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        const product = this.props.product;
        return(
            <div className="col-md-6">
                {product.title}
            </div>
        );
    }
}

export default CartItem;