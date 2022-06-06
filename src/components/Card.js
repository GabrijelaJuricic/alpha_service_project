import logo from "../assets/logo.png";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="header">
        <img src={logo} />
        <h3>alpha</h3>
      </div>
      {props.children}
    </div>
  );
};

export default Card;
