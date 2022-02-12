import "./messenger.css";
import Topbar from "../Topbar/Topbar";
import Conversation from "../../components/Conversation/Conversation"
const Messenger = () => {

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
              <input placeholder="Seach people..." className="chat-menu-input" />
              <Conversation />
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">box</div>
        </div>

        <div className="chat-online">
          <div className="chat-online-wrapper">online</div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
