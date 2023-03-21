import React from 'react'
import Messages from './Messages';

const ReceivedMessage = ({received,fetchUser,welcome}) => {
  console.log("userr discussion",fetchUser, "recuuuuuuuu", received);
  return (
    // <div>
    // {received.map((r,i)=>{
    // return <div style={{color : "white"}}>
    //     <p > {received.messages}</p>
    //   </div>})}
    //   </div>
    <div>
 
    <div className='messagereceived'>
  {/* <Messages sentmessage={sentmessage}/> */}
    {received && received.map((message,idx) =>{
      // console.log(message);
return <div className={message.id===fetchUser.firebase_id ? "messages_wrapper" : "messages_wrapper1" } key={idx}>
  <div className="message_chatroom">
    
  <div className="message_time">
  <p className="time"></p>
  </div>
    <p>{message.messages}</p>
  </div>
  <div className="img_Charoom">
    {" "}
    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
  </div>
</div>
})}
</div>
 
</div>
  )
}

export default ReceivedMessage
