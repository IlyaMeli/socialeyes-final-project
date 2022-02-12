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
  const { setSearchValue, searchValue } = appContext;

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to="/">
          <span className="logo">SocialEyes👀</span>
        </Link>
      </div>
      {console.log(searchValue)}
      <div className="topbar-center">
        <div className="topbar-seachbar">
          <SearchIcon className="topbar-seach-icon" />
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Seach posts..."
            className="search-input"
          />
        </div>
      </div>
      <div className="topbar-right">
        <Link to={`/profile/${user.username}`}>
          <div className="preson-container">
            <span className="topbar-person-name">{user.username}</span>
            <img
              src={user.profilePicture}
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
