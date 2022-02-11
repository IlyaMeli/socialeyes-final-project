import "./rightbar.css";
import { useContext } from "react";
import AppContext from "../AppContext/AppContext";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    const appContext = useContext(AppContext);
    const { usersData } = appContext;

    const createProfiles = () => {
      return usersData.map((user) => (
        <div className="rightbar-friends-profile">
          <span className="rightbar-friends-profile-text">{user.username}</span>
          <img
            className="rightbar-profile"
            src={user.profilePicture}
            alt="profile"
          />
          {console.log(usersData)}
        </div>
      ));
    };
    return (
      <>
        <div className="rightbar-friends">
          <span className="rightbar-friends-text">SocialEyes People</span>
          <div className="rightbar-friends-pics">
            {usersData && createProfiles()}
          </div>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <div className="right-bar-info">
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">City:</span>
            <span className="right-bar-info-value">User City</span>
          </div>
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Relationship:</span>
            <span className="right-bar-info-value">Single</span>
          </div>
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Job:</span>
            <span className="right-bar-info-value">Full Stack</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar-container">
      <div className="rightbar-content-wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
