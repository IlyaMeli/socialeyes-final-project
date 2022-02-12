import "./feed.css";
import { useEffect, useState, useContext } from "react";
import Share from "../../components/Share/Share";
import Post from "../../components/Post/Post";
import { CircularProgress } from "@material-ui/core";
import myApi from "../../api/Api";
import AppContext from "../AppContext/AppContext";

const Feed = () => {
  const appContext = useContext(AppContext);
  const { postData, userData, searchValue } = appContext;
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  
  const createPosts = () => {
    return posts
      .filter((post) => {
        if (post.content.toLowerCase().includes(searchValue.toLowerCase())) {
          return post;
        }
      })
      .map((post) => (
        <Post
          key={post._id}
          username={post.username}
          profilePicture={post.profilePicture}
          content={post.content}
          image={post.image}
          postId={post._id}
          likes={post.likes.length}
        />
      ));
  };
  // const createPosts = () => {
  //   return posts.map((post) => (
  //     <Post
  //       key={post._id}
  //       username={post.username}
  //       profilePicture={post.profilePicture}
  //       content={post.content}
  //       image={post.image}
  //       postId={post._id}
  //       likes={post.likes.length}
  //     />
  //   ));
  // };

  const getPosts = async () => {
    setloading(true);
    const { data } = await myApi.get("/posts");
    setPosts(data);
    console.log(data);
    setloading(false);
  };

  useEffect(() => {
    getPosts();
  }, [postData]);

  return (
    <div className="feed-container">
      <div className="feed-content-wrapper">
        <Share />

        {loading ? (
          <div className="login-loading">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          createPosts()
        )}
      </div>
    </div>
  );
};

export default Feed;
