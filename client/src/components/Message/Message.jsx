import "./message.css";
import { useContext } from "react";
import AppContext from "../AppContext/AppContext";
import { format } from "timeago.js";

const Message = ({ message, own }) => {
  const appContext = useContext(AppContext);
  const {
    userData: { user },
  } = appContext;

  return (
    <div className={own ? "message own" : "message"}>
      <div className="message-top">
        <img
          src={user.profilePicture}
          alt="profile-img"
          className="message-img"
        />
        <p className="message-text">{message.text}</p>
      </div>
      <div className="message-bottom">{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;
