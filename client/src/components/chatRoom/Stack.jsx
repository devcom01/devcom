import React, { useEffect, useState } from "react";
import axios from "axios";
import StackDescription from "./StackDescription";
// import ChatRoom from "./ChatRoom.jsx";
// import "./Chatroom.css";
import io from "socket.io-client";
import Grid from "./Grid.jsx";

let socket;
const CONNECTION_PORT = "http://127.0.0.1:3000";
const Stack = ({ fetchUser }) => {
  const [stacks, setStack] = useState([]);
  const [oneStack, setOneStack] = useState({});
  const [logged, setLogged] = useState(true);
  const [roomName, setRoomName] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [received, setReceived] = useState([]);
  const [sentmessage, setSentMessage] = useState([]);
  const [welcome, setWelcome] = useState([]);
  const [connectedUser, setConnectedUser] = useState([]);
  const [lastMessage, setLastMessage] = useState([]);
  // console.log(oneStack);
  // console.log("dataaaaaaaaaaaaaaaaa",roomName);
  // console.log("connected user",connectedUser);
  console.log("receiveddddddd", received);

  useEffect(() => {
    socket = io(CONNECTION_PORT);

    // console.log(socket);
    // socket.on("disconnect", () => {
    //   console.log("Connecxion Lost!!.");
    // });
    socket.on("join", (data) => setWelcome([data]));
    socket.on("user list", (data) =>
      setConnectedUser((connectedUser) => [...connectedUser, data])
    );
    socket.on('left', (data) =>{console.log('left the room', data);})

    socket.on("messageSent", (data) => {
      // console.log("the message in the client is:" + data)
      setReceived(received=>[...received, data]);
    });
    // socket.on("messagejoin", data=>{
    //   console.log("bienvenu",data);
    //   setReceived((received)=>[...received,data])
    // })
    const getStack = async () => {
      try {
        const stack = await axios.get(
          `http://localhost:3000/api/chatRoom/getStack`
        );
        setStack(stack.data);
      } catch (err) {
        console.log(err);
      }
    };

    getStack();
      
  }, [refresh]);

  // useEffect(() => {

  // }, []);
  const createRoom = () => {
    let userRoom = {
      room: roomName,
      id: fetchUser.firebase_id,
    };
    socket.emit("createroom", userRoom);
    console.log(roomName);
  };

  const connecttoroom = () => {
    let userRoom = {
      room: oneStack.room_id,
      id: fetchUser.firebase_id,
      name: fetchUser.first_name,
      lastname: fetchUser.last_name,
    };
    // console.log(userRoom);
    // console.log("=================>alo alo",fetchUser[0]);
    socket.emit("joinRoom", userRoom);
    setLogged(!logged);
  };
  const leaveRoom = () => {
    let userLeave={
      id : fetchUser.firebase_id,
      room: oneStack.room_id,
      name: fetchUser.first_name,
      lastname: fetchUser.last_name,
    }
    socket.emit("leavRoom", userLeave);
  }
  const sendMessage = (message) => {
   
    let userMessage = {
      room: oneStack.room_id,
      id: fetchUser.firebase_id,
      name: fetchUser.first_name,
      lastname: fetchUser.last_name,
      img: "",
      messages: message,
    };
    if (message.length===0){
      return
    }else{
    socket.emit("sendmessage", userMessage);
    // setReceived([received,message])
    //  setReceived(sentmessage=>[...received,sentmessage ])
    setLastMessage(userMessage);
    setRefresh(!refresh);}
  };



  // useEffect(()=>{

  // },[])

  return (
    <div style={{width:"100%" , display:"flex",justifyContent:"center"}}>
      {/* {console.log("aa", received)} */}

      {logged ? (
        <div className="button_wrapper">
          
          <div>
            <h1 id="choiceroom">"Choose the room you want to join."</h1>
            <div className="button_stack">
              {stacks.map((ele, idx) => {
                return (
                  <div className="button_st" key={idx}>
                    <button
                      onClick={() => {
                        connecttoroom();
                        setRefresh(!refresh);
                      }}
                      onMouseOver={() => {
                        setOneStack(ele);
                      }}
                    >
                      {ele.name}
                    </button>
                  </div>
                );
              })}
            </div>
            <div></div>
            <div className="new_room">
              <div className="create_room">
                <h3 id="createroom">Create Room</h3>
                <input
                  type="text"
                  placeholder="Enter then name of your room"
                  onChange={(e) => setRoomName(e.target.value)}
                />
                <button
                  onClick={() => {
                    createRoom();
                  }}
                >
                  Create
                </button>
              </div>

              <div className="create_room">
                <h3 id="createroom">Join Room </h3>
                <input type="text" placeholder="Enter then name of your room" />
                <button>Join</button>
              </div>
              <StackDescription oneStack={oneStack} />
            </div>
          </div>
        </div>
      ) : (
        <Grid
          fetchUser={fetchUser}
          oneStack={oneStack}
          refresh={refresh}
          setRefresh={setRefresh}
          sendMessage={sendMessage}
          setReceived={setReceived}
          received={received}
          // sentmessage={sentmessage}
          welcome={welcome}
          connectedUser={connectedUser}
          lastMessage={lastMessage}
          logged={logged}
          setLogged={setLogged}
          leaveRoom={leaveRoom}
        />
      )}
    </div>
  );
};

export default Stack;
