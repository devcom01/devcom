import React, { useState } from "react";
import Messages from "./Messages"
import OldMessages from "./OldMessages";
import ReceivedMessage from "./ReceivedMessage.jsx";

const Chat = ({  received,sendMessage,fetchUser,welcome,oneStack,logged,setLogged }) => {
  // console.log("----Send", sentmessage, "Received", received);
  // console.log(welcome);
  const [message, setMessage]=useState("")
  return (
    <section className="chat">
        
      <div className="header-chat">
        <i class="fa fa-user-o" aria-hidden="true"></i>
      
       <div>
        <p className="name">{fetchUser.first_name}, {fetchUser.last_name}</p>
        </div>
        <i
          className="icon clickable fa fa-ellipsis-h right"
          aria-hidden="true"
          />
          </div>
      <div className="messages-chat">
        {/* <div className="picture_text">
          <div className="photo">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
              alt=""
            />
          </div>
          {sentmessage.map((message,idx)=>{
          return <div>
          <div className="message">
            <p className="text">
             {message.messages}
        <p className="time"> 14h58</p>
            </p>
          </div>
          </div>})}
        </div> */}
          
         
      <OldMessages oneStack={oneStack} received={received} logged={logged}
          setLogged={setLogged}/>
        {welcome.map((wel,idx)=>{
       return  <div key={idx}>
        <p style={{color : "red"}}>{wel}</p>
        <ReceivedMessage received={received} fetchUser={fetchUser} welcome={welcome}/>     
        </div>})}
      </div>
      <div className="footer-chat">
        <i
          className="icon fa fa-smile-o clickable"
          style={{ fontSize: "25pt" }}
          aria-hidden="true"
        />
        <input
        onChange={(e)=>setMessage(e.target.value)}
          type="text"
          className="write-message"
          placeholder="Type your message here"
        value={message}

        />
        <i
        
          className="icon send fa fa-paper-plane-o clickable"
          aria-hidden="true"
          onClick={()=>{
            sendMessage(message)
            setMessage("")}} 
        />
      </div>
    </section>
  );
};

export default Chat;
