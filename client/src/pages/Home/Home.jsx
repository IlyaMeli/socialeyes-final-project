import "./home.css";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar"
import Feed from "../../components/Feed/Feed"
import Rightbar from "../../components/Rightbar/Rightbar"

const Home = () => {
  return (
    <>
    <div className="home-wrapper">
      <Topbar />
      <div className="home-content-wrapper">
      <Sidebar />
      <Feed />
      <Rightbar />
      </div>
      </div>
    </>
  );
};

export default Home;
