import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content-wrapper">
        <ul className="sidebar-ul">
          <li className="sidebar-li">
            <RssFeedIcon className="sidebar-icon"/>
            <span className="sidebar-li-text">Feed</span>
          </li>
          <li className="sidebar-li">
            <ChatIcon className="sidebar-icon"/>
            <span className="sidebar-li-text">Chat</span>
          </li>
          <li className="sidebar-li">
            <PeopleIcon className="sidebar-icon"/>
            <span className="sidebar-li-text">People</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
