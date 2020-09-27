import React, { useEffect, useState } from "react";
import { db } from "../config/config.js";

import ProductListItem from "./ProductListItem.js";

function ProductList() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("stores")
    .doc("main")
    .collection("products")
    .onSnapshot((snapShot) => {
        setProducts(
            snapShot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        );
    });
  }, []);

  return (
    <div className="container-fluid product-list">
      <div className="row px-2">{Products?.map(item => {
          return <ProductListItem product={item.data} />;
      })}</div>
    </div>
  );
}

export default ProductList;
