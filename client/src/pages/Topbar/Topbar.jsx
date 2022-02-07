import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">SocialEyes</span>
      </div>
      <div className="topbar-center">
        <SearchIcon />
        <input placeholder="Seach posts..." className="search-input" />
      </div>
      <div className="topbar-right"></div>
    </div>
  );
};

export default Topbar;
