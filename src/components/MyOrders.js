import { useState } from "react";
import { useRecoilState } from "recoil";
import { pageDisplayState } from "../atoms";

import Papa from "papaparse";
import "./MyOrders.css";
import motor2 from "../assets/motor2.png";

const MyOrders = () => {
  const [, setState] = useRecoilState(pageDisplayState);

  // --- Event Handlers --- //
  const pageHandler = () => {
    setState(3);
  };

  return (
    <div className="orders-container">
      <div className="my-orders-left-side">
        <div className="my-orders">
          <h2>My Orders</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="no-orders">
          <p>You have no orders.</p>
          <a href="">Create New Order</a>
        </div>
      </div>
      <div className="my-order-right-side">
        <button className="my-orders-btn" onClick={pageHandler}>
          Create New Order
        </button>
        <img src={motor2}></img>
      </div>
    </div>
  );
};

export default MyOrders;
