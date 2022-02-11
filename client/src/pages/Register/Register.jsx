import "./register.css";
import { useState, useContext } from "react";
import myApi from "../../api/Api";
import { Alert } from "@mui/material";
import { CircularProgress } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import AppContext from "../../components/AppContext/AppContext";

const Register = () => {
  const appContext = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [isRedirect, setRedirect] = useState(false);

  const RegisterUser = async () => {
    try {
      setloading(true);
      const { data } = await myApi.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log("from register", data);
      data && localStorage.setItem("userInfo", JSON.stringify(data));
      appContext.setUserData(data);
      setloading(false);
      setRedirect(true);
    } catch (error) {
      // console.log(error.response.data);
      console.table(error);
      setError(error.response.data);
      setloading(false);
    }
  };
  const submitHandler = () => {
    RegisterUser();
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
              placeholder="Username"
              className="login-input"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input
              placeholder="Email"
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              placeholder="Password"
              className="login-input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button className="login-btn" onClick={submitHandler}>
              Sign-Up
            </button>
            {isRedirect && <Redirect to="/" />}
            <Link to="/login">
              <button className="login-register">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
