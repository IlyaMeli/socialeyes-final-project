import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AppContext from "./components/AppContext/AppContext";
import SpecialRoute from "./components/SpecialRoute/SpecialRoute";
import myApi from "./api/Api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
const App = () => {
  const [postData, setPostData] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  const getAllUsers = async () => {
    const { data } = await myApi.get("/users");
    setUsersData(data);
    console.log("users: ", data);
  };

  useEffect(() => {
    getAllUsers();
  }, [userData]);

  useEffect(() => {
    if (localStorage.userInfo) {
      const lsData = JSON.parse(localStorage.getItem("userInfo"));
      setUserData(lsData);
    }
  }, []);
  const context = { userData, setUserData, postData, setPostData, usersData };

  console.log("from app:", userData);
  // console.log("from Local:", userFromLocalStorage);

  return (
    <AppContext.Provider value={context}>
      <Router>
        <Switch>
          <Route exact path="/">
            <SpecialRoute condition={userData}>
              <Home />
              <Redirect to="/login" />
            </SpecialRoute>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/profile/:username">
            <SpecialRoute condition={userData}>
              <Profile />
              <Redirect to="/login" />
            </SpecialRoute>
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
