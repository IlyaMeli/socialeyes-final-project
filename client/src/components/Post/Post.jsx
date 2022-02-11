import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
const Post = ({ username, profilePicture, content, likes, image }) => {
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
            <MoreVertIcon className="post-more" />
          </div>
        </div>
        <div className="post-center">
          <span className="post-content">{content}</span>
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
            <ThumbUpIcon className="post-like" />
            <span>{likes} people liked it</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
