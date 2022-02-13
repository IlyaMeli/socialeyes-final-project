import "./chatonline.css";
import { useContext, useState, useEffect } from "react";
import AppContext from "../AppContext/AppContext";
import myApi from "../../api/Api";

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [myOnlineUsers, setOnlineUsers] = useState([]);
  const appContext = useContext(AppContext);
  const { usersData } = appContext;

  useEffect(() => {
    console.log(usersData);
    setOnlineUsers(usersData.filter((user) => onlineUsers.includes(user._id)));
  }, [usersData, onlineUsers]);
  console.log(onlineUsers);
  console.log(myOnlineUsers);

  const handleClick = async (user) => {
    try {
      const { data } = await myApi.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      // await myApi.post(`/conversations/`, {
      //   senderId: currentId,
      //   receiverId: user._id,
      // });
      setCurrentChat(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chat-online">
      {onlineUsers.map((online) => (
        <div
          className="chat-online-friends"
          onClick={() => {
            handleClick(online);
          }}
        >
          <div className="chat-online-img-container">
            <img
              className="chat-online-img"
              src={
                online.profilePicture
                  ? online.profilePicture
                  : "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg"
              }
              alt="proflile-online"
            />
            <div className="chat-online-badge"></div>
          </div>
          <span className="chat-online-name">{online.username}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
