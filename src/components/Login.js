import motor1 from "../assets/motor1.png";
import alphaService from "../assets/alphaService.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <p>Welcome to</p>
        <h3>alpha service</h3>
        <form className="form">
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Enter your email here" />
          <button className="btn">Continue</button>
        </form>
      </div>
      <div className="img-container">
        <img className="motor1" src={motor1} />
        <img className="alpha-service-title" src={alphaService} />
      </div>
    </div>
  );
};

export default Login;
