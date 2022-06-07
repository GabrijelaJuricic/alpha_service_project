import "./MyOrders.css";
import motor2 from "../assets/motor2.png";

const MyOrders = () => {
  return (
    <div className="orders-container">
      <div className="left-side">
        <div className="my-orders">
          <h2>My Orders</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="no-orders">
          <p>You have no orders.</p>
          <a href="btn">Create New Order</a>
        </div>
      </div>
      <div className="right-side">
        <button className="btn">Create New Order</button>
        <img src={motor2}></img>
      </div>
    </div>
  );
};

export default MyOrders;
