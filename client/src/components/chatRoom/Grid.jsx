import React, { useEffect, useState } from "react";
import "./Grid.css";
import Disccussion from "./Disccussion.jsx";
import Chat from "./Chat.jsx";
import Menu from "./Menu.jsx";
import axios from "axios"

const Grid = ({
  fetchUser,
  oneStack,
  refresh,
  sendMessage,
  setRefresh,
  received,
  setReceived,
  sentmessage,
  welcome,
  // connectedUser,
  lastMessage,
  logged,
  setLogged,
  leaveRoom
}) => {
  const [connectedUser, setConnectedUser] = useState("");
  // console.log("User--->", fetchUser, "stack en personne", oneStack);
  useEffect((()=>{
    getconnecteted()
  }),[])
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
  // console.log("connected user", connectedUser);

  return (
    <div className="container">
      <div className="row">
        <Menu
          logged={logged}
          setLogged={setLogged}
          received={received}
          setReceived={setReceived}
          leaveRoom={leaveRoom}

        />
        <Disccussion
          fetchUser={fetchUser}
          connectedUser={connectedUser}
          // lastMessage={lastMessage}
        />
        <Chat
          oneStack={oneStack}
          // sentmessage={sentmessage}
          received={received}
          sendMessage={sendMessage}
          fetchUser={fetchUser}
          welcome={welcome}
          logged={logged}
          setLogged={setLogged}

        />
      </div>
    </div>
  );
};

export default Grid;
