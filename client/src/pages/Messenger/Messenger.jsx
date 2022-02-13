import "./messenger.css";
import Topbar from "../Topbar/Topbar";
import Conversation from "../../components/Conversation/Conversation";
import Message from "../../components/Message/Message";
import ChatOnline from "../../components/ChatOnline/ChatOnline";
import AppContext from "../../components/AppContext/AppContext";
import { useContext, useEffect, useState, useRef } from "react";
import myApi from "../../api/Api";

import { io } from "socket.io-client";

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [arrivedMessage, setArrivedMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const scrollRef = useRef();

  const appContext = useContext(AppContext);
  const {
    userData: { user },
    usersData,
  } = appContext;

  useEffect(() => {
    socket.current = io("ws://localhost:5000");
    socket.current.on("getMessage", (data) => {
      setArrivedMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivedMessage &&
      currentChat?.members.includes(arrivedMessage.sender) &&
      setMessages((prev) => [...prev, arrivedMessage]);
  }, [arrivedMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        usersData.filter((f) => users.some((u) => u.userId === f._id))
      );
      console.log(usersData);
    });
  }, [user._id, usersData]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const { data } = await myApi.get(`/conversations/${user._id}`);
        setConversations(data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await myApi.get(`/messages/${currentChat?._id}`);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const receiverId = currentChat.members.find((m) => m !== user._id);

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const { data } = await myApi.post("/messages", message);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
            <input placeholder="Seach people..." className="chat-menu-input" />
            {conversations.map((c) => (
              <div key={c._id} onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            {currentChat ? (
              <>
                <div className="chat-box-top">
                  {messages.map((m) => (
                    <div key={m._id} ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chat-box-bottom">
                  <textarea
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    placeholder="write a message..."
                    className="chat-textarea"
                  ></textarea>
                  <button className="chat-submit-btn" onClick={handleSend}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="chat-no-conversation">
                Open a conversation to start
              </span>
            )}
          </div>
        </div>

        <div className="chat-online">
          <div className="chat-online-wrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
