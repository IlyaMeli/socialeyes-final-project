import "./messenger.css";
import Topbar from "../Topbar/Topbar";
import Conversation from "../../components/Conversation/Conversation";
import Message from "../../components/Message/Message";
import ChatOnline from "../../components/ChatOnline/ChatOnline";
const Messenger = () => {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
            <input placeholder="Seach people..." className="chat-menu-input" />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            <div className="chat-box-top">
              <Message />
              <Message own />
              <Message />
              <Message own />
              <Message />
              <Message own />
            </div>
            <div className="chat-box-bottom">
              <textarea
                placeholder="write a message..."
                className="chat-textarea"
              ></textarea>
              <button className="chat-submit-btn">Send</button>
            </div>
          </div>
        </div>

        <div className="chat-online">
          <div className="chat-online-wrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
