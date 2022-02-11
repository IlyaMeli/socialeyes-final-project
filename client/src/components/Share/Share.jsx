import "./share.css";
import { useContext, useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AppContext from "../AppContext/AppContext";
import { CircularProgress } from "@material-ui/core";
import myApi from "../../api/Api";

const Share = () => {
  const [userContent, setUserContent] = useState("");
  const [inputData, setInputData] = useState("");
  const [loading, setloading] = useState(false);
  // const [postData, setPostData] = useState("");

  const appContext = useContext(AppContext);
  const {
    userData: { user },
    setPostData,
  } = appContext;

  const handlePost = async () => {
    setloading(true);
    const { data } = await myApi.post("/posts", {
      userId: user._id,
      profilePicture: user.profilePicture,
      username: user.username,
      content: inputData,
    });
    setPostData(data);
    setloading(false);
  };

  return (
    <div className="share-container">
      <div className="share-content-wrapper">
        <div className="share-content-top">
          <img
            className="share-profile-pic"
            src={user.profilePicture}
            alt="Profile pic"
          />
          <input
            placeholder="Whatchu thinking about?..."
            className="share-input"
            onChange={(e) => setInputData(e.target.value)}
            value={inputData}
          />
        </div>
        <hr className="share-hr" />
        <div className="share-content-bottom">
          <div className="share-options">
            <div className="share-option">
              <UploadFileIcon htmlColor="gold" className="share-icon" />
              <span className="share-option-text">Photo</span>
            </div>
          </div>
          <button className="share-btn" onClick={handlePost}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
