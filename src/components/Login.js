import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { pageDisplayState } from "../atoms";

import motor1 from "../assets/motor1.png";
import alphaService from "../assets/alphaService.png";
import "./Login.css";

const Login = () => {
  const [, setIsValid] = useState(false);
  const [, setState] = useRecoilState(pageDisplayState);

  // --- Refs --- //
  const emailInputRef = useRef();

  // --- Event Handlers --- //
  const emailHandler = () => {
    const emailValue = emailInputRef.current.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
      setIsValid(true);
      setState(2);
    } else if (emailValue === "") {
      alert("Please enter your email.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <p>Welcome to</p>
        <h3>alpha service</h3>
        <form className="form">
          <label htmlFor="email">Email Address</label>
          <input
            ref={emailInputRef}
            type="email"
            placeholder="Enter your email here"
          />
          <button className="login-btn" onClick={emailHandler}>
            Continue
          </button>
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
