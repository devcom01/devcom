import React, { useEffect, useState } from 'react'
import axios from "axios"

const OldMessages = ({oneStack,logged}) => {
    const [participants, setParticipants]=useState([])
console.log("participanet",participants)
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/chatRoom/participant/${oneStack.room_id}`)
    .then(response=>{
      // console.log("Participant",response.data);
      setParticipants(response.data)  
    })
    .catch(err=>{console.log(err)})
    },[logged])
  return (
    <div>
      {participants.map((mess,idx)=>{
        return (
          <div className="messages_wrapper1" key={idx}>
          <div className="message_chatroom">
            
          <div className="message_time">
          <p className="time"> 14h58</p>
          </div>
            <p>{mess.message}</p>
          </div>
          <div className="img_Charoom">
            {" "}
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
            <p>{mess.first_name} {mess.last_name}</p>
          </div>
        </div>
        );
      })} 
</div>
  )
}

export default OldMessages


{/* <span className="username">{mess.first_name} {mess.last_name}:</span>
</div>
<p className="text_message">{mess.message}.</p> */}