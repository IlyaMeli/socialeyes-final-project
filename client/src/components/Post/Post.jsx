import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CloseIcon from "@mui/icons-material/Close";
import myApi from "../../api/Api";
import { Alert } from "@mui/material";

import { useState, useContext, useEffect } from "react";
import AppContext from "../AppContext/AppContext";

const Post = ({ postId, username, profilePicture, content, likes, image }) => {
  const [frontLikes, setFrontLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [modalShown, setModalShown] = useState(false);
  const [postContent, setPostContent] = useState(content);
  const appContext = useContext(AppContext);
  const { postData, userData } = appContext;
  const [error, setError] = useState(false);

  const editHandler = async () => {
    try {
      const { data } = await myApi.put(`/posts/${postId}`, {
        userId: userData.user._id,
        content: editValue,
      });
      setPostContent(editValue);
      console.log("update", postData);
      console.log("data", data);
    } catch (error) {
      setError(error.response.data);
      console.log(error.response.data);
    }
  };
  const update = () => {
    editHandler();
    setModalShown((prevState) => !prevState);
  };

  const likeHandler = async () => {
    console.log(postId);
    try {
      const { data } = await myApi.put(`/posts/${postId}/like`, {
        userId: userData.user._id,
      });
      console.log("like", data);
    } catch (error) {}
    setFrontLikes(isLiked ? frontLikes - 1 : frontLikes + 1);
    setIsLiked((prevState) => !prevState);
  };

  useEffect(() => {
    setFrontLikes(likes);
  }, [likes]);

  return (
    <div className="post-container">
      <div className="post-content-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img className="post-profile" src={profilePicture} alt="profile" />
            <span className="post-username">{username}</span>
            <span className="post-date">5 min ago</span>
          </div>
          <div className="post-top-right">
            <MoreVertIcon
              className="post-more"
              onClick={() => setModalShown((prevState) => !prevState)}
            />
            {modalShown && (
              <div className="post-edit-modal">
                <div className="post-edit-wrapper">
                  <span className="post-edit-title">Edit Content:</span>
                  <input
                    className="post-edit-input"
                    onChange={(e) => {
                      setEditValue(e.target.value);
                    }}
                  />
                  <button className="post-update-btn" onClick={update}>
                    Update
                  </button>
                </div>
                <CloseIcon
                  className="post-close"
                  onClick={() => setModalShown((prevState) => !prevState)}
                />
              </div>
            )}
            {error && (
              <Alert
                severity="error"
                onClose={() => {
                  setError((prevState) => !prevState);
                }}
              >
                {error}
              </Alert>
            )}
          </div>
        </div>
        <div className="post-center">
          <span className="post-content">{postContent}</span>
          {image ? (
            <img
              className="post-content-img"
              src={`http://localhost:5000/${image}`}
              alt="flower"
            />
          ) : (
            <div>...</div>
          )}
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <ThumbUpIcon className="post-like" onClick={likeHandler} />
            <span>{frontLikes} people liked it</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
