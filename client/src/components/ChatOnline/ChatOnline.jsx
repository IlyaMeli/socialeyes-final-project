import "./chatonline.css";
import { useContext } from "react";
import AppContext from "../AppContext/AppContext";

const ChatOnline = () => {
  const appContext = useContext(AppContext);
  const {
    userData: { user },
  } = appContext;

  return (
    <div className="chat-online">
      <div className="chat-online-friends">
        <div className="chat-online-img-container">
          <img
            className="chat-online-img"
            src={user.profilePicture}
            alt="proflile-online"
          />
          <div className="chat-online-badge"></div>
        </div>
        <span className="chat-online-name">Ilya Check</span>
      </div>
    </div>
  );
};

export default ChatOnline;
