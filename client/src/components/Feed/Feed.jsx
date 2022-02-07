import "./feed.css";
import Share from "../../components/Share/Share"
import Post from "../../components/Post/Post"

const Feed = () => {
  return (
    <div className="feed-container">
      <div className="feed-content-wrapper">
          <Share />
          <Post />
      </div>
    </div>
  );
};

export default Feed;
