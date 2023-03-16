import React, { useEffect, useState } from 'react'
import axios from "axios"

const OldMessages = ({roomId}) => {
    const [participants, setParticipants]=useState([])
// console.log("participanet",roomId);
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/chatRoom/participant/${roomId}`)
    .then(response=>{
      // console.log("Participant",response.data);
      setParticipants(response.data)  
    })
    .catch(err=>{console.log(err)})
    },[])
  return (
    <div>
      {participants.map((mess,idx)=>{
        return (
          <div className="message" key={idx}>
            <div className="message-body">
              <div className="user-info">
                <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt={`${mess.name} ${mess.lastname}`} />
                <span className="username">{mess.first_name} {mess.last_name}:</span>
              </div>
              <p className="text_message">{mess.message}.</p>
            </div>
          </div>
        );
      })} 
</div>
  )
}

export default OldMessages
