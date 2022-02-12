import "./conversation.css";
import { useContext } from "react";
import AppContext from "../AppContext/AppContext";

const Conversation = () => {
  const appContext = useContext(AppContext);
  const {
    userData: { user },
  } = appContext;

  return (
    <div className="conversation">
      <img
        src={user.profilePicture}
        alt="profile-img"
        className="conversation-img"
      />
      <span className="conversation-name">Ilya Demo</span>
    </div>
  );
};

export default Conversation;
