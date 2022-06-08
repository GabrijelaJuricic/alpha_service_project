import { useRecoilState } from "recoil";
import { pageDisplayState } from "../atoms";

import "./MyOrders.css";
import motor2 from "../assets/motor2.png";

const MyOrders = () => {
  const [, setState] = useRecoilState(pageDisplayState);

  const pageHandler = () => {
    setState((pageDisplayState) => {
      return pageDisplayState + 1;
    });
  };

  return (
    <div className="orders-container">
      <div className="left-side">
        <div className="my-orders">
          <h2>My Orders</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="no-orders">
          <p>You have no orders.</p>
          <a href="">Create New Order</a>
        </div>
      </div>
      <div className="right-side">
        <button className="btn" onClick={pageHandler}>
          Create New Order
        </button>
        <img src={motor2}></img>
      </div>
    </div>
  );
};

export default MyOrders;
