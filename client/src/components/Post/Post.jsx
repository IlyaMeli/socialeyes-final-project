import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
const Post = () => {
  return (
    <div className="post-container">
      <div className="post-content-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              className="post-profile"
              src="/assets/images/profile-demo.jpg"
              alt="profile"
            />
            <span className="post-username">Profile</span>
            <span className="post-date">5 min ago</span>
          </div>
          <div className="post-top-right">
            <MoreVertIcon className="post-more" />
          </div>
        </div>
        <div className="post-center">
          <span className="post-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed autem
            corrupti veritatis vel distinctio eveniet at unde illo harum magni?
          </span>
          <img
            className="post-content-img"
            src="/assets/images/flowers.jpg"
            alt="flower"
          />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <ThumbUpIcon className="post-like" />
            <span>0 people liked it</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
