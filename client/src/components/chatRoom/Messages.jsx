import React from "react";

const Messages = ({sentmessage}) => {
  return (
    <div>

    
        {sentmessage.map((message,idx) =>{
   return <div className="messages_wrapper" key={idx}>
      <div className="img_Charoom">
        {" "}
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
      </div>
      <div className="message_chatroom">
      <div className="message_time">
        <p>{message.messages}</p>
      <p className="time"> 14h58</p>
      </div>
      </div>
    </div>
    })}
    </div>
  );
};

export default Messages;
