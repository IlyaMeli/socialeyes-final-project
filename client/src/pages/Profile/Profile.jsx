import "./profile.css";
import Topbar from "../Topbar/Topbar";
import { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import AppContext from "../../components/AppContext/AppContext";

const Profile = () => {
  const appContext = useContext(AppContext);
  const {
    userData: { user },
  } = appContext;

  return (
    <>
      <div className="profile-wrapper">
        <Topbar />
        <div className="profile-content-wrapper">
          <Sidebar />
          <div className="profile-right">
            <div className="profile-right-top">
              <div className="profile-cover">
                <img
                  className="profile-cover-img"
                  src={user.themePicture}
                  alt="bg"
                />
                <img
                  className="profile-user-img"
                  src={user.profilePicture}
                  alt="user"
                />
              </div>
              <div className="profile-info">
                <h4 className="profile-info-name">{user.username}</h4>
                <span className="profile-info-desc">some date</span>
              </div>
            </div>
            <div className="profile-right-bottom">
              <Feed />
              <Rightbar profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
