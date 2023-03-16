import React, { useEffect, useState } from "react";
import axios from "axios";
import StackDescription from "./StackDescription";
import ChatRoom from "./ChatRoom.jsx";
import "./Chatroom.css";
import io from "socket.io-client";


let socket;
const CONNECTION_PORT = "http://127.0.0.1:3000";
const Stack = ({ fetchUser }) => {
  const [stacks, setStack] = useState([]);
  const [oneStack, setOneStack] = useState({});
  const [logged, setLogged] = useState(true);
  const [roomName, setRoomName] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [received, setReceived] = useState([]);
  const [sentmessage,setSentMessage]=useState([])


  // console.log(oneStack);
  // console.log("dataaaaaaaaaaaaaaaaa",roomName);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
    
    // console.log(socket);
    // socket.on("disconnect", () => {
      //   console.log("Connecxion Lost!!.");
      // });
      
      socket.on("messageSent", (data) => {
        setReceived((received)=>[...received,data])
        
        
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
      const interval = setInterval(() => {
        getStack();
      }, 3000);
  
      return () => clearInterval(interval);
    
   
  }, []);
  
  // useEffect(() => {
    
  // }, []);
  const createRoom = () => {
    let userRoom = {
      room: roomName,
      id: fetchUser[0].firebase_id,
    };
    socket.emit("createroom", userRoom);
    console.log(roomName);
  };

  const connecttoroom = () => {
    let userRoom = {
      room: oneStack.room_id,
      id: fetchUser[0].firebase_id,
      name: fetchUser[0].first_name,
      lastname : fetchUser[0].last_name

    };
    // console.log(userRoom);
    // console.log("=================>alo alo",fetchUser[0]);
    socket.emit("joinRoom", userRoom);
    setLogged(!logged);
  };
  const sendMessage = (message) => {
    let userMessage = {
      room: oneStack.room_id,
      id: fetchUser[0].firebase_id,
      name : fetchUser[0].first_name,
      lastname : fetchUser[0].last_name,
      img : "",
      messages: message,
    };
    socket.emit("sendmessage", userMessage)
    // setReceived([...received,message])
    setSentMessage(sentmessage=>[...sentmessage, userMessage])
    setRefresh(!refresh)
  };
 

  // useEffect(()=>{
  
  // },[])

  return (
    <div>
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
        <ChatRoom
          fetchUser={fetchUser}
          oneStack={oneStack}
          refresh={refresh}
          setRefresh={setRefresh}
          sendMessage={sendMessage}
          received={received}
          sentmessage={sentmessage}
        />
      )}
    </div>
  );
};

export default Stack;
