import React from 'react'
import coverPhoto from "../../assets/imgs/coverfinal.png"

const Header = ({fetchUser}) => {
  return (
    <div className='header_wrap'>
        <div className='cover_chatroom'> 
          <img src={coverPhoto} alt="Cover" />
          </div>
          <div className='profil_chat'>
            <div className='profil_img'>
            <img src="https://i.pinimg.com/564x/ab/5d/e0/ab5de0df53da6094b6b322360ca4d424.jpg" alt="" />
            </div>
              {fetchUser.map((data,idx)=>{
           return  <div className='profil_text' key={idx}>
                <div >
                <p>Name : {data.first_name} </p>
                <p>LastName : {data.last_name} </p>
                <p>Pseudo : {data.pseudo} </p>
                </div>
                <div>
                <p>Rank : {data.rank} </p>
                <p>Points : {data.point} </p>
                <p>Xp : {data.xp} </p>
                </div>
            </div>
            })}
          </div>
        </div>
  )
}

export default Header
