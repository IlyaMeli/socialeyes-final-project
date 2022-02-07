import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">SocialEyes</span>
      </div>
      <div className="topbar-center">
        <div className="topbar-seachbar">
          <SearchIcon className="topbar-seach-icon" />
          <input placeholder="Seach posts..." className="search-input" />
        </div>
      </div>
      <div className="topbar-right">
        <div className="preson-container">
          <span className="topbar-person-name">Person Name</span>
          <img
            src="/assets/images/profile-demo.jpg"
            alt="profile-img"
            className="topbar-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
