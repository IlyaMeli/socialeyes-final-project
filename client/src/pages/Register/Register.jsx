import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <div className="login-logo">
            <img
              className="login-logo-img"
              src="/assets/images/eyes.png"
              alt="login-logo"
            />
            <h3 className="login-logo-title">SocialEyes</h3>
          </div>
          <span className="login-desc">
            Heard of Facebook? i'm like facebook but cooler
          </span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input placeholder="Username" className="login-input" />
            <input placeholder="Email" className="login-input" />
            <input placeholder="Password" className="login-input" />
            <button className="login-btn">Sign-Up</button>
            <Link to="login">
              <button className="login-register">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
