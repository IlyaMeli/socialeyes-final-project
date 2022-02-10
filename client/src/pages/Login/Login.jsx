import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import myApi from "../../api/Api";
import { CircularProgress } from "@material-ui/core";
import { Alert } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  const LoginUser = async () => {
    try {
      setloading(true);
      const { data } = await myApi.post("/auth/login", { email, password });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setloading(false);
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
      console.table(error);
      setError(error.response.data);
      setloading(false);
    }
  };
  const submitHandler = () => {
    // console.log(email, password);
    LoginUser();
  };

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
            {loading && (
              <div className="login-loading">
                <CircularProgress color="inherit" />
              </div>
            )}
            {error && <Alert severity="error">{error}</Alert>}
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button className="login-btn" onClick={submitHandler}>
              Login
            </button>
            <Link to="/register">
              <button className="login-register">Create new account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
