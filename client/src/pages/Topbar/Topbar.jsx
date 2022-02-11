import "./topbar.css";
import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import AppContext from "../../components/AppContext/AppContext";

const Topbar = () => {
  const appContext = useContext(AppContext);
  const {
    userData: { user },
  } = appContext;
  // console.log("from topbar", user);

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to="/">
          <span className="logo">SocialEyes👀</span>
        </Link>
      </div>
      <div className="topbar-center">
        <div className="topbar-seachbar">
          <SearchIcon className="topbar-seach-icon" />
          <input placeholder="Seach posts..." className="search-input" />
        </div>
      </div>
      <div className="topbar-right">
        <Link to={`/profile/${user.username}`}>
          <div className="preson-container">
            <span className="topbar-person-name">{user.username}</span>
            <img
              src="/assets/images/profile-demo.jpg"
              alt="profile-img"
              className="topbar-img"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
