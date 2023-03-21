import React, { useState, useEffect } from "react";
import "./Chatroom.css";
import IconLogout from "../icon/IconLogout";
import IconHome from "../icon/IconHome.jsx";
import io from "socket.io-client";
import axios from "axios";
import ChatContainer from "./ChatContainer";
let socket;
const CONNECTION_PORT = "http://127.0.0.1:3000";

const ChatRoom = ({
  fetchUser,
  oneStack,
  refresh,
  sendMessage,
  setRefresh,
  received,
  sentmessage
}) => {
  const [connectedUser, setConnectedUser] = useState([]);
  const [message, setMessage] = useState("");
  // console.log(message);
  // console.log("fetched User===>", fetchUser, "onStack ====>", oneStack);
  // console.log(connectedUser);
  useEffect(() => {
    socket = io(CONNECTION_PORT);

    // socket.on("disconnect", (data) => {
    //   console.log("Connecxion Lost!!.", socket.id);

    // });

    getconnecteted();
  }, [sentmessage])
  // console.log("message",received);
 
  const getconnecteted = async () => {
    try {
      const connected = await axios.get(
        `http://127.0.0.1:3000/api/chatRoom/userconnected/${oneStack.room_id}`
      );
      setConnectedUser(connected.data);
    } catch (err) {
      console.log("notOk", err);
    }
  };

  // socket.emit("joinRoom", "userRoom");
  // socket.on("joinedRoom", (data) => {
  //   console.log("joineddddddddddddddd", data);

  //   // setsocketiD(data.socket)
  //   // connectedUser && setConnectedUser([...connectedUser, data])
  // });

  return (
    <div className="chatroom">
      <div className="chatroom_row">
        <div className="buttons">
          <IconHome />
          <IconLogout />
        </div>
        <div className="users">
          <h2>Users</h2>
          <div className="connected_user_w">
            {connectedUser.map((user, idx) => {
              return (
                <div className="connected_user" key={idx}>
                  <p>
                    {user.first_name}, {user.last_name}
                  </p>
                </div>
              );
            })}
          </div>

          <div>
            <h3>Room : {oneStack.name} </h3>
          </div>
        </div>

        <div className="messages_global">
          <h2>Messages</h2>
          <ChatContainer received={received} oneStack={oneStack} sentmessage={sentmessage}/>

          <div className="input">
            <input
            value={message}
              type="text"
              placeholder="Type your message here"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={() => {
                sendMessage(message);
                setRefresh(!refresh);
                setMessage("")
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;

