import React from 'react'

const Disccussion = ({connectedUser}) => {
  // console.log("------> last",lastMessage);

  const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log("----connectedUser",connectedUser);
  return (
    <section className="discussions">
            <div className="discussion search">
              <div className="searchbar">
                <i className="fa fa-search" aria-hidden="true" />
                <input type="text" placeholder="Search..." />
              </div>
            </div>
                {connectedUser && connectedUser.map((user,idx)=>{
           return  <div className="discussion message-active">
              <div className="photo" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)'}}>
                <div className="online" />
              </div>
               <div className='connected_user'>
              <div className="desc-contact">
                <p className="name">{user.last_name}, {user.last_name}</p>
                <p className="message">9 pm at the bar if possible 😳</p>
              </div>
              <div className="timer">12 sec</div>
            </div>
            </div>
              })}
        
          
         {/* {console.log(lastMessage)} */}
           
{/* <div className="connectedUser">
  {connectedUser.map((user,idx)=>{
  <div className='container_user'>
  <p>kais machghoul</p>
  </div>})}
  {lastMessage.map((message)=>{})}
  <div className='lastmessage_time'>
    <p>{lastMessage.messages}</p>
    <p>{hours}:{minutes}</p>
  </div>
</div> */}
         
          </section>
  )
}

export default Disccussion

