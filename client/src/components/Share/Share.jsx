import "./share.css";
import { useContext, useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AppContext from "../AppContext/AppContext";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import myApi from "../../api/Api";

const Share = () => {
  const [userContent, setUserContent] = useState("");
  const [inputData, setInputData] = useState("");
  const [loading, setloading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  // const [postData, setPostData] = useState("");

  const appContext = useContext(AppContext);
  const {
    userData: { user },
    setPostData,
  } = appContext;

  const handlePost = async () => {
    // event.preventDefault();
    setloading(true);
    const newPost = {
      userId: user._id,
      profilePicture: user.profilePicture,
      username: user.username,
      content: inputData,
    };

    if (selectedFile) {
      const fd = new FormData();
      fd.append("image", selectedFile);
      newPost.image = selectedFile.name;
      console.log(selectedFile.name);
      try {
        await axios.post("http://localhost:5000/uploads", fd);
      } catch (err) {
        console.table(err);
        console.log(err);
      }
    }
    const { data } = await myApi.post("/posts", newPost);
    // const { data } = await myApi.post("/posts", {
    //   userId: user._id,
    //   profilePicture: user.profilePicture,
    //   username: user.username,
    //   content: inputData,
    //   image: selectedFile,
    // });
    console.log("CHECK", data);
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
            <label htmlFor="file" className="share-option">
              <UploadFileIcon htmlColor="gold" className="share-icon" />
              <span className="share-option-text">Photo</span>
              <input
                id="file"
                className="share-file-input"
                accept=".png,jpeg,jpg"
                type="file"
                onChange={(e) => {
                  setSelectedFile(e.target.files[0]);
                }}
              />
            </label>
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
