import "./conversation.css";
import { useState, useEffect } from "react";
import myApi from "../../api/Api";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const { data } = await myApi.get(`/users/${friendId}`);
        setUser(data);
        // console.log("CHECKASDASD:", data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    user && (
      <div className="conversation">
        <img
          src={user.profilePicture}
          alt="profile-img"
          className="conversation-img"
        />
        <span className="conversation-name">{user.username}</span>
      </div>
    )
  );
};

export default Conversation;
