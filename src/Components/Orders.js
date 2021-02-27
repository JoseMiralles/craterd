import React, { useEffect, useState } from "react";
import { db } from "../config/config";
import { useStateValue } from "../State/StateProvider";
import Order from "./Order";


function Orders () {

    const [orders, setOrders] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        if (user){
            db.collection("users")
              .doc(user?.uid)
              .collection("orders")
              .orderBy("created", "desc")
              .onSnapshot((snapshot) => {
                setOrders(
                  snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                  }))
                );
              });
            }
    },[]);

    return (
      <div className="container orders-section">

        <div className="row">
          <div className="col-12">
            <h1 className="pt-5 px-4">Orders</h1>
            <hr />
          </div>
        </div>

        <div className="row">
            {orders?.map( item => {
                return (<Order order={item} />);
            })}
        </div>
      </div>
    );
}

export default Orders;