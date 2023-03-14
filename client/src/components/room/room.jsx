import React, { useState , useEffect } from 'react'
import * as Video from 'twilio-video'
import Participant from './participants/participants';
import { BoxLoading } from 'react-loadingg';
import { BiMicrophoneOff } from 'react-icons/bi';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';
import "./room.scss"
const room = ({token,setToken}) => {
    const [room, setRoom] = useState(null);
    let timerInterval
    const [participants, setParticipants] = useState([]);
    useEffect(()=> {

            const participantConnected = participant => {
              console.log(participant);
              setParticipants(prevParticipants => [...prevParticipants, participant]);
            };
            const participantDisconnected = participant => {
              setParticipants(prevParticipants =>
                prevParticipants.filter(p => p !== participant)
              );
            };
            Video.connect(token, {
              name: "intervie-room0"
            }).then(room => {
              setRoom(room);
              room.on('participantConnected', participantConnected);
              room.on('participantDisconnected', participantDisconnected);
              room.participants.forEach(participantConnected);
            });
            return () => {
                setRoom(currentRoom => {
                  if (currentRoom && currentRoom.localParticipant.state === 'connected') {
                    currentRoom.localParticipant.tracks.forEach(function(trackPublication) {
                      trackPublication.track.stop();
                    });
                    currentRoom.disconnect();
                    return null;
                  } else {
                    return currentRoom;
                  }
                });
            }
          }
    
,[token])

    return (
      <>  
      {
          room ? (
          <>
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
      
        
         </> 
        ) : 
      
      <BoxLoading />  
     }
    
    </>
  );
}
export default room
