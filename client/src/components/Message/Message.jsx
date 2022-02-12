import "./message.css";
import { useContext } from "react";
import AppContext from "../AppContext/AppContext";

const Message = ({ own }) => {
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
        <p className="message-text">Text from message</p>
      </div>
      <div className="message-bottom">1 hour ago</div>
    </div>
  );
};

export default Message;
