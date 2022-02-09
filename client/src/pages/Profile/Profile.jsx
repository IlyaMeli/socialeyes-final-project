import "./profile.css";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

const Profile = () => {
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
                  src="assets/images/bg.jpg"
                  alt="bg"
                />
                <img
                  className="profile-user-img"
                  src="assets/images/profile-demo.jpg"
                  alt="user"
                />
              </div>
              <div className="profile-info">
                <h4 className="profile-info-name">Profile</h4>
                <span className="profile-info-desc">some date</span>
              </div>
            </div>
            <div className="profile-right-bottom">
              <Feed />
              {/* <Rightbar /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
